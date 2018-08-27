# How Can I Compare Two Clock Signals for Synchronization and Drift?

## How Can I Compare Two Clock Signals for Synchronization and Drift?

There are several ways to compare two clock signals in a capture. However, before going further, it is recommended to review the worst case channel-to-channel skew introduced by the logic analyzer recording below.

{% page-ref page="worst-case-channel-skew.md" %}

There are several ways to compare two clock signals.

**Visual Inspection** If you are looking at a relatively small number of clocks, say less than one dozen, you could easily visually verify their alignment. In this case, use just one of the timing markers to help visually verify that the clock edges are aligned. Be sure you are zoomed in enough to see any variation in time between the two edges. For the highest accuracy recording, try to sample at the fastest digital sample rate possible and disable unused channels when possible. Zoom all the way in to the capture using either the mouse wheel or the up/down arrow keys.

**Quick Measurement-Based Verification** In the more likely case, a large number of clock cycles will need to be compared. There are several ways to do this. If you want to perform quick, basic tests, you can use the measurement annotation feature of the software to count total clock cycles and measure average frequency and duty cycle over a range of time for a specific channel. Try placing two measurements—one on each channel in question—over identical time ranges. Then enable the calculations for average frequency, average duty cycle, and complete periods. You can add a measurement using the "M" key on the keyboard, and then click twice—once over the channel at the start time and again on the same channel at the end time. You can edit the active measurements by right-clicking the measurement.

**Excel-Based Analysis** To measure the drift of each clock edge pair individually and produce statistics over a range of time, use the export data feature in the software. You will want to export two files. Each will contain all of the timestamped transitions from one channel.

* First, place a timing marker pair around the region you would like to compare if you do not wish to compare the two channels over the entire capture.
* Then, to create the first CSV file, open the main options menu and select Export Data.
* Change the "Channels to Export" from "Export all channels" to "Chose which channels to export."
* In the newly displayed list box, right-click and select "De-select all."
* Select only the first channel you would like to compare.
* If you want to only export between the timing markers, change the "Samples to Export" from "All time" to "Between Timing Markers: A1 - A2."
* Leave the "Export Format" set to "CSV."
* The CSV settings may vary if your capture contained an analog channel. That will not matter, and you can skip any settings that are not available.

  Use the following CSV settings:

    Include column headings

    Comma delimited

    Use timestamps

    Output one column for every bit

    Output one row per change

* Select Export and save to a CSV file named Channel1.csv or similar.
* Repeat the process for the second channel.

Now you should have two CSV files you can open in Excel, containing the precise timestamp for every transition. There are many methods to make comparisons between these files, but initially, you will need to copy-paste the contents of one file to the other. You may want to copy the second file into new rows in the first file, or you may want to paste the contents into the same rows at the bottom of the first file, most likely moving the transition data into a new column but leaving the timestamps in the first column. That will allow you to sort by timestamp. From there, you can use Excel formulas to calculate the magnitude of the difference in time between the transitions on the two channels. Note: If the two clock signals are at different frequencies or if one channel skips transitions or is, in general, out of sync with the other, a more advanced Excel analysis will be required. Feel free to [contact us](https://contact.saleae.com/hc/en-us/requests/new) for advice.

