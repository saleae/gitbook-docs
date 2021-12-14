# Software Glitch Filter

The Logic software includes a feature to suppress short digital pulses in the recorded data. It is designed to help remove noise picked up in the digital recording. This can be especially useful when using protocol analyzers, since present noise may prevent proper decoding of digital data.

There are several sources of noise in digital captures. You can learn more about them below.

{% content-ref url="../../troubleshooting/seeing-spikes-in-digital-capture.md" %}
[seeing-spikes-in-digital-capture.md](../../troubleshooting/seeing-spikes-in-digital-capture.md)
{% endcontent-ref %}

### Enabling the Glitch Filter

{% hint style="info" %}
Please note that the glitch filter must be configured before the capture is taken. The glitch filter is considered a pre-capture setting and cannot be modified after the capture is completed.
{% endhint %}

You can find the glitch filter settings via the 'Device Settings' panel button to the right of the software. You will need to click the slider and add the appropriate channels to enable it.

![Glitch Filter Setting](<../../.gitbook/assets/Screen Shot 2021-03-17 at 4.54.31 PM.png>)

When editing the glitch filter value, you may select a unit of time, such as ns (nanosecond), us (microsecond), and ms (millisecond). You may also use non-integer values.

![Glitch filter values](<../../.gitbook/assets/Screen Shot 2021-03-17 at 4.57.17 PM.png>)

### What is a Glitch Filter?

The glitch filter is purely a software filter on top of the recorded data. Using the glitch filter does not actually change the data that is recorded. Instead, it sits between the recorded data set and all software components that access it.

Please note that the Logic Pro devices have narrow hysteresis thresholds, which can cause noise around transitions in some cases. When using lower voltage thresholds with larger swing signals, noise on the signal when it is in the low state can easily be picked up by the Saleae devices, even when the normal receiver of the signal rejects it. More information on our devices' voltage thresholds can be found in the support article below.

{% content-ref url="../supported-voltages.md" %}
[supported-voltages.md](../supported-voltages.md)
{% endcontent-ref %}

The glitch filter can be set for any individual digital channel. We recommend only adding the filter to channels where noise is a problem. The glitch filter rejects all pulses narrower than a specific width. That width can be specified either by a specific maximum time.

## Logic 1.x

If you are using the older Logic 1.x software, the following images and instructions apply.

If the glitch filter is enabled before the capture is taken, the trigger will also use the filtered signal, which is especially useful to reject false trigger conditions. Even in this case, the original noisy data are recorded in the back end and can be viewed by removing the glitch filter.

We recommend using the glitch filter in sample width mode, with the sample width specified as a small number (2–10). This is particularly useful because most noise around signal edges is only 1 or 2 samples wide.

We recommend using the glitch filter with time-specified instead of samples only when the noise in question is significantly larger than 1 sample wide. That is because single sample wide noise is usually actually much smaller than 1 sample, so specifying a time width is not useful since the sample rate changes. However, when dealing with macro-sized noise (several samples or larger), the device is recording a real phenomenon that won't change in duration when the sample rate changes.

Step 1: Identify channel with noise, and measure noise.

![Step 1](https://trello-attachments.s3.amazonaws.com/5628391f86a6bc55696355f0/596x55/568cdc5a9353555832d9ae6d79e74689/step1.png)

Step 2: Open the channel settings menu for that channel and select "Enable Glitch Filter."

![Step 2](https://trello-attachments.s3.amazonaws.com/5628391f86a6bc55696355f0/336x223/3a2bf6d0f7da05e5944905b470a79632/step2.png)

Step 3: Select units for glitch filter width (in this case, samples).

![Step 3](https://trello-attachments.s3.amazonaws.com/5628391f86a6bc55696355f0/195x106/85f91a5e2a8b85c84f8d0203120279c0/step3.png)

Step 4: Enter the duration for the largest glitch to suppress. In this case, 3 samples.

![Step 4](https://trello-attachments.s3.amazonaws.com/5628391f86a6bc55696355f0/179x73/eefcca76b81ceaddc63d7f6c636c5d47/step4.png)

Step 5: Click outside of the popover to close the popover. The glitch filter is now active. Note that the glitch originally pictured is gone and the channel label now shows "(filtered)" to indicate that the filter is active.

![Step 5](https://trello-attachments.s3.amazonaws.com/5628391f86a6bc55696355f0/694x54/218e0596b11d1a065cf50a8349a0e079/step5.png)

The filter can be removed at any time by opening the channel settings menu again and selecting "Disable glitch filter." All noise originally in the capture will reappear.

The glitch filter modifies the digital channel displays, the behavior of the trigger, the protocol decoders, the measurements, and the raw data export—basically, everything the software does that accesses the data.

When you save a capture to disk, the original unfiltered data is saved along with the glitch filter settings. So when the file is re-opened, the data is in the same state, but the glitch filter can still be removed.

**The Glitch Filter Can Help Address the Following Common Issues**

The logic analyzer seems to miss samples or samples on the wrong clock edge.

![Glitch zoomed in](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/5628391f86a6bc55696355f0/097fd679a08596e414cb836d8f9eb9f7/glitch-zoomed-in.png)

* If the analyzer exhibits the behavior above, then there may be glitches in the clock edges. In this case, some of your clock edges won't have the arrow symbol, or the sampling may look like it is occurring at the wrong clock edge. If you zoom in very closely, you will see the glitch, and the Logic software will treat this as multiple clock edges. In this situation, enabling the glitch filter can help with proper decoding of the signal.
