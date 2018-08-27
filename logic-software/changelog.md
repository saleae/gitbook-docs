# Changelog

## Changelog

Changes in 1.2.29 Beta:

1. New calibration filter implementation, should speed up analog processing by about 2.5x
2. Fixed bug in auto-update system
3. Fixed bug in the analyzer minimum sample rate warning system

Changes in 1.2.28 Beta:

1. Increased USB failure logging
2. Minor changes

Changes in 1.2.27 Beta:

Bug Fixes:

1. rolled out auto-update for MacOS and Linux
2. JTAG analyzer no longer crashes the software for extremely long Shift IR/DR sequences, usually from FPGA bitstreams. 

Changes in 1.2.26 Beta:

New Features:

1. Improved software update process for Windows. \(Mac and Linux coming soon\)
2. Internal - finished test coverage of features in last release.

Bug Fixes:

1. Fixed crash bug caused by starting the software with a Logic Pro 8 or Pro 16 connected over USB 2.0.

Changes in 1.2.25 Beta:

New Features:

1. Added Async RGB Led Analyzer. \(supports single-wire LED protocols - WS2811, WS2812B, WS2813, TM1809, TM1804, UCS1903, LPD1886. Feedback welcome!\)
2. made it easier to drag analog channels
3. made vertical scrollbars more visible in 4 areas

Bug Fixes:

1. fixed issue with editing units for the trigger pulse width and for the glitch filter.

Changes in 1.2.24 Beta:

New features:

1. The UI is now responsive during the capture. However, analyzers cannot be edited during a capture, and the options menu is disabled.
2. Protocol search now works during the capture \(if a trigger is used, protocol processing starts when the trigger is found\)

Changes in 1.2.23 Beta:

New Features:

1. Data is now displayed live pre-trigger
2. Added "Skip Trigger" feature, which lets the user manually trigger a capture.
3. Changed software defaults to be more useful

Bug Fixes:

1. dialogs and popovers should now work with tiling window managers on Linux.
2. Modbus analyzer issue would cause garbage strings, fixed.
3. Fixed bug in data\_export2 socket command regarding binary exports.

Known Issues:

1. After a capture is complete, the annotations sidebar is inconveniently scrolled
2. stop\_capture socket command not working in the beta branch currently.
3. If a Pro 16 is connected over USB 2.0, the software can crash under certain circumstances. This is fixed internally and should be fixed in 1.2.25.

Changes in 1.2.22 Beta:

Bug Fixes:

1. Fixed crash introduced in last version when the device 'could not keep up'.
2. Fixed crash where pressing Ctrl+R during the capture would crash the software.

Changes in 1.2.21 Beta:

New Features:

1. Converted the capture progress dialog from a modal dialog into a sidebar panel.
2. During captures, the start button now becomes a cancel/stop button.
3. During captures, the live stripchat view now supports zooming in and out. Pan position is fixed to the latest data.

Bug Fixes:

1. Fixed trigger crash caused by setting the pre-trigger buffer to zero samples.
2. Fixed crash bug in graph rendering that held up stripchart zoom.

Changes in 1.2.20 Beta:

Bug Fixes:

1. Analog values in CSV exports have the correct display precision.
2. Analog values exported as ADC samples \(integers\) no longer have decimal points.
3. Crash bug fixed in MATLAB export, the software would crash if the starting sample index was larger than an unsigned 32 bit integer. Affected captures where considerable time passed before the trigger was detected.
4. `-disablepopups` command line argument now works properly on Linux and MacOS.
5. Crash bug fixed in pulse width trigger, which could crash pulses that spanned multiple USB data transfers. Bonus, the trigger is now covered with unit tests! This was a long time coming.

Changes in 1.2.19 Beta:

New Features:

1. First release of basic stripchart display. This keeps the latest 5 seconds of capture on the display during the recording. This is a minimal version of the new feature, and does not yet support changing the zoom level.

Changes in 1.2.18:

Bug Fixes:

1. Fixed crash issue when simulating the parallel analyzer with Logic 4.
2. Fixed clock reset problem with Logic 8, introduced in 1.2.15. For some customers, the Logic 8 was unable to record digital data under specific situation.

New Features:

1. Added ability to cancel a save capture operation in progress by pressing escape.
2. Added 3 new socket API functions: GET\_CAPTURE\_RANGE, GET\_VIEWSTATE, SET\_VIEWSTATE

Changes in 1.2.17:

Bug Fixes:

1. Fixed crash bug affecting the capture settings. Software would crash if only Analog channels are enabled and the capture duration was specified in samples, not in seconds or milliseconds.

Changes in 1.2.16:

Improvements:

1. Increased device throughput for all Logic Pro devices via Firmware & FPGA update. All Pro 8s and Pro 16s ever shipped support the higher throughout.
2. Added new Sample rates via FPGA update. Pro devices now support sampling at 250 MS/s and 125 MS/s. All Pro devices ever shipped support this.

   This supports:

3. 6 channels @ 500 MS/s. \(previously 4 channels\)
4. 12 channels @ 250 MS/s. \(250 MS/s was not previously available\)
5. All 16 channels @ 125 MS/s \(previously limited to 100 MS/s\)
6. The Logic Pro 8 can run all 8 channels at 250 MS/s, previously limited to 100 MS/s.

Bug Fixes:

1. Fixed issue with memory usage estimator - when specifying the duration of the capture in samples, instead of time, when both analog and digital channels were enabled, the estimated memory usage was considerably higher than reality.

Known Issues:

1. The higher throughput of the Pro devices changes the available sample rates for each given performance level. This may cause issues with saved setup files, and users of the socket automation API who have hardcoded the selected sample rate and performance option. This only affects captures with both analog and digital channels enabled at the same time. This should result in saved setup files failing to apply the saved sample rate settings, but other applicable settings will still load. The socket command `set_sample_rate` will NAK for sample rates that are not listed in `get_all_sample_rates`.

Changes in 1.2.15:

Improvements:

1. Support for Logic 8, Logic Pro 8 and Logic Pro 16 Revision 2 PCBs \(incremental component change, no new capabilities\)
2. Modbus Analyzer - added support for no parity bit and one stop bit
3. LIN Analyzer - raised max bitrate for special applications to 1 mbps
4. Added the full path to calibration files to the preferences dialog

Bug Fixes:

1. 1-Wire Analyzer did not return to normal speed from overdrive after a full length reset
2. Analyzer core - fixed bug in ConvertToSignedNumber that broke down for 32 bit or wider sgined words \(I2S analyzer was affected\)
3. Instantaneous measurement settings were not completely saved due to serialization issue
4. HDLC Analyzer - issue with CRCs and escape bytes fixed
5. Export bugs fixed when exporting digital data from a mixed-mode capture, when the LCM of the analog and digital sample rates was larger than the digital sample rate. CSV and binary export modes affected, timestamps and sample numbers. 

Changes in 1.2.14:

Bug Fixes:

1. Analyzer export dialog would not function properly under specific settings and initial conditions. Now working properly.
2. Fixed another issue when loading a saved setup file, related to the enabled channels in the setup file and the enabled channels in the software.
3. Fixed bug in scripting API, where if an invalid analyzer index was passed to export\_analyzer, the software could crash. Now it NAKs properly.
4. Fixed bug in scripting API, there was a race condition in is\_analyzer\_complete, that could return true if the analyzer had just started, but not yet reported its progress. This also required a trigger to be used, and for the pre-trigger buffer to be at least completely filled.

Other changes:

1. Console output now indicates if the socket server was able to successfully bind to the listening port - useful for debugging issues with the scripting API.
2. The device ID on the device calibration tab is now copy & paste-able.
3. Modbus analyzer - now properly supports all parity modes, and added indicators for stop bit and parity bits. 

Changes in 1.2.13:

Bug Fixes:

1. Fixed bug on MacOS - if an error occurred when a device was connected, the device would not reconnect after subsequent attempts until the software was restarted. 
2. Fixed bug on MacOS - on the latest MacOS release, on some computers, the device would not reliably connect to the software on each attempt.
3. Fixed bug when loading setups - software would crash when loading a setup file that used channels that were not currently enabled, under specific but common circumstances.
4. Fixed bug when loading setups - the enabled channels of Logic Pro 16 would not load when the device was plugged in over USB 2.0.

Other changes:

1. Improvement in USB host controller identification on Windows 10, friendly device name now displayed instead of driver name. \(only affects customer support issues\)
2. Optimization in analyzer bubble rendering path - mainly affects certain 3rd party analyzers.
3. Lin Analyzer now includes more information in the results when a checksum mismatch is detected.

Changes in 1.2.12:

Bug Fixes:

1. Fixed negative edge marker would not appear on yellow channels when color mode was enabled.
2. Fixed I2C analyzer bug, where decoding would go wrong when decoding during the capture process.
3. Fixed bug when exporting all channels of analog, over all time, when no digital channels were present. Only affected Socket API.
4. Fixed bug in Analyzer SDK Advance functions. It would break when moving more than 32 bits forward without changes due to U32 overflow.
5. Fixed bug in SPI analyzer that would crash the software if long periods of inactivity were recorded.
6. added extra check if thread should exit to SPI anayzer to fix issue where one particular caoture couldn't abort the SPI analyzer due to a specific data pattern.
7. Linux - statically link OpenSSL, now working properly on Fedora and other distros.
8. Windows - now including a copy of OpenSSL for QT, solving an unknown issue for several customers.

Changes in 1.2.11:

1. UNI/O analyzer working again.
2. UNIO analyzer - fixed issue where reset pulses would not be detected if the analyzer was not in the initial state.
3. Added exit check to USB analyzer - previously the USB analyzer couldn't be removed or restarted until it was done processing.
4. Fixed two issues in I2C analyzer in regards to missing ACK/NAK fields.
5. bug fix - bookmark display time was not offset for the trigger sample.
6. Fixed bug in timing marker names. It used to roll around like this: A,B,C...X,Y,Z,AA and then get stuck back at a single B due to a sorting problem. Now fixed.
7. Linux - fixed race condition that would cause the save capture progress dialog to never close when saving exceptionally small files
8. Linux: added "-workingdir" command line option to set file read/write location. The directory must already exist. Usage: ./Logic -workingdir ~/saleae
9. Updated UI framework to latest version.
10. Fixed UI problem that caused some UI elements to vanish on MacOS Sierra, for all users.

Changes in 1.2.10:

Big Fixes:

1. bug fix - analog export, raw ADC values now exported as integers instead of decimals.
2. bug fix - LIN analyzer. fixed identification of long break fields that occur after an incomplete packet.
3. bug fix - loading files. now file extension case is ignored.
4. bug fix - link in preferences for "more info" in host controllers was broken.
5. Linux build system - updated to Ubuntu 14, reduced dependencies. 

Changes in 1.2.9:

Bug Fixes:

1. Fixed issue with instantaneous measurement - when measuring the width of the last digital pulse in the capture, the measurement would either fail to display or it would falsely interpret the end of the capture as a transition.
2. We now dual-sign the Windows installer, using both a SHA-1 and SHA 256 signature algorithm. This allows the installer to function properly on older versions of Windows \(XP and Vista do not recognize SHA256 signatures\) as well as the latest version of Microsoft's Edge browser.

New Features:

1. Moved JTAG analyzer into a separate, open source github repository. After additional changes, we will move all of our analyzer sources into this model.
2. Removed beta branding from the software and merged beta branch back into the master branch.

Changes in 1.2.8:

Bug Fixes:

1. Fix - previously, when loading a saved file that had enabled glitch filters, the glitch filter would not apply until it was reset. Now it applies correctly.
2. Fix - under specific circumstances, the glitch filter could introduce 0 length pulses into the data, causing problems with the display and analyzers when enabled. It now works properly.
3. Fix - software no longer crashes when editing a glitch filter on a channel that is assigned to a in-active analyzers
4. Fix - exporting analog and digital data to CSV no longer crashes when sample numbers exceed 32 bit integers.
5. The existing command line option "-disablepopups" now correctly blocks the opt-in dialog on first run.
6. Updated Windows code signing cert to use a SHA256 hash algorithm. This removes issue when downloading installer with IE 11.

New features:

1. Added new socket command "EXIT" to close software.
2. Added new command line option "-socket" to start softwarewith socket server enabled.
3. Added new command line option "-uploaderrors" to automatically upload any error reports when software is launched, and auto-dismiss error uploader.

Changes in 1.2.7:

Please note - 1.2.6 was a quiet pre-release. If you are updating from 1.2.5, please review the notes for both 1.2.6 and 1.2.7.

Bug Fixes:

1. Fixed data export bug - exporting an empty capture will no longer crash
2. Fixed issue introduced in 1.2.6, crash on Windows when launched in full screen mode.
3. Added scroll bar to preferences dialog so the window does not grow vertically with the number of installed USB hosts
4. Fixed bug in USB analyzer search results - no longer missing data bytes in search results
5. Fixed analog &amp; digital Mixed CSV export - previously there were serious issues with this export format
6. Fixed bug in CSV export of just analog data - header was missing
7. Added support for socket API to NAK when file load failed

New bug:

1. Introduced bug that would cause header duplication with TSV export of analog data

Changes in 1.2.6:

Bug Fixes:

1. Fixed set of bugs regarding mixed mode \(analog &amp; digital\) captures where the digital sample rate was not an integer multiple of the analog sample rate. Significant changes.
2. Fixed set of bugs regarding the trigger, where certain trigger combinations could crash the software
3. Fixed bug in Logic that would cause the software to crash when the trigger condition was found and certain analyzers were active
4. Fixed crash when SWD analyzer ran on a capture started using a trigger
5. Fixed bug in LIN analyzer - sync frame is now correctly 13 bits.
6. Fixed bug in LIN analyzer export - no longer includes inter byte space, and is now correctly
7. Fixed bug in LIN analyzer export - fixed packet ID
8. Fixed bug in LIN analyzer - checksum calculation is now correct
9. Fixed bug in LIN analyzer - upper 2 bits of POD were not properly masked in export.
10. Fixed bug in LIN analyzer export - packet received after partial packet did not export properly, and partial packets are also exported properly
11. Fixed bug in LIN analyzer - if a data byte also happened to be equal to a valid checksum, the packet would prematurely end.
12. Fixed bug in LIN analyzer - clasic identifiers 0x3C and 0x3D in LIN 2.0 mode are now properly decoded.
13. Fixed bug in USB annalyzer - crash under specific data conditions
14. Fixed bug with Windows maximize on Windows OSes where multiple monitors were used.
15. Fixed bug where samples processed progress display was off by a factor of 1000.
16. Fixed bug where the analog channels would not select the correct voltage range for display
17. Fixed issue in Socket API - performance level now uses values that matches the GUI \(100, 80, 60, 40, 20\) and not older values \(100, 50, 33, 25, 20 \)
18. Added debug print statements to the export2 socket command. Monitor the console output of the software when debugging export2 command issues.

New bug:

1. Introduced bug on Windows OSes where the software was closed and restarted in full screen mode, which would cause a crash.

Changes in 1.2.5:

New Feature:

1. Added all new socket export command that replaces the old socket export command, fixes all socket export issues.

Bug Fixes:

1. Fixed trigger crash when analyzers are present \(introduced 1.2.4\)
2. Fixed bug where analyzer "reset starting sample" menu option would be disabled after changing tabs
3. Protocol search progress no longer says "NAN"
4. When sampling very slowly, the progress dialog will show units smaller than millions.
5. the "next transition" button at the right edge of each digital channel now moves out of the way when the vertical scroll bar is present.
6. Protocol search export now includes the user edited names of each analyzer, instead of the analyzer proper name.
7. Fixed crashes on device connection on windows where USB host controller did not respond to command. Now a warning message is displayed.
8. Fixed crash when a capture ends with 0 samples collected, when a trigger and analyzers were present
9. Fixed software lockup when a capture ends with 0 samples collected, and a trigger was present \(but no analyzers\)

Changes in 1.2.4:

New bug:

1. Software will crash if a trigger is used when one or more analyzers have been added to the capture, and the pre-trigger buffer completely fills before the trigger condition is detected.

New Features:

1. Added user selectable digital noise filter \(supports all products\)
2. The I2C analyzer detects missing ACK/NAK bits and displays a warning.
3. Added easy reset button to all trigger popovers
4. Added puse width trigger support to socket API
5. Added feature to JTAG to count clocks
6. Start analyzer at timing marker X now is persistent, and supports any timing marker
7. added overdrive-only support to the 1-wire analyzer
8. Largest firmware update for Pro devices since launch. Dramatic stability improvements over USB 3.0.
9. Pro devices now consume less power when not recording, and run much cooler.

Bug Fixes:

1. Manchester analyzer has max bit rate of only 6 Mbit. Fixed internally, will be out in next release.
2. Memory estimator broken for captures with less than 1 analog sample estimated, when analog channels are active \(fixed, will be released soon\)
3. CEC analyzer looses sync if there is a false end of message without mrore data. \(fixed, will be released soon\)
4. 1-wire analyzer does not support overdrive only parts. \(fixed, will be released soon\)
5. On OSX, USB timing errors can cause the software to crash when capturing over USB 3.0 \(Fixed, will release soon\)
6. On all platforms, certain USB failures will prevent further captures from working until the device is removed and reconnected \(fixed, will release soon\)
7. When exporting a combination of analog and digital data from a capture started from a trigger, the sample number or sample time display will not read correctly \(fixed, will be released soon\)
8. Fixed crash when Socket API client disconnected before response was sent
9. If socket API capture to file fails to write to the file due to a permissions error, it NAKs instead of ACKs now
10. fixed pulse width trigger issue, will now trigger if no max pulse length is specified, and the pulse never ends.
11. fixed bug in Socket API get analyzers &amp; export functions. proper indexes now used
12. Fixed bug in ARM SWD analyzer
13. Fixed voltage measurement bug
14. fixed data export issue not respecting start time when a trigger was used to create the capture
15. Fixed bug where it was possible for the software to open partially off screen
16. Fixed OSX crash when the application would be AppNap'ed \(TM\) while capturing
17. Fixed bug where on OSX the software would crash if launched by double-clicking a \*.logicsettings file

Changes in 1.2.3:

1. Fixed issue introduced in 1.2.2 regarding Logic Classic performance above 12 MSPS.
2. Added USB host specific 'quarks' support. Reset pipe now skipped only for ETRON and VIA host controllers on Windows.
3. Added additional debug data to improve diagnosis from remaining capture related crashes
4. Fixed crash bug in API when setting active channels and the trigger while the device settings popover is open
5. Fixed crash bug in API when setting a trigger with required states but no event\(edge or pulse\) defined
6. Fixed issue introduced in 1.2.0 that would potentially load the incorrect voltage mode on Logic16 classic when first connected.
7. Fixed crash when loading older save files saved on systems with custom analyzers, but loaded on systems without the custom analyzers
8. Fixed crash bug in API when exporting data over a file that is not currently accessible. Also suppressed warning pop-up when called from the API 9. Fixed display issue where protocol frames would appear incorrectly over graph at the start of a capture
9. The graphs now update as data is processed without user intervention. Previously, the graphs would only show newly processed data when the user moved the display.
10. Fixed issue regarding channel labels not updating properly after a channel settings reset.
11. Fixed issue when capturing with the API. the error dialog is suppressed and the sample rate is not automatically reduced
12. Fixed issue when exporting analog data. The end of the sample range is now correctly respected in all export cases
13. Fixed Crash bug when sampling via an API call, and then the socket is disconnected before the capture completes.
14. Fixed API command set\_capture\_seconds
15. Fixed crash bug regarding analog voltage measurement display issue
16. Fixed integer overflow crash bug in analog display system that occurs in very long, high speed analog captures.
17. UX - now disabling protocol search results export when all analyzers have been disabled from the search results menu
18. Fixed crash bug in the API when requesting progress when no session is active
19. Fixed API bug regarding export time span

Changes in 1.2.2:

1. First Windows update since 1.1.34. Change logs for 1.2.0 and 1.2.1 only include changes that affected OSX and Linux, some changes can be found in those lists, some here.
2. The jump from 1.1.34 to 1.2.2 represents about 6 months of development. This change log is not complete, and is just a highlight of the changes made. The development focused on bug fixing and stability. It also included lower sample rate support for analog channels to support long term data logging applications \(tested up to 24 hours\). It also includes the missing features from Logic 4 to allow digital-only captures. It also includes the update to QT5.4.1, a dramatically newer version of the cross platform UI framework we use. This in itself fixed a number of UI issues.
3. Switched to Dynamic QT5 due to bug in another required library on Windows. \(affects Windows only\) We will switch back to static once the bug is fixed in September. This also affects custom analyzer on Windows
4. Serious improvements in debugability of crash reports, better debug data and automated crash processing here at Saleae.
5. Updated timing restrictions in Atmel Single Wire Interface analyzer \(SWI\) and added support for newer commands
6. Fixed bug in calculation of narrowest pulse width in digital measurement
7. Fixed analog binary export and added format overview
8. Logic 4 now supports digital only captures at several sample rates.
9. Added lower sample rates \(10 Hz to 125 KHz\) to all new products to support long term recording with lower memory usage.
10. As mentioned in 1.2.0 and 1.2.1 change logs, data processing pipeline has massive bug fixes and improvements, focusing on proper trigger operation when analog channels are present, and multi-threaded processing of analog and digital data. The trigger also has performance improvements.
11. Fixed graphical bug in analog display
12. Fixed support for multiple instances of the software - previously protocol search results were not multi-instance compatible.
13. updated SPI analyzer protocol search results to display warnings and errors
14. Fixed bug in timing display for specific zoom levels
15. Fixed bug when enabling or disabling analyzers from the protocol search results
16. Fixed crash bug affecting specific host controllers where aborting a capture could take considerably longer than expected, causing the next capture to crash
17. Fixed UX issue where edited names of protocol analyzers in certain locations would not be displayed
18. Fixed bug in parallel analyzer - last frame now displayed
19. Fixed issue in JTAG analyzer with default bit order
20. Fixed issue where analyzers were not loaded from a logicsetup file when applying settings to an existing capture
21. Fixed issue with saved file name extensions
22. Fixed issue where Logic did not show up in Task Manager on Windows 7 \(affected automation users\)
23. Fixed display issue with analyzer processing percentage
24. Added Single Wire Debug \(SWD\) analyzer for ARM debuggers
25. Fixed byte ordering of SMBus analyzer
26. Fixed bug in UNIO analyzer
27. Fixed bug in LIN analyzer related to the tolerance of the size of the break field.
28. Fixed Modbus byte ordering affecting specific functions
29. Added new ROM command to 1-wire analyzer, alarm search.
30. API now waits for export to complete before sending ACK or NAK during export commands
31. Fixed issue where Ctrl+S could be used to save the capture before processing is complete
32. Fixed crash bug related to race condition when changing sessions
33. Fixed crash bug in API when setting the performance level in certain situations
34. Fixed Linux window manager specific issues with popovers, removed window manager specific code.
35. Updated the USB analyzer with several bug fixes
36. Fixed issue with graphical display of protocol search
37. Fixed flickering on OSX
38. Numerous UI fixes, including text display, keyboard focus, update frequency, and more
39. Added UI for limiting Transfer sizes on Linux - meant for troubleshooting older kernel issues.
40. Fixed threading crash bug in protocol search when using a number of analyzers at once.
41. And about 30 other things too minor to mention.

Many more fixes to come in the future!

Thanks,

Chris, Aparna, Charles, Mark

