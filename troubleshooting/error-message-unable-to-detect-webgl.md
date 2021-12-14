# Error Message: Unable to detect WebGL

Upon launching the Logic 2 software, an error message may appear, stating either of the following:

* `Your graphics card does not support WebGL.`
* `Unable to detect WebGL, please contact support.`
* `An error occurred in WebGL. Analog channels may stop working. Please save your work and restart the software.`

![WebGL Error Message](<../.gitbook/assets/webgl-analog (1).png>)

### Solution

A known workaround is to launch Logic 2 from the command line with the `--disable-gpu` command line argument. On Windows, it would be like so:

```
cd C:\Program Files\Logic
Logic.exe --disable-gpu
```

Please [contact us](https://contact.saleae.com/hc/en-us/requests/new) in case you have any specific questions about this error, or if the solution above did not work. In the meantime, we would like to continue monitoring this error on the bug report [here](https://ideas.saleae.com/b/feature-requests/support-older-graphics-cards/).

If the solution above does not work, you may need to use our older Logic 1.x software downloadable below.

{% content-ref url="../logic-software/legacy-software/older-software-releases.md" %}
[older-software-releases.md](../logic-software/legacy-software/older-software-releases.md)
{% endcontent-ref %}

### Background Information

This error message may indicate older PC hardware that may have issues running graphics on our software. This could be caused by the following:

* Operating System, and whether it is 32-bit or 64-bit
* Graphics card
* CPU

You can test your PC's WebGL support by following the links below. Both WebGL v1 and v2 need to be supported by your PC's hardware.

* [WebGL v1](https://webglreport.com/?v=1)
* [WebGL v2](https://webglreport.com/?v=2)

