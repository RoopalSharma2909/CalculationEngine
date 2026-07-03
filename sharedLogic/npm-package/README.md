# Calculation Engine (JS)

This package contains the Kotlin/JS compiled output for `sharedLogic`.

Usage:

```js
import * as Calc from "@OWNER/calculation-engine/kotlin/CalculationEngine-sharedLogic.mjs";
// or import the exposed function if your bundler resolves ESM exports
// named export: refreshCalculationJs
```

Publishing
1. Make sure `name` in `package.json` is scoped to your GitHub account or org (example: `@your-github-username/calculation-engine`).
2. Push a git tag like `v1.0.2` to trigger the GitHub Actions workflow which builds and publishes the package.

Install from GitHub Packages in another project
1. Create a `.npmrc` in the consuming project with:

```
@your-github-username:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

2. Install with `npm install @your-github-username/calculation-engine`.

Local publish (for testing)
1. Locally, set an environment variable `NODE_AUTH_TOKEN` with a personal access token that has `write:packages` and `repo` scopes, or use `GITHUB_TOKEN` in Actions.
2. From repo root run:

```bash
./gradlew :sharedLogic:jsNodeProductionLibraryDistribution
cd sharedLogic/npm-package
npm config set //npm.pkg.github.com/:_authToken "$NODE_AUTH_TOKEN"
npm publish --registry=https://npm.pkg.github.com/
```
