# Apple M1 Support

Starting in version 2.3.38, we've implemented updates to the Logic 2 software which improves stability while running on Apple's new M1 processor. Please note that the Logic 2 app will require Rosetta to be installed, which acts as a translation layer to allow Intel-based software like our Logic 2 app to run on Apple's M1 processor.

In Logic 2 versions prior to 2.3.38, our logic analyzers periodically failed to capture data via `ReadTimeout` errors. When the `ReadTimeout` occurred, it was usually accompanied by a `DeviceSetupFailure` error message, a blinking red LED on the Logic pod, and/or a requirement to disconnect and reconnect Logic. These issues have since been solved in versions starting 2.3.38.

Please [contact us](https://contact.saleae.com/hc/en-us/requests/new) if you notice any issues with running our latest software on Apple's M1 processor.

### Alternate Workaround (Logic 1.x)

In addition to the Logic 2 software, our older Logic 1.x software (v1.2.29) is also known to work with Apple's M1 processor. In case you run into issues with running the Logic 2 software, you may try this version of the software.

{% content-ref url="../logic-software/legacy-software/older-software-releases.md" %}
[older-software-releases.md](../logic-software/legacy-software/older-software-releases.md)
{% endcontent-ref %}



