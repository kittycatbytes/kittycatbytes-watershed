import type { NextConfig } from "next";

/**
 * This app is built into files ahead of time. Firebase Hosting only looks those files up.
 * The copy is the same for every visitor until the next deploy, so nothing has to be
 * computed when someone arrives.
 *
 * A page is assembled on a server at visit time when the HTML itself depends on that
 * visit. A signed-in person should see their own account. A product page should name
 * stock that changed minutes ago. A search crawler or a link preview should read the
 * real text without running the page's JavaScript. An editor should open a draft that
 * is not public yet. output: "export" comes off for that. Hosting can no longer point
 * only at the out/ folder. It has to send the request to a server, which runs the page
 * and returns that visit's HTML.
 *
 * trailingSlash matches firebase.json. The address with a slash is the real file.
 * The address without a slash redirects to it.
 *
 * In the draft example, Sanity, Next.js, and Vercel each do a different job.
 * watershed.com is this setup. This app is the file-only version of the same framework.
 *
 * Sanity holds the writing, separate from the code. A document is either a draft or
 * published. Editors change that source through Sanity's API. The site does not store
 * the text. On publish, Sanity sends a webhook naming the document that changed.
 *
 * Next.js is the framework that runs the React page. With the static export off, it
 * can render on a server. Draft mode is a cookie set on the editor's browser. For a
 * request that carries the cookie, Next.js asks Sanity for the unpublished document,
 * renders the page on the server, and returns HTML only that session receives. A
 * public request has no cookie, so it never asks for the draft. When the publish
 * webhook arrives, a route in the Next.js app checks a shared secret and tells the
 * framework to render that one page again. Later public visits can reuse the saved
 * HTML until the next publish. That refresh is one route, not a rebuild of the whole
 * site, and not a new render for every anonymous visitor. A page that is personal on
 * every visit, such as an account, skips that cache and renders each time.
 *
 * Vercel is the host that runs that Next.js server. watershed.com is deployed there.
 * The request hits Vercel's cache first. A fresh public page is served from the cache.
 * A missing page, a stale page after the webhook, or a draft session is passed to a
 * Next.js server function, which returns new HTML. Vercel also builds a separate
 * preview URL for a branch, so an editor can open the draft against that deployment
 * rather than production. Firebase Hosting, configured as this app uses it, has no
 * server to hand the request to. Pointing it at one is the hosting change above.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
