# VALUED Program Website

Professional React + TypeScript + Tailwind CSS website for the VALUED youth development program in Rwanda.

## Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion (page transitions, scroll reveals, interactions)
- React Router

## Performance

- **12 optimized images** (~2 MB total) in `public/images/`
- Lazy loading on all non-hero images
- Images reused across pages — no duplicate assets
- Old 210 MB `webp/` folder removed from the app (archived in parent `../webp/` if needed)

## Design

- Dark red (`#991b1b`) and white palette
- Plus Jakarta Sans typography
- **4px max border radius** on images and buttons only
- Layout inspired by [SOLVIT Africa](https://solvit.africa/)

## Project Structure

```
valued-web/
├── public/
│   ├── images/          # 12 curated assets
│   └── google*.html     # Search verification
├── legacy/              # Original static HTML (archived)
├── src/
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, TopBar
│   │   ├── motion/      # Framer Motion wrappers
│   │   └── ui/          # Button, LazyImage, forms
│   ├── data/
│   │   ├── images.ts    # Central image map
│   │   ├── content.ts   # All site content
│   │   └── navigation.ts
│   └── pages/           # Route pages
```

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Routes

| Path        | Page    |
|-------------|---------|
| `/`         | Home    |
| `/about`    | About   |
| `/programs` | Programs|
| `/campus`   | Campus  |
| `/impact`   | Impact  |
| `/contact`  | Contact |
| `/apply`    | Apply   |
