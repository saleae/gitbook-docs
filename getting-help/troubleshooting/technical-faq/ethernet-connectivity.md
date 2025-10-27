# Ethernet Connectivity Suggestions

Although Saleae logic analyzers don't have ethernet connectivity natively built in, external hubs such as the [Silex DS-600 Ethernet-USB hub](https://www.silextechnology.com/connectivity-solutions/device-connectivity/ds-600) can provide a working solution.

Using our logic analyzer over ethernet provides some pros and cons:

* Pros: Electrical isolation, long cable length, network availability for multiple PCs
* Cons: Limited bandwidth and functionality

### Limitations of Using Saleae Logic with the DS-600

Based on our tests, we have discovered the following limitations when using Saleae Logic over ethernet via DS-600 external hub. Please keep in mind that these results may vary depending on many factors such as available network bandwidth and PC specs.

* Limited to 50 MS/s total digital bandwidth (e.g. 12.5 MS/s on 4 digital channels)
* Limited to 6 MS/s total analog bandwidth (e.g 1.5 MS/s on 4 analog channels)
* Cannot combine analog and digital recordings

These resulting limitations were gathered using the following test setup.

![Test Setup with DS-600 Ethernet-USB Hub](../../../.gitbook/assets/ethernet-usb.png)

We've received feedback to create an ethernet-based logic analyzer. We are considering this for future generations of the hardware, so feel free to vote/comment your requirements on our ideas page [here](https://ideas.saleae.com/b/feature-requests/ethernet-based-logic-analyzer/)!
