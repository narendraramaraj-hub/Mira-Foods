# Mira Foods

Website for Mira Foods, a UK supplier of natural, plant-rich food and drink brands from the USA, India, Taiwan and the UK.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| Our Brands | `brands.html` |
| Bee's Water (flavours) | `bees-water.html` |
| Bee's Water ingredients and wellness | `bees-water-ingredients.html` |
| ChaiCo and hyCane | `chaico.html` |
| Anvi | `anvi.html` |
| Greenish Ora | `greenish-ora.html` |
| Where to Buy (with trade enquiries) | `where-to-buy.html` |
| About | `about.html` |
| Contact | `contact.html` |
| Privacy | `privacy.html` |
| Cookies | `cookies.html` |

Plain HTML, CSS (`css/styles.css`) and a little JavaScript (`js/main.js`). No frameworks and no build step: open `index.html` in a browser, or upload the folder to any static host.

The header, brand bar and footer are repeated in each page, so a change to the menu or footer needs making in every file.

## Design

- Mira Foods colours from the brand guidelines: Deep Forest Green `#2D4030` and Warm Sand `#CBB292`.
- Each brand page takes its own accent colour from a class on `<body>`: `theme-bees`, `theme-chaico`, `theme-anvi`, `theme-ora`.
- To add a brand (for example from Taiwan), copy a brand page, add a `.theme-*` block in `styles.css`, and add the page to the brand bar, footer and `brands.html`.

## Before launch

Search the project for `TODO` to find everything that still needs your input: prices, photos, company details, contact details, stockists, which products each brand supplies, and the Bee's Water health claims awaiting approval. Visible TODOs show as yellow dashed tags on the pages.

See [COMPLIANCE.md](COMPLIANCE.md) for the UK rules behind the wording.

## Images

- `images/brands/`: logos supplied for ChaiCo, Little India (Anvi) and Greenish Ora, plus a placeholder Bee's Water mark.
- `images/products/`: ChaiCo and hyCane can images cut from the Asal-Karak catalogue. Swap for official pack shots when available.
- `images/mira-mark.svg`: placeholder Mira Foods mark. Replace with the official logo.
- Photo placeholders: put an `<img>` inside each `<div class="photo">` (the placeholder texture hides itself). Suggested size 1600 px wide, WebP or JPEG, under 300 KB.

## Preview on localhost

Double-click `start-server.bat`. It opens http://localhost:8000 in your browser; close the black window to stop it. No installs are needed (it uses Windows PowerShell). To use another port: `powershell -ExecutionPolicy Bypass -File serve.ps1 -Port 8080`.
