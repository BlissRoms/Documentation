## General Overlays

• Battery Health Overlay
------------------------

```
Overlay Path: overlay/packages/apps/Settings/res/values/bliss_config.xml
Default status: Disabled
```

This overlay is required to Enable battery health section.

```
	<!-- Battery Health -->
    <bool name="config_supportBatteryHealth">true</bool>
```

This overlay is required to Enable battery charging cycle counts in battery page in setting app.

```
	<!-- Battery Charging cycle counts -->
    <bool name="config_showChargingCycles">true</bool>
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

• Live Display
----------------

```
Overlay Path: overlay/frameworks/base/core/res/res/values/bliss_config.xml
Default status: Disabled
```

This overlay is required to make Live Display feature functioning.

```
    <!-- Default state for LiveDisplay -->
    <bool name="config_enableLiveDisplay">true</bool>
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

• High Aspect Ratio
------------------
```
Overlay Path: overlay/frameworks/base/core/res/res/values/config.xml
Default status: Disabled
```

This overlay is required to make full screen apps function working properly

```
    <!-- Define that we use a higher screen ratio (18:9) than standard (16:9) -->
    <bool name="config_haveHigherAspectRatioScreen">true</bool>
```

• Multi-colour LED
----------------

```
Overlay Path: overlay/frameworks/base/core/res/res/values/bliss_config.xml
Default status: Enabled
```

This overlay is required to Enable Multi-coloured LED lights for supported devices.

{% hint style="info" %}
 For most of the Xiaomi devices, this must be set to 'false' as they have white-only LEDs.
{% endhint %}

```
    <!-- Does the notification LED support multiple colors?
         Used to decide if the user can change the colors -->
    <bool name="config_multicolorled">false</bool>
```

• Call Recording
----------------
{% hint style="info" %}
This feature only works on AOSP Dialer and not on Google Dialer.
{% endhint %}

```
Overlay Path: overlay/packages/apps/Dialer/java/com/android/dialer/callrecord/res/values/config.xml
Default status: Disabled
```

This overlay is required to Enable Call recording on AOSP Dialer's.

```
	<!-- Enable Call recording -->
	<bool name="call_recording_enabled">true</bool>
	<integer name="call_recording_audio_source">4</integer>
```

{% hint style="warning" %}
Call recording is illegal in some countries. Kindly refer to local laws before enabling this feature!!
{% endhint %}
