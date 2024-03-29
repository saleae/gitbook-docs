# DMX-512 Analyzer - User Guide

The Saleae Logic software includes a protocol analyzer for the DMX-512 interface. DMX-512 is a single data channel interface commonly used to control lighting in staged environments such as those found in concerts, theater, and other live performance events. At a minimum, the DMX-512 interface will have a Data- pin \(D-\), a Data+ pin \(D+\), and a ground pin.

**Setting Up the DMX-512 Analyzer**

To use the DMX-512 analyzer, first add it using the add analyzer menu on the right side.

In the analyzer settings, specify which input channel will be used for the serial data. You will also need to specify if the DMX-1986 4 μs MAB will be used.

![DMX-512 analyzer settings](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/58fe975a7cff873c336cec00/2320c15b5d8aa708ddb21800375fefa3/DMX-512_analyzer_settings.png)

Checking the "Accept DMX-1986 4us MAB" box will allow compatibility with legacy equipment that uses the DMX-512 original specification from 1986, which had a fixed 4 μs MAB. Most modern DMX-512 equipment will not need this setting checked, so we leave it unselected by default.

**Common Causes for Decoding Errors**

* The signal is inverted. Currently, our DMX-512 analyzer cannot detect inverted signals. For example, if the signal looks inverted while D+ was being measured, try measuring D- instead. Please ensure that measurements are always done with respect to ground.
* If you're still facing decoding errors, you can compare your signal with a simulated signal generated by our Logic software. You can read more about simulating data below.

{% page-ref page="../../user-guide/using-logic/demo-mode.md" %}







