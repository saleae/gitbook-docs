# Device SDK

{% hint style="info" %}
The Device SDK \(used to access raw data in real time\) is **not supported** by Saleae at this time. We still provide the Device SDK for download for those who have it already running with our Original Logic and Logic16. The Device SDK is not compatible with Logic 4, Logic 8, Logic Pro 8, and Logic Pro 16.
{% endhint %}

Saleae currently offers 3 APIs for interfacing with our products.

#### 1. Protocol Analyzer SDK

This is used for creating custom analyzer plugins for use with the Logic software. More information in the link below.

{% page-ref page="../protocol-analyzer-sdk.md" %}

#### 2. Socket API

This is an interface used to script actions in the Logic Software. More information in the link below.

{% page-ref page="../socket-api.md" %}

#### 3. Device SDK

This is a library used to access raw data in real time from Saleae devices without the use of our desktop software. Download link below.

{% file src="../../.gitbook/assets/saleaedevicesdk-1.1.14.zip" caption="Device SDK" %}

As of right now, only the Protocol Analyzer SDK and the Socket API support the new devices \(Logic 4, Logic 8, Logic Pro 8, Logic Pro 16\). Because of the added complexity in handling analog data, we don't currently plan on extending support to the new products using the existing Device SDK approach.

At this time, there is no way to access the digital or analog inputs from the new products in real time. The closest solution is to use the socket API to take captures and export the data. We already have a number of customers using this interface for automated QA and verification applications.





