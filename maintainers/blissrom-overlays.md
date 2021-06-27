• Battery Health Overlay
------------------------

```
Overlay Path: overlay/packages/apps/Settings/res/values/bliss_config.xml
Default status: Enabled
```

This overlay is required to disable battery health section if you could not find a reliable node in your kernel.

```
	<!-- Battery Health -->
    <bool name="config_supportBatteryHealth">false</bool>
```

This overlay is required to disable battery charging cycle counts in battery page in setting app.

```
	<!-- Battery Charging cycle counts -->
    <bool name="config_supportBatteryHealth">false</bool>
```

You will need to check your available kernel nodes before selecting them
Note that nodes availability depends on kernel version


**Example**
```
		<!-- Battery Health Info nodes -->
        <string name="config_batDesCap">/sys/class/power_supply/bms/charge_full_design</string>
        <string name="config_batCurCap">/sys/class/power_supply/bms/charge_now_raw</string>
        <string name="config_batChargeCycle">/sys/class/power_supply/bms/cycle_count</string>
```

• Charging Support Overlay
------------------------

```
Overlay Path: overlay/frameworks/base/core/res/res/values/bliss_config.xml
Default status: Disabled
```

**- VOOC Charging ( If your device supports )**

This overlay is required to Enable **VOOC charging support**.

```
    <!-- Whether device has VOOC charging support -->
    <bool name="config_hasVoocCharger">true</bool>
```

**- WARP Charging ( If your device supports )**

This overlay is required to Enable **Warp charging support**.

```
    <!-- Whether device has warp charging support -->
    <bool name="config_hasWarpCharger">true</bool>
```

**- Dash Charging ( If your device supports )**

This overlay is required to Enable **Dash charging support**.

```
    <!-- Whether device has dash charging support -->
    <bool name="config_hasDashCharger">true</bool>
```

• Smart Charging
----------------

```
Overlay Path: overlay/packages/apps/Settings/res/values/bliss_config.xml
Default status: Disabled
```

This overlay is required to make Smart Charging feature functioning.

```
    <!-- Smart Charging -->
    <bool name="config_supportSmartFeatures">true</bool>
```

**Example**
```
    <!-- Smart charge sysfs node and value for suspend/resume charging-->
    <integer name="config_smartChargingBatteryLevel">80</integer>
    <integer name="config_smartChargingBatteryResumeLevel">60</integer>
    <string name="config_SmartChargingSysfsNode" translatable="false">/sys/class/power_supply/battery/charging_enabled</string>
    <string name="config_SmartChargingSuspendValue" translatable="false">0</string>
    <string name="config_SmartChargingResumeValue" translatable="false">1</string>
```

• Multi usb controller overlay (ONLY FOR ASUS ROG DEVICES)
----------------

```
Overlay Path: overlay/frameworks/base/core/res/res/values/bliss_config.xml
Default status: Disabled
```

Since all ROG devices have 2 usb ports. We can use both for mtp, not just as charger.

This overlay is required to add support for Multi USB Controller.

```
    <!-- Switch USB controller on Asus ROG devices-->
    <bool name="config_switchUsbController">true</bool>
```

## FOD Specific Overlays

• FOD Support
----------------

```
Overlay Path: overlay/frameworks/base/core/res/res/values/config.xml
Default status: Disabled
```

This overlay is required to Enable FOD Support. Required inorder for FOD to work.

```
    <!-- Whether to show a custom view for FOD -->
    <bool name="config_needCustomFODView">true</bool>
```

• FOD Animations
----------------
For FOD Animation to work you need 2 things in your device tree source.

  - A Flag in bliss_codename.mk makefile in your respective device tree
  - An overlay to set Default FOD Pressed Color

**Flag Required to build FOD Animation resources**

```
TARGET_WANTS_FOD_ANIMATIONS := true
```

**To set Default FOD Pressed color**
```
Overlay Path: overlay/frameworks/base/core/res/res/values/config.xml
Default status: Disabled
```

This overlay is required to set Default FOD Pressed Color.

```
    <!-- Default fod pressed color -->
    <integer name="config_fod_pressed_color">1</integer>
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
