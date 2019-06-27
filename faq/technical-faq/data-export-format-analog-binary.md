# Binary Data Export Format - Analog

**This Article Applies Only to v1.2.0+ Versions of the Software.**

When exporting analog data, you will have the option to export into a binary file \(.bin\). Each binary file export has either analog only values or digital only values.

The output file is raw binary in _Little Endian_ order. The file format is as follows:

**64-bit unsigned integer** - The number of samples that have been exported per channel.

**32-bit unsigned integer** - The number of channels exported

**64-bit double** - The period between samples in seconds. Equivalent to one divided by the analog sample rate.

**32-bit float array** for the first channel – Every sample for this channel will be exported here.

**32-bit float array** for the second channel – Every sample for this channel will be exported here.

....

**32-bit float array** for the last channel:

Each float represents a sample in either volts or raw adc value depending on the export option.

Example output file for a capture with two analog channels at 10MS/s:

5415 0500 0000 0000 0200 0000 48af bc9a  
f2d7 7a3e 0000 a040 0000 a040 0000 a040  
0000 a040 0000 a040 0000 a040 0000 a040  
0000 a040 0000 a040 0000 a040 0000 a040  
0000 a040 0000 a040 0000 a040 0000 a040  
0000 a040 0000 a040 0000 a040 0000 a040  
0000 a040 0000 a040 0000 a040 0000 a040  
0000 a040 0000 a040 0000 a040 0000 a040

...

There are 0x0000000000051554 \(Decimal: 333140\) samples.

There are 0x00000002 \(Decimal: 2\) channels being outputted.

The period is 0x3e7ad7f29abcaf48 \(Decimal: 0.0000001\).

The first sample and following samples are of value 0x40a00000 \(Decimal: 5\) volts.

