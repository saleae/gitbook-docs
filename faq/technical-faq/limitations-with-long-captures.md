# Limitations with Long Overnight Captures

### Issues with Long Captures Spanning Several Hours or More

The Logic 2 software does not support streaming captured data to disk. Instead, a single capture has to reside in memory until it is saved and closed. \
&#x20;\
Having said that, our software may not be able to capture for several hours in length with great reliability, or your available memory may not support it. From a product testing point of view, we focus most of our attention on captures that are up to 15 minutes in length, though we do occasionally test for up to 24 hours.

Because of this, you may encounter issues when attempting to leave a capture running overnight, or for several days long. As such, we would recommend the workarounds mentioned in this support article.&#x20;

#### Contacting Support

If you'd like to report any issues you run into while capturing data spanning several hours in length or more, please [contact us](https://contact.saleae.com/hc/en-us/requests/new) with the information below.

* A description of the error you are running into, including any error messages.
* Your capture settings (or perhaps share your Capture Preset file)

{% content-ref url="../../user-guide/using-logic/saving-loading-and-exporting-data.md" %}
[saving-loading-and-exporting-data.md](../../user-guide/using-logic/saving-loading-and-exporting-data.md)
{% endcontent-ref %}

* &#x20;Your Machine ID

{% content-ref url="../../troubleshooting/sharing-your-machine-id.md" %}
[sharing-your-machine-id.md](../../troubleshooting/sharing-your-machine-id.md)
{% endcontent-ref %}

### Reducing Memory Usage of the Software

There are several ways to reduce or manage the memory usage of the software, which may prevent any memory-related limitions you might run into during the capture.

* Reduce the capture duration.
* Reduce the analog sample rate if analog channels are used.
* Save and close captures before taking new ones. After saving the capture (options -> save capture), close it by clicking the 'x' icon on the capture tab.
* Remove LLAs (low level analyzers). They can be added back to the capture later on.

### **Using our Automation API**

Another way of getting around memory limitation issues with long captures is to use our Python Automation API to automate the process of taking several shorter captures, saving them, and then starting more captures. That will allow you to break a single long capture into a series of shorter captures with only small gaps between captures.

The software includes a system for automating normal software interactions such as changing capture settings, starting captures, saving files, or exporting data. Please see our [Python Automation API documentation](https://saleae.github.io/logic2-automation/) for more information and for an example script.

**Sending your Captured Data to External Applications**

Once a capture is complete, the captured data will still reside in the Logic 2 software. In order to access that data from an external application for further processing, you can export that to a file and then load that file into your application. Our [sample Python script here](https://saleae.github.io/logic2-automation/getting\_started.html) provides an example for exporting the raw captured data, as well as the contents of the Data Table, after the capture is complete.

**Known Limitations with the Automation API Approach**

There are several limitations to this approach that you should consider:

* The gaps between captures are unavoidable.
* The captures cannot be appended to each other to produce one extra long capture later. They will stay in separate files.
* The protocol results cannot be accessed in real time. Instead, you must wait for the capture to complete before you can export the protocol results.



