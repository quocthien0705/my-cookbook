# Deployment Plan

The initial deployment target is GitHub Pages.

Repository Pages URL:
`https://quocthien0705.github.io/my-cookbook/`

Deployment checklist:

1. Set the Vite production base path to `/my-cookbook/`.
2. Keep the app router aware of the Vite base path so local development and GitHub Pages both work.
3. Add a `public/404.html` fallback for direct visits to recipe pages and other nested routes.
4. Use a GitHub Actions workflow to build `dist` and publish it to GitHub Pages.

GitHub setup still needed:

1. Open repository settings.
2. Go to `Settings` > `Pages`.
3. Select `GitHub Actions` as the source.
4. Commit and push the workflow from `main`.
5. Wait for the first workflow run to finish.
