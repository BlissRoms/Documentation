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
repo init -u https://github.com/BlissRoms/stable_releases.git -b refs/tags/v18.7-stable-voyager --git-lfs
```

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
repo init -u https://github.com/BlissRoms/stable_releases.git -b refs/tags/v19.3-stable-waterlily --git-lfs
```

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

2. You will find a `.zip` file following the format `Bliss-vxx.xx-deviceCodename-UNOFFICIAL-vanilla-202xxxxx.zip`. Flash it on your device using a custom recovery.

## Report Build Issues

If you encounter any issues, reach out for support on [Telegram (BlissRoms Build Support)](https://t.me/Team_Bliss_Build_Support).

Congratulations on successfully building BlissROMs! Enjoy flashing and using your custom ROM!
