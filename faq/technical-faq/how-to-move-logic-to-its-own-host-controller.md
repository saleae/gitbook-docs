# How to Move Logic to Its Own Host Controller

This details a procedure mentioned in the main article about sampling issues: [https://trello.com/c/dU1FgSAN](https://trello.com/c/dU1FgSAN)

To move the logic analyzer to its own host controller, with no other devices on that host controller, your PC will need at least 2 host controllers. Some laptops will only have one. Follow the steps below for your specific operating system.

**Windows**

1. Determine what host controllers are installed on your PC.

    Open device manager \(Control Panel -&gt; System -&gt; Device Manager\).

    Expand the section "Universal Serial Bus Controllers."

    Locate host controllers. If you are unsure of which devices are host controllers, their names usually follow these rules:

    USB 2.0 host controllers usually contain the word "enhanced" in their name \(e.g., "Intel XXX series chipset USB2 Enhanced Host Controller"\).

    USB 3.0 host controllers either mention USB 3.0, "XHCI" or "eXtensible";

    host controllers never include the word "hub" or "device."

2. Connect the logic analyzer and highlight it in device manager.

    It's important to highlight it; otherwise, it will be impossible to find after the next step.

    ![Locate Logic](https://trello-attachments.s3.amazonaws.com/55f866a4276782e3b2ae822a/492x290/97480150dab7875181aa9987d49f18e6/select_logic.PNG)

3. Switch the view to show devices by connection.

   ![By connection](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/55f866a4276782e3b2ae822a/2b59af3d8666c70b71047b72dc10d950/switch_view.png) ![Logic connection](https://trello-attachments.s3.amazonaws.com/55f866a4276782e3b2ae822a/457x172/80ce0ef7dfb11b6cf8d711894fcc16eb/new_view.PNG)

4. Expand all host controllers so you can see other devices connected to the PC.

    ![expanded devices](https://trello-attachments.s3.amazonaws.com/55f866a4276782e3b2ae822a/478x323/0804410bea2403138400de1041102310/expanded_connections.PNG)

5. You can now see which host each USB device is connected to. You can move devices from port to port until they appear on the other host controller. The easiest way to do this is to attach all non-logic analyzers to a single hub and move that port to port until it's on the other host controller.
6. Test Logic performance. Optionally, repeat, putting Logic on the other host\(s\).

**OS X**

1. Open System report. Apple menu -&gt; About this Mac -&gt; System Report.

    Select USB under hardware on the left. 

    Note: Be sure to refresh this after each hardware change.

2. Locate Logic. Note: If the software is not running or the LED is not on \(for LED models\), then the device may appear as Vendor Specific Device. Launch the Saleae software and refresh the view for it to change to the device name.
3. Move non-logic analyzer devices to the other host controller when possible.

    Doing that with a USB hub is the fastest. 

    Note: Some devices might be internal to the Mac and cannot be used.

4. Test Logic performance. Optionally, repeat, putting Logic on the other host\(s\).

**Linux**

1. Run lsusb -t. That will show all devices and hosts as a simple tree view.
2. Locate Logic. Note: The original Logic may appear as Lakewood Research.
3. Move non-logic analyzer devices to the other host controller when possible.

    Doing this with a USB hub is the fastest. 

    Make sure to re-run lsusb -t for each port you test.

4. Test Logic performance. Optionally, repeat, putting Logic on the other host\(s\).

