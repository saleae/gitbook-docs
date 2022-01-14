# Socket API - Automation

{% hint style="info" %}
Starting January 4 2022, Saleae has released a new hardware revision of our Logic Pro 16 devices. **These new units are not compatible with the legacy Logic 1.x software**, and require the latest version of the Logic 2 software, available [here](https://www.saleae.com/downloads/). We are working toward a solution for automation users who are still using the Logic 1.x software. If you have already purchased new Logic Pro 16 device after the date mentioned above, or plan to order new units for use with the Logic 1.x automation API, please contact us for details [here](https://contact.saleae.com/hc/en-us/requests/new). Users can check their hardware revision with the instructions [here](../../faq/technical-faq/about-logic-hardware-revisions.md).&#x20;
{% endhint %}

The Socket API scripting utility allows users to programmatically configure our software and trigger captures.

### Prerequisites - Software Settings

{% hint style="info" %}
Please note that the Socket API automation utility requires the older Logic 1.x software. The latest Logic 2 software currently does not support this utility, though we do plan to add support for it in the future. Feel free to [vote on the idea here!](https://ideas.saleae.com/b/feature-requests/application-api/)
{% endhint %}

* Check that you are using the older Logic 1.x software below (we recommend version 1.2.29).

{% content-ref url="../../logic-software/legacy-software/older-software-releases.md" %}
[older-software-releases.md](../../logic-software/legacy-software/older-software-releases.md)
{% endcontent-ref %}

* We highly recommend suppressing notifications and error messages while running your automation script. These notifications may block normal operation and can be suppressed by starting the application with the command line option `-disablepopups`&#x20;
* Next, we must enable the scripting socket server. Open Options Menu at the top of the software.
* Select Preferences
* Under the Developer Tab, check the box to enable socket server\
  &#x20;![](https://trello-attachments.s3.amazonaws.com/5615390cb22fd44d4ccedc6f/396x306/67677307eaf2bd57d85b18c834c92149/check\_box.png)
* Save Changes
* Accept firewall changes if the OS requests it

{% hint style="warning" %}
For automated environments, the `-socket` command line option was previously used to automatically enable the scripting socket server. Unfortunately, we cannot recommend this moving forward due to a [known bug](https://github.com/saleae/SaleaeSocketApi/issues/14#issuecomment-656691914). We will fix this in a future release, which will be integrated into [Logic v2](https://discuss.saleae.com). For now, please use the Preferences Window as shown above to enable the socket server.
{% endhint %}

### Socket API User's Guide

The document below lists the supported commands using our automation utility.

* [Logic Socket API User's Guide](https://github.com/saleae/SaleaeSocketApi/blob/master/Doc/Logic%20Socket%20API%20Users%20Guide.md)

### Python Wrapper - Automation Method #1

* [Python Wrapper and Documentation](https://github.com/ppannuto/python-saleae)
* [Python Package Index (PyPI)](https://pypi.org/project/saleae/)
* [Python Sample Application](https://github.com/saleae/python-saleae-cli)

For simple automation requirements, we suggest using our [Python Sample Application](https://github.com/saleae/python-saleae-cli). This is a basic command line utility to automate the Saleae Logic software, which can be used to automatically take a series of shorter captures over an extended time period with basic export functions.

The [Python Sample Application](https://github.com/saleae/python-saleae-cli) implements a very basic form of data export via csv. If more export options are needed, please see the article below:

{% content-ref url="export-data.md" %}
[export-data.md](export-data.md)
{% endcontent-ref %}

You may also send supported socket commands directly via the terminal using the Python wrapper, as shown below. See our [list of supported commands](https://github.com/saleae/SaleaeSocketApi/blob/master/Doc/Logic%20Socket%20API%20Users%20Guide.md).

```
C:\Python>python.exe
>>> import saleae
>>> s = saleae.Saleae()
>>> s._cmd('set_capture_seconds, 1')
>>> s._cmd('capture')
```

### C# Wrapper - Automation Method #2

For more complex automation requirements, you can refer to our C# Wrapper below:

* [C# Wrapper and Documentation](https://github.com/saleae/SaleaeSocketApi)

### Other Third-Party Implementations

* [Utility for automatically starting captures](https://discuss.saleae.com/t/trigger-capture-from-command-line/297)
* [C# data logging UI](https://github.com/quarkng/SaleaeLogger)
* [C# logging console application](https://github.com/DuckPaddle/LumberJack-for-Saleae)

If you would like to share your application, feel free to send us a link to it on any repository hosting provider, and we can share that link here.

### Which Export Options are Available via Socket API?

The Socket API currently supports the raw export feature and the protocol-specific export feature. However, the socket API does not support exporting the protocol search results.
