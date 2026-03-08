# Saving or Loading Anything Crashes the Software

### Dell Backup and Recovery Compatibility Issue

We have recently discovered a software compatibility issue with our software and Dell Backup and Recovery, a program pre-installed on some Dell computers.

This affects Saleae Logic software releases from 1.2.11 and newer. That affects Dell Backup and Recovery versions older than but not including 1.9.2.8.

This specifically causes a crash when you try any action that loads a save or load file window. That includes:

* saving a setup or capture file
* loading a setup or capture file
* exporting analyzer results or exporting raw data
* anything else that has an open or save file dialog

Older versions of Dell Backup and Recovery have a compatibility problem with programs like ours that use the QT framework for their GUI.

Fortunately, there is an easy fix. Just update Dell Backup and Recovery to the latest version.

We already have reports from several customers that updating to version 1.9.2.8 fixes the problem (the latest at the time of writing).

Please update to the latest version of Dell Backup and Recovery or uninstall that program.

If the software still crashes when attempting any of the mentioned file saves or loads, please contact support.
