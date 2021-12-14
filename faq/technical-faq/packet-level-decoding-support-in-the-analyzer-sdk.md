# Packet Level Decoding Support in the Analyzer SDK

Many protocol analyzers could benefit from multiple layers of protocol analysis—from the symbol level for odd line encoding formats to packet levels for more complex protocols such as USB.

Ultimately, we would like to add built-in support for these extra layers in the Saleae analyzer SDK. However, that is not currently possible with the existing SDK. Instead, we suggest the following pattern to implement this support now.

For simpler protocols such as DMX-512 or CAN (Controller Area Network), we are able to use frames to represent important components in an existing packet structure, while using markers to indicate lower-level features such as start and stop bits (DMX-512) and stuffed bits (CAN).

However, in many cases, this is not expressive enough. To get around this limit, we recommend adding a user selectable decode level setting to AnalyzerSettings.

For instance, one possible set of values (taken from Atmel SWI):

* Packets
* Bytes
* Tokens

This switch would cause the analyzer to generate frames in one of the following ways:

* One frame per complete packet. Full details of the packet are produced in the results class.
* One frame per complete byte. This is more useful when getting the physical layer working.
* One frame per token. This is mainly useful for unusual line encodings. Atmel SWI has a particularly odd encoding system.

Our recommendation is to architect your analyzer to always compute all of these result sets. Then, simply switch where and when frames are pushed back based on this selection.

Another useful feature from this is offering different export formats. Each decoding layer will need to support a different export format, so it's a good opportunity to tailor each mode's export format.

In all cases, the display will produce one on-screen bubble for each frame. The protocol search feature allows N lines per protocol frame. Although the export function is technically open-ended, most implementations involve iterating over frames.

Ultimately, we would like to add support for more advanced protocol analyzer features. But we would like to migrate to a different programming language before adding more advanced features. Your feedback on this is always welcome.
