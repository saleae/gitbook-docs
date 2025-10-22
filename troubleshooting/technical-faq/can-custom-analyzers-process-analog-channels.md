# Can Custom Analyzers Process Analog Channels?

The Analyzer SDK does not have the ability to process analog channels.

If you need the ability to run code against the analog data, the best option is to export that data to a file and then process it in a separate application or script. There are a number of export options in the Saleae software, and the process of capturing and exporting can be automated using out automation socket API.

Socket API details are below.

{% content-ref url="../../saleae-api-and-sdk/automation.md" %}
[automation.md](../../saleae-api-and-sdk/automation.md)
{% endcontent-ref %}

If you are a Matlab user, exporting directly to Matlab may be best.

Otherwise, exporting to the raw data format or to CSV would be the best bet for post=processing analog data.

In the future, we would like to add support for analog analyzers. You can vote for this feature suggestion [here](https://ideas.saleae.com/b/feature-requests/run-analyzer-on-an-analog-channel/).

