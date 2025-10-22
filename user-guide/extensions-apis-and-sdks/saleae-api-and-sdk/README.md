# Automation API & Analyzer SDK

### Protocol Analyzer SDK

The Protocol Analyzer SDK allows for third parties to develop their own protocol analyzer plugins, such as the included SPI or I2C analyzers. You can find more information about the SDK below.

{% content-ref url="protocol-analyzer-sdk/" %}
[protocol-analyzer-sdk](protocol-analyzer-sdk/)
{% endcontent-ref %}

Neither API provides real-time access to the raw data, and neither API can interact with the hardware without the Saleae Logic software running.

If you are looking for something like real-time data access, the best option is to either use the socket API to automate the capture and export processes or access the data through the analyzer API.

### Automation API

Our Automation API is intended to make it easy for the Logic 2 software to be controlled via a Python script. You can find more details on our on our [Logic 2 Automation landing page here](https://www.saleae.com/automation/).

#### About Legacy Logic 1.x Support

{% hint style="warning" %}
Due to the official release of the newer [Logic 2 Automation API](https://www.saleae.com/automation/), we have officially ended support for our Legacy Logic 1.x Automation API. We highly recommend existing users who currently use our legacy Socket API automation utility in the past with Logic 1.x to migrate their automation utility to Logic 2 using our new Automation API above. Please [contact us](https://contact.saleae.com/hc/en-us/requests/new) if you need help with that.
{% endhint %}

A link to our Legacy Logic 1.x Automation Utility is provided below for reference.

{% content-ref url="automation-legacy-logic1.md" %}
[automation-legacy-logic1.md](automation-legacy-logic1.md)
{% endcontent-ref %}

In addition, please keep in mind that newer versions of our Logic hardware (after revision 3.0.0) will no longer work with the older Logic 1.x software. If this poses any issues, please [contact us](https://contact.saleae.com/hc/en-us/requests/new). A brief summary of our hardware revisions are described in the support article below.

{% content-ref url="../../../datasheets-and-specifications/logic-hardware-revisions.md" %}
[logic-hardware-revisions.md](../../../datasheets-and-specifications/logic-hardware-revisions.md)
{% endcontent-ref %}



