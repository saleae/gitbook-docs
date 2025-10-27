# Recommended USB 3.0 Host Controller Cards

We've tested the following USB 3.0 chipsets:

* Intel 7, 8, and 9 series
* VIA
* Renesas (formerly NEC, same chip)
* ETRON
* Texas Instruments
* Fresco Logic
* ASMedia USB 3.0
* ASMedia USB 3.1

All PCI express add-on cards require [PCI express version 2.0](https://en.wikipedia.org/wiki/PCI\_Express#PCI\_Express\_2.0) or later.

Across all operating systems, besides Intel, Renesas proved to be the most reliable. It was the only non-Intel host that worked immediately on every platform without driver updates.

This was the Renesas card we tested with most recently and strongly recommend: [http://www.amazon.com/gp/product/B008IPXOWU?psc=1\&redirect=true\&ref\_=oh\_aui\_search\_detailpage](http://www.amazon.com/gp/product/B008IPXOWU?psc=1\&redirect=true\&ref\_=oh\_aui\_search\_detailpage)

A note on buying host controllers from Amazon: Because USB 3.0 host controllers all implement a common specification (XHCI), no-name USB 3.0 vendors can easily switch out which host chip they are using based on availability or cost. Usually, people in the reviews will notice this.

The card we link specifically advertises on using the Renesas controller, which is why we chose to test it. However, there is at least one review claiming that their card came with a VIA chipset. Please check it once you receive it. On Windows, the VIA chipset requires driver updates to work properly.

We have not yet performed a full evaluation on "ExpressCard" Laptop add on cards. Once we have done so, we will post a recommendation for that, too. In the meantime, we recommend looking for a Renesas-based express card.

### Instructions to identify currently installed host controllers

{% content-ref url="usb-3.0-host-controller-info.md" %}
[usb-3.0-host-controller-info.md](usb-3.0-host-controller-info.md)
{% endcontent-ref %}

### Latest driver information

{% content-ref url="../../troubleshooting/usb-driver-problem.md" %}
[usb-driver-problem.md](../../troubleshooting/usb-driver-problem.md)
{% endcontent-ref %}

### Known Issues with VIA Host Controllers

There is a known issue with corrupting data captures when using Saleae Logic with VIA host controllers. The simple fix is to update the VIA host controller driver. More information on the issue can be found below.

{% content-ref url="../../troubleshooting/the-captured-data-is-corrupted.md" %}
[the-captured-data-is-corrupted.md](../../troubleshooting/the-captured-data-is-corrupted.md)
{% endcontent-ref %}



