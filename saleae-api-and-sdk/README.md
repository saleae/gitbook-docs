# Automation & Analyzer SDK

### Protocol Analyzer SDK

The Protocol Analyzer SDK allows for third parties to develop their own protocol analyzer plugins, such as the included SPI or I2C analyzers. You can find more information about the SDK below.

{% content-ref url="protocol-analyzer-sdk/" %}
[protocol-analyzer-sdk](protocol-analyzer-sdk/)
{% endcontent-ref %}

Neither API provides real-time access to the raw data, and neither API can interact with the hardware without the Saleae Logic software running.

If you are looking for something like real-time data access, the best option is to either use the socket API to automate the capture and export processes or access the data through the analyzer API.

### Socket API for Automation

{% hint style="info" %}
Please note that the Socket API automation utility requires the older Logic 1.x software. The latest Logic 2 software currently does not support this utility, though we do plan to add support for it in the future. Feel free to [vote on the idea here!](https://ideas.saleae.com/b/feature-requests/application-api/)
{% endhint %}

Our Socket API is intended to make it easy for the existing Saleae desktop software to be controlled by third-party applications or scripts for the purpose of automation.

You can find more details on the socket API below.

{% content-ref url="socket-api.md" %}
[socket-api.md](socket-api.md)
{% endcontent-ref %}

Because the socket API relies on simple text commands sent and received through sockets, any programming language can support it. There are no DLLs or required libraries. We provide a C# client library as well as a C# sample application.

Existing customers have also used the socket API with Python, Labview, C++, and other environments and programming languages.
