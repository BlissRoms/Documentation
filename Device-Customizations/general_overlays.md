## General Overlays

• Refresh Rate Overlays
----------------

```
Overlay Path: overlay-bliss/packages/apps/Settings/res/values/bliss_config.xml
Default status: Disabled
```

This overlay is required to Enable Refresh Rate Controls.

```
    <!-- Show refresh rate controls -->
    <bool name="config_show_refresh_rate_controls">true</bool>
```		

• Charging Support Overlay
------------------------

```
Overlay Path: overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml
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

• Multi usb controller overlay (ONLY FOR ASUS ROG DEVICES)
----------------

```
Overlay Path: overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml
Default status: Disabled
```

Since all ROG devices have 2 usb ports. We can use both for mtp, not just as charger.

This overlay is required to add support for Multi USB Controller.

```
    <!-- Switch USB controller on Asus ROG devices-->
    <bool name="config_switchUsbController">true</bool>
```

• Multi-colour LED
----------------

```
Overlay Path: overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml
Default status: Enabled
```

This overlay is required to Enable Multi-coloured LED lights for supported devices.

{% hint style="info" %}
 For most of the Xiaomi devices, this must be set to 'false' as they have white-only LEDs.
{% endhint %}

```
    <!-- Does the notification LED support multiple colors?
         Used to decide if the user can change the colors -->
    <bool name="config_multiColorBatteryLed">false</bool>
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