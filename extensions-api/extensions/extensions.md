
Extensions are Python modules that enhance the debugging process by providing powerful analysis tools on top of your data. There are currently three types of extensions available: 

* High-Level Analyzers
* Analog Measurements
* Digital Measurements

You can browse available extensions and quickly install them from our Extensions Marketplace by clicking the Extensions button located at the right side of the software. You can also publish your own creation! Over time, we'll be able to build up a collection of extensions. We can't wait to see what kinds of extensions will be shared there.

![Extensions Marketplace](/support-assets/Screen%20Shot%202021-12-07%20at%202.57.20%20PM.png)

### High Level Analyzers

High level analyzers are protocol analyzers that process the output of the existing "low level" analyzers already in the app. You can write your own in Python. This lets you create powerful new analyzers without needing to reinvent the wheel. So far, our favorite application of high level analyzers is converting existing decoded I2C bytes into clean, decoded messages specific to the I2C device we're working with, to easily read recorded I2C traffic without needing to go back to the datasheet.

<a href="/support/extensions-api/extensions/high-level-analyzer-extensions" class="content-ref">High-Level Analyzer (HLA) Extensions</a>

### Digital and Analog Measurements

Digital and analog measurement extensions let you write python code that processes a selected range of analog or digital data, and produces metrics. For example, if you would like to calculate the jitter in a digital clock recording, You can simply write a python script which iterates over the transitions in the selected range, and computes the deviation from nominal. Once written, just shift+click a region of a digital channel, and your measurement result will appear in the list with the other measurements!

<a href="/support/extensions-api/extensions/measurement-extensions" class="content-ref">Measurement Extensions</a>



