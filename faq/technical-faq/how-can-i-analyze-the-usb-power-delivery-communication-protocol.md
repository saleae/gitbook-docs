# How Can I Analyze the USB Power Delivery Communication Protocol?

Our software unfortunately does not include a decoder for USB PD.

If you're using Biphase Mark Coding, you can use our Manchester analyzer in the Biphase mark mode \(FM1\).

You will need to use the pro devices for recording the Configuration Channel \(CC\) since it operates at 1.2 volts. Make sure to select the 1.2 volt option in the software to set the appropriate threshold.

The Manchester analyzer can be configured to use any specific word length. I recommend setting it for either 5 bits per word or 10 bits per word and then exporting the decoded results in hex format to CSV. That will produce a CSV file with timestamped 5b symbols. With either a script or some Excel magic, you should be able to decode these into the 4b symbols and eventually packets.

Eventually, we would like to support this directly as a protocol analyzer.

