# Device USB VID and PID Information

## Device USB VID and PID Information

Each Logic analyzer contains USB device identification information. If the memory that holds that information fails, the device will start to enumerate as a Cypress development kit with the default Cypress VID and PID for that part.

Here are the correct VID and PID pairs for each products found in the Saleae drivers:

| Device | VID & PID |
| :--- | :--- |
| Original Logic | VID 0x0925, PID 0x3881 |
| Logic16 | VID 0x21A9, PID 0x1001 |
| Logic 4 | VID 0x21A9, PID 0x1003 |
| Logic 8 | VID 0x21A9, PID 0x1004 |
| Logic Pro 8 | VID 0x21A9, PID 0x1005 |
| Logic Pro 16 | VID 0x21A9, PID 0x1006 |

**How to Check the VID and PID Pair**

* On Windows, open Device Manager and locate the device. Open the device properties and navigate to the details tab. Select "Hardware Ids" from the Property list. In the Value area, you will find the VID and PID of the product.
* On Linux, you can run lsusb.
* On OSX, you can find this information in the System Report under USB.

Make sure you have selected the Logic device. You may want to remove it and reconnect it to verify that the entry correctly disappears and then comes back.

If your device no longer identifies properly, please [contact support](https://contact.saleae.com/hc/en-us/requests/new) about a replacement.

