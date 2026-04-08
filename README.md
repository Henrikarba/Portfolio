# Portfolio

Personal portfolio website built with Svelte, Framework7, and Vite.

## Overview

This is my personal portfolio site.

If you want, feel free to fork it and adapt it into your own portfolio.

## For forkers

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deployment

Deploy is handled by GitHub Actions to GitHub Pages.

Workflow: .github/workflows/build-to-deploy.yml

Triggers:
- push tag matching `v*`
- manual workflow dispatch
