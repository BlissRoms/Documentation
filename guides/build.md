# Build Initialization

## Initializing Repository

Create a directory for the source code:

```shell
mkdir -p ~/bliss/typhoon
cd ~/bliss/typhoon
```

Before downloading the source code, let's configure your Git identity. Replace the example information with your own:

```shell
git config --global user.email "john.appleseed@example.com"
git config --global user.name "John Appleseed"
```

Now we can proceed with initializing the repository. Run the following commands to specify the manifest and version:

**Initialize repo:**

```shell
repo init -u https://github.com/BlissRoms/platform_manifest.git -b typhoon-qpr2 --git-lfs
```

**Sync the repository:**

```shell
repo sync -c --force-sync --no-tags --no-clone-bundle -j10 --optimized-fetch --prune
```

These commands initialize the repository using the BlissRoms manifest for the "typhoon-qpr2" branch and sync the repository, fetching the necessary source code and dependencies.

## Building

To start the build process, execute the following commands:

```shell
. build/envsetup.sh
blissify options deviceCodename
```

**Options:**

- `BLISS_BUILD_VARIANT` - Specifies the type of extra apps and services to include in the build. The default variant is VANILLA.

```shell
-h | --help: Shows the help dialog
-c | --clean: Clean up before running the build
-d | --devclean: Clean up device only before running the build
-v | --vanilla: Build with no added app store solution (default option)
-p | --pixelgapps: Build with Pixel Gapps (only for Pixel Users)
-g | --gapps: Build with Minimal Google Play Services added
-f | --foss: Build with FOSS (arm64-v8a) app store solutions added (requires vendor/foss)
```

**Examples:**

- **To build with gapps:**
```shell
blissify -g deviceCodename
```

- **To build with FOSS:**
```shell
blissify -f deviceCodename
```

- **To build with gapps and perform deviceclean:**
```shell
blissify -g -d deviceCodename
```

**Note:** You can also use the legacy `blissify` command:
```shell
blissify deviceCodename
```

## After Building

There are two possible outcomes after the build process:

- If the build fails, you will see a red error message from `make`. In this case, you need to fix the issue, which is often related to the device tree or configuration. If the problem persists, submit a bug report to the ROM developers, including the full build log and your device tree.

- If the build succeeds, you will see the Bliss logo in ASCII. Congratulations! You have successfully built BlissRoms for your device. Proceed with the following steps:

1. Go to the artifacts directory for your device:
```shell
cd out/target/product/deviceCodename/
```

2. You will find a `.zip` file following the format `Bliss-vxx.xx-deviceCodename-UNOFFICIAL-vanilla-202xxxxx.zip`. Choose a custom recovery of your choice, flash it on your device, and install the built BlissRoms package.

Bliss versions starting with 14.xx are based on Android 11, 15.xx on Android 12/12.1, and 16.xx on Android 13.

## Report Build Issues

If you encounter any issues during the build process, you can reach out to us for support on [Telegram (BlissRoms Build Support)](https://t.me/Team_Bliss_Build_Support).

Congratulations on successfully building BlissROMs! Enjoy flashing and using your custom ROM!