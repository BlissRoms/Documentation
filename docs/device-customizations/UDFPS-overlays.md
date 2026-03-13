# UDFPS Overlays

Overlays should be placed in your device tree under the `overlay-bliss/` directory unless otherwise specified.

---

## UDFPS Support (Screen-Off)

**Overlay Path:** `overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml`
**Default status:** Disabled
**Applies to:** Voyager only

Enables fingerprint unlock when the screen is off:

```xml
<!-- Whether device supports in-display fingerprint when screen is off -->
<bool name="config_supportScreenOffUdfps">true</bool>
```

---

## UDFPS Vendor Code

**Overlay Path:** `overlay-bliss/frameworks/base/packages/SystemUI/res/values/bliss_config.xml`
**Default status:** `0`
**Applies to:** Voyager, Waterlily

Required for UDFPS to work. Set the vendor-specific code for your device:

```xml
<!-- Udfps vendor code -->
<integer name="config_udfpsVendorCode">0</integer>
```

---

## UDFPS Animation Size & Offset

**Overlay Path:** `overlay-bliss/frameworks/base/packages/SystemUI/res/values/bliss_dimens.xml`
**Default values:** size `280dp`, offset `0dp`
**Applies to:** Voyager, Waterlily

Adjust the animation size and vertical offset to match your device's fingerprint sensor position:

```xml
<!-- Udfps animation size -->
<dimen name="udfps_animation_size">280dp</dimen>

<!-- Udfps animation offset -->
<dimen name="udfps_animation_offset">0dp</dimen>
```

!!! info
    Adjust these values as per your device's sensor placement.

---

## UDFPS Animations

**Applies to:** Voyager, Waterlily

For UDFPS animations to work you need two things in your device tree:

1. A flag in your `bliss_<codename>.mk` makefile
2. An overlay to set the default FOD pressed color

**Flag required to build UDFPS animation resources:**

```makefile
# UDFPS Animations
EXTRA_UDFPS_ANIMATIONS := true
```

**Default FOD Pressed Color**

**Overlay Path:** `overlay-bliss/frameworks/base/packages/SystemUI/res/values/bliss_config.xml`
**Default status:** Disabled

```xml
<!-- Default fod pressed color -->
<integer name="config_fod_pressed_color">1</integer>
```

---

## Disable Smart Pixels on UDFPS (Voyager only)

**Overlay Path:** `overlay-bliss/frameworks/base/packages/SystemUI/res/values/bliss_config.xml`
**Default status:** Disabled

Disable Smart Pixels when the UDFPS overlay is active (recommended for OLED devices using Smart Pixels):

```xml
<bool name="config_disableSmartPixelsOnUDFPS">true</bool>
```

---

## Pulse on Finger Down (Voyager only)

**Overlay Path:** `overlay-bliss/frameworks/base/packages/SystemUI/res/values/bliss_config.xml`
**Default status:** Disabled

Pulse instead of waking the screen when a finger is detected on the sensor while the screen is off or in low-power mode:

```xml
<bool name="config_pulseOnFingerDown">true</bool>
```
