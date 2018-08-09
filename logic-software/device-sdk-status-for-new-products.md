# Device SDK Status for New Products

Saleae currently offers 3 APIs for interfacing with our products.

1. Analyzer SDK, used for creating custom analyzer plugins for use with the Logic software
2. Socket API, an interface used to script actions in the Logic Software
3. Device SDK, a library used to access raw data in real time from Saleae devices without the use of our desktop software. [Download the Device SDK here](http://downloads.saleae.com/SDK/SaleaeDeviceSdk-1.1.14.zip).

As of right now, only the Analyzer SDK and the Socket API support the new devices \(Logic 4, Logic 8, Logic Pro 8, Logic Pro 16\).

We are currently planning how to best provide API access to raw capture data from the new products. Because of the added complexity in handling analog data, we’re not sure we will be able to extend support to the new products using the existing device SDK approach.

Specifically, the analog data have to be unpacked and calibrated, a process that we haven’t been able to run in real time yet. We’re working on getting the processing speed as fast as possible in our main desktop software, but the ability to reach real-time performance will always be a function of the host PC’s performance, the sample rate, and the number of channels active.

Because of this, we’re exploring expanding and potentially re-architecting our SDK to still require the main Logic software to be running but allow different methods to access data in real time, which is not currently possible with the socket API.

At this time, there is no way to access the digital or analog inputs from the new products in real time. The closest solution is to use the socket API to take captures and export the data. We already have a number of customers using this interface for automated QA and verification applications.

Due to the technical complexity we need to achieve first, we don’t have an estimation on when we will have real-time support for the new products. If this is something you need now, please first take a look at our socket interface and then contact support to see if we can help.

I look forward to achieving real-time performance with the new products and offering a full-featured interface for developers.

