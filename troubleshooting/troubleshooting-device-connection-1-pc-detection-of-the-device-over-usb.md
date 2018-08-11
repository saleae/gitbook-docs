# Troubleshooting Device Connection 1: PC Detection of the Device over USB



## PC Detection of the Device over USB

* If your device is initially detected by the PC but then not detected by the software, or fails to connect to the software with an error, you can skip this entire section. However, future sections may refer back to these tests.
* Make sure the device is not connected to the PC.
* Make sure the software has been installed on your PC but is not running and the Logic window is not open.
* Connect the device to the PC using the provided USB cable. If you have a Logic Pro 8 or Logic Pro 16, it is preferable to use a USB 3.0 port.
* Check with the operating system to see if the device is detected. IMPORTANT: Make sure the Saleae software is not running.

    **Windows:** Open device manager. Expand the section "Universal Serial Bus Controllers" and check for "Saleae Logic X USB Logic Analyzer" where "X" is the specific product version \(4, 8, Pro 8, etc.\).

    **Linux:** Run lsusb. Check for any device name containing "Saleae" or a VID of "0x21A9" or "0x0925". A complete list of VID and PID pairs can be found here: [https://trello.com/c/q2rMixk6](https://trello.com/c/q2rMixk6)

    **OSX:** Open "System Report" by opening the Apple menu and selecting "About this Mac," and then select "System Report...". Then select USB under Hardware and check for "Westbridge" in the treeview.

* If on Windows and if the device appears as an "unidentified device," proceed as if the device was not detected at all and continue on as if the device was not seen at all by the OS.
* If on Windows and the device appears as "Westbridge," then there is a problem with the Saleae driver. It may not have been installed properly. 
  * "Westbridge" is normal on Windows if the software was never installed \(Westbridge is always normal on OSX\). Please make sure the latest software is installed \(1.2.5+\). You may have the older software installed \(1.1.15\), which does not support or include drivers for the new products. To check the software version, open the software and read the title bar.
  * If 1.1.15 or any version older than 1.2.5 is installed, please install the latest beta software.
  * If you are using a special standalone version of the Saleae software, you will need to manually install the drivers. To do that, follow these instructions: [https://trello.com/c/xl3Vji3q](https://trello.com/c/xl3Vji3q).

**Device Not Seen by the Operating System when Software Is Not Running**

If the device is not showing up in the OS, as tested in the above section, then one of the following could be the problem:

1. The USB port is bad.
2. The USB cable is bad.
3. If there are any USB hubs or USB extension cables in the line, they could be interfering with the connection.
4. The USB host controller could be bad.
5. The USB host controller drivers could be outdated and have issues
6. Something else could be wrong with the PC.

To find the source of the problem, please run each test below:

* Remove any USB extension cables between the logic analyzer and the host PC, and test again.
  * If removing an extension cable solved the problem, then it is unlikely that you will be able to use an extension cable with the device. Details here: [https://trello.com/c/9bE1TG9o](https://trello.com/c/9bE1TG9o)
* Remove any USB hubs between the logic analyzer and the host PC and test again.
  * If removing a USB hub solved the problem, then the hub could be faulty, or it might not be providing enough power to use with the logic analyzer. Please bypass the hub or try replacing it.
* If the logic analyzer is plugged into a laptop docking station, try connecting it directly to the laptop instead.
  * If bypassing the docking station solved the problem, please contact Saleae support to help troubleshoot the docking station.
* Repeat the PC detection test above with each USB port on the system, both USB 2.0 and USB 3.0.
  * If no ports worked:
    * all ports are probably fine.
    * continue the other tests. It is unlikely that any of the ports are bad.
  * If USB 2.0 ports worked but not USB 3.0:
    * all ports are probably fine.
    * if your device is a Logic Pro 8 or Logic Pro 16, then the issue could be the USB cable, or the USB 3.0 host controller hardware or driver. Continue the other tests.
    * If your device is a USB 2.0 only device \(Logic 4, Logic 8, original Logic, original Logic16\), then the issue could be the host controller driver, the Linux kernel version \(if you are on Linux\), or the host controller itself. The cable is probably fine.
  * If USB 3.0 ports worked but not USB 2.0:
    * all ports are probably fine.
    * please contact support with this information, as this issue is rare and still unsolved.
  * If one or more ports worked and others did not, but the issue was not specific USB 2.0 or USB 3.0.
    * There could be a problem with the USB port. Do not use it.
* Repeat the PC detection test above with another USB cable. If you have a Logic Pro 8 or Logic Pro 16, it would be preferable to test with another USB 3.0 cable. However, if you do not have one, a USB 2.0 micro cable would work, too. If you take a close look at the USB 3.0 connector on the device, you will see that there are actually 2 plugs next to each other, and one is compatible with USB 2.0 micro cables. Please run this test on a USB 3.0 port and a USB 2.0 port, if possible.
  * If your USB 2.0-only device works properly with another cable, then the original cable is bad. Please contact support about a replacement.
  * If your USB 3.0 device \(Logic Pro 8 or Logic Pro 16\) works properly with another USB 3.0 cable, then the original is bad. Please contact support about a replacement.
  * If you tested your USB 3.0 device \(Logic Pro 8 or Logic Pro 16\) with a USB 2.0 cable and neither cable worked on any port, please finish the tests in this section and then contact support.
  * If you tested your USB 3.0 device \(Logic Pro 8 or Logic Pro 16\) with a USB 2.0 cable and on some or all ports the device was detected, please finish the tests in this section and then contact support.
* Test the host controller hardware.
  * If there are any USB 2.0 devices connected to a USB 2.0 port \(not a USB 3.0 port\) and working, then the USB 2.0 host controller hardware is fine.
  * If other USB 3.0 devices work on any USB 3.0 port on your system at the higher USB 3.0 speed, then the USB 3.0 host controller hardware is fine.
  * If you do not have any other USB 3.0 devices but other slower USB devices work on any USB 3.0 ports, then the USB 3.0 host controller hardware is probably fine.
  * If no other USB devices work on USB 2.0 ports, then the host controller hardware may be damaged. Please contact Saleae Support for replacement suggestions.
  * If no other USB devices work on USB 3.0 ports, then the host controller hardware may be damaged. Please contact Saleae Support for replacement suggestions.
* Check the USB 3.0 host controller driver, and make sure it is up to date.
  * If you are on OSX or Linux, skip this step.
  * If you do not have USB 3.0 ports, skip this test.
  * On Windows, open Device Manager and expand the Universal Serial Bus Controllers. Locate the USB 3.0 host controller. Most PCs will only have one. Names vary between host controllers, but they can usually be identified with a name like one of these:
    * XHCI host controller
    * USB 3.0 host controller
    * eXtensible Host Controller

      Once you have found the host controller, take note of the full name. Then check the driver version.

      If you are using Windows 7 or earlier, or if you are using Windows 8 or Windows 10 and have an ASMedia host controller, please see the driver update information here: [https://trello.com/c/O0hA3XAF](https://trello.com/c/O0hA3XAF)

      Update the driver, if possible, and run the tests again.
* Check to see if the device is broken by connecting it to another PC. Does the device work at all on any USB port with any cable? If not, please test on another PC. If the device still does not detect at all, then it has definitely failed. Please contact support and inform them of the results from each test you performed above. Also include the type of device you have \(Logic 4, Logic 8, etc.\) and indicate if it is black or red. Also indicate if the device is new or if it previously worked and recently failed.
* Still not detecting in all situations but detecting in some situations. NOTE: IF YOU DID NOT RUN ALL OF THE TESTS ABOVE WITH THE SALEAE LOGIC SOFTWARE CLOSED, YOU WILL NEED TO RETEST. HAVING THE SOFTWARE OPEN WILL CAUSE THE DEVICE TO RE-ENUMERATE, WHICH COULD INDICATE A DIFFERENT ISSUE. This test was designed to evaluate complete PC communication failures, not communication failures after a successful first connection. Please contact support with the details from each test you've run above, as well as the following information:
  * The make and model of your PC
  * The type of logic analyzer you have \(Logic 4, Logic 8, etc.\), and the color \(red or black\)
  * The operating system of all the PCs you tested with
  * If each PC you tested with is a laptop or a desktop
  * The full name of the USB 3.0 host controller\(s\) on each PC you tested with. On Windows, this is in Device Manager. On Linux, send the output of lspci.
  * A list of all USB 3.0 cables you tested with and the results
  * Indicate if your PC has USB 2.0 and/or USB 3.0 ports and which ones worked or didn't work
  * Any other relevant information.

