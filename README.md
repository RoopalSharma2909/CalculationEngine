This is a Kotlin Multiplatform project targeting Android, iOS, Web, Desktop (JVM).

* [/iosApp](./iosApp/iosApp) contains an iOS application. Even if you’re sharing your UI with Compose Multiplatform,
  you need this entry point for your iOS app. This is also where you should add SwiftUI code for your project.

* [/sharedLogic](./sharedLogic/src) is for the code that will be shared between app targets in the project.
  The most important subfolder is [commonMain](./sharedLogic/src/commonMain/kotlin). If preferred, you
  can add code to the platform-specific folders here too.

* [/sharedUI](./sharedUI/src) is for code that will be shared across your Compose Multiplatform applications.
  It contains several subfolders:
  - [commonMain](./sharedUI/src/commonMain/kotlin) is for code that’s common for all targets.
  - Other folders are for Kotlin code that will be compiled for only the platform indicated in the folder name.
    For example, if you want to use Apple’s CoreCrypto for the iOS part of your Kotlin app,
    the [iosMain](./sharedUI/src/iosMain/kotlin) folder would be the right place for such calls.
    Similarly, if you want to edit the Desktop (JVM) specific part, the [jvmMain](./sharedUI/src/jvmMain/kotlin)
    folder is the appropriate location.

* [/webApp](./webApp) contains a React web application. It uses the Kotlin/JS library produced
  by the [sharedLogic](./sharedLogic) module.

### Running the apps

Use the run configurations provided by the run widget in your IDE's toolbar. You can also use these commands and options:

- Android app: `./gradlew :androidApp:assembleDebug`
- Desktop app:
  - Hot reload: `./gradlew :desktopApp:hotRun --auto`
  - Standard run: `./gradlew :desktopApp:run`
- Web app:
  1. Install [Node.js](https://nodejs.org/en/download) (which includes `npm`)
  2. Build and run the web application:
     ```shell
     npm run build:shared
     npm install
     npm run start
     ```
- iOS app: open the [/iosApp](./iosApp) directory in Xcode and run it from there.

---

Learn more about [Kotlin Multiplatform](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html)…


# Steps to create js package

```
./gradlew :sharedLogic:jsNodeProductionLibraryDistribution --no-daemon --stacktrace
```

then copy and create readme
```
mkdir -p sharedLogic/npm-package && cp -R "sharedLogic/build/compileSync/js/main/productionLibrary/kotlin" sharedLogic/npm-package/ && printf '%s' '{
  "name": "@cyntra/calculation-engine",
  "version": "1.0.2",
  "description": "CalculationEngine Kotlin Multiplatform JS package",
  "type": "module",
  "main": "kotlin/CalculationEngine-sharedLogic.mjs",
  "types": "kotlin/CalculationEngine-sharedLogic.d.ts",
  "license": "MIT",
  "keywords": ["kotlin","calculation","calculation-engine","cyntra"],
  "repository": {
    "type": "git",
    "url": "https://github.com/your/repo.git"
  },
  "dependencies": {
    "@js-joda/core": "^6.1.0"
  }
}
' > sharedLogic/npm-package/package.json && printf '%s' '# Calculation Engine (JS)

This package contains the Kotlin/JS compiled output for `sharedLogic`.

Usage:

\`\`\`js
import * as Calc from "@cyntra/calculation-engine/kotlin/CalculationEngine-sharedLogic.mjs";
// or import the exposed function if your bundler resolves ESM exports
// named export: refreshCalculationJs
\`\`\`
' > sharedLogic/npm-package/README.md
```