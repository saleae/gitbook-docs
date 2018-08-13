# Why Does the Software Show That There Are 4 Logic Analyzers Attached When That Is Not the Case?

When no connected logic analyzer is detected by the software, the Software will switch into demo mode. In demo mode, the software will attach four simulations devices:

* Simulated Logic 4
* Simulated Logic 8
* Simulated Logic Pro 8
* Simulated Logic Pro 16

The software title bar will indicate "\[Disconnected\]" and the green start button will say "Start Simulation" instead of the regular "Start".

As soon as the software detects one or more connected physical products, it will automatically switch out of demo mode back into regular mode. In the process, it will remove the 4 simulation devices.

This can be a little confusing, and we plan to make it more obvious that the software is in demo mode and the simulated devices are not actually attached.

Also, if you're using the Socket API, it's not easily possible to tell the difference between simulation devices and physical devices. The only way to tell is by using the "GET\_CONNECTED\_DEVICES" function. Real devices have 64-bit identifiers, and the simulation devices only use 32-bit identifiers. It is impossible for a physical device to have a device ID less than or equal to 0x00000000FFFFFFFF. Likewise, a simulated device will not have an ID larger than that.

If the software appears to be in simulation mode \(disconnected\) when a physical device is attached to the system, please see this support article:

[https://trello.com/c/7vudWNHG](https://trello.com/c/7vudWNHG)

