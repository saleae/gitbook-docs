# Can I Access Raw Data in Real Time?

### Is Direct RAM Access Supported?

Raw data captured by our logic analyzer is streamed directly to RAM. Accessing this raw data in real time is currently **not supported** by Saleae. We still provide the Device SDK for download for those who have it already running with our Original Logic and Logic16. The Device SDK is not compatible with Logic 4, Logic 8, Logic Pro 8, and Logic Pro 16.

Saleae currently offers the following APIs for interfacing with our products.

### Can I Use the Protocol Analyzer SDK for Accessing Data in Real Time?

These plugins are designed to allow you to process digital data, as it is recorded, decode protocol data, and display the results in the graph overlay and in the data table.

However, there is nothing stopping you from doing something else with the data as you process it.

The protocol analyzer SDK doesn't expose access to analog channels. It also doesn't allow random access to the digital data. It is stream based, allowing you to progress through each digital channel forward through the collection. As long as your decoder is able to keep up with the data as it's produced, the access is more or less real time.&#x20;

Please note however that this API wasn't designed for this purpose, and so, we don't officially support using the SDK in this manner.

### About our Older Device SDK (Unsupported)

{% hint style="info" %}
The Device SDK, originally used to access raw data in real time, is currently **not supported** by Saleae. We still provide the Device SDK for download for those who have it already running with our Original Logic and Logic16. The Device SDK is not compatible with Logic 4, Logic 8, Logic Pro 8, and Logic Pro 16.
{% endhint %}

This is a library used to access raw data in real time from Saleae devices without the use of our desktop software. Download link below.

{% file src="../../.gitbook/assets/SaleaeDeviceSdk-1.1.14.zip" %}
Device SDK
{% endfile %}

As of right now, only the Protocol Analyzer SDK and the Socket API support the new devices (Logic 4, Logic 8, Logic Pro 8, Logic Pro 16). Because of the added complexity in handling analog data, we don't currently plan on extending support to the new products using the existing Device SDK approach.

At this time, there is no way to access the digital or analog inputs from the new products in real time. The closest solution is to use the socket API to take captures and export the data. We already have a number of customers using this interface for automated QA and verification applications.
