# Build Initialization

## Configuring Git Identity

Before downloading the source code, configure your Git identity. Replace the example information with your own:

```shell
git config --global user.email "john.appleseed@example.com"
git config --global user.name "John Appleseed"
```

---

## Voyager (Android 15)

### Initializing Repository

Create a directory for the source code:

```shell
mkdir -p ~/bliss/voyager
cd ~/bliss/voyager
```

**Initialize repo:**

```shell
repo init -u https://github.com/BlissRoms/stable_releases.git -b refs/tags/v18.x-stable-voyager --git-lfs
```

Replace .x with the latest version available from the stable_releases repository

**Sync the repository:**

```shell
repo sync -c --force-sync --no-tags --no-clone-bundle -j10 --optimized-fetch --prune
```

### Building

```shell
. build/envsetup.sh
blissify options deviceCodename
```

---

## Waterlily (Android 16)

### Initializing Repository

Create a directory for the source code:

```shell
mkdir -p ~/bliss/waterlily
cd ~/bliss/waterlily
```

**Initialize repo:**

```shell
repo init -u https://github.com/BlissRoms/stable_releases.git -b refs/tags/v19.x-stable-waterlily --git-lfs
```

Replace .x with the latest version available from the stable_releases repository

**Sync the repository:**

```shell
repo sync -c --force-sync --no-tags --no-clone-bundle -j10 --optimized-fetch --prune
```

### Building

```shell
. build/envsetup.sh
blissify options deviceCodename
```

---

## Xylobium (Android 17)

### Initializing Repository

Create a directory for the source code:

```shell
mkdir -p ~/bliss/xylobium
cd ~/bliss/xylobium
```

**Initialize repo:**

```shell
repo init -u https://github.com/BlissRoms/stable_releases.git -b refs/tags/v20.x-stable-xylobium --git-lfs
```

Replace .x with the latest version available from the stable_releases repository

**Sync the repository:**

```shell
repo sync -c --force-sync --no-tags --no-clone-bundle -j10 --optimized-fetch --prune
```

### Building

```shell
. build/envsetup.sh
blissify options deviceCodename
```

---

## Build Options

`BLISS_BUILD_VARIANT` specifies the type of extra apps and services to include. Available variants: `vanilla`, `gapps`, `foss`, `microg`. Default is VANILLA.

```shell
-h | --help: Shows the help dialog
-c | --clean: Clean up before running the build
-d | --devclean: Clean up device only before running the build
-v | --vanilla: Build with no added app store solution (default option)
-g | --gapps: Build with Minimal Google Play Services added
-f | --foss: Build with FOSS (arm64-v8a) app store solutions added (requires vendor/foss)
-m | --microg: Build with MicroG
```

**Examples:**

- **To build with gapps:**
```shell
blissify -g deviceCodename
```
On waterlily branches, GApps have tiering which could be used via the following flag added on device.mk / BoardConfig.mk or bliss_devicename.mk

```shell
# GApps Variant
TARGET_GAPPS_VARIANT:= pico (otpions are pico, nano, micro, full)
```

As for the initial version of xylobium, we use [MindTheGapps](https://github.com/MindTheGapps/vendor_gapps)
So add this to your device.mk / BoardConfig.mk or bliss_devicename.mk

```shell
# GApps Architecture
GAPPS_ARCH:= arm64 (options are arm, arm64 and x86_64)
```

- **To build with FOSS:**
```shell
blissify -f deviceCodename
```

- **To build with MicroG:**
```shell
blissify -m deviceCodename
```

- **To build with gapps and perform deviceclean:**
```shell
blissify -g -d deviceCodename
```

!!! note
    You can also use the legacy `blissify` command: `blissify deviceCodename`

---

## After Building

There are two possible outcomes after the build process:

- If the build **fails**, you will see a red error message from `make`. Fix the issue (often related to the device tree or configuration). If the problem persists, submit a bug report to the ROM developers including the full build log and your device tree.

- If the build **succeeds**, you will see the Bliss logo in ASCII. Proceed with the following steps:

1. Go to the artifacts directory for your device:
```shell
cd out/target/product/deviceCodename/
```

2. You will find a `.zip` file following the format `Bliss-vxx.xx-deviceCodename-UNOFFICIAL-buildvariant-202xxxxx.zip`. Flash it on your device using a custom recovery.

## Report Build Issues

If you encounter any issues, reach out for support on [Telegram (BlissRoms Build Support)](https://t.me/Team_Bliss_Build_Support).

Congratulations on successfully building BlissROMs! Enjoy flashing and using your custom ROM!
