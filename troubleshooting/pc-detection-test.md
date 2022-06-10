# PC Detection Test

In cases where the software cannot detect the logic analyzer, we need to determine if the PC itself can detect the Logic device:

1. Before connecting Logic to the PC, ensure the Saleae Software is **not running**.
2. Connect the device to the PC using the provided USB cable.
3.  Check if the operating system (OS) detects the device. The steps for this will depend on your operating system.

    * **Windows:** \
      Open device manager. Expand the section "Universal Serial Bus Controllers" and check for "Saleae Logic X USB Logic Analyzer" where "X" is the specific product version (4, 8, Pro 8, etc.). If "unidentified device" appears, then the OS did not detect it properly. If "Westbridge" appears, then there is a problem with the Saleae driver. Please re-install the driver.
    * **MacOS:** \
      Open "System Report" by opening the Apple menu and selecting "About this Mac," and then select "System Report." Afterwards, select USB under Hardware and check for "Westbridge" in the treeview.

    ![](<../.gitbook/assets/Screen Shot 2022-06-08 at 5.37.48 PM (1).png>)![](<../.gitbook/assets/Screen Shot 2022-06-08 at 5.40.20 PM (2).png>)

* **Linux (Ubuntu):** \
  Run `lsusb` from the command line. Check for any device name containing "Saleae" or a VID of "0x21A9" or "0x0925". Ensure the VID and PID is correct.

1. If the PC detects the Logic device properly, open the Logic software. If the Logic software still does not detect your device, then the hardware is likely OK and this may be a software issue. Proceed to _Part 2: Troubleshooting the Connection to the Software_, found in the support article linked below.

{% content-ref url="logic-not-detected.md" %}
[logic-not-detected.md](logic-not-detected.md)
{% endcontent-ref %}



