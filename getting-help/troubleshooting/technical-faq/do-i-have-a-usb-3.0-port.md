# Do I Have a USB 3.0 Port?

Usually, if the interior of the port is blue in color or there is a USB SS logo on the port, it's a USB 3.0 port. However, there are some exceptions to that:

* Custom built PCs: If the computer was built with an aftermarket computer chassis, then there is no guarantee that the blue ports on the case are USB 3.0.
* The ports are downstream of a USB 2.0 port or hub. For instance, if you're connecting to a USB 3.0 hub, those ports might not be 3.0 if the hub is connected to a 2.0 port.

Fortunately, there is a way to verify if a port is really USB 3.0 or 2.0. The following instructions are for Windows 7:

First, close the software and unplug and reconnect the Logic.

Open Device Manager:

<figure><img src="../../../.gitbook/assets/1_-_open_device_manager.png" alt=""><figcaption></figcaption></figure>

Using the view menu, change the display to "Devices by connection."

<figure><img src="../../../.gitbook/assets/2_-_switch_view.png" alt=""><figcaption></figcaption></figure>

If your motherboard has an integrated USB 3.0 host controller such as an Intel USB 3.0 host controller, it will be easy to locate on the PCI bus. Just expand the tree view, as shown in the image below. You can continue to expand items under the host controller to view all USB devices and hubs attached to that host.

<figure><img src="../../../.gitbook/assets/3_-_intel_3.0_port.png" alt=""><figcaption></figcaption></figure>

If you are using an add-on USB 3.0 host controller such as a PCI express card, it will be under one additional layer in the tree view. For example, the Texas Instruments USB 3.0 host controller is shown in the green box with the Logic Pro 8 attached.

If the device is connected to a USB 2.0 port, it will be associated with one of the two "Enhanced" USB host controllers, as shown in the red box. "Enhanced" specifically refers to USB 2.0 host controllers, and your device will not be able to run at USB 3.0 speeds if it is connected to this host.

<figure><img src="../../../.gitbook/assets/4_-_other_ports.png" alt=""><figcaption></figcaption></figure>
