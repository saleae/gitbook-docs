# Troubleshooting Device Connection 2: Software Connection to the Device

## Software Connection to the Device

* With the device connected, after verifying that the OS can detect the device by following the procedure in the previous article, open the software.
* If the software shows "Connected" in the title bar, then the software has connected to the device, and you can skip this section. If that does not happen consistently, then stay in this section.

**The Software Detects and Connects to the Hardware Like This:**

1. The software detects that the device is connected.
   * On Windows, the Saleae driver must be installed, as the software looks for devices using the Saleae driver.
   * On OSX and Linux, the software searches for USB devices attached that use Saleae USB Vendor and Product IDs. [https://trello.com/c/q2rMixk6](https://trello.com/c/q2rMixk6)
2. The software asks the OS for access to the device.
3. The software downloads the firmware to the device. Before this point, the device is acting as a simple bootloader.
4. The device resets, and the USB connection disconnects and reconnects.
   * Note: For USB 3.0 devices connected with a USB 3.0 cable to a USB 3.0 port, the device initially connects using USB 2.0 but then re-enumerates over USB 3.0. That is a failure point and can usually be fixed, at least on Windows, with a driver update. On all platforms, it can also indicate a partial USB cable failure, even if the device is initially detected by the OS when the software is not running.
5. The software sees that the device has disconnected normally and then sees a new device is connected, this time running the Saleae firmware.
6. The software asks the OS again for access to the device.
7. The software finishes the device configuration \(shown in the title bar\), and, once finished, the title bar will say "Completed."

If the OS is able to see the device while the software is not running, as described in the section "PC Detection of the Device over USB," but the software does not complete the above process and say "Connected," then the problem must lie with one of the steps shown above.

Possible Problems:

After each test below, you will need to rerun the following procedure:

1. Close the software if it is open.
2. Disconnect the device if it is connected.
3. Connect the device and verify that the OS sees the device by following the procedure in the previous article on this topic.
4. Open the software.

This is called the software connection procedure. It needs to be repeated in order to reset the state of the hardware and the software completely between tests.

**Software Does Not Have Permission to Access the Device**

* On Windows, the software may show the message "A Logic device was found, but there was a problem connecting to it.  Another application may be using it.  Please let us know if the issue persists."

  This message is shown when the OS denies access to the device. In rare cases, this message could be shown from a false positive. If the software still connects after closing the warning, you can continue normally.

  This situation typically happens for two reasons. First, another instance of Logic is running and has already taken exclusive control of the device. 

  Second, the software does not have permissions to access the device. This is extremely rare, even in the presence of enterprise permission environments. Try running the software as the administrator to see if that works.

  Finally, this message can also be shown if there is a more serious USB issue. If this message is shown at the same time as the message "Please unplug, and then reconnect your device," it likely indicates a problem with either the USB cable or the USB host controller.

* On Linux, if you see the message "A Logic device was found, but there was a problem connecting to it, it is probably because you don't have permissions to access it. Take a look in the drivers folder for instructions, or run this program as root \(i.e., use sudo from the command line\). This could also be caused by having multiple instances of the Logic software running. Let us know if you still have problems.

  This could happen due to several reasons.

  The software does not have permission to access the device. Either install the udev rules file or run the software as administrator. If the udev rules file is not working, it might be a compatibility issue with your specifc distro. For very old distros, the keyword "ATTR" might not be supported and can be replaced with "SYSFS". On Arch, and possibly other distros, try removing the text ENV{DEVTYPE}=="usb\_device" from the rules file.

* On OSX, if more than one instance of the software is running, only one instance will connect. The other instance will simply stay disconnected without displaying any error message.
* Also, keep in mind that some virtual machines can aggressively attach to USB devices since they are connected. This is particularly complicated by the re-enumeration process that the device goes through when first connected to the software. It is possible that even when the Logic analyzer is connected to the host, after the initial firmware download, the device re-enumerates and connects to the VM. If you have a VM running and are having trouble getting the device to connect, please suspend or shut down the VM and then retest the connection.

**The Device Fails to Re-enumerate after Firmware Download**

If the device fails to re-enumerate after the firmware download completes, the software will not display any messages. To detect this situation, you need to monitor the device's appearance in Device Manager or something similar before and after the software starts up. Please run the following procedure.

* Follow the procedure in the section "PC Detection of the Device over USB" and locate the device in Device Manager \(Windows\), lsusb \(Linux\), or system report \(OSX\).
* Start the software. Wait 10 seconds.
* Recheck to see if the device is still listed.

    On Windows, Device Manager should automatically refresh in a few seconds if the device state changed.

    On Linux, rerun lsusb. Is the device still listed? Its name may have changed. Check by VID and PID.

    On OSX, you must manually refresh system report from the menu since it does not auto-refresh. Check to see if the device is still listed, missing, or if its name has changed to "Saleae Logic...".

  * If the device is no longer listed, that means the firmware download finished and the device disconnected but never reconnected. If connected to a USB 3.0 port, it could indicate a USB 3.0 host controller or driver issue. If connected to a 3.0 port with a 3.0 cable, it could indicate a host controller issue, a host driver issue, or a USB 3.0 cable issue.

* Retest on both USB 3.0 and USB 2.0 ports, with USB 3.0 and USB 2.0 cables, if applicable.

    If the device only works over USB 2.0, then it is most likely a host controller driver issue or a USB cable issue.

    If the device only works over USB 3.0, or if on one or more computers it does not work over USB 2.0, please contact support, as this may be a new issue.

* Collect more information. Follow the instructions in the article [https://trello.com/c/no5pJ8YB](https://trello.com/c/no5pJ8YB) titled "Steps to Collect Additional Data" to capture the console output of the software, which may contain more information of the issue preventing the device from reconnecting.

**The Device Re-enumerates after Firmware Download, but an Error Immediately Occurs**

Example: You connect the device and then start the software. The software then shows the message "Please unplug, and then reconnect your device," and the software says "Disconnected" in the title bar. After performing all the tests above, including testing on multiple PCs, on different types of USB ports, with multiple cables, please contact support.

**The Device Is Able to Connect Sometimes, but It Either Randomly Disconnects or Only Successfully Connects Some of the Time**

This could indicate a bad USB cable, a problem with the Logic analyzer, a ground loop problem, or an issue with the host controller or host controller driver.

If the Logic analyzer is connected to a device under test, disconnect it. This will rule out the possibility of a common mode ground current interfering with the device. More info here: [https://trello.com/c/zcat9hME](https://trello.com/c/zcat9hME)

**The Device Successfully Connects to the Software, but There Are Capture Problems**

See this guide: [https://trello.com/c/dU1FgSAN](https://trello.com/c/dU1FgSAN)

