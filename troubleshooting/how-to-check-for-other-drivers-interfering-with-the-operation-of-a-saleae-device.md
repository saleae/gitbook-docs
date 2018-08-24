# How to Check for Other Drivers Interfering with the Operation of a Saleae Device

It is possible for other drivers to associate themselves with a Saleae device. This won't necessarily cause problems, but we have seen at least one issue in the past where a conflict prevented proper operation of the device.

Also, it's always a good idea to verify that your USB 3.0 host controller drivers are up to date below.

{% page-ref page="../faq/technical-faq/usb-3.0-host-controller-info.md" %}

{% page-ref page="../logic-software/usb-3.0-host-controller-drivers.md" %}

We've seen two types of drivers become associated with a Saleae device.

* Software USB protocol analyzers
* Specialized high current USB port drivers

If your PC has special "charging ports" please run this test twice - once on a normal port, and once on a charging port.

First, connect the Saleae device, while the Saleae software is closed. Second, open device manager, and expand the section "Universal Serial Bus Controllers" Third, locate the Saleae device an double click it to open the device properties. Usually "Saleae Logic X USB Logic Analyzer" \(X being the specific product name\)

Navigate to the driver tab. Click the button "driver details"

Note the files listed in the "driver files" list.

![file list](https://trello-attachments.s3.amazonaws.com/56314184f791c8285ee1ee1a/330x239/cddb891b8a276dba1411761d74e9bfa1/driver_file_list.png)

These four drivers are part of the WinUSB driver, which all Saleae devices use on all versions of Windows. Note that 4 files are listed - if not all 4 drivers are listed, that's OK.

* winusb.sys
* WdfCoInstaller01007.dll
* WinUSBCoInstaller.dll
* WUDFUpdate\_01007.dll

If any other files are listed, please take a screenshot and send that to [Saleae support](https://contact.saleae.com/hc/en-us/requests/new)

Those other files most likely belong to another driver which has attached itself to the Saleae device.

