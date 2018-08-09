# Changelog v1

Changes in v1.2.1: \(Linux and Mac only\)

1. OSX Specific Changes: 
   1. UI performance is greatly improved!
   2. Software no longer flickers on newer versions of OSX
   3. Screenshots now work on newer versions of OSX
   4. Software is now properly signed and should install without a warning.
   5. Maximizing and minimizing now work properly.
   6. Added support for scrolling left and right with a trackpad, as well as smooth trackpad control.
   7. OSX build system updated to Yosemite
   8. Added better crash reporting details to OSX
2. Linux Specific Changes: 
   1. Created new compatibility release for systems with older standard libraries, allowing us to continue to use more modern compilers while maintaining better backwards compatibility. \(feedback welcome\)
   2. Added feature to allow successful USB 3.0 captures with older kernels \(3.3 and older\) This feature is in testing, and requires command line options. Please contact support for assistance if you are trying to use USB 3.0 ports on systems with older kernels.
   3. Fixed underlying windowing issue that required window manager specific fixes. Software no longer switches on window manager.
3. Added additional details to usage reports \(opt-in only\)
4. Added memory allocation exception handling \(in progress, mainly for crash data collection at this point\)
5. Improved bug tracking, crash report analysis, crash and capture failure metrics.

New Features in 1.2.0: \(Linux and Mac only\)

1. Lower analog sample rates for all 4 products, down to 10 SPS
2. Digital only sample rates for Logic 4 for much longer digital recordings
3. Data processing should no longer get backlogged when using a trigger with an analog channel, allowing the trigger to be used when analog channels are active
4. Dramatic improvement in the digital processing speed, including multi-threading
5. Added features to Socket API to check for processing completion of capture and analyzers
6. Fixed multiple bugs in the Socket API
7. Updated numerous Analyzers with fixes and updated commands
8. Significant update to the UI framework, QT - updated from 4.8.1 to 5.4.1
9. Fixed an uncountable number of bugs!

Bugs fixed in 1.1.34:

1. Fixed bug where software would crash the second time you start a capture with an analyzer present.

Bugs fixed in 1.1.33:

1. Bug fixed preventing the Logic software from launching correctly on Windows 64-bit systems.

Bugs fixed in 1.1.32:

```text
 Note:   
 The analyzer SDK has been updated to work with the latest version of the software.  
 The latest SDK and source code can be downloaded from: https://trello.com/c/YHJKmcns  

 There is a minor change required in code for custom analyzers to work with the latest software ( 1.1.32 ) as explained in https://trello.com/c/0QQ5hZua
```

1. Fix for: Add 4 tabs with analyzers and data, delete the first tab. The software then crashes.
2. Fix for: Protocol search race condition that caused software to hang when loading a .logicdata file with disabled analyzers
3. Fix for: Software crashes when it does not have write/or read permissions in the folder
4. Fix for: Unable to drag the software across multiple monitors set up vertically.
5. Linux core file dumps are now compressed before uploaded.
6. Added option to upload usage statistics.
7. Fix for: Search string doesn't get erased or used after you click "show all results".
8. Fix for: High CPU utilization with protocol search
9. Fix for: Threading bugs on protocol search
10. Fix for: Software crashes if you copy analyzers from tab to tab in most cases
11. Fix for: Software crashes sometimes when lowering sample rate automatically \( after the dialog box pops up \)
12. Fix for: Software sometimes crashes when capture is stopped very close to completion
13. Fix for: Software crashes when trying to load a .logicsettings file with more number of channels than currently active in the software
14. Fix for: Sometimes the timing display shows: "0 ms : 0 s : 200 us" the ms and s are swapped.
15. LED improvement - added off option.
16. Fix for: After saving a capture, the tab note doesn't change to the file name.
17. Analyzer SDK updated to work with latest version of software

**Bugs Fixed in 1.1.31:**

Fix for bug that caused search results to be empty when one of the analyzers were disabled All analyzers have search results now. Fix for - Duplicate results in SPI “Decoded Protocols” Fix for - Search string doesn't get erased or used after you click "show all results". Fix for - Software crashes when lowering sample rate automatically \( after the dialog box pops up \) Enabling and disabling channels will retain channel names Fix for - Software crashes sometimes when the capture is stopped at near end of completion LED settings has an OFF option Fix for - After saving a capture, the tab note doesn't change to the file name. Exporting only analog channels now works. Exporting of calibrated voltages is now supported for .csv files. Exporting data between timing markers is now supported. Fixed bug that would cause the software to freeze when loading a session. Updated Socket API to work with all supported function calls in SDK. Fixed bug where a measurement would not disappear when you hide the channel it was placed on. Fixed bug in OSX calibration where samples were not being lined up at all. Instantaneous measurement now shows up in screenshots created in the software. Channels names are now saved even when the channel no longer exists for the currently selected device. Measurements now default their name to the name of the channel they are placed on. Fix for - CPU utilization maxes out when Search is enabled. USB 3.0 support now working on Linux Added feature to enable all 16 channels of Logic Pro 16 when connected over USB 2.0. \(note, this may require a powered USB 2.0 hub. Details in software preferences\)

**Bugs Fixed in 1.1.30**

1. Crash bug when closing the device settings popover by clicking in the graph area with a capture active
2. High CPU usage even after data have finished processing and indexing for search
3. Switching tabs while protocol search was disabled caused crash

**Bugs Fixed in 1.1.29**

1. Bug preventing user from disabling some SPI channels
2. Crash bug when loading capture with unused analyzers
3. Protocol search: Overhaul fixing crash bugs when switching tabs, loading and saving, closing tabs, starting captures, and more
4. Crash bug when closing the device settings popover by clicking in the graph area with a capture active
5. Protocol search: Bug where changing tabs would overwrite enabled analyzers
6. Protocol search: Bug was that \*.csv was not appended to file name
7. Digital processing speed for new products significantly improved. Processing with analog still slow; will no longer slow down digital in next release.
8. Re-enabled logic setup files
9. Fixed crash when stopping a capture before the trigger is active with one or more analyzers active
10. Calibration support added. Phase between digital and analog, DC accuracy, and analog frequency response now supported. See preferences dialog for calibration information about your device. It may be up to 1 week before all cal files are updated. See calibration documentation for more information.
11. Timing marker units now shown when not expanded.
12. Fixed issue where timing markers didn’t display properly when the trigger was used.
13. Fixed most common crash bug: integer sign error in analog measurement.
14. Updated HD44780 analyzer to support protocol results.
15. Fixed crash bug when changing capture settings before previous capture’s analyzers had finished.

**Bugs Fixed in 1.1.28**

1. Protocol bubbles and measurements are MUCH easier to read.
2. Added tool tips and shortcut info to menus.
3. Added preferences tab for calibration data .
4. Added disabled element UI support to performance selection.
5. Updated performance options to support 100, 80, 60, 40, and 20 percent.
6. Fixed bug where closing the trigger settings popover could crash the software.
7. Fixed bug with performance option no longer a valid message.
8. Fixed analyzer simulation crash bug for Logic 8 and the pro devices.
9. Fixed bug where changing the capture settings after capturing with an analyzer caused crashes.
10. Fixed bug where double-clicking a logicdata file didn't open that file.
11. Fixed bug where double-clicking the stop capture button crashed the software.
12. Fixed bug where software would crash if non-ASCII characters were in protocol search path.
13. Fixed analyzer simulation crash bug for all new products.
14. Fixed issue where software crashed when running on Windows with a username that has non-ASCII characters.

**Bugs Fixed in 1.1.27**

1. Bug added in 1.1.26 that caused software to crash on launch after upgrading from previous version, under common circumstances.
2. Fixed launch error "attempting to reference memory" affecting Windows 7 x64 users.

**Bugs Fixed in 1.1.26**

1. Fixed crash bug with sample rate performance options.
2. Fixed several display issues with voltage measurements.

**Bug Fixes in 1.1.25**

1. Logic 16 5V support has been re-implemented.
2. XFCE desktop where you couldn't edit timing duration.
3. Linux crash when run as root.

**Bugs Fixed in 1.1.24**

1. Added Logic 8 support.
2. UI issues with KDE desktop environment fixed.
3. Fixed load old file bug.
4. Pulse counters now use more than 4 characters to output result.
5. Capture save button now waits for capture to end.
6. Logic 4 firmware update.
7. Multiple issues with the settings popover.
8. Fixed Ubuntu 12.04 backward compatibility issue.
9. And many more!

**Bugs Fixed in 1.1.23**

1. Opening old save files now works.
2. Fixed bug where long captures would get corrupted.
3. Software now accurately calculates memory being used by the current capture.
4. Instantaneous measurement no longer displays when your mouse is over an analyzer bubble.
5. Fixed crash when simulating Logic 4 and then you plug in a device.
6. Fixed crash issues with Protocol Search disabled.
7. And many more!

_New Features in 1.1.21+\*_

1. Logic 4 + 8 + Pro 8 + Pro 16 support
2. Drag N' Drop Channel Reordering
3. Channel selection
4. Scrollable channel area
5. Tons of new hotkeys and shortcuts
6. New voltage measurement tool for analog
7. Estimated memory usage now displayed in start popover
8. Processing progress for capture now displayed in titlebar
9. Various bug fixes

