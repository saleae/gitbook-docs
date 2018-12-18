# The Captured Data is Corrupted

If you are seeing issues with corrupt data inside of your recording, please check your host controller driver version using the instructions in the link below.

{% page-ref page="../faq/technical-faq/usb-3.0-host-controller-info.md" %}

### Known Issues with VIA USB Host Controllers

We have seen issues in the past when using our Logic analyzers with **VIA USB Host Controllers**. Specifically, the digital recordings may look like randomly transitioning data times, usually when recording at higher sampling rates. Updating the host controller driver seemed to solve it in most cases. Please try this using the link below if you have not already done so.

{% page-ref page="../logic-software/usb-3.0-host-controller-drivers.md" %}

If you don't own a VIA host controller, and are still seeing issues with corrupted capture data, please [contact support](https://contact.saleae.com/hc/en-us/requests/new) and include the screenshot of your USB 3.0 Host Controller information, as well as screenshots and explanations of the corrupted captures.

