# BodyNation Sports & Nutrition — Website

> **Stack:** Astro 4 · Tailwind CSS 3 · Decap CMS · Netlify

A fast, SEO-optimised marketing site + product catalog for BodyNation Sports & Nutrition, Bibwewadi, Pune.

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Open http://localhost:4321

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Project Structure

```
bodynation-website/
├── public/
│   ├── images/
│   │   ├── logo.webp              ← PUT YOUR LOGO HERE
│   │   └── products/              ← PUT PRODUCT PHOTOS HERE
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   └── SEOHead.astro
│   │   ├── ui/
│   │   │   └── WhatsAppFAB.astro
│   │   └── sections/
│   │       ├── Hero.astro
│   │       ├── Ticker.astro
│   │       ├── TrustBand.astro
│   │       ├── ProductCard.astro
│   │       ├── ProductGrid.astro
│   │       ├── Offers.astro
│   │       ├── Testimonials.astro
│   │       ├── About.astro
│   │       ├── InstagramReels.astro
│   │       └── Location.astro
│   │
│   ├── content/
│   │   ├── config.ts              ← TypeScript schemas for all content
│   │   ├── products/              ← One .md file per product
│   │   ├── offers/                ← One .md file per bundle deal
│   │   └── testimonials/
│   │       └── reviews.json
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro            ← Homepage
│   │   ├── products/
│   │   │   ├── index.astro        ← All products + category filter
│   │   │   └── [slug].astro       ← Individual product page
│   │   ├── offers.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   │
│   ├── styles/global.css
│   └── utils/
│       ├── whatsapp.ts
│       └── schema.ts              ← LocalBusiness JSON-LD
│
├── admin/
│   ├── index.html                 ← Decap CMS admin panel
│   └── config.yml                 ← CMS collection definitions
│
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

---

## Adding Your Logo

Replace `/public/images/logo.webp` with your BodyNation logo file.
- Recommended: WebP format, transparent background, square or landscape
- The Navbar and Hero will automatically use this file

---

## Adding Product Photos

Place product images in `/public/images/products/`:
- Name them to match the `image` field in each product's `.md` file
- e.g. `/public/images/products/whey.webp`
- Recommended size: 400×400px or larger, WebP format

---

## Managing Content (No Code Required)

### Option A — Edit Markdown files directly
Each product is a `.md` file in `src/content/products/`. Edit the frontmatter fields:
```markdown
---
name: "Whey Protein"
price: 2499
badge: "Best Seller"
inStock: true
---
```

### Option B — Use the CMS Admin UI (after Netlify deploy)
1. Go to `https://your-site.netlify.app/admin`
2. Log in with your Netlify Identity account
3. Click **Products** → edit, add, or remove products
4. Click **Publish** — site rebuilds automatically in ~60 seconds

---

## Adding a New Product

Create a new file in `src/content/products/your-product-name.md`:

```markdown
---
name: "BCAA Powder"
slug: "bcaa"
category: protein
brand: "Multiple Brands"
price: 899
priceLabel: "Starting ₹899"
badge: "New"
badgeColor: blue
image: "/images/products/bcaa.webp"
benefit: "Essential amino acids for muscle recovery and endurance."
whatsappMsg: "Hi Akash, I want to order BCAA. Please share options."
inStock: true
featured: false
order: 7
---

## BCAA Powder

Your product description here in Markdown...
```

---

## Adding Instagram Reels

1. Open the reel on Instagram
2. Tap **···** → **Embed** → copy the embed code
3. Open `src/components/sections/InstagramReels.astro`
4. Replace the placeholder `<div>` for that reel slot with the Instagram embed code

---

## Deploying to Netlify

### First deploy
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/bodynation-website.git
git push -u origin main

# 2. Go to netlify.com
# → New Site → Import from Git → select your repo
# → Build command: npm run build
# → Publish directory: dist
# → Deploy!
```

### Enable Decap CMS (for the /admin panel)
1. In Netlify dashboard → **Identity** → **Enable Identity**
2. Under Identity → **Services** → **Enable Git Gateway**
3. Invite yourself: Identity → **Invite users** → enter your email
4. Accept the invite, set a password
5. Go to `https://your-site.netlify.app/admin` — log in!

### Subsequent deploys
Every `git push` to `main` triggers an automatic Netlify rebuild.
CMS saves also auto-trigger a rebuild via Git Gateway.

---

## Environment & Config

### Update your domain
Once you have your domain (e.g. `bodynation.in`), update:
- `astro.config.mjs` → `site: 'https://bodynation.in'`
- `src/utils/schema.ts` → `url` field
- `admin/config.yml` → `site_url`

### Update WhatsApp number
`src/utils/whatsapp.ts` → `WA_NUMBER` (currently `919623300461`)

### Update store hours / address
`src/utils/schema.ts` and `src/components/sections/Location.astro`

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Blue primary | `#1a3a8f` | CTAs, headings, navbar |
| Orange primary | `#e8620a` | Accents, badges, highlights |
| Green (WhatsApp) | `#25d366` | WhatsApp buttons |

---

## Commands Reference

| Command | Action |
|---------|--------|
| `npm run dev` | Start local dev server at localhost:4321 |
| `npm run build` | Build production site to `dist/` |
| `npm run preview` | Preview production build locally |

---

## Tech Stack

- **[Astro 4](https://astro.build)** — Static site generator, zero JS by default
- **[Tailwind CSS 3](https://tailwindcss.com)** — Utility-first styling
- **[Decap CMS](https://decapcms.org)** — Git-based, free headless CMS
- **[Netlify](https://netlify.com)** — Free hosting with auto-deploy
- **Inter** — Font (Google Fonts)

---

*BodyNation Sports & Nutrition · Shop No 105, Kapil Upvan Plaza, Bibwewadi, Pune 411037*
*WhatsApp: +91 96233 00461 · Instagram: @bodynation_protein_shop*
