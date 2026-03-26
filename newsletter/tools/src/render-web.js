import { readFileSync } from "fs";
import { resolve } from "path";
import MarkdownIt from "markdown-it";
import { createHighlighter } from "shiki";
import { config } from "./config.js";

let highlighter = null;

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark"],
      langs: [
        "javascript",
        "typescript",
        "python",
        "html",
        "css",
        "json",
        "bash",
        "glsl",
        "c",
        "cpp",
        "markdown",
      ],
    });
  }
  return highlighter;
}

function parseEmbed(code) {
  const props = {};
  for (const line of code.trim().split("\n")) {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) props[match[1]] = match[2].trim();
  }
  return props;
}

function renderEmbedWeb(props) {
  const url = props.url || "";
  const title = props.title || "Interactive sketch";
  const height = props.height || "500";
  return `<div class="sketch-embed">
    <iframe
      src="${url}"
      title="${title}"
      width="100%"
      height="${height}"
      frameborder="0"
      allow="microphone; camera; autoplay; encrypted-media; fullscreen; geolocation; gyroscope; accelerometer; magnetometer; midi"
      allowfullscreen
      loading="lazy"
      style="border: 1px solid #333;"
    ></iframe>
    <p class="sketch-caption">${title}</p>
  </div>`;
}

function rewriteImagePaths(html, postSlug) {
  return html.replace(
    /src="\.\/images\//g,
    `src="/newsletter/${postSlug}/images/`
  );
}

function convertVideoLinks(html) {
  const youtubeRegex =
    /<a href="(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)[^"]*)"[^>]*>([^<]*)<\/a>/g;
  return html.replace(youtubeRegex, (match, url, videoId, text) => {
    return `<div class="video-embed">
      <iframe
        src="https://www.youtube.com/embed/${videoId}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
    <p class="video-fallback"><a href="${url}">${text}</a></p>`;
  });
}

export async function renderWeb(frontmatter, markdownContent, postSlug) {
  const hl = await getHighlighter();

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight(code, lang) {
      if (lang && hl.getLoadedLanguages().includes(lang)) {
        return hl.codeToHtml(code, { lang, theme: "github-dark" });
      }
      return `<pre class="shiki"><code>${md.utils.escapeHtml(code)}</code></pre>`;
    },
  });

  const defaultFenceRenderer = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    if (token.info.trim() === "embed") {
      return renderEmbedWeb(parseEmbed(token.content));
    }
    return defaultFenceRenderer(tokens, idx, options, env, self);
  };

  let html = md.render(markdownContent);
  html = rewriteImagePaths(html, postSlug);
  html = convertVideoLinks(html);

  const templatePath = resolve(config.paths.templates, "web-base.html");
  let template = readFileSync(templatePath, "utf-8");

  const dateStr = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const updatedStr = frontmatter.updated
    ? new Date(frontmatter.updated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const updatedLine = updatedStr
    ? `<time class="post-updated" datetime="${frontmatter.updated}">Updated: ${updatedStr}</time>`
    : "";

  const tags = (frontmatter.tags || [])
    .map((t) => `<span class="post-tag">${t}</span>`)
    .join("");

  const description = frontmatter.description || "";
  const heroImage = frontmatter.hero
    ? `${config.siteBaseUrl}/newsletter/${postSlug}/${frontmatter.hero.replace("./", "")}`
    : "";

  template = template
    .replace(/\{\{title\}\}/g, frontmatter.title)
    .replace(/\{\{date\}\}/g, dateStr)
    .replace(/\{\{rawDate\}\}/g, frontmatter.date)
    .replace(/\{\{updatedLine\}\}/g, updatedLine)
    .replace(/\{\{description\}\}/g, description)
    .replace(/\{\{tags\}\}/g, tags)
    .replace(/\{\{content\}\}/g, html)
    .replace(/\{\{slug\}\}/g, postSlug)
    .replace(/\{\{siteBaseUrl\}\}/g, config.siteBaseUrl)
    .replace(/\{\{heroImage\}\}/g, heroImage);

  return template;
}
