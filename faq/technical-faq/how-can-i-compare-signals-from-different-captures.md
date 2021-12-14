# How Can I Compare Signals from Different Captures?

Currently, the software does not contain specific features for comparing data between captures. You can comment on and vote for these features here:

[https://ideas.saleae.com/ideas/SALEAE-I-468](https://ideas.saleae.com/ideas/SALEAE-I-468)

Currently, the best way to compare signals from two or more captures is as follows:

* Save each capture to a file (options -> save capture).
* Open each capture in a new instance of the Logic software.
* There is no direct way to link the zoom levels or locations in each capture. However, it is possible to manually match zoom levels.
  * Resize each instance of the Logic software so they are all the same width.&#x20;
  * Place a pair of timing markers in each capture, with the approximate distance between the timing markers equal to the amount of data you would like on screen at once (the desired zoom level).
  * Place these timing markers in each open capture with the same time duration between timing markers (can be placed anywhere; the delta T needs to be the same).
  * Shift-click and drag from one timing marker to the other in each instance of the software. This will cause the display to zoom to the same width of time in all instances of the software.
  * Use the up and down keys on the keyboard to zoom in and out while maintaining a constant integer multiple of zoom from the original zoom to make it easier to maintain the same zoom level in each capture.

For some analyses, it may be easier to export the raw data from each capture to a separate CSV file and then compare the data sets using Excel.

For comparing decoded protocol data, it is recommended to export each protocol analyzer's results to a CSV file and compare those results in Excel.
