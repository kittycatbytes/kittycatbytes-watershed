# Catherine Taneyhill — for Watershed

A single page for Watershed’s hiring team. The recruiter reading stays at the altitude of the work. The section “For engineers” opens the mechanism.

Private interview notes stay off this site: household context, compensation, and rehearsal instructions.

## Stack

[watershed.com](https://watershed.com) is a Next.js, React, and TypeScript application, with Sanity as the CMS, and it is served from Vercel. This page uses that application stack, Next.js 16, React 19, and TypeScript. The copy lives in the repository, because it is one page rather than a marketing CMS, and the build is a static export on Firebase Hosting.

The palette is taken from the public design tokens on watershed.com: navy `#041330`, cobalt `#265cff`, and the spring, grass, and marigold accents.

## Scripts

```bash
npm install
npm run dev
npm run build
```

The static site is written to `out/`.

## Hosting

The Firebase project and Hosting site are both `kittycatbytes-watershed`.

```bash
npx firebase-tools deploy --only hosting --project kittycatbytes-watershed
```

`firebase.json` points Hosting at `out/` and at the site `kittycatbytes-watershed`.
