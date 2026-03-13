# Preparations

## System requirements for building BlissRoms

Before you begin building BlissRoms, ensure that your system meets the following requirements:

- **Operating System:** Latest Ubuntu LTS release.
- **Storage:** At least 250GB of available HDD/SSD space (~170GB for the repo + build space).
- **RAM:** 8GB minimum (16GB recommended for Virtual Machines).
- **CPU:** Dual core or better for faster performance.

While other Linux distributions may work, this guide specifically focuses on Ubuntu, which is officially supported for building BlissRoms.

!!! note
    Please read the [AOSP building instructions](http://source.android.com/source/index.html) before proceeding.

!!! warning
    Underpowered machines may experience crashes during compilation due to resource limitations. If you encounter crashes, try restarting the build process as most issues are caused by insufficient memory.

## Installing Java 8

```shell
sudo add-apt-repository ppa:openjdk/ppa
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install openjdk-8-jdk
update-alternatives --config java
update-alternatives --config javac
```

!!! note
    Make sure Java 8 is selected for both `java` and `javac`, then reboot.

## Grabbing Dependencies

```shell
sudo apt-get install git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev ccache libgl1-mesa-dev libxml2-utils xsltproc unzip squashfs-tools python-mako libssl-dev ninja-build lunzip syslinux syslinux-utils gettext genisoimage gettext bc xorriso xmlstarlet git-lfs
```
