# PC Detection Test

In cases where the software cannot detect the logic analyzer, we need to determine if the PC itself can detect the Logic device:

1\. Before connecting Logic to the PC, ensure the Saleae Software is **not running**.

2\. Connect the device to the PC using the provided USB cable.

3\. Check if the operating system (OS) detects the device. The steps for this will depend on your operating system, which are all listed below.

4\. If the PC detects the Logic device properly, open the Logic software. If the Logic software still does not detect your device, then the hardware is likely OK and this may be a software issue. Proceed to _Part 2: Troubleshooting the Connection to the Software_, found in the support article linked below.

{% content-ref url="logic-not-detected.md" %}
[logic-not-detected.md](logic-not-detected.md)
{% endcontent-ref %}

### **Windows:**&#x20;

Open Device Manager. Expand the section "Universal Serial Bus controllers" and check for "Saleae Logic X USB Logic Analyzer" where "X" is the specific product version (4, 8, Pro 8, Pro 16, etc.). If "unidentified device" or "Westbridge" appears, then there is a problem with the Saleae driver. In these cases, please follow the instructions in the support article below to re-install your Saleae driver.

{% content-ref url="../../product/logic-software/driver-install.md" %}
[driver-install.md](../../product/logic-software/driver-install.md)
{% endcontent-ref %}

![Device Manager](../../.gitbook/assets/DeviceManagerBorder.png)

### **MacOS:**&#x20;

First, connect your Logic analyzer. \
\
Next, open "System Report" by opening the Apple menu and selecting "About this Mac," and then select "More Info..." Afterwards, scroll down and select "System Report..." In the new window, select Hardware > USB. **It's important to connect your Logic analyzer first before opening "System Report", since "System Report" may not dynamically update it's list of connected device if a USB device is connected while it's open.**\
\
**Please make sure the Logic Software is not running** running when checking this. Otherwise, the device will not appear with the relevant information we are looking for.

<figure><img src="../../.gitbook/assets/Screenshot 2023-03-10 at 3.19.52 PM.png" alt=""><figcaption><p>System Settings > About > General window</p></figcaption></figure>

On Intel-based Macbooks, a "Westbridge" device should be listed in the USB Device Tree like in the image below.

![System Report on Intel-Based Macbooks](<../../.gitbook/assets/Screen Shot 2022-06-08 at 5.40.20 PM.png>)

On Apple-silicon based Macbooks, a "Vender-Specific Device" should be listed in the USB Device Tree like in the image below.

<figure><img src="../../.gitbook/assets/unnamed (2).png" alt=""><figcaption><p>System Report on Apple-Based Macbooks</p></figcaption></figure>

### **Linux (Ubuntu):**&#x20;

Run `lsusb` from the command line. Check for any device name containing "Saleae" or a VID and PID that matches one of our Logic products. You can refer to the VID/PIDs of our devices in the support article below for reference.

{% content-ref url="the-devices-usb-vid-and-pid-failed.md" %}
[the-devices-usb-vid-and-pid-failed.md](the-devices-usb-vid-and-pid-failed.md)
{% endcontent-ref %}

![Linux Terminal - lsusb](<../../.gitbook/assets/Screen Shot 2022-06-10 at 4.13.16 PM.png>)
