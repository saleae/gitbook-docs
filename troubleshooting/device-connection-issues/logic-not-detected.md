# Logic is Not Detected

## **Part 1: Troubleshooting the Hardware for Issues**

First, we will want to test if the Logic hardware or the USB cable has issues. We have a set of hardware tests in the support article below for submitting a warranty claim.

{% content-ref url="../../ordering/180-day-return-policy-and-3-year-warranty/process-a-warranty.md" %}
[process-a-warranty.md](../../ordering/180-day-return-policy-and-3-year-warranty/process-a-warranty.md)
{% endcontent-ref %}

If the device works at least once during the tests described in the support article linked above, it may be a problem that's solvable with software or driver updates. In that case, please proceed to Part 2: Troubleshooting the Connection to the Software below.

## **Part 2: Troubleshooting the Connection to the Software**

First, if you are troubleshooting Logic Pro 8 or Logic Pro 16, please check the link below to double check its connection to your PC via USB 3.0. &#x20;

{% content-ref url="logic-does-not-connect-over-usb3.md" %}
[logic-does-not-connect-over-usb3.md](logic-does-not-connect-over-usb3.md)
{% endcontent-ref %}

Please note that the windows driver update check will NOT update USB 3.0 host controller drivers. These are not included in the Windows update driver database and must be manually updated

If you are on Windows and have USB 3.0 ports on your PC, please check your current host controller drivers and update them to the latest version. Detailed information can be found below.

### **How Does Logic Initially Connect to the Software?**

1. The software detects that the device is connected.
   * On Windows, the Saleae driver must be installed, as the software looks for devices using the Saleae driver.
   * On OSX and Linux, the software searches for USB devices attached that use Saleae USB VID (Vendor ID) and PID (Product ID).
2. The software asks the OS for access to the device.
3. The software downloads the firmware to the device. Before this point, the device is acting as a simple bootloader.
4. The device resets, and the USB connection disconnects and reconnects.
   * Note: For USB 3.0 devices connected with a USB 3.0 cable to a USB 3.0 port, the device initially connects using USB 2.0 but then re-enumerates over USB 3.0. That is a failure point and can usually be fixed, at least on Windows, with a driver update. On all platforms, it can also indicate a partial USB cable failure, even if the device is initially detected by the OS when the software is not running.
5. The software sees that the device has disconnected normally and then sees a new device is connected, this time running the Saleae firmware.
6. The software asks the OS again for access to the device.
7. The software finishes the device configuration (shown in the title bar), and, once finished, the title bar will say "Completed."

### Troubleshooting the Software Connection

If the OS is able to see the device while the software is not running, as described in the section _Part 1: Troubleshooting the Hardware for Issues_, but the software still does not detect Logic, then the following section describes a few troubleshooting steps you can perform.

After each test below, you will need to rerun the following procedure:

1. Close the software if it is open.
2. Disconnect the device if it is connected.
3. Connect the device and verify that the OS sees the device by following the procedure in the previous article on this topic.
4. Open the software.

This is called the software connection procedure. It needs to be repeated in order to reset the state of the hardware and the software completely between tests.

#### Known Workarounds on Linux

* We have heard reports of the Logic 2 app failing to detect the Logic hardware, even though the hardware is being successfully detected by the PC via lsusb (i.e. the VID/PID of the Logic hardware appear correct). Launching `sudo Logic --no-sandbox` seems to solves it for these users. For more information, this solution is discussed further in the [forum post here](https://discuss.saleae.com/t/unable-to-start-on-ubuntu-20-04/474).
* When the Logic 2 app is opened, a udev rule file is checked. If the udev rule is missing, then an error message will popup to prompt you to install the proper udev rule file. Please refer to the support article below, specifically under the section titled _Linux Ubuntu Instructions_, for more information on the solution.

{% content-ref url="../../product/logic-software/driver-install.md" %}
[driver-install.md](../../product/logic-software/driver-install.md)
{% endcontent-ref %}

If neither of the above solve the connection issue, this likely means that the Logic 2 app is able to connect to the device but some error occurs during the connection, and the software silently fails to connect. If the issue persists, please skip to _Contacting Support_ at the bottom of this article.

**Software Does Not Have Permission to Access the Device**

*   On Windows, the software may show the message "A Logic device was found, but there was a problem connecting to it.  Another application may be using it.  Please let us know if the issue persists."

    This message is shown when the OS denies access to the device. In rare cases, this message could be shown from a false positive. If the software still connects after closing the warning, you can continue normally.

    This situation typically happens for two reasons. First, another instance of Logic is running and has already taken exclusive control of the device.&#x20;

    Second, the software does not have permissions to access the device. This is extremely rare, even in the presence of enterprise permission environments. Try running the software as the administrator to see if that works.

    Finally, this message can also be shown if there is a more serious USB issue. If this message is shown at the same time as the message "Please unplug, and then reconnect your device," it likely indicates a problem with either the USB cable or the USB host controller.
*   On Linux, if you see the message "A Logic device was found, but there was a problem connecting to it, it is probably because you don't have permissions to access it. Take a look in the drivers folder for instructions, or run this program as root (i.e., use sudo from the command line). This could also be caused by having multiple instances of the Logic software running. Let us know if you still have problems.

    This could happen due to several reasons.

    The software does not have permission to access the device. Either install the udev rules file or run the software as administrator. If the udev rules file is not working, it might be a compatibility issue with your specifc distro. For very old distros, the keyword "ATTR" might not be supported and can be replaced with "SYSFS". On Arch, and possibly other distros, try removing the text ENV{DEVTYPE}=="usb\_device" from the rules file.
* On OSX, if more than one instance of the software is running, only one instance will connect. The other instance will simply stay disconnected without displaying any error message.
* Also, keep in mind that some virtual machines can aggressively attach to USB devices since they are connected. This is particularly complicated by the re-enumeration process that the device goes through when first connected to the software. It is possible that even when the Logic analyzer is connected to the host, after the initial firmware download, the device re-enumerates and connects to the VM. If you have a VM running and are having trouble getting the device to connect, please suspend or shut down the VM and then retest the connection.

**The Device Fails to Re-enumerate after Firmware Download**

If the device fails to re-enumerate after the firmware download completes, the software will not display any messages. To detect this situation, you need to monitor the device's appearance in Device Manager or something similar before and after the software starts up. Please run the following procedure.

* Follow the procedure in the section "PC Detection of the Device over USB" and locate the device in Device Manager (Windows), lsusb (Linux), or system report (OSX).
* Start the software. Wait 10 seconds.
*   Recheck to see if the device is still listed.

    &#x20; On Windows, Device Manager should automatically refresh in a few seconds if the device state changed.

    &#x20; On Linux, rerun lsusb. Is the device still listed? Its name may have changed. Check by VID and PID.

    &#x20; On OSX, you must manually refresh system report from the menu since it does not auto-refresh. Check to see if the device is still listed, missing, or if its name has changed to "Saleae Logic...".

    * If the device is no longer listed, that means the firmware download finished and the device disconnected but never reconnected. If connected to a USB 3.0 port, it could indicate a USB 3.0 host controller or driver issue. If connected to a 3.0 port with a 3.0 cable, it could indicate a host controller issue, a host driver issue, or a USB 3.0 cable issue.
*   Retest on both USB 3.0 and USB 2.0 ports, with USB 3.0 and USB 2.0 cables, if applicable.

    &#x20; If the device only works over USB 2.0, then it is most likely a host controller driver issue or a USB cable issue.

    &#x20; If the device only works over USB 3.0, or if on one or more computers it does not work over USB 2.0, please contact support, as this may be a new issue.
* Collect more information. Follow the instructions in the article below in the section titled "Steps to Collect Additional Data" to capture the console output of the software, which may contain more information of the issue preventing the device from reconnecting.

{% content-ref url="software-has-crashed.md" %}
[software-has-crashed.md](software-has-crashed.md)
{% endcontent-ref %}

**The Device Re-enumerates after Firmware Download, but an Error Immediately Occurs**

Example: You connect the device and then start the software. The software then shows the message "Please unplug, and then reconnect your device," and the software says "Disconnected" in the title bar. After performing all the tests above, including testing on multiple PCs, on different types of USB ports, with multiple cables, please contact support.

## Contacting Support

If the device is not connecting to the software successfully after following the above procedure, you will need to [contact support](https://contact.saleae.com/hc/en-us/requests/new).

Please provide the following information:

1. The name of the Logic analyzer you are using (Logic 4, Logic 8, Logic Pro 8, etc.).
2. The operating system(s) of the PC(s) you have tested on. Include the version of that OS and if it is 32-bit or 64-bit (e.g., Windows 7 x64 or OSX 10.10.5).
3. Indicate if you were able to test with a second USB 3.0 cable or not (e.g., the included USB 3.0 cable and an extra USB 2.0 cable).
4. The results of all the tests you have run. Indicate if the OS was able to detect the device with the software closed and on which ports. Also indicate if the device vanished after opening the software, and if so, include the console output of the software as described in that test.
5. On Windows, include the name and driver version of your USB 3.0 host controller(s). Open Device Manager and expand the Universal Serial Bus Controllers. Locate the USB 3.0 host controller. Most PCs will only have one. Names vary between host controllers, but they can usually be identified with a name like one of these:
   * XHCI host controller
   * USB 3.0 host controller
   *   eXtensible Host Controller

       Once you have found the host controller, take note of the full name. Then check the driver version.
6. Send us your Machine ID, software crash logs, and console output (instructions are provided in the links below).

{% content-ref url="sharing-your-machine-id.md" %}
[sharing-your-machine-id.md](sharing-your-machine-id.md)
{% endcontent-ref %}

{% content-ref url="sharing-crash-logs.md" %}
[sharing-crash-logs.md](sharing-crash-logs.md)
{% endcontent-ref %}

{% content-ref url="console-output.md" %}
[console-output.md](console-output.md)
{% endcontent-ref %}



