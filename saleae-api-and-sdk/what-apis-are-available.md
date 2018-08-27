# What Saleae APIs are Available?

## What Saleae APIs are Available?

Saleae provides two APIs for the Saleae devices. They are not sold separately and are available for download at no additional cost.

First is the socket API, which is intended to make it easy for the existing Saleae desktop software to be controlled by third-party applications or scripts for the purpose of automation.

You can find more details on the socket API below.

{% page-ref page="socket-api.md" %}

Because the socket API relies on simple text commands sent and received through sockets, any programming language can support it. There are no DLLs or required libraries. We provide a C\# client library as well as a C\# sample application.

Existing customers have also used the socket API with Python, Labview, C++, and other environments and programming languages.

Second, the Analyzer SDK allows for third parties to develop their own protocol analyzer plugins, such as the included SPI or I2C analyzers. You can find more information about the SDK below.

{% page-ref page="protocol-analyzer-sdk.md" %}

Neither API provides real-time access to the raw data, and neither API can interact with the hardware without the Saleae Logic software running.

If you are looking for something like real-time data access, the best option is to either use the socket API to automate the capture and export processes or access the data through the analyzer API.







