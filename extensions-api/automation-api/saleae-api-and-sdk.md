
### Protocol Analyzer SDK

The Protocol Analyzer SDK allows for third parties to develop their own protocol analyzer plugins, such as the included SPI or I2C analyzers. You can find more information about the SDK below.

<a href="/support/extensions-api/protocol-analyzer-sdk/protocol-analyzer-sdk" class="content-ref">Protocol Analyzer SDK</a>

Neither API provides real-time access to the raw data, and neither API can interact with the hardware without the Saleae Logic software running.

If you are looking for something like real-time data access, the best option is to either use the socket API to automate the capture and export processes or access the data through the analyzer API.

### Automation API

Our Automation API is intended to make it easy for the Logic 2 software to be controlled via a Python script. You can find more details in the [Logic 2 Automation API docs](https://saleae.github.io/logic2-automation/).

#### About Legacy Logic 1.x Support

<div class="callout callout-warning">
<p>Due to the official release of the newer <a href="https://saleae.github.io/logic2-automation/">Logic 2 Automation API</a>, we have officially ended support for our Legacy Logic 1.x Automation API. We highly recommend existing users who currently use our legacy Socket API automation utility in the past with Logic 1.x to migrate their automation utility to Logic 2 using our new Automation API above. Please <a href="/contact">contact us</a> if you need help with that.</p>
</div>

A link to our Legacy Logic 1.x Automation Utility is provided below for reference.

<a href="/support/extensions-api/automation-api/automation-legacy-logic1" class="content-ref">Automation API - Legacy Logic 1.x</a>

In addition, please keep in mind that newer versions of our Logic hardware (after revision 3.0.0) will no longer work with the older Logic 1.x software. If this poses any issues, please [contact us](/contact). A brief summary of our hardware revisions are described in the support article below.

<a href="/support/specifications-hardware/datasheets-and-compliance/logic-hardware-revisions" class="content-ref">Logic Hardware Revisions</a>



