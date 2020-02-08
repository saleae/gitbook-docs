# How Can I Extract Recorded Data Using Socket API?

The Saleae Logic software's scripting API was designed to allow developers to automate different operations in the Logic software.

Unfortunately, it does not provide a nice interface for reading and manipulating captured data out of the box.

To develop an application where you want to automatically capture data and then access it from your custom application, the following process has to be used.

1. Capture data using the CAPTURE or CAPTURE\_TO\_FILE commands.
2. Export the data using the EXPORT\_DATA2 or EXPORT\_ANALYER commands.
3. Load the exported data from disk separately into your application.
4. Parse the data into a usable format.

In the case of exporting analyzer results \(such as I2C packets, serial data, etc.\), you can skip Step 3 using an optional parameter that will stream the contents of the file over the socket as part of the response. However, the file still needs to be saved to disk, and the response still needs to be parsed since it is still in a text format.

More information about the socket API can be found here:

{% page-ref page="../../saleae-api-and-sdk/socket-api.md" %}

The first two steps listed above can easily be accomplished by using the sample code provided by the socket API.

The CSV export option, although it has the most settings, is usually the simplest export format to use since the results can easily be viewed in Excel.

The software has one other raw data export format for digital captures: VCD \(Value Change Dump\). Wikipedia and several other sites have good descriptions of this format.

Once you have selected an export format, you will need to learn how that format works and then write code to load the newly saved export file and parse out the information you need.

