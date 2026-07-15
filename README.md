# Multilingual personal site

A static Astro portfolio with Persian, English, French, and Simplified Chinese editions.

## Local development

```bash
npm install
npm run dev
```

## Production build

Set the public URL before building so canonical and alternate-language links are correct:

```bash
SITE_URL=https://username.github.io npm run build
```

The production build runs an automated privacy regression check. Deploy the generated `dist/` directory, or use the GitHub Pages workflow after replacing the placeholder URL.
