# Handling GApps Module Conflicts

When building with GApps (`BLISS_BUILD_VARIANT=gapps`), the `vendor/gms` package provides Google's proprietary overlays and apps. Some of these modules share the same name as AOSP/LineageOS equivalents in device trees or vendor blob repos, causing Soong "found in multiple namespaces" errors.

BlissRoms provides a soong config variable `bliss.with_gms` that is automatically set to `"true"` during GApps builds. Device trees and vendor repos can use this to conditionally disable conflicting modules.

---

## How It Works

In `vendor/bliss/config/common.mk`, the following is set when building GApps:

```makefile
ifeq ($(BLISS_BUILD_VARIANT), gapps)
$(call inherit-product, vendor/gms/products/gms.mk)
SOONG_CONFIG_NAMESPACES += bliss
SOONG_CONFIG_bliss += with_gms
SOONG_CONFIG_bliss_with_gms := true
endif
```

This exposes the variable `bliss.with_gms` to Soong's `select()` mechanism.

---

## Disabling Conflicting Overlay Modules

If your device tree defines an RRO (runtime resource overlay) that also exists in `vendor/gms/common`, use `select()` to disable it on GApps builds.

**Example:** `device/google/gs201/overlay/PixelConfigOverlay2021/Android.bp`

```blueprint
runtime_resource_overlay {
    name: "PixelConfigOverlay2021",
    product_specific: true,
    enabled: select(soong_config_variable("bliss", "with_gms"), {
        "true": false,
        default: true,
    }),
}
```

**Behavior:**

- **Vanilla build** — `with_gms` is not set, `default` applies, overlay is **enabled** (device tree version used)
- **GApps build** — `with_gms` is `"true"`, overlay is **disabled** (`vendor/gms` version used instead)

---

## Disabling Conflicting Vendor Prebuilt Apps

The same pattern works for prebuilt apps in vendor blob repos (`vendor/google/<device>`) that conflict with `vendor/gms/common`.

**Example:** `vendor/google/panther/Android.bp`

```blueprint
android_app_import {
    name: "DeviceIntelligenceNetworkPrebuilt-astrea_20240329.00_RC02",
    owner: "google",
    apk: "proprietary/product/priv-app/DeviceIntelligenceNetworkPrebuilt-astrea_20240329.00_RC02/DeviceIntelligenceNetworkPrebuilt-astrea_20240329.00_RC02.apk",
    preprocessed: true,
    presigned: true,
    dex_preopt: {
        enabled: false,
    },
    privileged: true,
    product_specific: true,
    enabled: select(soong_config_variable("bliss", "with_gms"), {
        "true": false,
        default: true,
    }),
}
```

---

## Disabling Conflicting Modules in device.mk

In addition to the Soong-level `select()`, you should also guard the conflicting modules in your `device.mk` so they are excluded from `PRODUCT_PACKAGES` on GApps builds:

```makefile
# Overlays provided by vendor/gms when building with GApps
ifneq ($(BLISS_BUILD_VARIANT), gapps)
PRODUCT_PACKAGES += \
    PixelConfigOverlay2019 \
    PixelConfigOverlay2021 \
    PixelConfigOverlayCommon
endif
```

!!! note
    Both the `device.mk` guard and the `Android.bp` `select()` are needed. The `device.mk` guard prevents Make from including the module, while the `select()` prevents Soong from erroring on duplicate module names across namespaces.

---

## Finding Conflicts

To identify which modules in your device tree or vendor repo conflict with `vendor/gms`, run:

```bash
comm -12 \
  <(grep "name:" vendor/gms/common/Android.bp | sed 's/.*name: "//;s/".*//' | sort) \
  <(grep "name:" device/google/<device_tree>/Android.bp | sed 's/.*name: "//;s/".*//' | sort)
```

For overlay directories:

```bash
comm -12 \
  <(ls vendor/gms/common/proprietary/product/overlay/ | sort) \
  <(ls device/google/<device_tree>/overlay/ | sort)
```

Any module names that appear in both lists need the `select()` guard added.
