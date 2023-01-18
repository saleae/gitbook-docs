# Can Saleae Logic Run on ARM Processors?

Unfortunately, the Logic Software cannot run on ARM, Raspberry Pi, or Android devices.

Specifically, several key things (at the minimum) need to happen before we can support ARM. It is something we've thought a lot about, and there is a possibility that we will do it in the future, but for now, we can't spare the resources. It would make sense in the context of some larger plans we are considering.&#x20;

* Update our software build system
* Ensure our instructions can run on ARM and migrate as necessary
* Migrate our USB layer to ensure compatibility with ARM
* Evaluate performance and stability

It would be really cool and helpful for many, I think. Hopefully, we will have the chance to do it. Currently, we are tracking this idea [here](https://ideas.saleae.com/b/feature-requests/provide-arm-builds-for-logic-2/). Feel free to comment/vote on it!

We don't have any other libraries that use the device, either. The Logic software is the only way to communicate with the hardware.

Ultimately, Android support would be nice, too, although that would also require a complete UI redesign. So it's not currently on the road map at all.
