# Process a Warranty

## Process a Warranty - Troubleshooting Steps

{% hint style="info" %}
If you believe your Logic hardware is broken, please completely perform the troubleshooting steps below and take note of the results so we can verify the source of the problem.
{% endhint %}

**1. Test with the Latest Logic 2.x Software.**

* [Download Logic 2.x here](https://www.saleae.com/downloads/)

**2. Test with the older Logic 1.2.29 Software.**

{% page-ref page="../logic-software/legacy-software/older-software-releases.md" %}

**3. Remove any USB hubs, laptop docking stations, and extension cables.** 

* Also, remove all other USB devices from your PC. Then, test the device directly on the PC, and on all other USB ports. Logic Pro 8 and Pro 16 require USB 3.0 ports.

**4. Test Logic on a second PC.**

* If the second PC also fails to connect, then it is likely a hardware issue. If so, stop here and submit a [Warranty Request](https://saleae-support.typeform.com/to/E8UPB7). Otherwise, if it fails on one PC and works on another PC, then it is likely a PC issue. In this case, continue with the steps below.

**5. Test with another USB cable**

* If another USB cable works, then your original USB cable may be faulty. If so, stop here and [Contact Support](https://contact.saleae.com/hc/en-us/requests/new) for help. Otherwise, continue with the steps below.

**6. Test if the device's VID and PID have failed. Instructions are below.**

* If the VID and PID are incorrect, then the hardware maybe faulty. Stop here and submit a [Warranty Request](https://saleae-support.typeform.com/to/E8UPB7).

{% page-ref page="../troubleshooting/the-devices-usb-vid-and-pid-failed.md" %}

**7. If you are troubleshooting Logic Pro 8 or Pro 16, ensure the latest USB 3.0 Host Controller is installed.** 

* Update the driver, if possible, and run the tests again. The latest host controller drivers are provided in the link below.
* The windows driver update check will NOT update USB 3.0 host controller drivers. These are not included in the Windows update driver database and must be manually updated.

{% page-ref page="../troubleshooting/usb-driver-problem.md" %}

### 

### PC Detection Test

In cases where the software cannot detect the logic analyzer, we need to determine if the PC itself can detect the Logic device. Please follow the steps in the link below.

{% page-ref page="../troubleshooting/pc-detection-test.md" %}



### PC Fails to Detect Logic

If all tests above have failed, please submit a [Warranty Request](https://saleae-support.typeform.com/to/E8UPB7) and provide the results of the tests performed above.

