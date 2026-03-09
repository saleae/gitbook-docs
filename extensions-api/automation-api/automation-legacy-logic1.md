## Legacy Socket API Automation for Logic 1.x

<div class="callout callout-warning">
<p>Due to the official release of the newer <a href="https://saleae.github.io/logic2-automation/">Logic 2 Automation API</a>, we have officially ended support for our Legacy Logic 1.x Automation API. We highly recommend existing users who currently use our legacy Automation API automation utility with Logic 1.x to migrate their automation utility to Logic 2 using our new Automation API above. Please <a href="/contact">contact us</a> if you need help with that.</p>
</div>

Our Legacy Automation API (which we called Socket API in the past) allows users to programmatically configure our software and trigger captures, and requires the older Logic 1.x software. 

The basic premise is that you can develop an application that connects to this socket server and then sends simple text commands to the software such as "CAPTURE\_TO\_FILE" to trigger specific actions. The software will then respond with "ACK", "NAK", or other information once the command has executed.

In addition, please keep in mind that newer versions of our Logic hardware (after revision 3.0.0) will no longer work with the older Logic 1.x software. If this poses any issues, please [contact us](/contact). A brief summary of our hardware revisions are described in the support article below.

<a class="content-ref" href="/support/specifications-hardware/datasheets-and-compliance/logic-hardware-revisions">Logic Hardware Revisions</a>

### Prerequisites - Software Settings

* Check that you are using the latest version of our legacy Logic 1.x software below.

<a class="content-ref" href="/support/logic-software/download-and-installation/older-software-releases">Logic 1.x Download (Deprecated)</a>

* We highly recommend suppressing notifications and error messages while running your automation script. These notifications may block normal operation and can be suppressed by starting the application with the command line option `-disablepopups` 
* Next, we must enable the scripting socket server. Open Options Menu at the top of the software.
* Select Preferences
* Under the Developer Tab, check the box to enable socket server
* Save Changes
* Accept firewall changes if the OS requests it

<div class="callout callout-warning">
<p>For automated environments, the <code>-socket</code> command line option was previously used to automatically enable the scripting socket server. Unfortunately, we cannot recommend this moving forward due to a <a href="https://github.com/saleae/SaleaeSocketApi/issues/14#issuecomment-656691914">known bug</a>. We will fix this in a future release, which will be integrated into <a href="https://discuss.saleae.com/">Logic v2</a>. For now, please use the Preferences Window as shown above to enable the socket server.</p>
</div>

### Socket API User’s Guide

The document below lists the supported commands using our automation utility.

* [Logic Socket API User’s Guide](https://github.com/saleae/SaleaeSocketApi/blob/master/Doc/Logic%20Socket%20API%20Users%20Guide.md)

### Python Wrapper - Automation Method #1

* [Python Wrapper and Documentation](https://github.com/ppannuto/python-saleae)
* [Python Package Index (PyPI)](https://pypi.org/project/saleae/)
* [Python Sample Application](https://github.com/saleae/python-saleae-cli)

For simple automation requirements, we suggest using our [Python Sample Application](https://github.com/saleae/python-saleae-cli). This is a basic command line utility to automate the Saleae Logic software, which can be used to automatically take a series of shorter captures over an extended time period with basic export functions.

The [Python Sample Application](https://github.com/saleae/python-saleae-cli) implements a very basic form of data export via csv. If more export options are needed, please see the article below:

<a class="content-ref" href="/support/extensions-api/automation-api/export-data">Export Data via Socket API</a>

You may also send supported socket commands directly via the terminal using the Python wrapper, as shown below. See our [list of supported commands](https://github.com/saleae/SaleaeSocketApi/blob/master/Doc/Logic%20Socket%20API%20Users%20Guide.md).

```
C:\Python>python.exe
>>> import saleae
>>> s = saleae.Saleae()
>>> s._cmd('set_capture_seconds, 1')
>>> s._cmd('capture')
```

### C# Wrapper - Automation Method #2

For more complex automation requirements, you can refer to our C# Wrapper below:

* [C# Wrapper and Documentation](https://github.com/saleae/SaleaeSocketApi)

### Other Third-Party Implementations

* [Utility for automatically starting captures](https://discuss.saleae.com/t/trigger-capture-from-command-line/297)
* [C# data logging UI](https://github.com/quarkng/SaleaeLogger)
* [C# logging console application](https://github.com/DuckPaddle/LumberJack-for-Saleae)

If you would like to share your application, feel free to send us a link to it on any repository hosting provider, and we can share that link here.

### Which Export Options are Available via Socket API?

The Socket API currently supports the raw export feature and the protocol-specific export feature. However, the socket API does not support exporting the protocol search results.

### How Can I Take Long Captures That Cannot Fit into Memory? 

The basic process is to use one command over and over again. That command is "CAPUTRE\_TO\_FILE". Once the capture has completed and the file has been saved, the software will reply over the socket "ACK". Then the software is ready to receive a new capture to file command.

**Importing the Captured Data for Processing**

First, use the EXPORT\_DATA2 function to export the capture to a format that’s the easiest for you to process. Binary export is recommended for dense, long captures, but the CSV format could be easier to parse if you are not used to working with raw binary files.

The export command will ACK once the export is complete. After that, you will need to load the exported file and parse it how you see fit.

There is no way to access the captured data in real time through this API. The protocol analyzer SDK is the closest option to real-time data access, but it is only intended for developing custom decoder plugins.

**Automatically Exporting Protocol Data Such As SPI**

You may also want to automate the process of exporting the decoded protocol data. Additional commands for this can be found in the documentation.

**Suppressing Notification Dialogs**

When running an automated script, you will want to prevent standard dialogs from appearing that block normal operation. These dialogs include:

* Capture failure message (can’t keep up, failed to start, etc.)
* Error reporter
* Out of memory exception message

To suppress these popups, simply start the application with the command line option "-disablepopups".

**Common Applications**

*   Automating the process of starting a capture with a trigger and exporting the protocol results after the capture

      This can be done by either pre-setting the trigger in the software or setting it using the API command SET\_TRIGGER.

      The basic flow to automatically start the capture and export protocol results would look like this:

      CAPTURE or CAPTURE\_TO\_FILE

      Call IS\_PROCESSING\_COMPLETE in a loop until it returns TRUE

      GET\_ANALYZERS and get the index of your analyzer (which can change between captures)

      EXPORT\_ANALYZER 

      Please review the documentation for specific command arguments.

