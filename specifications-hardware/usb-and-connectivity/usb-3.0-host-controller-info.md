Our support team may request for your USB host controller information in cases where connectivity issues occur. The following instructions show how this can be done.

1. Close the Logic 2 software and connect the logic analyzer. If it is already attached, remove it and reconnect it.
2. Open device manager
3. Expand the section "Universal Serial bus controllers" and locate any & all USB 3.0 host controllers you find there. For each one, please double click to open the properties window, go to the driver tab, and send us screenshots as shown below.

![Finding USB Host Controller Information](/support-assets/Screen%20Shot%202021-04-02%20at%203.12.57%20PM.png)

     4\. To better identify your host controller you are using, click the details tab, and select "Hardware Ids" from the property selection. Then take a screenshot. It should look similar to the below image.

![Viewing the Hardware Ids for your Host Controller](/support-assets/inline1733780973.png)

## Logic 1.x

If you are using the older Logic 1.x software, the USB host controller information can be found from within the software.

<div class="callout callout-info">
<p>This article only applies to the Logic 1 software, and does not apply to Logic 2. Logic 2 users can get their host controller data from device manager, in the "Universal Serial Bus Controllers" section.</p>
</div>

On Windows, the latest Saleae software has a feature to automatically retrieve this information.

First, open the options menu and select Preferences.

![step 1](/support-assets/ext-abbb440b96-1.png)

Second, navigate to the USB Host Controllers tab.

![step 2](/support-assets/ext-5c457eeeda-2.png)

There, you will find a list of all USB host controllers installed in your system. Note: The "Status: Up to date" message is not accurate and is just a placeholder until we add automatic detection in a future software update.

![step 3](/support-assets/ext-068e281102-3.png)

For support finding the latest driver for your host controller, or on the request of support, please take a screenshot of the contents of this tab and send it to [Saleae support](/contact).

You can find a complete list of the latest driver releases for Windows 7 below:

<a class="content-ref" href="/support/troubleshooting/device-connection-issues/usb-driver-problem">Warning Message: Possible USB Host Controller Problem Detected</a>

**OS X and Linux**

On OSX and Linux, the USB host controller drivers are included with the operating system and cannot be updated separately.

On OSX, components of the USB 3.0 stack are frequently updated with other operating system updates. We recommend keeping your OS X installation fully up-to-date, including using the latest release of OS X.

On Linux, the xhci\_hcd kernel module is released with the kernel and can only be realistically updated by updating the kernel. If requesting driver information for Linux, please provide the kernel version with "uname -r" and the list of installed host controllers with "lspci -k".
