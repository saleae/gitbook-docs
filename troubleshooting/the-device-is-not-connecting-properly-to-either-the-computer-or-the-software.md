# The Device Is Not Connecting Properly to Either the Computer or the Software



**Update: We've recently seen a number of reports about issues with the USB 3.0 cables shipped recently with the Logic Pro 8 and Logic Pro 16. If possible, please make sure to run the tests that are relevant to this issue, as well as the other tests in this guide.**

We're working on finding a new cable provider now, as well as the necessary testing to ensure that the cables are high quality and meet the USB 3.0 requirements.

Below is a comprehensive troubleshooting guide for this particular issue. Please check each step. If this guide is unable to resolve your issue, please record the results of each relevant step in the guide and send your results to Saleae support.

Before proceeding with the in-depth troubleshooting guide, please perform the following quick troubleshooting steps:

1. If you are on Windows and have USB 3.0 ports on your PC, please check your current host controller drivers and update them to the latest version. Detailed information can be found here: [https://trello.com/c/O0hA3XAF](https://trello.com/c/O0hA3XAF).

Note: The windows driver update check will NOT update USB 3.0 host controller drivers. These are not included in the Windows update driver database and must be manually updated.

1. Test the device with another USB cable. If you have a Logic Pro 8 or a Logic Pro 16, test them with a second USB 3.0 cable if you have one.

   If the replacement cable works, then the original cable is bad. Contact Saleae for a replacement.

2. Test the device on a second PC, preferably with a different USB cable. Also test on both computers with USB 2.0 and USB 3.0 ports.

If the device does not work on either computer with either cable on any port, it may need to be replaced. Please still follow the steps below to determine at what point the device fails.

1. If the device works at least once, it may be a problem that's solvable with software or driver updates or with a new cable. Please follow the below detailed guide.

If you still need to contact support, be sure to include all of the information requested at the end of this article.

**Part 1**

* [https://trello.com/c/4C9xOQnG](https://trello.com/c/4C9xOQnG)

**Part 2**

* [https://trello.com/c/PHcbChLC](https://trello.com/c/PHcbChLC)

## Contacting Support

If the device is not connecting to the software successfully after following the above procedure, you will need to contact support.

Please provide the following information:

1. The name of the Logic analyzer you are using \(Logic 4, Logic 8, Logic Pro 8, etc.\).
2. The operating system\(s\) of the PC\(s\) you have tested on. Include the version of that OS and if it is 32-bit or 64-bit \(e.g., Windows 7 x64 or OSX 10.10.5\).
3. Indicate if you were able to test with a second USB 3.0 cable or not \(e.g., the included USB 3.0 cable and an extra USB 2.0 cable\).
4. The results of the above tests. Indicate if the OS was able to detect the device with the software closed and on which ports. Also indicate if the device vanished after opening the software, and if so, include the console output of the software as described in that test.
5. On Windows, include the name and driver version of your USB 3.0 host controller\(s\). Open Device Manager and expand the Universal Serial Bus Controllers. Locate the USB 3.0 host controller. Most PCs will only have one. Names vary between host controllers, but they can usually be identified with a name like one of these:
   * XHCI host controller
   * USB 3.0 host controller
   * eXtensible Host Controller

     Once you have found the host controller, take note of the full name. Then check the driver version.

