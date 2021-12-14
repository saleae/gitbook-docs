# What is Data Bandwidth? Can I Reduce this in Logic?

Data bandwidth refers to the rate at which data is transmitted across a digital line. When discussing Saleae Logic, data bandwidth typically refers to the data rate across the USB cable to the PC.

### Can I Reduce Logic's USB Bandwidth?

If needed, there are several methods to reduce Logic's USB bandwidth usage. Since PCs typically have a limit to its total available bandwidth for all USB-connected devices, reducing Logic's USB bandwidth may be necessary in the following cases:

1. Saving memory usage on captures
2. Using Logic alongside other high bandwidth USB devices
3. Using Logic through a USB hub
4. Running into the error message linked below, signaling low bandwidth availability

{% content-ref url="../../troubleshooting/device-not-able-to-keep-up.md" %}
[device-not-able-to-keep-up.md](../../troubleshooting/device-not-able-to-keep-up.md)
{% endcontent-ref %}

### Situations to Avoid

Saleae Logic is a USB device that operates at extremely high bandwidths due to its high speed sampling capability. Therefore, we recommend maximizing bandwidth availability on the PC by avoiding situations #2 and #3 above.

### Reducing Bandwidth in Logic Software

Several settings inside of Logic software can be configured to reduce bandwidth, and therefore, save memory usage on captures. This will depend on the type of data capture you are taking (whether the capture is digital-only, analog-only, or both). You may also want to reduce bandwidth if situations #2 and #3 cannot be avoided.

#### Digital-only Captures

When capturing only digital channels, the type of the data being recorded will be the sole indicator of bandwidth usage. Logic hardware will consume more USB bandwidth when a higher number of transitions occur in the signal being recorded. Therefore, to reduce the USB bandwidth of Logic, you will need to record data with a smaller number of transitions per second (i.e. slower data).

#### Analog-only Captures

When capturing only analog channels, reducing the sampling rate will reduce the overall bandwidth usage of Logic hardware.

#### Digital and Analog Captures

When capturing both digital and analog channels in the same capture, the selection of the sampling rate combination **does not** change the USB bandwidth usage of Logic. In order to reduce Logic's USB bandwidth usage in this case, you will need to lower the Performance percentage setting. This will decrease speeds of the available sampling rate combinations, and therefore, also decreases the memory usage of captures.

![Reducing USB bandwidth usage via Performance setting](../../.gitbook/assets/2018-10-09\_1339.png)
