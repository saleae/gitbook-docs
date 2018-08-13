# All Known Issues

#### Known Issues in the Latest Logic Software

* On XMonad, on Linux, popovers stop working properly.
* Pressing and holding command + R on OSX causes the software to crash because consecutive captures do not completely finish before the next tries to start.
* HDLC analyzer decodes bits in the wrong order in some cases.
* When resizing the software on Ubuntu 14, the software "walks" in the opposite direction.
* CAN analyzer does not export the last packet.
* USB Analyzer does not decode CRCs correctly.
* In some cases, the SWD analyzer does not simulate data properly.
* The software does not display an error and instead fails silently when an error occurs during a file save if there is not enough disk space.
* Protocol search results are out of order or missing with multiple analyzers active.
* On Linux, the protocol search has threading problems that negatively affect performance significantly.
* Protocol search may be missing results from the very end of a protocol.
* On OSX, the software will crash when a device is connected if IOCreatePlugInInterfaceForService returns an error.
* On Windows, the software will crash when a device is connected if SetupDiGetClassDevs returns an error.
* On OSX, it's possible to move the software under the top menu bar, making it hard or impossible to retrieve. 
* Do not plug a lot of devices into a Linux machine at the same time.
* On OSX mainly, but other platforms too, when scrolled outside of the data range, the display does not always snap back right away.
* Sometimes, on Linux, while the original Logic16 is changing voltage modes, removing Logic16 can crash the software.
* On Linux, when you choose not to upload an error report, the core file is not always deleted, so you may be asked again the next time you open the software.
* Unknown crash bug: Sometimes when an analyzer's results set does not exist, the analyzer display item will query it, causing a crash. That may be caused by a problem with serial autobaud.
* Unknown crash bug: When starting a capture, if a Pro device or Logic 8 fails to respond to an ADC configuration command, it will crash instead of fail with an error message.
* Unknown crash bug: When a capture starts with the original Logic and Logic16, if the device fails to configure, the software will crash instead of fail with an error message.
* Screenshots saved to a clipboard won't paste into Microsoft office applications \(but will paste into MS paint, etc.\).
* Measurements in the software do not show enough resolution.
* On Windows 7, when display size scaling \(DPI\) is changed, some parts of the software will not fit properly, and text might be cut off. This is a bug in the window manager \(QT\) and does not affect newer versions of Windows \(8 and 10\).
* The analyzer API function GetNumberString, when in ASCII mode, replaces "," with "COMMA" in all cases. It should only do this when exporting to a CSV file.
* In general, CSV exports in the software do not properly protect commas and double quotes. If these occur in the data when displayed in ASCII, the exported file may not open properly in Excel or other spreadsheet programs. One way to work around this is to export the data as a comma delimited .txt and then import the comma delimited .txt file into Microsoft Excel.
* Exporting data with tab delimiters still uses commas in the header.
* I2C export: The exported timestamp corresponds to the first data byte and not the address byte.
* ModBus: The analyzer currently only works with no parity enabled and 1 stop bit. Missing support for parity modes, and no parity+2 stop bits.
* Matlab export: Large exported files won't load in matlab, such as over 1.5 seconds of 50 MSPS analog data.

