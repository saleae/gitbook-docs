---
description: Advanced troubleshooting instructions for unusual USB problems
---

# Reinstall USB Host Controller Drivers

This guide explains how to uninstall your computer's USB 3.0 host controller drivers, allowing them to automatically be re-installed.\
\
This process has been shown to solve a handful of unusual USB 3.0 connectivity issues.\
\
This guide is intended for Windows 10 and Windows 11 users who are having unusual USB 3.0 connectivity issues, and generally should only be followed at the request of Saleae support.



## Prerequisites

* Make sure your computer is up to date with Windows Update.
* Make sure your Saleae devices are disconnected from the computer.
* Make sure the Logic software is not running.

## Step 1: Locate your USB 3.0 host controller in Device Manager

* Open the device manager by searching the start menu for device manager.
* Expand the section called "Universal Serial Bus Controllers"
* Locate your USB 3.0 host controller(s).
  * Names usually include the words "host controller", "USB 3", "USB 3.1", "USB 3.2", and/or "Extensible".
  * Examples:
    * AMD USB 3.0 eXtensible Host Controller - 1.10 (Microsoft)
    * Intel(R) USB 3.1 eXtensible Host Controller - 1.10 (Microsoft)
  * There are usually 1 to 3 of these listed.

<figure><img src="../.gitbook/assets/image (24).png" alt=""><figcaption></figcaption></figure>

## Step 2: Uninstall each USB 3.0 Host Controller

* Right click each host controller and select "Uninstall Device".
* Click "uninstall" on the prompt.
* Repeat this for each USB 3.0 host controller.

<figure><img src="../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>

## Step 3: Restart your computer

* The title says it all.



## Step 4: Verify

* Repeat Step 1, and make sure the host controllers have re-appeared after the restart.
* Connect your Saleae device, and open the Logic software. Verify that the device is detected, and that you are able to capture normally.



