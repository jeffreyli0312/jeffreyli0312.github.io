# portfolio-jeffrey

Ran terminal command: git status --short --branch; git branch -vv; git remote -v

Ran terminal command: git log --oneline --decorate --graph --all -n 12

Ran terminal command: git diff --stat main..gh-pages; git diff --stat gh-pages main
Completed with input: git diff --stat main..gh-pages; git diff --stat gh-pages main

Ran terminal command: Get-Content package.json

Ran terminal command: git ls-tree --name-only main; git ls-tree --name-only gh-pages

`main` and `gh-pages` serve different purposes:

- **`main`** contains the React source: src, public, package.json, etc.
- **`gh-pages`** contains the generated production website from the build directory.

This happens because package.json defines:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Running `npm run deploy` builds the website and pushes build to `gh-pages`.

GitHub Pages uses **`gh-pages`** as its publishing branch, so it serves the compiled files—even if `main` has newer source changes.

To update the live site:

```bash
npm run deploy
```

This rebuilds the site and updates `gh-pages`. Commit source changes on `main` separately:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```