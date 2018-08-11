# The Device Does Not Connect to the Software \(Depreciated\)



Below is a list of all known reasons and corresponding solutions or next steps that can cause this particular issue. Please check each one, skipping any items that are not relevant \(such as issues specific to an operating system you are not using, or USB 3.0 issues when you are using a USB 2.0 product\).

For each item, first perform the test. If the test result is positive \(the test condition was met\), then attempt the corrective action.

**Old Software**

* Test: Check the version number in the title bar.
* Corrective Action: If older than the latest version, update to the latest version. [https://www.saleae.com/downloads](https://www.saleae.com/downloads)

**Bad Windows USB 3.0 Driver**

* This is the most common problem with the Logic Pro 8 and Logic Pro 16.
* Test: Find out which host controller driver you currently have installed

    [https://trello.com/c/3NTCLDM2](https://trello.com/c/3NTCLDM2)

    Find out what is the latest driver available

    [https://trello.com/c/O0hA3XAF](https://trello.com/c/O0hA3XAF)

* Corrective action: Download the latest USB 3.0 driver for your host controller.
* Note: Using Windows update to update the driver will not work since none of the host controller OEMs have released their drivers to that service.

**Multiple Instances of Logic Running**

* Test: Check to see if more than one instance of Logic is running. Only one instance can connect to the device at a time.
* Corrective Action: Close all instances of Logic. Then launch one instance.

**Proper OS Used \(Not a Virtual Machine\)**

* Test: Are you using a virtual machine or an unsupported operating system? [https://trello.com/c/CRFmqCP3](https://trello.com/c/CRFmqCP3)
* Corrective Action: Run the software on the host OS, using a supported OS.

**Virtual Machine Is Taking over the USB Device from Software Running on the Host OS**

* Test: If one or more virtual machines are running and the Logic software on the host OS is unable to connect to the hardware, try closing the virtual machines and removing and reconnecting the device.
* Corrective action: Change the virtual machine settings to no longer attempt to connect physical USB devices automatically to the VM.

**Bad USB 2.0 Cable**

* Test: Replace with a different USB 2.0 cable. Check to see if the device is detected and captured.
* Corrective Action: Throw away the bad cable. If the failed cable was included with the product, please [contact us](http://support.saleae.com).

**Bad USB 3.0 Traces in USB 3.0 Cable**

* Test: Replace with a different USB 3.0 cable.
* Corrective Action: Throw away bad cable. If the failed cable was included with the product, please [contact us](http://support.saleae.com).
* Test not possible: If you do not have an extra USB 3.0 cable, first rule out the remaining items. Then [contact us](http://support.saleae.com) for a device replacement, including a new cable.

**Bad Hub**

* Test: Bypass USB hub. Connect directly to the PC.
* Corrective Action: If the device works without the hub, don't use the hub.
* Other Possibility: Hub is unable to power all devices connected. Try removing other devices or using a powered hub.

**Bad USB Port**

* Test: Try other USB ports of the same type \(i.e., try other USB 2.0 ports if the port in question is USB 2.0 and similar for USB 3.0\).
* Corrective Action: If other ports work, don't use that port. Also try restarting the computer.

**Ground Loop Issue**

* Test: If the wire harnesses from the unit are connected to a device under test, remove them and try again.
* Corrective Action: If the device works normally when disconnected from the device under test, then the problem is most likely a ground loop. Common mode ground voltage may be interfering with the device's operation and could potentially damage it. Check how the device under test and the host PC are grounded. Check the voltage difference between the DUT's ground pin and the ground pin on the Logic analyzer while they are not connected or are connected through a large resistance.

**Device Disconnects and Reconnects**

* Test: If the device constantly disconnects and reconnects in a loop, close the software. Is it still disconnecting and reconnecting?
* Detail: When the software detects a new connected device, it downloads the firmware and resets the device so it reconnects with the new firmware. If for some reason the firmware download fails and the device resets, it will repeat the process as long as the software is running.
* Corrective Action: Restart the PC while the device is removed. If it keeps happening, review the rest of the items here and then contact support.
* Second Possibility: This could indicate that the USB cable is starting to go bad. Try replacing the cable and try other USB ports.

**Saleae USB Driver Not Installed on Windows**

* Test: Does the device show up as "Westbridge" in Device Manager without a driver installed or as an unknown device?
* Corrective Action: If so, attempt to install the driver again using the "update driver" feature. Instructions pending.

**The Wrong Saleae Device Driver Was Installed on Windows**

* Test: Did you attempt to manually install the driver using the "have-disk" method when an older version of the software was installed?
* Corrective Action: If so, now that the latest version is installed, attempt "have-disk" again, this time making sure to select the correct Saleae driver. Instructions pending.

**Saleae USB Driver Can't Install on Windows**

* Test: Does the device show up as "Westbridge" in Device Manager without a driver installed or as an unknown device? And did the driver update fail?
* Corrective Action: Attempt have-disk install. Instructions pending.
* Corrective Action Failed: See next issue.

**Windows Does Not Even Detect the Device**

* Test: Make sure the Saleae Logic software is not running.

    Make sure the device is not plugged in.

    Open device manager and expand Universal Serial Bus Controllers.

    Connect the device. Check Device Manager for any of the following:

    Unknown device

    Westbridge

    Saleae Logic ... USB Logic Analyzer \(where ... depends on the specific device you have\).

    Corrective Action: If you see an unknown device or Westbridge, report its VID and PID to Saleae support. Instructions: [https://trello.com/c/q2rMixk6](https://trello.com/c/q2rMixk6)

    If you see Saleae Logic, then open the Saleae Logic software. The device should disappear and then reappear. If nothing happens or if it disappears but then never reappears, tell Saleae support and review the other sections in this article regarding USB drivers.

**OSX Does Not Detect the Device**

* Test: Make sure the Saleae Logic software is not running.

    Make sure the device is not plugged in.

    Open system report \(Apple menu -&gt; about this mac -&gt; click "system report"\).

    Click "USB" under "Hardware."

    Connect the device.

    Refresh system report \(file menu -&gt; refresh information\).

    Check for "Westbridge" or for "Vendor Specific Device."

  Corrective Action: If neither of these items appears after refreshing the report, the device is not getting detected. Please test on another PC, if possible, and see the bottom of this guide to contact support.

**OSX Version-Specific Issues**

* We have seen reports and have reproduced issues here that existed on specific releases of OSX that were fixed in future releases. Specifically, if you are using OSX 10.10 Yosemite, please update to the latest release, 10.10.5, or update to OSX El Capitan.

**Windows Appears to Have Drivers Installed, but when the Software Opens, the Device Does Not Connect**

* Test: With the software not running, the device not connected, and Device Manager open, connect the device. It will show up under "Universal Serial Bus Controllers" as "Saleae Logic ... USB Logic Analyzer" if the driver is installed.

    Open the software.

    Does the device disappear? Does it come back as an "unknown device" or come back as "Logic Pro," "Logic student," or "Logic S/16"?

    Corrective Action: If the device appears as one of those 3 short names, that means for some reason the driver is not associating properly after the firmware download. Try performing a have-disk driver install at this stage to solve the problem. Instructions: [https://trello.com/c/xl3Vji3q](https://trello.com/c/xl3Vji3q)

**Saleae USB Driver Can't Manually Install on Windows XP**

* Test: All driver update attempts have failed. Check the file "C:\Windows\setupapi.log" for "\#E008 Setting registry value" and "\#E033 Error 5: Access is denied."
* Corrective Action: Add "WudfServiceGroup" registry key to "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\svchost\". Restart PC and try the driver install again. Instructions pending.
* Corrective Action Failed: Contact Saleae and provide a copy of "setupapi.log."

**Bad USB 3.0 Host Controller**

* Test: Test the device on a USB 2.0 port. It should work.

    Check your host controller, driver version, and operating system version with Saleae's USB 3.0 driver information. Make sure it is a known working combination. Details pending.

    Test the device on another PC on a USB 3.0 port and verify that the device is working there.

* Corrective Action: Replace host controller.

**On Linux, the Device Does Not Appear in lsusb If the Software Is Running**

* Test: Make sure the software is not running. Remove the device if it is currently connected. Connect the device. Wait 5 seconds and run lsusb. Check for the VID and PID listed here: [https://trello.com/c/q2rMixk6](https://trello.com/c/q2rMixk6) Start the software. Wait 5 seconds and run lsusb again. Check to see if any devices previously listed are now missing.
* Corrective Action: If the device was previously listed, but once the software started, the device is no longer listed, then there could be a problem with the USB cable or the xhci module/host controller combination. Try other USB cables \(USB 2.0 micro or USB 3.0 micro\), and test the device on a second PC with a different cable. That will determine if it's a cable failure or if there is something wrong with the host controller.

**Bad Xhci Module Version and Host Combination \(Linux\)**

* Test: If you are using Linux, check your kernel version and installed USB 3.0 host controller \(found with 'uname -r' and 'lspci'\). Locate this on the Saleae USB 3.0 host controller details page to check if you have a bad combination. Details pending.
* Corrective Action: Upgrade kernel version or replace USB 3.0 host controller.

**On Linux, Access Was Denied when Connecting to the Device**

* Test: Run software first \(not as sudo\), then connect the device. Check if a window pops up saying the device was found but could not be accessed.

    Check to make sure only 1 instance of Logic is running.

* Corrective Action: Install rules file with script. If using an older version of udev, optionally run software as sudo or modify the rules file to use the older and depreciated "SYSFS" instead of "ATTR." Instructions pending.
* Corrective Action for Arch Linux: Open the 99-SaleaeLogic.rules file \(in /etc/udev/rules.d/\) and remove the rule ENV{DEVTYPE}=="usb\_device" for each device.

**Bad Device**

* Test on USB 2.0 ports and USB 3.0 ports

    Test on a second computer.

    Test with a different USB 2.0 cable.

    Does the device ever appear in device manager? If not, it is most likely a device failure.

    Does Windows pop up a message saying that the USB device was not recognized? This is most likely a hardware failure.

* Corrective Action: [Contact support](http://support.saleae.com) to arrange for a replacement device.

**Still Not Working**

* Test: If you've run all the above tests but you've found that the device either works on another PC or over USB 2.0, then it's likely some other software or driver problem. 
* In that case, please [contact support](http://support.saleae.com) and include the results of all of the above tests.

