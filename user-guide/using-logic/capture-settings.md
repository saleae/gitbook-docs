# Capture Settings

## Logic 1.x

If you are using the older Logic 1.x software, you can follow the instructions below.

### Collecting Data

To start collecting data, press the _Start_ button. 

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/64cb9812e6d061d6d4849d2ea37b6711/start.png)

After the capture has started you can stop it before it finishes if you like - this will retain the data to that point.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/87b63d501eab68311e138700df896d6b/stop.png)

If the Start button is gray and cannot be clicked, that means you are not on the capture tab. Look at the bottom of the window, and on the left, you should see the capture tab. Click that tab and then take your capture.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/da94151dbe0fd49b855da616baf0280d/start-gray.png)

If the _Start Simulation_ appears instead of _Start_, it means the Logic hardware is disconnected.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/2a96364aca40d1f7a8f267fde311c3f0/Start-sim.png)

If the software incorrectly reports _Disconnected_, please follow this troubleshooting guide.

{% page-ref page="../../troubleshooting/troubleshooting-the-software-connection.md" %}

### \*\*\*\*

### **Device Settings**

To access device settings, click the up or down arrow in the top-left of the software. To close the Device Settings, click on something outside the popover. The Device Settings pop-up consists of the following sections.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/596c50d7788319158f59aa598c7e2dde/dev-settings.png)

{% hint style="info" %}
The device settings may be different depending on the Saleae Logic model that is connected. The example here is for Logic Pro 8. Notes on these differences are provided below.
{% endhint %}

1. **Estimated Memory Usage** 

   * This will be displayed when more than 1 GB of RAM is expected to be used by the software. This will depend on the capture settings below. Digital data is compressed and no additional memory is used when using a faster sampling rate. Rather, memory usage is proportional to the number of transitions in the digital data. Analog data is not compressed and consumes roughly 4 bytes per sample. At 50Msps, that’s 200MB per second, per channel.

2. **Speed \(Sample Rate\)** 

   * The sample rate dropdown lets you select how fast to sample data—how many times per second your signal is measured. The available options depend on your device, the channels being used, and the performance level selected.

   \*\*\*\*

3. **Duration** 

   * Enter the duration of your capture.

4. **Digital Channels** 

   * Enable and disable the digital channels you would like. You can click and drag over the control to change a number of channels at the same time.

5. **Analog Channels** 

   * Enable and disable the digital channels you would like. You can click and drag over the control to change a number of channels at the same time.
   * _Note:_ Not all devices have selectable channels. The original Logic does not have selectable channels, and Logic 4 only allows you to enable or disable the analog input. The digital channels are always enabled. You can switch the analog channel on and off by selecting sample rate options with and without analog sample rates.

6. **Voltage** 

   * Edit the voltage level of your digital signals. This affects the voltages at which an input is considered a one or a zero.
   * _Note:_ Logic Pro 8, Logic Pro 16, and the original Logic16 are the only devices with adjustable thresholds. See the PDF Users Guide, Specifications, and Data Sheets to find what voltage options are available for each device.

7. **Performance** 

   * Not all computers or USB host controllers will be able to capture at top speed. If that happens, you can throttle back the performance setting with this control. It will update the sample rates that are available.
   * _Note:_ The performance control is only available when analog and digital channels are enabled at the same time. When sampling digital only or analog only, slower sample rates will be available from the sample rate dropdown, which will reduce USB throughput.
   * _Note:_ Logic 4 is the exception to this. It will not display a performance selector even when recording analog and digital channels at once. All possible sample rates are always available in the dropdown.

   \*\*\*\*

8. **Device** 
   * While no Logic hardware is connected, you can select a device to simulate. There is no option to simulate our discontinued products. If you have more than one Logic attached, you can toggle between them here. You also can control the LED color by clicking the gear icon.

### \*\*\*\*

### **LED Settings and Color**

You can enable/disable the LED, or change its color, here - just click the gear icon. 

![](https://trello-attachments.s3.amazonaws.com/57215c9235e35b9ed39e9b66/627x95/81815d87a1783f5e6522c3d8f7a64c64/led.png)

### **Closing the Device Settings Popover**

To close the Device Settings, click on something outside the popover.

### **Digital Trace Colors**

For easy of readability, the digital trace color can match the channel color. To set this, click _Options -&gt; Preferences -&gt; Interaction tab -&gt; Use color_. 

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/3a0ad36c4073896c93a4bcdaed1c6004/use-color.png)

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215c9235e35b9ed39e9b66/2734577c8ed4c926e544e173fbb27fe5/dig-color.png)

