# Is It Possible to Record and Decode More Than One Protocol or Bus at a Time?

The Saleae Logic software allows you to add as many protocol decoders as you like. Protocol decoders can share channels, even though once a channel is used by one analyzer, it will appear in light grey for other analyzer settings.

Common situations where more than one analyzer may be useful:

* Serial TX and RX lines

    One serial analyzer is required for each channel.

* Recording multiple buses at once in order to compare timing, or just for convenience

Common situations where more than one analyzer may need to share channels:

* Several SPI slave devices on the same bus using different enable channels

    Add one SPI analyzer for each device. Have each analyzer share clock, MISO, and MOSI signals, but set individual enable channels.

* More than two channels of I2S audio

    Add a I2S analyzer for each pair of channels. Then share other signals such as the bit clock and the frame clock.

When working with multiple protocol analyzers, especially when you have more than one instance of the same type of analyzer, you may want to edit the names of the analyzers to make them more recognizable. You can do this by simply clicking their existing names on the analyzers panel on the right side.

