# Logic 2 is Consuming Disk Space

If this is happening to you, please [contact us](https://contact.saleae.com/hc/en-us/requests/new) and let us know where the disk space is being used, how much is being used, and how you are using the software.

### Possible Reason for this Issue

The most likely cause of this is due to the indexing system that our protocol analyzers use for processing decoded data and making it available for search.

Specifically, `analyzer_db` directories are created when protocol analyzers are used in your capture. These directories will be created and can be found in the following locations:

* Windows: `C:\Users\YourUserName\AppData\Local\Temp`
* Linux: Inside your `/tmp` folder

Fortunately, the `analyzer_db` directories are cleared upon restarting the software. Though if you leave the software open for long periods of time, the search indexing system does not delete these `analyzer_db` directories.

### Workaround #1

In cases where you plan on capturing large amounts of data (usually greater than 1 hour's worth of a capture, but can be much less when the decoded data is dense), we recommend the following workaround to have more control over the disk space used during captures:

1. Save a preset with your protocol analyzer added with your preferred settings
2. Remove all protocol analyzers before starting your capture
3. Start your capture
4. Once the capture is complete, save the capture to ensure that you keep your data in case anything goes wrong.
5. Load your preset to begin decoding the data
6. Restart the app before starting a new capture (to clear the analyzer\_db directories)

Instructions for saving/loading a preset and saving captures can be found below.

{% content-ref url="../../product/user-guide/using-logic/saving-loading-and-exporting-data.md" %}
[saving-loading-and-exporting-data.md](../../product/user-guide/using-logic/saving-loading-and-exporting-data.md)
{% endcontent-ref %}

### Workaround #2

Another workaround would be to trim your capture such that the amount of decoded data you are working with is greatly reduced. Instructions for trimming your capture can be found below. Please remember to save a copy of your original capture, preferably with all analyzers removed.

{% content-ref url="../../product/user-guide/using-logic/delete-data.md" %}
[delete-data.md](../../product/user-guide/using-logic/delete-data.md)
{% endcontent-ref %}



