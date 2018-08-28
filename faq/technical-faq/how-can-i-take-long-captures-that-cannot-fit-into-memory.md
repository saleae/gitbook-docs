# How Can I Take Long Captures That Cannot Fit into Memory?

## How Can I Take Long Captures That Cannot Fit into Memory?

**Managing Memory Usage in the Saleae Application**

The Saleae software does not support streaming captured data to disk. Instead, a single capture has to reside in memory until it is saved and closed.

There are several ways to reduce or manage the memory usage of the software:

* Reduce the capture duration.
* Reduce the analog sample rate if analog channels are used.
* Save and close captures before taking new ones. After saving the capture \(options -&gt; save capture\), move the capture to a new tab \(button next to the capture tab\) and then close it using the tab menu \(tab gear icon -&gt; close\).
* Disable analog up-sampled pipeline in the software preferences \(options -&gt; preferences -&gt; capture tab -&gt; uncheck "Enable Upsampled Pipeline" \) to reduce analog memory consumption by about 4 times.

**API Information**

To get around this issue, an API can be used to automate the process of taking shorter captures, saving them, and then starting more captures. That will allow you to break a single long capture into a series of shorter captures with only small gaps between captures.

The software includes a system for automating normal software interactions such as changing capture settings, starting captures, saving files, or exporting data.

To do this, the software includes a TCP socket server. You can develop an application that connects to this socket server and then sends simple text commands to the software such as "CAPTURE\_TO\_FILE" to trigger specific actions. The software will then respond with "ACK", "NAK", or other information once the command has executed.

You can find the latest socket API and documentation here: [https://trello.com/c/FueLhKZ8](https://trello.com/c/FueLhKZ8)

The documentation and a sample C\# application are contained in the zip file posted there. Links to several open source implementations are also posted.

**Automating Long Recordings**

The software already has exceptionally deep buffer capabilities. However, there are still cases where longer recording would be preferred, for hours or even days. Since the software can't be used to record continuously for that length of time, the long capture must be broken into a series of shorter captures that are saved to disk. That results in small delays between captures that will result in lost data; however, in most cases, the save and capture restart time is well under 1 second. This operation usually only needs to be performed once an hour.

For this operation, you can either use the existing sample code or create your own application from scratch. The basic process is to use one command over and over again. That command is "CAPUTRE\_TO\_FILE". See the documentation for more details. Once the capture has completed and the file has been saved, the software will reply over the socket "ACK". Then the software is ready to receive a new capture to file command.

**Importing the Captured Data for Processing**

Once a capture is complete, the captured data will still be in the Logic software and not sent to your custom application. In order to access that data for further processing, you will need to export that to a file and then load that file into your application. The exception is protocol data, which can be streamed through the socket interface.

First, use the new preferred EXPORT\_DATA2 function in the latest socket API to export the capture to a format that's the easiest for you to process. Binary export is recommended for dense, long captures, but the CSV format could be easier to parse if you are not used to working with raw binary files.

The export command will ACK once the export is complete. After that, you will need to load the exported file and parse it how you see fit.

There is no way to access the captured data in real time through this API. The protocol analyzer SDK is the closest option to real-time data access, but it is only intended for developing custom decoder plugins.

**Automatically Exporting Protocol Data Such As SPI**

You may also want to automate the process of exporting the decoded protocol data. Additional commands for this can be found in the documentation.

**Suppressing Notification Dialogs**

When running an automated script, you will want to prevent standard dialogs from appearing that block normal operation. These dialogs include:

* Capture failure message \(can't keep up, failed to start, etc.\)
* Error reporter
* Out of memory exception message

To suppress these popups, simply start the application with the command line option "-disablepopups".

**Common Applications**

* Automating the process of starting a capture with a trigger and exporting the protocol results after the capture

    This can be done by either pre-setting the trigger in the software or setting it using the API command SET\_TRIGGER.

    The basic flow to automatically start the capture and export protocol results would look like this:

    CAPTURE or CAPTURE\_TO\_FILE

    Call IS\_PROCESSING\_COMPLETE in a loop until it returns TRUE

    GET\_ANALYZERS and get the index of your analyzer \(which can change between captures\)

    EXPORT\_ANALYZER 

    Please review the documentation for specific command arguments.

**Limitations**

There are several limitations to this approach that you should consider:

* The gaps between captures are unavoidable.
* The captures cannot be appended to each other to produce one extra long capture later. They will stay in separate files.
* The protocol results cannot be accessed in real time. Instead, you must wait for the capture to complete before you can export the protocol results.

If you have any questions or need any help working with the scripting API, please [contact support](https://support.saleae.com/hc/en-us/requests/new).

