# Developer Portfolio

A modern, professional portfolio website for a software engineer, built with **Next.js (App Router)**, **Tailwind CSS v4**, and **DaisyUI v5**. All content is hard-coded sample data — no backend required.

## Features

- **Black + dark-blue theme** with a matching clean light theme
- **Dark / light mode toggle** with `localStorage` persistence and no flash-on-load
- Sticky glassmorphism navbar with mobile menu
- Animated hero with gradient text, aurora blobs, and a floating profile card
- Sections: Hero, About, Skills (with proficiency bars), Projects, Experience timeline, Services, Testimonials, and a Contact form
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Fully responsive and accessible (semantic HTML, ARIA labels, keyboard-friendly)
- Contact form composes a `mailto:` link (no backend needed)

## Tech Stack

| Layer    | Choice                          |
| -------- | ------------------------------- |
| Framework| Next.js 16 (App Router, TS)     |
| Styling  | Tailwind CSS v4                 |
| UI Kit   | DaisyUI v5                      |
| Fonts    | Geist Sans / Geist Mono         |

## Getting Started

```bash
npm install
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Customizing Content

All personal data lives in a single file — edit it to make the site yours:

```
src/data/portfolio.ts
```

It contains your profile, social links, stats, skills, projects, experience,
services, and testimonials. No other files need to change for content updates.

## Theming

The two custom DaisyUI themes (`nightblue` and `dayblue`) are defined in:

```
src/app/globals.css
```

Adjust the `--color-*` variables there to tweak the palette.

## Project Structure

```
src/
├─ app/
│  ├─ globals.css      # Tailwind + DaisyUI themes + animations
│  ├─ layout.tsx       # Root layout, metadata, no-flash theme script
│  └─ page.tsx         # Composes all sections
├─ components/
│  ├─ Icons.tsx        # Inline SVG icon set
│  ├─ Navbar.tsx       # Sticky nav + mobile menu
│  ├─ Footer.tsx
│  ├─ ThemeToggle.tsx  # Dark/light switch
│  ├─ Reveal.tsx       # Scroll-reveal wrapper
│  ├─ SectionHeading.tsx
│  └─ sections/        # Hero, About, Skills, Projects, Experience, Services, Contact
└─ data/
   └─ portfolio.ts     # All hard-coded content
```
