# What Is the Best Way to Compare Similar Sequences of Protocol Data?

The Saleae software does not have a built-in tool for comparing sequences of protocol data. Instead, we offer the following recommendations.

**Basic Comparisons** First, for rough, quick comparisons between captures with relatively short bursts of repeating protocol data, we recommend saving several sample captures. It's okay if the sequences you want to compare are in the same capture. Then open two or more instances of the Saleae software. Note that there are not currently any features to synchronize viewing multiple captures, so it's probably best to only use two instances. Open a sample capture in each so you have at least one copy of the sequence in each instance. From there, you can view both sequences simultaneously.

_Suggestions to Match the Displays_

* Make both windows exactly the same width. This is important to match the zoom levels of both windows.
* Place a pair of timing markers in each window around an area of interest. Make sure the delta time is the same for both pairs (e.g., |A1-A2|=5ms).
* Use the shift+click+drag from one timing marker to the other. That will match the zoom levels of both windows.
* Optionally, save a bookmark in both captures. Bookmarks save the view location and zoom level for later. The bookmark will still save the same zoom level even after you resize the software.
* If you are comparing one capture to itself, rather than comparing two different captures, just add a bookmark and save the capture before opening the second instance.
* Click the bookmark image next to the bookmark's title to return to that location and zoom level.

**More Complex Comparisons**

If the sequence you're trying to compare is longer in length or is more complex than a simple repeating sequence, or if you need to compare a large number of instances of that sequence, then the best option is to export to CSV and then perform the comparison in Excel.

For details on how to export to CSV, see this guide:

{% content-ref url="../../../product/user-guide/using-logic/saving-loading-and-exporting-data.md" %}
[saving-loading-and-exporting-data.md](../../../product/user-guide/using-logic/saving-loading-and-exporting-data.md)
{% endcontent-ref %}

Also, be sure to use a display base that is best suited for your data (usually either Hex or ASCII).

{% content-ref url="changing-the-display-radix.md" %}
[changing-the-display-radix.md](changing-the-display-radix.md)
{% endcontent-ref %}

I recommend copying the contents from each export file into a master Excel document. You may want to start with 1 sheet per export, but eventually, you will want to move many instances of the sequence into the same sheet.

Then you can use Excel formulas to try to identify similarities and perform bit-by-bit comparisons to see which bits change in a packet between instances.
