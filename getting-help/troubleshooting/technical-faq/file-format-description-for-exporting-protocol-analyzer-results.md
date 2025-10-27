# File Format Description for Exporting Protocol Analyzer Results

The Saleae Logic software includes about two dozen or more protocol analyzers. These analyzers are used to decode protocol data from a capture.

Each protocol analyzer supports exporting its results to a text or CSV file. More information on using protocol analyzers and exporting results can be found in the user's guide below.

{% content-ref url="../../../product/user-guide/using-logic/using-protocol-analyzers.md" %}
[using-protocol-analyzers.md](../../../product/user-guide/using-logic/using-protocol-analyzers.md)
{% endcontent-ref %}

The format of each protocol analyzer's exported results is specific to that analyzer. For instance, the asynchronous serial analyzer has a different export format from the I2C analyzer.

The easiest way to show sample analyzer results is by performing a simulation of that protocol in the Saleae Logic software and then exporting the results from that simulation. More information on simulation mode can be found below.

{% content-ref url="../../../product/user-guide/using-logic/demo-mode.md" %}
[demo-mode.md](../../../product/user-guide/using-logic/demo-mode.md)
{% endcontent-ref %}

This has the added benefit of allowing the user to view the subtle changes in the export format that result from different analyzer settings. For example, the USB protocol analyzer will export information in different formats, depending on the decode level specified in the analyzer settings.

To generate a sample export file, perform the following:

1. Disconnect any Saleae Logic analyzers that are currently connected to the PC.
2. Add the protocol analyzer you want to export.&#x20;
3. Press "Start Simulation".
4. After the simulation has completed and you can see the simulated protocol data and the decoded results, export the analyzer. Refer to the article "Using Protocol Analyzers" above for instructions.
5. Open the newly created file to view the exported data.

**Sample asynchronous serial export file:**

<div align="left"><img src="https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/58ee6859e178f96cf5d1220e/584fca0e7d974b58b62a98c289922e03/async.PNG" alt="Serial Data"></div>

**Sample I2C export file:**

<div align="left"><img src="https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/58ee6859e178f96cf5d1220e/af21b87703465b5ba48e1b6d1956c01c/i2c.PNG" alt="I2C data"></div>
