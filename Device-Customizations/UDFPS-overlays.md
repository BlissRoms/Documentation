
• UDFPS Support
----------------

```
Overlay Path: overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml
```

This overlay is required to Enable UDFPS Support. The overlay is used to determine HBM Type for UDFPS. Required inorder for UDFPS to work.

```
    <!-- HBM type of UDFPS overlay.
            0 - GLOBAL HBM
            1 - LOCAL HBM
    -->
    <integer name="config_udfpsHbmType">0</integer>
```

• UDFPS Vendor code
----------------

```
Overlay Path: overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml
```

This overlay is used to define vendor code. Required inorder for UDFPS to work.

```
    <!-- Udfps vendor code -->
    <integer name="config_udfpsVendorCode">0</integer>
```


• UDFPS Animations
----------------
For UDFPS Animation to work you need 2 things in your device tree source.

  - A Flag in bliss_codename.mk makefile in your respective device tree
  - An overlay to set Default FOD Pressed Color

**Flag Required to build UDFPS Animation resources**

```
# UDFPS Animations
EXTRA_UDFPS_ANIMATIONS := true
```

**To set Default UDFPS Pressed color**
```
Overlay Path: overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml
Default status: Disabled
```

This overlay is required to set Default UDFPS Pressed Color.

```
    <!-- Default fod pressed color -->
    <integer name="config_fod_pressed_color">1</integer>
```

**To set UDFPS Animation Offset**
```
Overlay Path: overlay-bliss/frameworks/base/packages/SystemUI/res/values/dimens.xml
```

This overlay is required to set UDFPS Animation offset for respective devices.

{% hint style="info" %}
Adjust this value as per your device.
{% endhint %}

```
    <!-- Udfps animation offset -->
    <dimen name="udfps_animation_offset">50dp</dimen>
```

**To set UDFPS Animation Size**
```
Overlay Path: overlay-bliss/frameworks/base/packages/SystemUI/res/values/dimens.xml
```

This overlay is required to set UDFPS Animation size for respective devices.

{% hint style="info" %}
Adjust this value as per your device.
{% endhint %}

```
    <!-- Udfps animation size-->
    <dimen name="udfps_animation_size">176dp</dimen>
```

**To set Color of the UDFPS Pressed view**
```
Overlay Path: overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml
```

This overlay is required to set Color of the UDFPS Pressed view for respective devices.

```
    <!-- Color of the UDFPS Pressed view -->
    <color name="config_udfpsColor">#ffffe6</color>
```

• Screen-Off FOD
----------------

```
Overlay Path: overlay/packages/apps/Settings/res/values/bliss_config.xml
Default status: Disabled
```

This overlay is required to Enable Screen OFF FOD.

```
    <!-- Screen off FOD -->
    <bool name="config_supportScreenOffFod">true</bool>
```

