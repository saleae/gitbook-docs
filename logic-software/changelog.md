# Changelog v2

Hello Again!

Change log:

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

