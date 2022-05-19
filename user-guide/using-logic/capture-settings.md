# Device Settings

The Device Settings Panel can be opened up by clicking on the Device Settings icon located on the software's side panel on the right.

![Device Settings Button](<../../.gitbook/assets/Screen Shot 2021-12-07 at 1.51.02 PM (1).png>)

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

{% embed url="https://www.youtube.com/watch?v=XhWKoFj_p9k&t=47s" %}

### Channels & Sampling Rate

Individual digital and analog channels can be enabled and disabled as needed. In addition, the sampling rate for digital and analog channels respectively can also be adjusted.&#x20;

{% embed url="https://vimeo.com/454542912" %}
Enabling/Disabling Channels
{% endembed %}

Please note that changing these settings may affect the available sampling rates for other channels. This is due to the total amount of available bandwidth that our logic analyzers can support. When this happens, you will receive a popup about the sampling rate change like shown below.

{% embed url="https://vimeo.com/461157523" %}
Sampling Rate Change Popup Warning
{% endembed %}

When both digital and analog channels are enabled, changing the sampling rate for a certain type of channel (digital or analog), may also change the sampling rate for the other type (digital or analog). This is because certain digital sampling rate selections cannot be combined with certain analog sampling rates (and vice versa) due to architectural limitations.

In the example image below, selecting Digital 125 MS/s will **increase** (<mark style="color:green;">**↑**</mark>) the Analog sampling rate to 6.25 MS/s from its current setting. In addition, selecting Digital 6.25 MS/s will **decrease** (<mark style="color:red;">**↓**</mark>) the Analog sampling rate to 1.5625 MS/s from its current setting.

![Digital Sampling Rate Selections may Change the Analog Sampling Rate](<../../.gitbook/assets/Screen Shot 2022-04-25 at 7.12.41 PM.png>)

### Digital Voltage Setting

Logic Pro 8, Logic Pro 16, and our Original Logic16 all feature adjustable voltage thresholds, which can be set via the voltage dropdown setting next to the digital sampling rate setting. The _3.3+ Volts_ setting, for example, will set the voltage threshold to half that value, or 1.65 V. Our other logic analyzer models have a fixed voltage threshold, and therefore do not have this setting. For more information on the voltage setting options and thresholds, see our support article on this below.

{% content-ref url="../supported-voltages.md" %}
[supported-voltages.md](../supported-voltages.md)
{% endcontent-ref %}

### Capture Settings Presets

Capture settings presets can be saved and loaded locally as needed. You can navigate to the support article below for more information on this.

{% content-ref url="saving-loading-and-exporting-data.md" %}
[saving-loading-and-exporting-data.md](saving-loading-and-exporting-data.md)
{% endcontent-ref %}

### Capture Modes - Looping, Timer, & Trigger

For more information on the available capture modes and their specific settings, see the support article below.

{% content-ref url="capture-modes.md" %}
[capture-modes.md](capture-modes.md)
{% endcontent-ref %}

### LED Settings and Color

{% hint style="info" %}
Unfortunately this feature is not available in the newer Logic 2 software. If you would like to see this feature implemented, please vote on it [here](https://ideas.saleae.com/b/feature-requests/change-the-led-color-on-the-unit/)!
{% endhint %}



## Logic 1.x

If you are using the older Logic 1.x software, you can follow the instructions below.

### Collecting Data

To start collecting data, press the _Start_ button.&#x20;

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/64cb9812e6d061d6d4849d2ea37b6711/start.png)

After the capture has started you can stop it before it finishes if you like - this will retain the data to that point.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/87b63d501eab68311e138700df896d6b/stop.png)

If the Start button is gray and cannot be clicked, that means you are not on the capture tab. Look at the bottom of the window, and on the left, you should see the capture tab. Click that tab and then take your capture.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/da94151dbe0fd49b855da616baf0280d/start-gray.png)

If the _Start Simulation_ appears instead of _Start_, it means the Logic hardware is disconnected.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/2a96364aca40d1f7a8f267fde311c3f0/Start-sim.png)

If the software incorrectly reports _Disconnected_, please follow this troubleshooting guide.

{% content-ref url="broken-reference" %}
[Broken link](broken-reference)
{% endcontent-ref %}

### **Device Settings**

To access device settings, click the up or down arrow in the top-left of the software. To close the Device Settings, click on something outside the popover. The Device Settings pop-up consists of the following sections.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/596c50d7788319158f59aa598c7e2dde/dev-settings.png)

{% hint style="info" %}
The device settings may be different depending on the Saleae Logic model that is connected. The example here is for Logic Pro 8. Notes on these differences are provided below.
{% endhint %}

1.  **Estimated Memory Usage**&#x20;

    * This will be displayed when more than 1 GB of RAM is expected to be used by the software. This will depend on the capture settings below. Digital data is compressed and no additional memory is used when using a faster sampling rate. Rather, memory usage is proportional to the number of transitions in the digital data. Analog data is not compressed and consumes roughly 4 bytes per sample. At 50Msps, that’s 200MB per second, per channel.


2.  **Speed (Sample Rate)**&#x20;

    * The sample rate dropdown lets you select how fast to sample data—how many times per second your signal is measured. The available options depend on your device, the channels being used, and the performance level selected.

    ****
3.  **Duration**&#x20;

    * Enter the duration of your capture.


4.  **Digital Channels**&#x20;

    * Enable and disable the digital channels you would like. You can click and drag over the control to change a number of channels at the same time.


5.  **Analog Channels**&#x20;

    * Enable and disable the digital channels you would like. You can click and drag over the control to change a number of channels at the same time.
    * _Note:_ Not all devices have selectable channels. The original Logic does not have selectable channels, and Logic 4 only allows you to enable or disable the analog input. The digital channels are always enabled. You can switch the analog channel on and off by selecting sample rate options with and without analog sample rates.


6.  **Voltage**&#x20;

    * Edit the voltage level of your digital signals. This affects the voltages at which an input is considered a one or a zero.
    * _Note:_ Logic Pro 8, Logic Pro 16, and the original Logic16 are the only devices with adjustable thresholds. See the PDF Users Guide, Specifications, and Data Sheets to find what voltage options are available for each device.


7.  **Performance**&#x20;

    * Not all computers or USB host controllers will be able to capture at top speed. If that happens, you can throttle back the performance setting with this control. It will update the sample rates that are available.
    * _Note:_ The performance control is only available when analog and digital channels are enabled at the same time. When sampling digital only or analog only, slower sample rates will be available from the sample rate dropdown, which will reduce USB throughput.
    * _Note:_ Logic 4 is the exception to this. It will not display a performance selector even when recording analog and digital channels at once. All possible sample rates are always available in the dropdown.

    ****
8. **Device**&#x20;
   * While no Logic hardware is connected, you can select a device to simulate. There is no option to simulate our discontinued products. If you have more than one Logic attached, you can toggle between them here. You also can control the LED color by clicking the gear icon.

### **LED Settings and Color**

You can enable/disable the LED, or change its color, here - just click the gear icon.&#x20;

![](https://trello-attachments.s3.amazonaws.com/57215c9235e35b9ed39e9b66/627x95/81815d87a1783f5e6522c3d8f7a64c64/led.png)

### **Closing the Device Settings Popover**

To close the Device Settings, click on something outside the popover.

### **Digital Trace Colors**

For easy of readability, the digital trace color can match the channel color. To set this, click _Options -> Preferences -> Interaction tab -> Use color_.&#x20;

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/3a0ad36c4073896c93a4bcdaed1c6004/use-color.png)

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/2734577c8ed4c926e544e173fbb27fe5/dig-color.png)
