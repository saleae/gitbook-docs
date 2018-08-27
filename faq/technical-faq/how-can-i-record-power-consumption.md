# How Can I Record Power Consumption?

## How Can I Record Power Consumption?

The Saleae logic analyzers are well suited to help debug and optimize power consumption.

One good approach is to use a free GPIO to indicate the real-time power state of the device. Then you can use Logic to record this signal and see if the device is sleeping as much as it should. You can use additional GPIO lines—or even SPI or bit-banging—to output other contextual information such as the state of the application, which function\(s\) are using all the wake time and which interrupt are triggering. Then you can make changes and directly measure your improvements.

As far as recording the current that can potentially be done but would best be accomplished with a current sense amplifier built into your prototype PCBA. The analog or digital output of this amplifier could be recorded by Logic. You could also use an evaluation board or breakout board from Sparkfun/Adafruit.

