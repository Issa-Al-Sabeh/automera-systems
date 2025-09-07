# GitHub Pages Deployment Guide

This project is configured for static export and can be deployed to GitHub Pages.

## Configuration

The project has been configured with:

- `output: 'export'` in `next.config.ts` for static generation
- `images: { unoptimized: true }` for static hosting compatibility
- GitHub Actions workflow for automatic deployment

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
3. **Deploy**: The GitHub Actions workflow will automatically build and deploy your site

### Option 2: Manual Deployment

1. **Build the static site**:

   ```bash
   npm run build
   ```

2. **Deploy the `out` folder**:
   - The `out` folder contains all static files
   - Upload the contents of the `out` folder to your hosting provider

## GitHub Pages URL

If your repository is named `automera-systems`, your site will be available at:
`https://yourusername.github.io/automera-systems`

## Local Testing

To test the static build locally:

```bash
# Build the static site
npm run build

# Serve the static files (requires a static server)
npx serve out
```

## Important Notes

- The contact form API (`/api/contact`) will not work in static export mode
- All images are unoptimized for static hosting compatibility
- The site uses client-side routing for navigation

## Troubleshooting

- If images don't load, check that the `basePath` and `assetPrefix` are correctly set
- If routing doesn't work, ensure `trailingSlash: true` is set in the config
- For GitHub Pages, make sure the repository name matches the `basePath` in `next.config.ts`
