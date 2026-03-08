# Connection Conflicts with USB Debuggers

We've received reports of PC connections to our logic analyzer becoming unstable when a USB debugger  is connected to the same PC. One such example is the [ST-Link V2](https://www.st.com/en/development-tools/st-link-v2.html).

By connecting our Logic analyzer and USB debugger in a particular order, in addition to starting our Logic 2 app and the usb debugger's particular IDE software in a particular order, users have found ways to stabilize the connection.

For example, a common workaround is described below for the ST-Link V2: 

1. Disconnect both the ST-Link V2 and the Saleae Logic analyzer from your PC
2. Open the Logic 2 app 
3. Connect your Saleae Logic to your PC. The Logic 2 app should connect successfully to your Logic analyzer.
4. Connect the ST-Link V2 to your PC

Other USB debuggers and IDE software that have been reported to conflict with our Logic analyzer are listed below:

* Segger J-Link
* Atmel JTAGICE3
* Atmel-ICE
* Atmel Studio

We're currently tracking reports of this issue in the [idea forum post here](https://ideas.saleae.com/b/feature-requests/connection-conflicts-with-usb-debuggers/). Feel free to comment on the forum post if you're running into the same issue.

