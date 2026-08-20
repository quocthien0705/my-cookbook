# Deployment Plan

The initial deployment target is GitHub Pages.

Before deployment, configure a GitHub Actions workflow to build the Vite application and publish its
`dist` output. The current browser-path navigation also needs a static-hosting fallback so direct
visits to `/recipes/`, `/categories/`, and `/search/` do not return a 404 page.

This will be addressed when the project is ready for its first deployment.
