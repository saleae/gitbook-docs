# Logic Does Not Connect over USB 3.0

The Saleae Logic Pro 8 and Logic Pro 16 are designed to operate over USB 3.0 but can also operate over USB 2.0 at slower speeds. However, when connected to USB 3.0 ports with USB 3.0 cables, they should operate at higher speeds.

In some cases, even the USB 2.0 Saleae devices will not operate properly over USB 3.0 ports. In this situation, please provide the information requested in "Windows USB 3.0 Host Controller Driver Information."

**Troubleshooting**

First, check to see if the device is operating at high speed \(USB 2.0\) or super speed \(USB 3.0\).

* Disable all analog inputs and all but 4 of the digital inputs. Check to see if 500 MS/s is an available option. Over USB 3.0, it will be present. Over USB 2.0, the maximum sample rate will be 50 MS/s.
* Also, Logic Pro 16 by default will disable its second set of inputs, 8–15, when connected over USB 3.0 due to power limitations.

Second, check the basics:

* Verify that the PC has USB 3.0 ports. They are usually blue. If you are using an Apple computer, check the tech specs for your computer since they do not use the same color scheme.
* Check to make sure you are using a USB 3.0 cable. The Logic Pro 8 and Logic Pro 16 use USB 3.0 micro connectors, which are backward compatible with USB 2.0 micro cables. USB 3.0 connectors are much wider, and the Pro devices include a USB 3.0 cable.

Quick fixes:

* Try other USB 3.0 ports.
* Restart the computer.
* If you have another USB 3.0 micro cable, possibly from an external hard drive, try that.
* Make sure that there are no hubs between the device and the USB 3.0 port on your computer.

More advanced steps:

* On Windows, especially Windows 7, this problem may be caused by older USB 3.0 host controller drivers. See below for details.
* On OSX, on some models and versions of OSX, the PC might completely stop recognizing USB 3.0 devices or only allow them to connect over USB 2.0. Most recently in our testing, the issue disappeared after updating to El Capitan.

**Windows USB 3.0 Host Controller Driver Information**

If you are unable to use the Logic Pro 8 or Logic Pro 16 on USB 3.0 ports at USB 3.0 speeds, even though the device works properly when connected to a USB 2.0 port, a USB 3.0 host controller driver update may be required.

Locate your installed host controller and driver version:

{% page-ref page="../faq/technical-faq/usb-3.0-host-controller-info.md" %}

Check for driver updates:

{% page-ref page="../logic-software/usb-3.0-host-controller-drivers.md" %}

Original instructions \(pre 1.2.5\):

1. Open Device Manager.
2. Expand the section "Universal Serial Bus Controllers."
3. Locate the USB 3.0 host controller:

    Usually contained in the name "USB 3.0 Host Controller"

    xHCI Host Controller

    Common host vendors: Intel, VIA, ASMedia, Renesas, NEC, TI, FrescoLogic, ETRON, AMD.

4. Double-click the host. Send the following information to Saleae support:

    Full Name

    From the driver tab: Driver Provider, Driver Date, Driver Version

    On Windows 7, this issue can almost always be solved with a driver update. We will help you locate the latest drivers for your computer.

In the future, the Saleae software will automatically detect driver issues and provide you with information on how to find newer drivers.

