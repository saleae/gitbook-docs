# Data Table Shows Incorrect Values

When using low level analyzers (LLAs) such as our Async Serial or SPI analyzer, you may notice issues with how values appear in the data table, specifically while viewing results in decimal format.

### Known Issues

The known issues with the data table are as follows. These are certainly things we want to fix natively from within the app, but unfortunately can't prioritize at the moment. In the meantime, we have a workaround described at the bottom of this article which utilizes an extension that is available via our in-app Extension Marketplace. More details on this workaround is described below.

#### Decimal values appear as signed rather than unsigned

In the image below, you will notice that the Async Serial decoded results above the waveform (unsigned values) do not match the values appearing in the data table (signed values). Our data table unfortunately doesn't have a schema to tell if a value is signed or unsigned. Everything in the way we handle data tables are all as signed values.

![Data Table Values Appear as Signed](<../.gitbook/assets/Screen Shot 2022-01-19 at 6.53.06 PM.png>)

#### Decimal values appear as an array of values

In the image below, you will notice that the values in the data table appear as a series of array values, rather than a single value that matches the decoded data above the waveform. This happens when the LLA (Async Serial analyzer in the example below) is configured for greater than 8 bits of data.

![Data Table Values appear as an Array of Values](<../.gitbook/assets/Screen Shot 2022-01-19 at 6.59.33 PM.png>)

### Workaround

In the meantime (and since we don't have a native solution implemented), we have published a Marketplace Extension available from within the app called "Unsigned Integer Display."

![Unsigned Integer Display Extension](../.gitbook/assets/cb0225a3117bb898451fbedc7e3435cf8aefbd07.png)

Instructions to install and use extensions can be found in the links below.

{% content-ref url="../extensions/installing-extensions.md" %}
[installing-extensions.md](../extensions/installing-extensions.md)
{% endcontent-ref %}

{% content-ref url="../extensions/extensions-quickstart.md" %}
[extensions-quickstart.md](../extensions/extensions-quickstart.md)
{% endcontent-ref %}

When the extension is used, new rows in the data table will be created which contain the values produced by the extension. In cases where the issues above are present, the extension will display the proper values. You may subsequently hide the results of the original LLA (in this case, the incorrect results of the Async Serial analyzer) so that only the correct results from the Unsigned Integer Display extension appear.

![Unsigned Integer Display Extension Values in the Data Table](../.gitbook/assets/16a4d5779cf2884a077909a0a00022bc72bc3e0b.png)

We apologize for the inconvenience this causes in the meantime.



## Logic 1.x

{% hint style="info" %}
Unfortunately, the Decoded Protocols Panel, in addition to Protocol Search, is no longer available in the Legacy 1.x software due to technical issues. When attempting to enable it in v1.2.40, you will find our note below. Please upgrade to our newer [Logic 2 software](https://www.saleae.com/downloads/) if you need this functionality.

<img src="../.gitbook/assets/Screen Shot 2022-08-03 at 4.47.39 PM.png" alt="" data-size="original">
{% endhint %}

If you are using the older Logic 1.x software, the following troubleshooting guide applies.

### The Decoded Protocols Window Shows Incorrect Results

Specifically, we have received reports that when more than one protocol analyzer is active, the results in the Decoded Protocols window may show up incorrectly.

This bug introduces the following issues:

* Decoded messages are missing or out of order for a handful of entries under the Decoded Protocols window in the bottom-right corner of the Logic software.
* If there are errors in the Decoded Protocols window, exporting the data from this window will show the same errors.

We are working on a fix for this, but unfortunately, we don't have a timeline yet. In the meantime, please use the workarounds below.

**Temporary Workarounds**

Search for any query and delete that query in the Decoded Protocols window search box. That should reload the contents of the window and fix the results.

Type any search query:

<div align="left">

<img src="https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5965299353583cef619d2e15/96e8d9b7d7d0a3be6a70501be97b9799/TypeSearch.png" alt="Type Search">

</div>

Delete the search query to reload the window contents:

<div align="left">

<img src="https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5965299353583cef619d2e15/5cfdb9019c7613999ee638120e0ed5f3/ClearSearch.png" alt="Clear Search">

</div>

You can also export analyzer results individually by clicking on the gear icon next to the analyzer and selecting "export to text/csv file." This export method doesn't have any issues but will only let you export one analyzer at a time.

<div align="left">

<img src="https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/5965299353583cef619d2e15/71e25d7fb6e02459d56feb795b7a2b9e/ExportAnalyzer.png" alt="Export Window">

</div>
