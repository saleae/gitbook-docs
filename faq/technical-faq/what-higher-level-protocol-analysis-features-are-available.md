# What Higher-Level Protocol Analysis Features Are Available?

## What Higher-Level Protocol Analysis Features Are Available?

The Saleae Logic software includes a number of protocol analyzers. Each analyzer has a set of its own settings. Some of those settings affect the decoder results.

In general, all analyzers will display the decoded data directly on the graph above the signal where the transaction occurred.

Each protocol analyzer also produces searchable results that appear in the decoded protocol area.

All analyzers support one export format.

The protocol search results allow the user to search the protocol results on the string level. However, that has a number of limitations:

* The protocol search feature cannot be used to search for sequences of frames. For instance, it cannot be used to find a series of consecutive serial bytes. In some cases, that can be accomplished by exporting the results to a CSV file and searching there.
* No protocol-specific search filters exist. For instance, it's not possible to filter out results to a specific device ID in, say, the USB analyzer. In some cases, though, it is possible to partially accomplish a filter using the built-in text search feature.
* Higher-level protocol search is not available. For instance, the CAN analyzer will produce decoded CAN frames, but it will not decode CAN open commands.

In some cases, you may be able to export the results from the protocol analyzer and then accomplish higher-level decoding using a tool such as Excel or writing a custom script.

It's also possible to modify the source code for the Saleae logic analyzers to accomplish higher-level decoding or add more features.

{% page-ref page="../../saleae-api-and-sdk/protocol-analyzer-sdk/" %}



