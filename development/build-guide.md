# Build BlissRom

## Introduction

This is the official guide to build BlissRom for your device. In this guide, we will only cover official devices with actual maintainers. We will not delve into porting devices.

The golden rule to building is patience. If something breaks, wait for your maintainer to fix it, send a polite message to your maintainer, or better yet, try and fix it yourself. Then you can make a merge request and contribute!

Let’s get started.

## Preparation

To get started, you need a computer with Ubuntu 18.04 \(LTS\), at least 200GB space of HDD, and at least 8GB RAM. A decent CPU \(or CPUs if you have a server motherboard\) is recommended. Other distros can work but is not officially supported in this guide.

Underpowered machines may crash during compilation. If that happens, you may try and restart the build as most crashes are caused by lack of memory. If your storage space has run out, then you will need to build on a different hard drive.

### Install the JDK

Install OpenJDK:

```text
sudo apt install openjdk-8-jdk
```

### Install build tools

To install the required build tools, run the following command:

```text
sudo apt install git gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev lib32z1-dev ccache libgl1-mesa-dev libxml2 libxml2-utils xsltproc unzip squashfs-tools python python-mako libssl-dev ninja-build lunzip syslinux syslinux-utils gettext genisoimage bc xorriso liblz4-tool libncurses5-dev libsdl1.2-dev libwxgtk3.0-dev lzop maven pngcrush schedtool lib32readline-dev
```

### Install source code tools

Now we need to get the source code via a program named `repo`. The primary function of `repo` is to read a manifest file located in BlissRoms GitHub organization, and find what repositories you need to actually build Android.

Create a `~/bin` directory for `repo`:

```text
mkdir -p ~/bin
```

The `-p` flag instructs `mkdir` to _only_ create the directory if it does not exist in the first place. Now download the `repo` tool into `~/bin`:

```text
curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
```

Make `repo` executable:

```text
chmod a+x ~/bin/repo
```

And add it to PATH:

```text
nano .bashrc
```

Scroll to the end of the file and type these lines:

```text
# Export ~/bin
export PATH=~/bin:$PATH
```

Ctrl-O and enter to save, then Ctrl-X to exit nano. Now either logout and login again \(or reboot\), or `source` the file:

```text
source .bashrc
```

Which can be shortened to:

```text
. .bashrc
```

#### What is `source`?

`source` is a `bash` command to read aliases, functions, and commands from the specified file. Typically, you'll supply `bash` with a configuration file such as `.bashrc` or `.bash_profile`, or an initialization file such as `envsetup.sh`. The difference is that while the configuration file lists configuration and user-defined aliases and functions, initialization files typically hold build commands such as `breakfast`, `brunch`, and `lunch`. Without those commands building would be significantly harder as you would have to memorize the long command to invoke a build manually!

But why do you need to run it after modifying a file? Well, `bash` cannot automatically detect changes in our files. To solve this, we either `source` it or log out and log back in, forcing `bash` to reload configuration files. Keep this in mind, because unlike configuration files, if you forget to `source` initialization files, build commands will not function!

### Download

Create a directory for the source:

```text
mkdir -p ~/bliss/q
cd ~/bliss/q
```

Before we download, we need to tell `repo` and `git` who we are. Run the following commands, substituting your information:

```text
git config --global user.email "john.appleseed@example.com"
git config --global user.name "John Appleseed"
```

Now, we’re ready to initialize. We need to tell `repo` which manifest to read:

```text
repo init -u https://github.com/BlissRoms/platform_manifest.git -b r
```

`-b` is for the branch, and we’re on `q`, Android 10. It’ll take a couple of seconds. You may need to type `y` for the color prompt.

Then sync the source:

```text
repo sync -j$(nproc --all) -c
```

_Note: For more information about the `repo` tool, visit the_ [_Build Tips guide_](build-tips.md) _to learn more about the_ [_repo flags_](build-tips.md#repo-optimization-tips)_._

`repo` will start downloading all the code. That’s going to be slow, even on a fiber network. Expect downloads to take more than a couple hours.

### Build

Set up the build environment:

```text
. build/envsetup.sh
```

This is the initialization file we talked about earlier up top. This "initializes" the environment, and imports a bunch of useful build commands required to build your device. Again, you need to remember to `source` this file every time you log out and log back in, or launch a new `bash`/Terminal instance.

Define what device you’re going to build. For example, the Nexus 5X, has a codename of `bullhead`. You can check your specific device's codename on GitHub or on Google. Execute:

```text
breakfast bullhead
```

What does this do? `breakfast` searches repositories for your device "tree", which contains all the details needed to make the build suitable for your device. CPU, kernel info, device screen size, whether the board has Bluetooth, NFC, what frequencies the build needs for Wi-Fi, and a bunch of other things. `breakfast` will automatically search in the `BlissRoms-Devices` GitHub repository, and grab your device tree for you.

Okay, so we have the device tree set up. Feel free to browse around the source code to see what changed. You should see folders added to `device/`, `kernel/` and `vendor/`. A shortcut:

```text
croot
```

will dump you back in the root of the source code tree. So if you’ve been going through folders and don’t have any idea where you are, you can use the above command. This command, however, requires you to have `source`d `build/envsetup.sh` earlier.

We're ready to build, but before we teach you the easy command to execute a build, we will first try the manual method. To set up the current terminal environment for building your particular device, execute:

```text
lunch bliss_bullhead-userdebug
```

Let's break down the command. `lunch` initializes the proper environmental variables required for the build tools to build your specific device. Things like `BLISS_DEVICE` and other variables are set in this stage, and the changed variables will be shown as output. `bliss_` is the ROM that we are building. As convention, all devices will have this prefix. `bullhead` is the specific device we are building - in this case, the Nexus 5X. Finally, `userdebug` means that we will build a user-debuggable variant. This is usually what most ROMs use for publishing their builds. Manufacturers typically use `user` which disables most of the useful Android Logcats.

#### My device isn't booting, and `userdebug` won't print any `adb logcat`s. What gives?

There is a third build variant called `eng`, short for engineering builds. These builds will activate `adb logcat` during boot, and will show you exactly what is going wrong, where, and why. However, these builds are **NOT** recommended for normal usage as they are not securely hardened, have log spam that will slow down your device, and other unexpected problems like userspace utilities crashing during runtime. If you want to submit your device for mainline, do **NOT** submit an `eng` build!

All set? Let's start the building process. Run:

`mka blissify`

And the build should start. The build process will take a long time. Prepare to wait a few hours, even on a decent machine.

#### Why `mka` and not `make`?

`make` only runs with 1 thread. `mka` is properly aliased to use all of your threads by checking `nproc`.

If you want to customize your thread count \(maybe you're building with a fan-screaming laptop in a quiet coffee shop\), use `make blissify -j#`, replacing the hash with the number of threads \(example of `make blissify -j4`\).

#### I get an error about no `blissify` targets to build against, what's wrong?

If you are building other ROMs, it is usually `make bacon`. For BlissRoms, we chose the build target of `blissify`. If that doesn't work, sometimes there is a bug, or the ROM developers do not implement a `bacon` target to build against. In this case, you will need to find what name they use to initialize a full build of the ROM. Conventionally, it is supposed to be `bacon`, but some ROM developers change this name inadvertently, or actually have a bug that causes the build target to never be found. If you cannot locate the build target, ask the developers of the ROM. Alternatively, you can try poking around in `build/make/core/Makefile` to see what the build target name is. But this is out of the scope of this article as you're not supposed to be building other ROMs \(that's not what this tutorial is for, sorry!\)

All right, but that's annoying. You had to type **three** commands to build it all. What about running one command?

```text
blissify bullhead
```

But what is `blissify`? It is a compact form of these commands:

```text
breakfast bullhead
lunch bliss_bullhead-userdebug
make blissify
```

Sounds great, right? Once you have run the command, jump over to the next section.

### After building

There are two outcomes to a build - either it fails and you get a red error message from `make`, or it succeeds and you see the Bliss logo in ASCII. If you encounter the former, you need to go back and fix whatever it's complaining about. Typically, 90% of the time the problem will be in your device tree. For the other 10%, submit a bug report to the ROM developers. Be sure to include the full log of your build to help diagnose the problem, and your device tree.

If you face the latter, congratulations! You've successfully built BlissRoms for your device. Grab the artifacts for your device:

```text
cd out/target/product/bullhead/
```

In here, you’ll find a `.zip` that goes along the lines of `Bliss-v11.9-Stable-bullhead-UNOFFICIAL-20190531.zip`. Install TWRP, flash the build to your device, and enjoy!

### Conclusion

Building a ROM is very hard and tedious and the results are very rewarding! If you managed to follow along, congratulations!

After you finish building, you can try out the Git Started guide. Make changes, commit, and send them off to our Gerrit for review! Or better yet, download experimental commits not ready for the mainline repositories and review them! Again, ROM building is a fun project you can work with. I hope this guide was a lot of fun to run through!
