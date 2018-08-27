# Using the Simple Parallel Analyzer

## Using the Simple Parallel Analyzer

The Saleae Logic software includes a protocol decoder to read clocked \(synchronous\) parallel bus data. The analyzer supports between 1 and 16 bits of data bus, although realistically, only 15 bits are possible.

Keep in mind that this isn't the "state" mode you may have seen in other logic analyzers. All Saleae units operate by over-sampling only and do not support a state/external clock mode. That means you will need to sample at least 4 times faster than the parallel clock frequency.

To use the parallel analyzer, first make sure you record all of the data signals and the clock signal in one capture. The exact ordering of the inputs relative to the parallel bus does not matter.

Once you have captured your data, add the simple parallel analyzer using the "+" button on the analyzer panel.

The settings for the parallel analyzer are very important. First, for all unused data bits, change the selected channel to "None". For instance, if you're using a 4-bit data bus, change D4-D15 to "None" in the settings as shown below.

![4-bit settings](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/593aee5a8504a595d393ee06/feeaa45c0a33a9ebc91a6433b062af5c/simple-parallel-settings.png)

Then, correctly assign the data bits you are using to the corresponding channels.

Finally, set the clock channel and the clock edge correctly and press Save.

**Decoding the Parallel Data**

Click on the gear icon next to the "Simple Parallel" analyzer and select the preferred numeric format. The image below shows an example of decoding a 4-bit data bus into the hexadecimal format.

![Simple Parallel Settings](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/593aee5a8504a595d393ee06/0e1779a84bd4efabed5e11d54128c858/simple_parallel_settings.png)

![Simple Parallel Data in Hex](https://trello-attachments.s3.amazonaws.com/55f0a61a10f9f592573a4205/593aee5a8504a595d393ee06/31be6e35568b8ed0b5c97ed4df6d7082/parallel-hex.png)

**Export File Format**

The protocol export will create a file using the currently selected display radix \(hex demonstrated here\). The export format has a header row and then 1 row per recorded parallel value. The values are the same as displayed in the displayed frames over the clock channel. There is one row per valid clock edge, either rising or falling, as specified in the analyzer settings.

Here is a sample of a file:

```text
Time [s],Value
0.000020000000000,0x0000
0.000040000000000,0x0001
0.000060000000000,0x0002
0.000080000000000,0x0003
0.000100000000000,0x0004
0.000120000000000,0x0005
0.000140000000000,0x0006
```

