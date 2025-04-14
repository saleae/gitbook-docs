# Software Extensions

Extensions are Python modules that enhance the debugging process by providing powerful analysis tools on top of your data. There are currently three types of extensions available:&#x20;

* High-Level Analyzers
* Analog Measurements
* Digital Measurements

You can browse available extensions and quickly install them from our Extensions Marketplace by clicking the Extensions button located at the right side of the software. You can also publish your own creation! Over time, we'll be able to build up a collection of extensions. We can't wait to see what kinds of extensions will be shared there.

![Extensions Marketplace](<../.gitbook/assets/Screen Shot 2021-12-07 at 2.57.20 PM.png>)

### High Level Analyzers

High level analyzers are protocol analyzers that process the output of the existing "low level" analyzers already in the app. You can write your own in Python. This lets you create powerful new analyzers without needing to reinvent the wheel. So far, our favorite application of high level analyzers is converting existing decoded I2C bytes into clean, decoded messages specific to the I2C device we're working with, to easily read recorded I2C traffic without needing to go back to the datasheet.

{% content-ref url="high-level-analyzer-extensions/" %}
[high-level-analyzer-extensions](high-level-analyzer-extensions/)
{% endcontent-ref %}

### Digital and Analog Measurements

Digital and analog measurement extensions let you write python code that processes a selected range of analog or digital data, and produces metrics. For example, if you would like to calculate the jitter in a digital clock recording, You can simply write a python script which iterates over the transitions in the selected range, and computes the deviation from nominal. Once written, just shift+click a region of a digital channel, and your measurement result will appear in the list with the other measurements!

{% content-ref url="measurement-extensions/" %}
[measurement-extensions](measurement-extensions/)
{% endcontent-ref %}



