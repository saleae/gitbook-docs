# Error Message: ReadTimeout

## In Logic 2.x

When attempting to capture data, you may encounter a ReadTimeout error message: `An error occurred during capture: ReadTimeout`

![ReadTimeout Error in the Logic 2 Software](../.gitbook/assets/screen-shot-2020-08-13-at-6.43.57-pm.png)

## In Logic 1.x

In Logic 1.x, the following error message will appear: "We're sorry, but the device was not able to keep up with this sample rate. If you continue to see this message, please contact Saleae technical support."

![Logic can&apos;t keep up](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/55f0e75a10f9f592573a8232/035ff5a3b79830f7bcd2dccca570674f/logic_cant_keep_up.png)

## Why Does the Error Message Appear?

The Saleae Logic produces data at a fixed rate and can't tolerate periodic delays between read requests because the device side buffer space is limited. This error message shows up when the device side buffer has run out of memory caused by delays on the USB line during data capture. The Original Logic is the most sensitive to this issue. The newer products \(Logic 4, Logic 8, Logic Pro 8, and Logic Pro 16\) have significantly larger device side stream buffers and should have no problem with this.

## **If the Error Occurs Immediately after Clicking 'Start'**

If the error message appears even before any samples were recorded, downloading the latest beta software may solve the issue. You can download the latest software below.

{% hint style="info" %}
_Note, Logic 2 users should make sure they have the latest release._
{% endhint %}

Otherwise, this indicates a potentially different issue and could be caused by one of the following:

* The USB cable could be bad. Please try another USB cable or [contact support](https://contact.saleae.com/hc/en-us/requests/new) for a replacement.
* On Windows, the USB host controller driver may be outdated. Please [contact support](https://contact.saleae.com/hc/en-us/requests/new), and we can help ensure you have the absolute latest drivers for your device.
* On OS X, the error may occur when sampling while a thunderbolt display is connected. Connecting Logic to a USB port on the thunderbolt display has solved the problem in the past.

## **Troubleshooting Steps**

* Make sure you are using the latest Saleae software: [https://www.saleae.com/downloads](https://www.saleae.com/downloads)
* Make sure that there are no other high-bandwidth USB devices attached to the PC during the capture.
* Try removing any USB hubs between Logic and the host PC.
* Try removing any USB extension cables. We recommend using the supplied USB cable, or using a USB cable that is as short as possible to avoid any issues with signal integrity.
* Try using the device on other USB ports. If you're using one of the USB 2.0 products, try all the ports on the PC since that will test with all host controllers.
* Try reconnecting Logic to the PC.
* Test the device on another PC to help rule out a hardware problem.
* If using the newer Logic products, disable all analog channels, enable a single digital channel, and note the maximum digital sampling rate that can capture data consistently without the error. Capturing analog data at any sampling rate maximizes the bandwidth usage capability of Logic, so we want to disable analog to effectively lower Logic's USB bandwidth usage.
* If on USB 2.0, try moving all attached devices to one host controller so Logic has its own host controller. Try both host controllers since one may perform better than the other. Instructions to test this are below.

{% page-ref page="../faq/technical-faq/move-logic-to-its-own-host-controller.md" %}

## **Contacting Support for Additional Help**

If the error persists after trying the troubleshooting steps, please [contact support](https://contact.saleae.com/hc/en-us/requests/new) and include the following information:

* Detailed results of all the troubleshooting steps
* Which Logic device you are using
* What OS you are using, the version of that OS, and if it is 32-bit or 64-bit
* The host controller\(s\) installed in your system, including the driver version. See the article below for instructions on how to find it.

{% page-ref page="../faq/technical-faq/usb-3.0-host-controller-info.md" %}

* Screenshots or a detailed description of the error message\(s\) you're seeing in the software
* Description of how often the failure is occurring and if there is any pattern to the issue

## **Considerations for the Original Logic**

* On some computers, the Original Logic might not be able to consistently capture at its maximum sample rate of 24 MSPS or even at 16 MSPS. However, on most computers, the device should be able to reliably capture at 12 MSPS. This is due to its small device side buffer.

If, even after trying the above recommendations, your Original Logic can't record consistently faster than 12 MSPS, you may want to consider one of the following options:

* Add a new host controller to your PC, either a PCI express card or a laptop ExpressCard.
* Upgrade to a newer Saleae product that has larger device side buffers.

