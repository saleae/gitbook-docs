The Device Settings Panel can be opened up by clicking on the Device Settings icon located on the software's side panel on the right.

![Device Settings Button](<../../.gitbook/assets/Screen Shot 2021-12-07 at 1.51.02 PM.png>)

From this panel, several settings can be configured, such as:

* Digital Channels
* Digital Sampling Rate
* Digital Voltage Setting
* Analog Channels
* Analog Sampling Rate
* Preset Saving/Loading
* Capture Modes (Looping, Timer, & Trigger)
* Capture Mode Specific Settings
* Trim
* Glitch Filter
* Memory Buffer Size

Our tutorial video below demonstrates setting some basic settings such as enabling/disabling channels, settings the sampling rate and voltage, and specific settings related to the _Timer_ capture type.

<div class="video-embed"><iframe src="https://www.youtube.com/embed/XhWKoFj_p9k" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>
<p class="text-sm text-gray-500 text-center mt-1">### Channels &amp; Sampling Rate

Individual digital and analog channels can be enabled and disabled as needed. In addition, the sampling rate for digital and analog channels respectively can also be adjusted. 

{% embed url=&quot;https://vimeo.com/454542912&quot; %}
Enabling/Disabling Channels</p>

Please note that changing these settings may affect the available sampling rates for other channels. This is due to the total amount of available bandwidth that our logic analyzers can support. When this happens, you will receive a popup about the sampling rate change like shown below.

<div class="video-embed"><iframe src="https://player.vimeo.com/video/461157523" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>
<p class="text-sm text-gray-500 text-center mt-1">Sampling Rate Change Popup Warning</p>

When both digital and analog channels are enabled, changing the sampling rate for a certain type of channel (digital or analog), may also change the sampling rate for the other type (digital or analog). This is because certain digital sampling rate selections cannot be combined with certain analog sampling rates (and vice versa) due to architectural limitations.

In the example image below, selecting Digital 125 MS/s will **increase** (<mark style="color:green;">**↑**</mark>) the Analog sampling rate to 6.25 MS/s from its current setting. In addition, selecting Digital 6.25 MS/s will **decrease** (<mark style="color:red;">**↓**</mark>) the Analog sampling rate to 1.5625 MS/s from its current setting.

![Digital Sampling Rate Selections may Change the Analog Sampling Rate](<../../.gitbook/assets/Screen Shot 2022-04-25 at 7.12.41 PM.png>)

### Digital Voltage Setting

Logic Pro 8, Logic Pro 16, and our Original Logic16 all feature adjustable voltage thresholds, which can be set via the voltage dropdown setting next to the digital sampling rate setting. The _3.3+ Volts_ setting, for example, will set the voltage threshold to half that value, or 1.65 V. Our other logic analyzer models have a fixed voltage threshold, and therefore do not have this setting. For more information on the voltage setting options and thresholds, see our support article on this below.

[Supported Voltages](../../specifications-hardware/electrical-characteristics/supported-voltages.md)

### Capture Settings Presets

Capture settings presets can be saved and loaded locally as needed. You can navigate to the support article below for more information on this.

[Capture & Preset File Management](../saving-and-exporting-data/saving-loading-and-exporting-data.md)

### Capture Modes - Looping, Timer, & Trigger

For more information on the available capture modes and their specific settings, see the support article below.

[Capture Modes](./capture-modes.md)

### LED Settings and Color

<div class="callout callout-info">
Unfortunately this feature is not available in the newer Logic 2 software. If you would like to see this feature implemented, please vote on it [here](https://ideas.saleae.com/b/feature-requests/change-the-led-color-on-the-unit/)!
</div>



