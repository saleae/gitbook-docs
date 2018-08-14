# How Can I Extract Recorded Data Using the Socket API?

The Saleae Logic software's scripting API was designed to allow developers to automate different operations in the Logic software.

Unfortunately, it does not provide a nice interface for reading and manipulating captured data out of the box.

To develop an application where you want to automatically capture data and then access it from your custom application, the following process has to be used.

1. Capture data using the CAPTURE or CAPTURE\_TO\_FILE commands.
2. Export the data using the EXPORT\_DATA2 or EXPORT\_ANALYER commands.
3. Load the exported data from disk separately into your application.
4. Parse the data into a usable format.

In the case of exporting analyzer results \(such as I2C packets, serial data, etc.\), you can skip Step 3 using an optional parameter that will stream the contents of the file over the socket as part of the response. However, the file still needs to be saved to disk, and the response still needs to be parsed since it is still in a text format.

More information about the socket API can be found here: [https://trello.com/c/FueLhKZ8](https://trello.com/c/FueLhKZ8)

The first two steps listed above can easily be accomplished by using the sample code provided by the socket API.

The Saleae software contains a number of different export options. A basic overview of export can be found in the user's guide here: [https://trello.com/c/7zCKDekD](https://trello.com/c/7zCKDekD)

Basic information about exporting the protocol analyzer results can be found in the user's guide here: [https://trello.com/c/rOusLFdv](https://trello.com/c/rOusLFdv)

For more information about the export format of protocol analyzers, which are protocol-specific and have no options, please take a look at this article: [https://trello.com/c/TOF2dSNA](https://trello.com/c/TOF2dSNA)

For more information about the binary export format, please see these two articles: [https://trello.com/c/JTOnNKWO](https://trello.com/c/JTOnNKWO) [https://trello.com/c/oM61cowI](https://trello.com/c/oM61cowI)

For more information about the MATLAB export format, please see this article: [https://trello.com/c/J49UM3CT](https://trello.com/c/J49UM3CT)

The CSV export option, although it has the most settings, is usually the simplest export format to use since the results can easily be viewed in Excel.

The software has one other raw data export format for digital captures: VCD \(Value Change Dump\). Wikipedia and several other sites have good descriptions of this format.

Once you have selected an export format, you will need to learn how that format works and then write code to load the newly saved export file and parse out the information you need.

We are happy to provide support for this if you run into any trouble parsing the export formats. Just contact support if you have any questions.

