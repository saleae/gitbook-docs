# Finding Your USB 3.0 Host Controller Information

Our support team may request for your USB host controller information in cases where connectivity issues occur. The following instructions show how this can be done.

1. Close the Logic 2 software and connect the logic analyzer. If it is already attached, remove it and reconnect it.
2. Open device manager
3. Expand the section "Universal Serial bus controllers" and locate any & all USB 3.0 host controllers you find there. For each one, please double click to open the properties window, go to the driver tab, and send us screenshots as shown below.

![Finding USB Host Controller Information](<../../../.gitbook/assets/Screen Shot 2021-04-02 at 3.12.57 PM.png>)

&#x20;    4\. To better identify your host controller you are using, click the details tab, and select "Hardware Ids" from the property selection. Then take a screenshot. It should look similar to the below image.

![Viewing the Hardware Ids for your Host Controller](../../../.gitbook/assets/inline1733780973.png)

## Logic 1.x

If you are using the older Logic 1.x software, the USB host controller information can be found from within the software.

{% hint style="info" %}
This article only applies to the Logic 1 software, and does not apply to Logic 2. Logic 2 users can get their host controller data from device manager, in the "Universal Serial Bus Controllers" section.
{% endhint %}

On Windows, the latest Saleae software has a feature to automatically retrieve this information.

First, open the options menu and select Preferences.

![step 1](https://trello-attachments.s3.amazonaws.com/563d3abc67746253014c107d/404x485/fb02ebb5c1352866ab71c72e163dff8a/1.png)

Second, navigate to the USB Host Controllers tab.

![step 2](https://trello-attachments.s3.amazonaws.com/563d3abc67746253014c107d/452x164/ae613075e67baf0ad947137e98a1e9c8/2.png)

There, you will find a list of all USB host controllers installed in your system. Note: The "Status: Up to date" message is not accurate and is just a placeholder until we add automatic detection in a future software update.

![step 3](https://trello-attachments.s3.amazonaws.com/563d3abc67746253014c107d/453x538/02a7c817c78a31cdab50f31092a55b91/3.png)

For support finding the latest driver for your host controller, or on the request of support, please take a screenshot of the contents of this tab and send it to [Saleae support](https://contact.saleae.com/hc/en-us/requests/new).

You can find a complete list of the latest driver releases for Windows 7 below:

{% content-ref url="../usb-driver-problem.md" %}
[usb-driver-problem.md](../usb-driver-problem.md)
{% endcontent-ref %}

**OS X and Linux**

On OSX and Linux, the USB host controller drivers are included with the operating system and cannot be updated separately.

On OSX, components of the USB 3.0 stack are frequently updated with other operating system updates. We recommend keeping your OS X installation fully up-to-date, including using the latest release of OS X.

On Linux, the xhci\_hcd kernel module is released with the kernel and can only be realistically updated by updating the kernel. If requesting driver information for Linux, please provide the kernel version with "uname -r" and the list of installed host controllers with "lspci -k".
