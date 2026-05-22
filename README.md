# Proma Personal Website

Single-page site built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. The live UI is implemented in `src/App.jsx` and matches `proma_personal_website_ui_2.jsx` (notebook / rail layout).

**Branch:** `feature/ui-v2-thank-you-image` — new UI + thank-you image wired in.

## Run locally

1. Open Terminal and go to this folder:

   ```bash
   cd "/Users/mayeshamalihaproma/Desktop/Personal Website"
   ```

2. Install dependencies (first time only):

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (usually **http://localhost:5173**).

### Other commands

| Command | What it does |
|---------|----------------|
| `npm run dev` | Hot-reload development server |
| `npm run build` | Production build → `dist/` folder |
| `npm run preview` | Preview the production build locally |

## Edit the site

| What to change | Where |
|----------------|--------|
| Page content (beliefs, work, timeline, home “notebook” teasers, etc.) | `src/App.jsx` — data arrays at the top |
| Blog posts (after you use `/admin`) | Stored in browser `localStorage`; export JSON from `/admin` for backup |
| Thank-you / connect image (use as-is, no CSS filters) | Replace `src/assets/Proma-Thank-you.png` (same filename) |

Design tokens and utility classes for this UI live in the `<style>` block inside `App.jsx` plus `tailwind.config.js` (e.g. `terracotta`, `cream`, `animate-float`).

Reference prototypes: `proma_personal_website_ui.jsx`, `proma_personal_website_ui_2.jsx`.

## Blog & admin

| URL | Purpose |
|-----|---------|
| `/notes` | All published notes |
| `/notes/:slug` | One note, e.g. `/notes/the-chaos-i-couldnt-ignore` |
| `/admin` | Admin dashboard — create your ID/password once, then write, edit, delete posts |

On first visit to `/admin`, create your **admin ID** and **password** (stored hashed in this browser). Sign in on later visits. Posts are stored in **localStorage** — use **Export JSON backup** on `/admin` regularly.

**Security:** This is a **simple browser gate** for your personal workflow, not bank-grade auth. Anyone with devtools could inspect the site; for strong protection use server-backed auth later.

| File | Purpose |
|------|---------|
| `src/blog/NotebookStoryCard.jsx` | Shared notebook UI for story + blog |
| `src/blog/blogStorage.js` | Load/save posts, slugify, import/export JSON |
| `src/blog/defaultBlogPosts.js` | Seed post when storage is empty |
| `src/pages/BlogIndexPage.jsx` | Blog listing |
| `src/pages/BlogPostPage.jsx` | Single post |
| `src/pages/AdminBlogPage.jsx` | Login + editor |

## Go live (deploy)

This project builds to static files (`dist/`). Easiest hosts:

### Option A — Vercel (recommended)

1. Push this folder to a **GitHub** repository.
2. Sign in at [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Vercel auto-detects Vite. Defaults are fine:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. You get a URL like `your-site.vercel.app`.
5. Add your custom domain under **Project → Settings → Domains**.

### Option B — Netlify

1. Push to GitHub.
2. [netlify.com](https://www.netlify.com) → **Add new site** → **Import from Git**.
3. Build: `npm run build`, publish directory: `dist`.
4. Deploy and attach a custom domain in site settings.

### Option C — Cloudflare Pages

Same as above: connect repo, build `npm run build`, output `dist`.

### Custom domain checklist

- Buy a domain (Namecheap, Google Domains, Cloudflare, etc.).
- In your host’s DNS settings, add the records your host provides (usually `A` or `CNAME`).
- Wait for DNS propagation (minutes to a few hours).

### Before you ship

- [ ] Replace the placeholder thank-you image in `public/images/`
- [ ] Update meta title/description in `index.html`
- [ ] Point the AbroadMates button to your real booking URL
- [ ] Run `npm run build` locally to confirm no errors

## Project structure

```
├── index.html          # HTML shell
├── package.json        # dependencies & scripts
├── vite.config.js      # Vite + @ path alias
├── tailwind.config.js
├── public/             # static assets (favicon, images)
└── src/
    ├── main.jsx        # React entry
    ├── index.css       # Tailwind + design tokens
    ├── App.jsx         # main site (your UI)
    └── components/ui/
        └── button.jsx
```
