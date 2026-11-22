# portfolio-jeffrey

This React portfolio is hosted on GitHub Pages.

## Branches

- **`main`** contains the React source, including `src/`, `public/`, and `package.json`.
- **`gh-pages`** contains the generated production site. GitHub Pages publishes from this branch.

## Deploy to GitHub Pages

Run the deploy script from the repository root.

```sh
npm run deploy
```

The `predeploy` script runs `npm run build`. The `deploy` script then publishes the contents of `build/` to `gh-pages`.

## Commit source changes

Commit and push your source changes to `main` separately from deployment.

```sh
git add .
git commit -m "Update portfolio"
git push origin main
```
