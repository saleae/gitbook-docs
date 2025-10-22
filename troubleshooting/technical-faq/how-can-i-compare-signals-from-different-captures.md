# How Can I Compare Signals from Different Captures?

Currently, the software does not contain specific features for comparing data between captures. You can comment on and vote for this in the [feature request post here](https://ideas.saleae.com/b/feature-requests/compare-two-captures/)!

Currently, the best way to compare signals from two or more captures is as follows:

* Save each capture to a file (options -> save capture).
* Open each capture in a new instance of the Logic software.
* There is no direct way to link the zoom levels or locations in each capture. However, it is possible to manually match zoom levels.
  * Resize each instance of the Logic software so they are all the same width.&#x20;
  * Place a timing marker pair in each capture, with the approximate distance between the timing markers equal to the amount of data you would like on screen at once (the desired zoom level).
  * Zoom in to the range defined by the timing marker pair by double-clicking on the "Go to pair" arrow button in the Timing Markers panel like shown in the image below. Do this for both instances of the software.

<figure><img src="../../.gitbook/assets/Screenshot 2023-07-21 at 7.00.19 PM.png" alt=""><figcaption><p>Double click to zoom into the timing marker pair</p></figcaption></figure>

* Once the zoom levels are matched, you can use the up and down keys on the keyboard to zoom in and out while maintaining a constant integer multiple of zoom from the original zoom to make it easier to maintain the same zoom level in each capture.

For some analyses, it may be easier to export data from each capture to a separate CSV file and then compare the data sets using third-party software, like Microsoft Excel.

{% content-ref url="../../user-guide/using-logic/exporting-data.md" %}
[exporting-data.md](../../user-guide/using-logic/exporting-data.md)
{% endcontent-ref %}





