# Can Saleae Logic Run on ARM / Apple Processors?

## Apple Silicon Support

Starting Logic 2.4.8, we now provide an Apple silicon build of our software [downloadable here](https://www.saleae.com/downloads/)!

<figure><img src="../../.gitbook/assets/Screenshot 2023-07-11 at 4.46.33 PM.png" alt=""><figcaption><p>Download for Apple Silicon</p></figcaption></figure>

## Windows ARM Support

Our software does not officially support ARM on Windows, however, a potential workaround is summarized in the [forum post here](https://discuss.saleae.com/t/microsoft-surface/3043/5).

## Raspberry Pi / Android Support

Having said that, the Logic Software cannot run on Raspberry Pi or Android devices. It would be really cool and helpful for many. Hopefully, we will have the chance to do it. Currently, we are tracking this idea [here](https://ideas.saleae.com/b/feature-requests/provide-arm-builds-for-logic-2/). Feel free to comment/vote on it!

Specifically, several key things (at the minimum) need to happen before we can support these platforms. It is something we've thought a lot about, and there is a possibility that we will do it in the future, but for now, we can't spare the resources. It would make sense in the context of some larger plans we are considering.&#x20;

* Update our software build system
* Ensure our instructions can run on ARM and migrate as necessary
* Migrate our USB layer to ensure compatibility with ARM
* Evaluate performance and stability

We don't have any other libraries that use the device, either. The Logic software is the only way to communicate with the hardware.

Ultimately, Android support would be nice, too, although that would also require a complete UI redesign. So it's not currently on the road map at all.
