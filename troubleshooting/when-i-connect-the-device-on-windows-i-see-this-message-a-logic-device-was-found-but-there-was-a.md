# When I Connect the Device on Windows, I See This Message: 'A Logic Device Was Found, but There Was a

Normally, this message shows up when another instance of the Logic software is already running and connected to the device. You can use task manager to see if another instance is still running, even if there are no other windows open.

When the software detects a logic analyzer connected to the PC, it asks the operating system for an exclusive handle to the device. This error message is shown when that request is denied.

For a small number of users, this error is shown incorrectly. It is displayed every time the user connects the logic analyzer with the software open. In those cases, the device actually does properly connect to the software and can be used once the user dismisses the error message.

If the title bar says "Connected" after closing this error message, the device and software are actually working normally.

If the title bar says "Disconnected" after closing the error message, then something is wrong. Check for other instances of Logic.exe and close them. Then remove and reconnect the device. If no other instances of Logic.exe are running, you may want to try restarting your computer and then [contact support](https://support.saleae.com/hc/en-us/requests/new).

