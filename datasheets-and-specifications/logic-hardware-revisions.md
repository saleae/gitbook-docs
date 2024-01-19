# Logic Hardware Revisions

### Hardware Revision Changelog

* Revision 6.0.0 - Minor component change. There is no update in specifications.
* Revision 5.0.0 - We've updated our FPGA due to supply chain shortages. These revisions will no longer work with our legacy Logic 1.x software and will require the latest version of the Logic 2 software available [here](https://www.saleae.com/downloads/). The specifications as outlined in our datasheets do not change.
* Revision 3.0.0 - We’ve updated our ADC in hardware revision 3.0.0 due to supply chain shortages. The specifications as outlined in our datasheets do not change. This revision requires the Logic software version 2.3.42 or newer, or Logic 1.2.40 if you need to use our legacy software. The 3.0.0 units began shipping on January 4th, 2022 for Logic Pro 16.
* Revision 1.2.0 - No notable change here. We were hoping to release a hardware performance improvement starting here, but we unfortunately weren't able to do so.
* Revision 1.0.0 - We updated our ADC due to EOL. There is no functional difference between this and the previous revision.
* Revision 0.0.0 - This is the original launch revision of the hardware.

{% hint style="info" %}
The main difference between most major hardware revisions is the FPGA or ADC used, which has no impact on end user functionality or signal quality.&#x20;

Additionally, a newly manufactured device may be tagged with a previous revision. For example, if it uses an FPGA from a previous hardware revision, we may tag it with that revision number.
{% endhint %}

### Checking your Device's Hardware Revision

To check your hardware revision, you will need the latest version of the software available [here](https://www.saleae.com/downloads/).

1. Connect your Saleae device
2. Open the device info dialog
3. Check the hardware revision

![The Device Info dialog is opened from the capture settings sidebar menu](<../.gitbook/assets/image (12) (1) (1).png>)

![The hardware revision is shown in the last line](<../.gitbook/assets/image (13) (1) (1).png>)

