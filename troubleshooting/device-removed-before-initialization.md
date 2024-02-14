# Error: A device was found, but it was removed before initialization completed

This error message may appear during device operation, or upon connecting your Logic device. This error appears when the Logic app detects that a device gets physically disconnected from the PC during initialization. This could be due to a bad USB connection, a faulty USB host controller driver, a fauly Logic pod, or other unkown reasons which might cause the USB connection to time-out during initialization.

<figure><img src="../.gitbook/assets/Screenshot (16).png" alt=""><figcaption><p>A device was found, but it was removed before initialization completed</p></figcaption></figure>

### Troubleshooting

1\. Test your Logic hardware using the [latest version of the Logic 2 software](https://www.saleae.com/downloads/).

2\. Test your Logic hardware on another PC.

3\. Test your Logic hardware using other USB ports, and connect directly to the PC's USB port without any extension cables or USB hubs in between.

4\. Test your Logic hardware using another USB cable.

5\. Try removing all other USB devices from your PC before connecting Logic.

6\. In some cases, this issue can be resolved by uninstalling the USB 3 host controller driver, and allowing Windows to automatically re-install the same driver during a reboot. Specifically, this may solve the problem for users with the  Intel USB 3.1 eXtensible Host Controller, like the one shown in the image below. If you have an Intel based USB 3 host controller,  first navigate to the USB host controller driver from Device Manager and double click it to open the properties window, (be sure it's the Intel eXtensible Host Controller) then uninstall the driver by clicking "Uninstall Device" under the Driver tab in the device properties, and restart the PC. Once restarted, Windows will automatically re-install the same driver, and in many cases, this resolved the connectivity issue with our devices.

<figure><img src="https://saleae.zendesk.com/attachments/token/PCigwvvDRSXMt84XJXxFRy126/?name=image.png&#x26;lotus_request=true" alt=""><figcaption><p>USB Host Controller Driver Tab</p></figcaption></figure>

### Contacting Support

If the error message persists, please [contact us](https://contact.saleae.com/hc/en-us/requests/new) directly with the following information.

1\. The results of the troubleshooting tests above.

2\. Share your USB host controller information like shown in the support article below. Screenshots would be great.

{% content-ref url="../faq/technical-faq/usb-3.0-host-controller-info.md" %}
[usb-3.0-host-controller-info.md](../faq/technical-faq/usb-3.0-host-controller-info.md)
{% endcontent-ref %}

3\. Share your crash logs with us. To collect logs on windows, you can run the application from the console like so:\
`cd "\Program Files\Logic"`\
`Logic.exe`\
&#x20;\
The logs will be printed directly to the console while the application is running. Then, please reproduce the connection error 3 times, and close the application. Finally, copy & paste the terminal output into a txt file and send that to us in an attachment.

4\. Let us know which specific Saleae Logic model you own. You can refer to the support article below.

{% content-ref url="../faq/general-faq/identify-each-saleae-device.md" %}
[identify-each-saleae-device.md](../faq/general-faq/identify-each-saleae-device.md)
{% endcontent-ref %}

5\. Share your Machine ID.

{% content-ref url="sharing-your-machine-id.md" %}
[sharing-your-machine-id.md](sharing-your-machine-id.md)
{% endcontent-ref %}



