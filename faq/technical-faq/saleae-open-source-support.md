# Saleae Open Source Support

## Saleae Open Source Support

I'm generally a fan of community developed software, especially when it's hosted on GitHub. However, this is not a good option in our case.

First and foremost, we believe that the software provides the biggest value of the Saleae products. When you buy a product, the price includes the software. The software is one of the main things that sets us apart from the competition. Open-sourcing the software would give that edge away, and we think it could possibly even end our business.

That said, we do think that there are some components that we could open source, and we would like to push more in that direction as we go.

Right now, you can download the source code for the Saleae protocol analyzers. They are licensed under the same license included with the software and should only be used to develop new analyzers for the Saleae software and logic analyzers, not other logic analyzers.

In the future, though, we want to adopt a wider plugin system where it will be possible to implement measurements, new channel displays, new annotations, and more. Then we will open-source the modules the software ships with so they can be used as a starting point for new custom features. That way, the feature set of the software can grow much faster.

This new plugin system, however, will require substantial changes to the software architecture. We have already been performing early evaluations of it. It's a very ambitious and exciting idea and one I hope we can commit to soon.

In the meantime, we are not able to open-source any other components of the current software, including the USB later and device layer libraries.

**Sigrok**

[Sigrok](http://sigrok.org/wiki/Main_Page) is an open source software project aimed at developing software and libraries to run a wide range of existing logic analyzers and data recorders.

Sigrok already contains community-added support for the original Saleae Logic and Logic16, allowing both products to be used by the Sigrok software.

The new Saleae devices are not currently supported by Sigrok. You can track the development progress for this on the [Sigrok wiki](http://sigrok.org/wiki/Main_Page).

