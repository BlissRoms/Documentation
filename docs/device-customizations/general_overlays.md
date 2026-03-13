# General Overlays

Overlays should be placed in your device tree under the `overlay-bliss/` directory unless otherwise specified.

---

## Charging Support

**Overlay Path:** `overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml`
**Default status:** Disabled
**Applies to:** Voyager, Waterlily

Enable the appropriate charging type your device supports:

**VOOC Charging**
```xml
<!-- Whether device has VOOC charging support -->
<bool name="config_hasVoocCharger">true</bool>
```

**Warp Charging**
```xml
<!-- Whether device has warp charging support -->
<bool name="config_hasWarpCharger">true</bool>
```

**Dash Charging**
```xml
<!-- Whether device has dash charging support -->
<bool name="config_hasDashCharger">true</bool>
```

**Turbo Power Charging**
```xml
<!-- Whether device has turbo power charging support -->
<bool name="config_hasTurboPowerCharger">true</bool>
```

You can also point to a sysfs node to detect OEM fast charger status:

```xml
<!-- Path to fast charging status file -->
<string name="config_oemFastChargerStatusPath" translatable="false">/sys/path/to/node</string>

<!-- Expected value from the status file -->
<string name="config_oemFastChargerStatusValue" translatable="false">1</string>
```

---

## Alert Slider (Tri-State Switch)

**Overlay Path:** `overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml`
**Default status:** Disabled
**Applies to:** Voyager, Waterlily

For devices with a physical tri-state / alert slider (e.g. OnePlus):

```xml
<!-- Whether device has physical tri state switch -->
<bool name="config_hasAlertSlider">true</bool>
```

Set the slider location in SystemUI:

**Overlay Path:** `overlay-bliss/frameworks/base/packages/SystemUI/res/values/bliss_config.xml`

```xml
<!-- The location of the device's physical tri state switch
     0: Left side
     1: Right side -->
<integer name="config_alertSliderLocation">0</integer>

<!-- Whether key handler sends intent when changing slider position -->
<string name="config_alertSliderIntent">your.intent.action</string>
```

---

## Pocket Mode

**Overlay Path:** `overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml`
**Default status:** Enabled
**Applies to:** Voyager only

Controls pocket detection to prevent accidental touches:

```xml
<bool name="config_pocketModeSupported">true</bool>
<bool name="config_pocketUseLightSensor">true</bool>
```

For devices with a vendor pocket sensor:

```xml
<string name="config_pocketJudgeVendorSensorName">your.sensor.name</string>
<string name="config_pocketJudgeVendorProximitySensorName">your.proximity.sensor</string>
```

---

## Smart Pixels

**Overlay Path:** `overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml`
**Default status:** Disabled
**Applies to:** Voyager only

Enables the Smart Pixels feature (burn-in protection / battery saving on OLED panels):

```xml
<bool name="config_supportSmartPixels">true</bool>
```

---

## Doze / Always-On Display

**Overlay Path:** `overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml`
**Default status:** Disabled
**Applies to:** Voyager only

```xml
<!-- Enable sensor-based doze tilt detection -->
<bool name="config_dozePulseTilt">true</bool>

<!-- Enable proximity-based doze pulse -->
<bool name="config_dozePulseProximity">true</bool>

<!-- Whether device has a wake-up proximity sensor -->
<bool name="config_deviceHaveWakeUpProximity">true</bool>

<!-- Enable Doze feature by default in settings -->
<bool name="config_doze_enabled_by_default">true</bool>
```

---

## Fingerprint Cancel If Not Idle

**Overlay Path:** `overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml`
**Default status:** Disabled
**Applies to:** Voyager only

Cancel fingerprint operation if device is not idle:

```xml
<bool name="config_fpCancelIfNotIdle">true</bool>
```

---

## Multi-colour LED

**Overlay Path:** `overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml`
**Default status:** Enabled
**Applies to:** Voyager only

!!! info
    For most Xiaomi devices, set this to `false` as they have white-only LEDs.

```xml
<!-- Does the notification LED support multiple colors? -->
<bool name="config_multiColorBatteryLed">false</bool>
```

---

## Multi USB Controller (ASUS ROG Devices Only)

**Overlay Path:** `overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml`
**Default status:** Disabled
**Applies to:** Voyager only

Enables support for both USB ports on ASUS ROG devices:

```xml
<!-- Switch USB controller on Asus ROG devices -->
<bool name="config_switchUsbController">true</bool>
```

---

## Alternate Fastcharge Info Update

**Overlay Path:** `overlay-bliss/frameworks/base/packages/SystemUI/res/values/bliss_config.xml`
**Default status:** Disabled
**Applies to:** Voyager only

Updates battery info every second while charging:

```xml
<bool name="config_alternateFastchargeInfoUpdate">true</bool>
```

---

## CPU Temperature Sensor

**Overlay Path:** `overlay-bliss/frameworks/base/packages/SystemUI/res/values/bliss_config.xml`
**Default status:** `/sys/class/thermal/thermal_zone0/temp`
**Applies to:** Voyager only

Override the CPU temperature sensor path and divider for your device:

```xml
<string name="config_cpuTempSensor" translatable="false">/sys/class/thermal/thermal_zone0/temp</string>

<!-- Divide raw value if sensor reports in millidegrees -->
<integer name="config_cpuTempDivider" translatable="false">1</integer>
```

---

## FPS Info Node

**Overlay Path:** `overlay-bliss/frameworks/base/packages/SystemUI/res/values/bliss_config.xml`
**Default status:** `/sys/class/drm/sde-crtc-0/measured_fps`
**Applies to:** Voyager only

Override the FPS sysfs node path for your device:

```xml
<string name="config_fpsInfoSysNode" translatable="false">/sys/class/drm/sde-crtc-0/measured_fps</string>
```

---

## Font Family Override

**Overlay Path:** `overlay-bliss/frameworks/base/core/res/res/values/bliss_config.xml`
**Applies to:** Waterlily only

Override the system font families used for theming:

```xml
<string name="config_lightFontFamily" translatable="false">sans-serif-light</string>
<string name="config_regularFontFamily" translatable="false">sans-serif-regular</string>
```
