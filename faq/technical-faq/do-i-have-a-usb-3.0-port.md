# Do I Have a USB 3.0 Port?

Usually, if the interior of the port is blue in color or there is a USB SS logo on the port, it's a USB 3.0 port. However, there are some exceptions to that:

* Custom built PCs: If the computer was built with an aftermarket computer chassis, then there is no guarantee that the blue ports on the case are USB 3.0.
* The ports are downstream of a USB 2.0 port or hub. For instance, if you're connecting to a USB 3.0 hub, those ports might not be 3.0 if the hub is connected to a 2.0 port.

Fortunately, there is a way to verify if a port is really USB 3.0 or 2.0. The following instructions are for Windows 7:

First, close the software and unplug and reconnect the Logic.

Open Device Manager:

![step 1](https://trello-attachments.s3.amazonaws.com/5696b1e35e3457ace8ba0551/413x518/18af9b6ab3b33234b69e768a5dfc0e51/1_-_open_device_manager.png)

Using the view menu, change the display to "Devices by connection."

![step 2](https://trello-attachments.s3.amazonaws.com/5696b1e35e3457ace8ba0551/340x404/40708b07977af3e33e21ac34ffb493db/2_-_switch_view.png)

If your motherboard has an integrated USB 3.0 host controller such as an Intel USB 3.0 host controller, it will be easy to locate on the PCI bus. Just expand the tree view, as shown in the image below. You can continue to expand items under the host controller to view all USB devices and hubs attached to that host.

![step 3](https://trello-attachments.s3.amazonaws.com/5696b1e35e3457ace8ba0551/795x833/f28f3f6000eb9633b8479c210cc6cf92/3_-_intel_3.0_port.png)

If you are using an add-on USB 3.0 host controller such as a PCI express card, it will be under one additional layer in the tree view. For example, the Texas Instruments USB 3.0 host controller is shown in the green box with the Logic Pro 8 attached.

If the device is connected to a USB 2.0 port, it will be associated with one of the two "Enhanced" USB host controllers, as shown in the red box. "Enhanced" specifically refers to USB 2.0 host controllers, and your device will not be able to run at USB 3.0 speeds if it is connected to this host.

![step 4](https://trello-attachments.s3.amazonaws.com/5696b1e35e3457ace8ba0551/691x875/eb049dcac3a09a8573c1b2c7ed39b420/4_-_other_ports.png)

