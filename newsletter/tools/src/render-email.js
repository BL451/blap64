import { readFileSync } from "fs";
import { resolve } from "path";
import MarkdownIt from "markdown-it";
import { createHighlighter } from "shiki";
import juice from "juice";
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

function renderEmbedEmail(props, archiveUrl) {
  const url = props.url || "";
  const title = props.title || "Interactive sketch";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
    <tr>
      <td style="background: #0d1117; border: 1px solid #333; border-radius: 4px; padding: 24px; text-align: center;">
        <p style="font-size: 14px; color: #808080; margin: 0 0 12px;">Interactive content — view in browser:</p>
        <a href="${archiveUrl}" style="display: inline-block; background: #4a90e2; color: #ffffff; text-decoration: none; padding: 10px 24px; border-radius: 4px; font-weight: 600; font-size: 15px;">${title}</a>
      </td>
    </tr>
  </table>`;
}

function rewriteImagePaths(html, postSlug) {
  return html.replace(
    /src="\.\/images\//g,
    `src="${config.siteBaseUrl}/newsletter/${postSlug}/images/`
  );
}

function convertVideoLinksForEmail(html) {
  const youtubeRegex =
    /<a href="(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)[^"]*)"[^>]*>([^<]*)<\/a>/g;
  return html.replace(youtubeRegex, (match, url, videoId, text) => {
    return `<a href="${url}" style="display: inline-block; color: #4a90e2; text-decoration: underline;">${text}</a>`;
  });
}

export async function renderEmail(frontmatter, markdownContent, postSlug) {
  const hl = await getHighlighter();
  const archiveUrl = `${config.siteBaseUrl}/newsletter/${postSlug}/`;

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight(code, lang) {
      if (lang && hl.getLoadedLanguages().includes(lang)) {
        return hl.codeToHtml(code, {
          lang,
          theme: "github-dark",
        });
      }
      return `<pre style="background: #0d1117; padding: 16px; border-radius: 4px; overflow-x: auto;"><code style="font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace; font-size: 13px; color: #e6edf3;">${md.utils.escapeHtml(code)}</code></pre>`;
    },
  });

  const defaultFenceRenderer = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    if (token.info.trim() === "embed") {
      return renderEmbedEmail(parseEmbed(token.content), archiveUrl);
    }
    return defaultFenceRenderer(tokens, idx, options, env, self);
  };

  let html = md.render(markdownContent);
  html = rewriteImagePaths(html, postSlug);
  html = convertVideoLinksForEmail(html);

  const templatePath = resolve(config.paths.templates, "email-base.html");
  let template = readFileSync(templatePath, "utf-8");

  const dateStr = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  template = template
    .replace(/\{\{title\}\}/g, frontmatter.title)
    .replace(/\{\{date\}\}/g, dateStr)
    .replace(/\{\{content\}\}/g, html)
    .replace(/\{\{archiveUrl\}\}/g, archiveUrl)
    .replace(/\{\{siteBaseUrl\}\}/g, config.siteBaseUrl);

  const inlined = juice(template, {
    preserveImportant: true,
    preserveMediaQueries: true,
    preserveFontFaces: false,
    applyStyleTags: true,
    removeStyleTags: true,
  });

  return inlined;
}
