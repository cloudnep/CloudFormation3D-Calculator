# Cloud Formation 3D – Calculator (Android APK)

## Easiest: build the APK online (no Android Studio)
1. Create a new GitHub repo and upload everything in this folder (keep the `.github` folder).
2. Open the repo > **Actions** > **Build APK** > **Run workflow** (it also runs on every push).
3. When it finishes (~5 min), open the run and download **3d-calc-apk** under *Artifacts*. Unzip it to get `app-debug.apk`.
4. Copy the APK to your phone and install it (allow "Install unknown apps" when asked).

## Or build locally (Android Studio / JDK 21)
    npm install
    npx cap sync android
    cd android && ./gradlew assembleDebug
APK: `android/app/build/outputs/apk/debug/app-debug.apk`

## Editing the calculator
Edit `www/index.html`, then run `npx cap sync android` and rebuild.
