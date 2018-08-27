# Using Saleae Logic Devices with Third-Party Pattern Generators

## Using Saleae Logic Devices with Third-Party Pattern Generators

The Saleae logic analyzers only support data recording and do not have any output mode capability. For application where digital output is required, you will need another device called a digital pattern generator. These devices are used to output pre-defined digital signals on one or more digital channels.

There are many situations where using a pattern generator along with a logic analyzer is beneficial. In general, there are two ways to do this.

First, create a pattern either manually or from some other source, output it with the pattern generator, and then record the response with the logic analyzer.

Second, record a sequence with a logic analyzer and then play it back later with the pattern generator with our without modification.

The first case does not require any special support. Each pattern generator on the market will offer its own supported formats or editor that can be used to create a digital pattern.

In the second case, it's necessary to export the data from the logic analyzer capture and then import it into the pattern generator software.

Below we describe one possible method for exporting data from the Saleae Logic software for use with the [Byte Paradigm Wave Gen Xpress Digital Pattern Generator](http://www.byteparadigm.com/products/wave-gen-xpress/).

The only export format directly compatible from the Saleae software is the binary digital export format with the settings "Output data for each sample" and "Output each sample in a 16-bit word." These settings should produce a file directly compatible with the Byte Paradigm "binary file" format.

With some slight reformatting in a text editor supporting find and replace or using Excel, it would also be possible to use the CSV export format in the "output one row per sample" mode to create files compatible with the "raw binary text file" or the "raw hexadecimal text file" formats. That is suggested if you plan to modify the captured data before importing it into the 8PI Control Panel software from Byte Paradigm. See the file format requirements in the 8PI Control Panel software user's guide for more information on those formats.

Once the data are exported, you will also need to configure the remaining settings for the 8PI Control Software. Mainly, the sample rate needs to be specified. Please note that using a different sample rate than the original recording rate will cause the output signals to be either faster or slower than the original capture. It may be necessary to either re-record the original sample sequence using a sample rate that matches an option from the Byte Paradigm device or write a script to artificially up sample or down sample the exported file.

