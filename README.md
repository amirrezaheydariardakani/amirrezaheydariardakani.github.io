# Multilingual personal site

A static Astro portfolio with Persian, English, French, and Simplified Chinese editions.

## Local development

```bash
npm install
npm run dev
```

## Production build

The default public URL is already configured for the user site:

```bash
https://amirrezaheydariardakani.github.io
```

Create a public repository named exactly `amirrezaheydariardakani.github.io`, place the project files at its root, and select **GitHub Actions** under **Settings → Pages → Build and deployment → Source**.

The production build runs an automated privacy regression check. Deploy the generated `dist/` directory, or use the included GitHub Pages workflow. A future custom domain can still override the URL at build time with `SITE_URL`.
