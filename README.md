# Ganesh Chincholkar

Personal site for a software engineer. Next.js, TypeScript, and Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Edit the content

Profile, links, and the résumé URL live in `src/data/profile.ts`. There is no public email yet. Set `email` and the contact section will use it.

Roles are in `src/data/experience.ts`. Projects are in `src/data/projects.ts`. Notes are an empty list in `src/data/posts.ts`. Add a post there when one exists. The blog does not ship placeholder essays.

Photographs are `public/images/ridge.jpg`, `public/images/coast.jpg`, and `public/images/workspace.jpg`. Replace them with your own when you have them.

## Canonical URL

Set `NEXT_PUBLIC_SITE_URL` when the production domain is known. Until then, pages do not advertise a canonical URL. The sitemap falls back to `https://ganeshpc.github.io`.

## Publish

`npm run build` is the normal Next.js build. `npm run build:pages` writes a static `out/` folder for GitHub Pages, with image optimization turned off for that build only. Pushing to `master` runs `.github/workflows/pages.yml` and publishes:

https://ganeshpc.github.io/developer-portfolio/

The straightforward way to publish the full Next.js build from this repository is [Vercel](https://vercel.com):

1. Sign in with GitHub and import `ganeshpc/developer-portfolio`.
2. Leave the framework preset on Next.js. The build command is `npm run build`.
3. After the first deploy, set `NEXT_PUBLIC_SITE_URL` to the site URL and redeploy.

Each push to `master` deploys again. A custom domain can be added in the Vercel project settings.
