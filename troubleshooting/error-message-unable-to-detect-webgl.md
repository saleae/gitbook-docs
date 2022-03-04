# Error Message: Unable to detect WebGL

{% hint style="info" %}
We've received reports of Logic 2.3.41 and later versions having incompatibility issues with certain graphics cards released greater than 8 years ago, namely AMD Radeon graphics cards. We're monitoring a list of graphics cards with known incompatiliby issues with our app in the [forum post here](https://ideas.saleae.com/b/feature-requests/support-older-graphics-cards/).
{% endhint %}

Upon launching the Logic 2 software, you may experience an immediate crash, or an error message may appear, stating either of the following:

* `Your graphics card does not support WebGL.`
* `Unable to detect WebGL, please contact support.`

![Unable to Detect WebGL Error](<../.gitbook/assets/Screen Shot 2022-02-04 at 5.47.09 PM.png>)

* `An error occurred in WebGL. Analog channels may stop working. Please save your work and restart the software.`

![WebGL Error Message](<../.gitbook/assets/webgl-analog (1).png>)

### Solution #1 - Launch from Command Line

A known workaround is to launch Logic 2 from the command line with the `--disable-gpu` command line argument. On Windows, it would be like so:

```
cd C:\Program Files\Logic
Logic.exe --disable-gpu
```

### Solution #2 - Try Logic 2.3.40

You may want to try launching an older version of the Logic 2 app, specificall [Logic 2.3.40](https://ideas.saleae.com/f/changelog/2340/). As mentioned above, we've received reports of Logic 2.3.41 and later versions having incompatibility issues with certain graphics cards.

### Solution #3 - Try Logic 1.x

If the above solutions fail, you may want to try our older Logic 1.x software downloadable below. Please [contact us](https://contact.saleae.com/hc/en-us/requests/new) as well and let us know the tests you have ran, as well as the information we ask for below about your PC.

{% content-ref url="../logic-software/legacy-software/older-software-releases.md" %}
[older-software-releases.md](../logic-software/legacy-software/older-software-releases.md)
{% endcontent-ref %}

### Contacting Support

When [contacting us](https://contact.saleae.com/hc/en-us/requests/new), please let us know the following information about your PC.

* Results of the Troubleshooting Steps listed above
* PC make and model
* Operating System, and whether it is 32-bit or 64-bit
* Graphics card model
* Graphics card driver version and date (A screenshot would be preferred)
* CPU
* If Google Chrome can run properly, please go to `chrome://gpu` from within Chrome and send us the output
* Results of the following tests ([WebGL v1](https://webglreport.com/?v=1) and [WebGL v2](https://webglreport.com/?v=2))
* In case you can launch [Logic 2.3.40](https://ideas.saleae.com/f/changelog/2340/) successfully, please send us your machine ID. Instructions are linked below.

{% content-ref url="machine-id.md" %}
[machine-id.md](machine-id.md)
{% endcontent-ref %}



