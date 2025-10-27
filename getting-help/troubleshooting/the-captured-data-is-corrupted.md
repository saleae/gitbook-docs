# The Captured Data is Corrupted

If you are seeing issues with corrupt data in your recording, please check your host controller driver version using the instructions in the link below.

{% content-ref url="technical-faq/usb-3.0-host-controller-info.md" %}
[usb-3.0-host-controller-info.md](technical-faq/usb-3.0-host-controller-info.md)
{% endcontent-ref %}

### Known Issues with VIA USB Host Controllers

We have seen issues in the past when using our Logic analyzers with **VIA USB Host Controllers**. Specifically, the digital recordings may look like randomly transitioning data times, usually when recording at higher sampling rates. Updating the host controller driver seemed to solve it in most cases. Please try this using the link below if you have not already done so.

{% content-ref url="usb-driver-problem.md" %}
[usb-driver-problem.md](usb-driver-problem.md)
{% endcontent-ref %}

If you don't own a VIA host controller, and are still seeing issues with corrupted capture data, please [contact support](https://contact.saleae.com/hc/en-us/requests/new) and include the screenshot of your USB 3.0 Host Controller information, as well as screenshots and explanations of the corrupted captures.
