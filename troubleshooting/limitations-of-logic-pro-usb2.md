# Warning Message: Logic Pro is running as a USB 2.0 device

Logic Pro 8 & Logic Pro 16 can both be used with USB 2.0 or USB 3.0 ports. However, there are some restrictions when using them with USB 2.0 ports. In [Logic v2.x](https://ideas.saleae.com/f/changelog/), you will be prompted with the following message.

_Your Logic Pro is running as a USB 2.0 device. The sample rate will be limited and some channels might be disabled. Please verify that your USB cable and USB port support USB 3.0._

![Warning Prompt when Logic Pro is connected via USB 2.0](<../.gitbook/assets/image (1).png>)

### Sampling Rate Limitation

When connected via USB 2.0, Logic Pro 8 & Logic Pro 16 operate with a lower maximum throughput. The maximum sample rate combinations will be lower by a factor of about 6.

### Number of Channels Limitation

In addition, Logic Pro 16 draws slightly more current than what USB 2.0 ports are rated. Because of this, by default, only 8 of the 16 channels are active when connected to a USB 2.0 port.&#x20;

### Capture Settings Will Not Persist

When connecting our USB 3.0 Logic analyzers (Logic Pro 8 and Logic Pro 16) via a USB 2.0 cable, capture settings will not persist when closing and re-opening the software. In this case, we recommend saving capture setting presets as described in the support article below.

{% content-ref url="../user-guide/using-logic/saving-loading-and-exporting-data.md" %}
[saving-loading-and-exporting-data.md](../user-guide/using-logic/saving-loading-and-exporting-data.md)
{% endcontent-ref %}

## Legacy Information for Logic 1.x Only

On our older [Logic software v1.x](https://support.saleae.com/logic-software/latest-stable-release-download), you can manually override the USB 2.0 power restriction to allow 16 channels.

If you're sure the port that you are using can supply at least 700mA of current, then you can manually enable the second bank in the preferences dialog.

![](https://trello-attachments.s3.amazonaws.com/57215d5e1bba46c6dc477691/370x89/84f215669e2d2faed536936a5db3cd3a/usb3\_power.PNG)

Most powered USB hubs will be able to provide enough current to power Logic Pro 16. If you enable this feature but Logic Pro 16 is unable to draw enough current to power both banks, it may disconnect from the PC when it connects to the software, or it may disconnect when a capture is started.
