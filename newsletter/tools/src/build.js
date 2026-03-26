import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, readdirSync, symlinkSync, rmSync } from "fs";
import { resolve, join } from "path";
import { createServer } from "http";
import { readFile, stat } from "fs/promises";
import { extname } from "path";
import matter from "gray-matter";
import { renderWeb } from "./render-web.js";
import { renderEmail } from "./render-email.js";
import { sendTestEmail, sendBroadcast } from "./send.js";
import { config } from "./config.js";
import { execSync } from "child_process";

const [, , command, postSlug] = process.argv;

const COMMANDS = ["build", "preview", "send", "test", "list", "index", "serve"];

if (!command || !COMMANDS.includes(command)) {
  console.log(`Usage: node build.js <command> [post-slug]`);
  console.log(`Commands:`);
  console.log(`  build <slug>    Build web + email HTML`);
  console.log(`  preview <slug>  Build and open email preview in browser`);
  console.log(`  test <slug>     Build and send test email to TEST_EMAIL`);
  console.log(`  send <slug>     Build, deploy site, send to all subscribers`);
  console.log(`  list            List all posts`);
  console.log(`  index           Rebuild the newsletter index page`);
  console.log(`  serve           Start local server for previewing web pages`);
  process.exit(1);
}

function loadPost(slug) {
  const postDir = resolve(config.paths.posts, slug);
  const postPath = resolve(postDir, "post.md");

  if (!existsSync(postPath)) {
    console.error(`Post not found: ${postPath}`);
    process.exit(1);
  }

  const raw = readFileSync(postPath, "utf-8");
  const { data: frontmatter, content } = matter(raw);
  return { frontmatter, content, postDir };
}

function copyImages(postDir, slug) {
  const imagesDir = resolve(postDir, "images");
  const outputImagesDir = resolve(config.paths.output, slug, "images");

  if (existsSync(imagesDir)) {
    mkdirSync(outputImagesDir, { recursive: true });
    cpSync(imagesDir, outputImagesDir, { recursive: true });
  }
}

function copySketches(postDir, slug) {
  const sketchesDir = resolve(postDir, "sketches");
  const outputSketchesDir = resolve(config.paths.output, slug, "sketches");

  if (existsSync(sketchesDir)) {
    mkdirSync(outputSketchesDir, { recursive: true });
    cpSync(sketchesDir, outputSketchesDir, { recursive: true });
  }
}

function copyFonts() {
  const fontsOutputDir = resolve(config.paths.output, "fonts");
  if (existsSync(fontsOutputDir)) return;

  const fontsSourceDir = resolve(config.paths.root, "src/assets/fonts");
  const fontFiles = ["ZxGamut-Variable.woff2", "BPdotsSquareVF.ttf"];

  mkdirSync(fontsOutputDir, { recursive: true });
  for (const font of fontFiles) {
    const src = resolve(fontsSourceDir, font);
    if (existsSync(src)) {
      cpSync(src, resolve(fontsOutputDir, font));
    }
  }
}

function getAllPosts() {
  const postsDir = config.paths.posts;
  if (!existsSync(postsDir)) return [];

  return readdirSync(postsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const postPath = resolve(postsDir, d.name, "post.md");
      if (!existsSync(postPath)) return null;
      const raw = readFileSync(postPath, "utf-8");
      const { data: frontmatter } = matter(raw);
      return { slug: d.name, ...frontmatter };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function buildIndex() {
  const posts = getAllPosts();
  const templatePath = resolve(config.paths.templates, "index-base.html");
  let template = readFileSync(templatePath, "utf-8");

  const postListHtml = posts
    .map((post) => {
      const dateStr = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const updatedStr = post.updated
        ? new Date(post.updated).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "";
      const dateLine = updatedStr
        ? `${dateStr} — Updated ${updatedStr}`
        : dateStr;
      return `<a href="/newsletter/${post.slug}/" class="post-link">
        <article class="post-item">
          <time class="post-date">${dateLine}</time>
          <h2 class="post-title">${post.title}</h2>
          <p class="post-description">${post.description || ""}</p>
        </article>
      </a>`;
    })
    .join("\n");

  template = template
    .replace(/\{\{postList\}\}/g, postListHtml)
    .replace(/\{\{siteBaseUrl\}\}/g, config.siteBaseUrl)
    .replace(/\{\{subscribeEndpoint\}\}/g, config.subscribeEndpoint)
    .replace(/\{\{turnstileSiteKey\}\}/g, config.turnstileSiteKey);

  const outputPath = resolve(config.paths.output, "index.html");
  mkdirSync(config.paths.output, { recursive: true });
  writeFileSync(outputPath, template);
  return outputPath;
}

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
};

function startServer(port = 4322) {
  const outputDir = config.paths.output;

  const server = createServer(async (req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);

    if (!urlPath.startsWith("/newsletter/")) {
      if (urlPath === "/" || urlPath === "") {
        res.writeHead(302, { Location: "/newsletter/" });
        res.end();
        return;
      }
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }

    let filePath = resolve(outputDir, urlPath.replace("/newsletter/", ""));

    try {
      const fileStat = await stat(filePath);
      if (fileStat.isDirectory()) {
        filePath = resolve(filePath, "index.html");
      }
    } catch {}

    try {
      const content = await readFile(filePath);
      const ext = extname(filePath).toLowerCase();
      const mime = MIME_TYPES[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": mime });
      res.end(content);
    } catch {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
    }
  });

  server.listen(port, () => {
    console.log(`Newsletter dev server running at:`);
    console.log(`  Archive:  http://localhost:${port}/newsletter/`);
    const posts = getAllPosts();
    for (const post of posts) {
      console.log(`  Post:     http://localhost:${port}/newsletter/${post.slug}/`);
    }
    console.log(`\nPress Ctrl+C to stop.`);
  });
}

async function run() {
  if (command === "serve") {
    copyFonts();
    buildIndex();
    const port = postSlug ? parseInt(postSlug, 10) : 4322;
    startServer(port);
    return;
  }

  if (command === "list") {
    const posts = getAllPosts();
    if (posts.length === 0) {
      console.log("No posts found in newsletter/posts/");
      return;
    }
    console.log("Posts:");
    for (const post of posts) {
      const dateStr = new Date(post.date).toISOString().slice(0, 10);
      console.log(`  ${dateStr}  ${post.slug}  "${post.title}"`);
    }
    return;
  }

  if (command === "index") {
    copyFonts();
    const indexPath = buildIndex();
    console.log(`Index built: ${indexPath}`);
    return;
  }

  if (!postSlug) {
    console.error(`Post slug required for '${command}' command.`);
    process.exit(1);
  }

  const { frontmatter, content, postDir } = loadPost(postSlug);
  console.log(`Processing: "${frontmatter.title}"`);

  const outputDir = resolve(config.paths.output, postSlug);
  mkdirSync(outputDir, { recursive: true });

  copyFonts();
  copyImages(postDir, postSlug);
  copySketches(postDir, postSlug);

  const webHtml = await renderWeb(frontmatter, content, postSlug);
  const webPath = resolve(outputDir, "index.html");
  writeFileSync(webPath, webHtml);
  console.log(`Web HTML: ${webPath}`);

  const emailHtml = await renderEmail(frontmatter, content, postSlug);
  const emailPath = resolve(outputDir, "email.html");
  writeFileSync(emailPath, emailHtml);
  console.log(`Email HTML: ${emailPath}`);

  buildIndex();
  console.log(`Index rebuilt.`);

  if (command === "preview") {
    const { platform } = await import("os");
    const openCmd =
      process.platform === "darwin"
        ? "open"
        : process.platform === "win32"
          ? "start"
          : "xdg-open";
    execSync(`${openCmd} "${emailPath}"`);
    console.log(`Opened email preview in browser.`);
  }

  if (command === "test") {
    console.log(`Sending test email to ${config.testEmail}...`);
    const result = await sendTestEmail(emailHtml, frontmatter);
    console.log(`Test email sent. ID: ${result.id}`);
  }

  if (command === "send") {
    console.log(`\nDeploying site first...`);
    execSync("npm run deploy", { cwd: config.paths.root, stdio: "inherit" });
    console.log(`Site deployed. Waiting 10s for GitHub Pages propagation...`);
    await new Promise((r) => setTimeout(r, 10000));

    console.log(`Sending broadcast to audience ${config.audienceId}...`);
    const result = await sendBroadcast(emailHtml, frontmatter);
    console.log(`Broadcast sent. ID: ${result.id}`);
  }
}

run().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
