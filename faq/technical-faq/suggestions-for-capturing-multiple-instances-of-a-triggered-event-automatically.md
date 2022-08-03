# Suggestions for Capturing Multiple Instances of a Triggered Event Automatically

Unfortunately, the software does not currently have a feature to automatically capture, save, and start a new capture. However, there are several possible alternatives.

### **Use a Single, Long Duration Capture**

Because the Saleae devices stream captures data over USB in real time, rather than buffer locally on the device, it's possible to take very long duration captures. The exact maximum duration is dependent on the density of the data recorded and the amount of available memory in the PC. There's more information on that below.

{% content-ref url="how-long-can-i-record-data.md" %}
[how-long-can-i-record-data.md](how-long-can-i-record-data.md)
{% endcontent-ref %}

For lower speed applications such as I2C or serial, 1 hour+ captures are routine.

After the single, long capture is complete, it's possible to use the trigger feature to search the capture for instances of the trigger condition. See the article below for details.

{% content-ref url="../../user-guide/using-logic/capture-modes.md" %}
[capture-modes.md](../../user-guide/using-logic/capture-modes.md)
{% endcontent-ref %}

### **Using the Automation API**

This solution requires programming experience.

The Saleae socket API supports automating tasks in the software such as starting and saving captures or exporting data. More information on that can be found below.

{% content-ref url="../../saleae-api-and-sdk/automation.md" %}
[automation.md](../../saleae-api-and-sdk/automation.md)
{% endcontent-ref %}

The general flow would be to start a capture and save it to a file, wait for the capture to complete, and start another capture with a new file.

In the future, we would like to add built-in features for this to the software.
