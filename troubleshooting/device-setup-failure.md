# Error Message: DeviceSetupFailure

In the Logic 2 software, you may encounter a _DeviceSetupFailure_ error message when starting a capture like shown below.

![DeviceSetupFailure error message](<../.gitbook/assets/Screen Shot 2020-09-28 at 6.16.23 PM.png>)

### Known Solutions

This error message appears when the Start command fails. The solutions below will typically fix most cases.

* Connecting directly to a PCs USB port rather than through a USB hub
* Connecting to a different USB port on the PC
* Removing and reconnecting the logic analyzer to the PC
* Removing all other USB devices from the PC (we have seen USB debuggers interfere with Logic's communication with the PC)

We have also seen this issue in the past when using our logic analyzer with Etron USB host controllers. If you find that your PC has an _Etron USB 3.0 eXtensible Host Controller_, please try other USB ports. This may help determine if your USB host controller is the source of the issue.

If the solutions above don't help, please [contact support](https://contact.saleae.com/hc/en-us/requests/new).

## Logic 1.x

In our older Logic 1.x software, the error message will appear as below.

_"We're sorry, but an error occurred when issuing the start command to the device, after configuring the device and queueing the data transfer. This could indicate a more serious issue. If you continue to see this message, please contact Saleae technical support. You may need to remove and reconnect the device to continue"_

![Error when issuing the start command](<../.gitbook/assets/Screen Shot 2020-09-28 at 6.18.48 PM.png>)

As mentioned in the _DeviceSetupFailure_ section above shown in the Logic 2 software, Etron USB host controllers may be the cause of the issue. You can check your USB host controller information from within the Logic 1.x software by following the instructions in the support article below.

{% content-ref url="../faq/technical-faq/usb-3.0-host-controller-info.md" %}
[usb-3.0-host-controller-info.md](../faq/technical-faq/usb-3.0-host-controller-info.md)
{% endcontent-ref %}
