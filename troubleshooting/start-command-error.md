# Error Message: StartCommandError

In the Logic 2 software, you may encounter a _StartCommandError_ message when starting a capture like shown below.

![StartCommandError Message](<../.gitbook/assets/Screen Shot 2020-10-06 at 5.04.34 PM.png>)

### Known Solutions

This error message appears when the Start command fails. The solutions below will typically fix most cases.

* Connecting directly to a PCs USB port rather than through a USB hub
* Connecting to a different USB port on the PC
* Removing and reconnecting the logic analyzer to the PC
* Removing all other USB devices from the PC (we have seen USB debuggers interfere with Logic's communication with the PC)

We have also seen this issue in the past when using our logic analyzer with Etron USB host controllers. If you find that your PC has an _Etron USB 3.0 eXtensible Host Controller_, please try other USB ports. This may help determine if your USB host controller is the source of the issue.

If the solutions above don't help, please [contact support](https://contact.saleae.com/hc/en-us/requests/new).
