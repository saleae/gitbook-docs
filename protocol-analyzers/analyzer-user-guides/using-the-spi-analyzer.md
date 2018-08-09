# Using the SPI Analyzer

The Saleae software includes a protocol analyzer for the Serial Peripheral Interface \(SPI\) bus.

SPI is a specification that is based on synchronous serial communication.

Synchronous serial is implemented simply with a clock signal and a data signal, where data is typically set up on one clock edge and read \(valid\) on the other.

SPI uses a clock signal, two data signals \(MISO and MOSI\), and an enable signal. That is the most common configuration of SPI, but other variants exist. Dual and Quad SPI use more data signals to increase bandwidth without increasing the clock frequency. In some cases, an enable signal might not be present.

The Saleae SPI analyzer is also generic enough to decode basic synchronous serial \(a clock signal and a data signal\) without a second data signal or an enable signal.

**Setup**

Add the SPI analyzer to your capture. There are a number of settings for the analyzer. First, select the channels you are using. If you are not using an enable signal or if you only have one data signal, simply set the unused channels to "None". Only clock and one data channel \(either MISO or MOSI\) are required for the SPI analyzer to operate.

Next, select the remaining settings you are using. If you are unsure what settings are used for the data you captured, you can either visually identify them or you can guess and check.

* MSB/LSB first. If you can't check which mode your data uses, you may need to guess.
* Bits per transfer. This is almost always 8 bits but can be set up to 64 bits.
* Clock polarity

    Clock polarity is basically the idle state of the clock in between SPI transactions. Whatever the idle clock state is when the enable signal becomes active, use this value \(high or low\).

* Clock phase

    Clock phase selects which edge the data is read on. Please note that leading and trailing do not correspond to rising and falling, which can lead to confusion. The leading edge is defined as the first edge on the clock signal after the enable line becomes active. If the clock is idle high, then the leading edge is the falling edge. If the clock is idle low, then the leading edge is the rising edge. This is the edge where data will be read from the data lines. 

* Active low/active high enable

    Only applies when an enable signal is used. Defines the state of the enable signal when the SPI analyzer will read the data signals. 

**Multiple Devices / Enable Signals**

When you have multiple devices on the same SPI bus, you will have multiple enable signals, one for each slave device. To decode data from each slave device, simply add more SPI analyzers. It's perfectly fine for all SPI analyzers to share the same clock, the MISO, and MOSI signals. Note that the GUI will indicate that those channels are already in use, but that does not mean you can't use them.

**Different Settings for MISO and MOSI**

In some cases, you may want to have different settings between the two data channels. That can easily be done by using two SPI analyzers. Analyzers in the Saleae software have no limit to the number of analyzers that can share the same channels, so just add two SPI analyzers using the same clock, and enable channels. Then, on each analyzer, disable one of the two data channels.

SPI analyzer 1

* MOSI channel - MOSI input selected
* MISO channel - "none"

SPI analyzer 2

* MOSI channel - "none"
* MISO channel - MISO input selected

Then assign the settings you like to each analyzer.

**Common Issues**

A red square appears on the clock channel when the enable channel goes low. This can be accompanied by one of these messages: "The initial \(idle\) state of the CLK line does not match the settings" or "Settings mismatch" or "Error".

This occurs when the clock polarity setting is not set properly. For instance, in the image below, the clock channel is low while the enable signal is inactive. The correct setting should be "Click is low when inactive \(CPOL=0\)". In this case, the error is generated when "Clock is high when inactive \(CPOL=1\)" is selected. Simply swap the clock polarity and then double-check the clock phase to correct the issue.

![SPI red error](https://trello-attachments.s3.amazonaws.com/5600544d79381592829e1109/398x227/320e771e3191d8f1994bef35a0cb5659/SPI_Square.png)

**Logic Analyzer Requirements and Recommendations**

If you are considering purchasing a Saleae logic analyzer to record and decode SPI data but you are not sure which unit to purchase, please first see these articles:

[https://trello.com/c/tUHp8fVC](https://trello.com/c/tUHp8fVC)

[https://trello.com/c/L2zkBC9H](https://trello.com/c/L2zkBC9H)

A typical SPI bus with 1 slave has 4 electrical signals, which will require 4 channels \(Clock, MOSI, MISO, Enable\).

However, if there are multiple slave devices on the bus, keep in mind you will need another channel for each additional enable signal. That means if there are two devices on the bus, Logic 4 won't be able to record all 5 signals at once.

Also, in some cases, there may be more than 2 data channels. Although our SPI analyzer does not support this, you can partially decode the traffic using the parallel analyzer.

[https://trello.com/c/XTZcXUlO](https://trello.com/c/XTZcXUlO)

[https://trello.com/c/ytpLi0rS](https://trello.com/c/ytpLi0rS)

