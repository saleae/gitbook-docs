# Why Am I Seeing Spikes in the Digital Capture?

There are several reasons that noise may appear in your capture. In some cases, real noise on the bus is being captured. In other cases, cross talk could be picked up, or noise that is too insignificant to be detected by the other devices on the bus could be picked up by the logic analyzers if it is using a different IO standard than the bus.

The rest of this article discusses different noise sources and potential solutions to remove it. You can learn more about the software glitch filter below.

{% page-ref page="../faq/technical-faq/software-glitch-filter.md" %}

**Sources of Noise**

* Some noise is already there. It could be coming from switching power supplies or clock sources.
* Cross talk occurs when changes in one signal are electrically coupled to another signal. This can cause glitches \(narrow pulses\) to appear in neighboring channels with the source channel \(aggressor\).
* If you are recording a larger swing signal with a non-ideal voltage threshold, then small noise on the input, which would normally be ignored by a receiver at that IO voltage, could be picked up by Logic. For instance, when recording, 12-volt TTL with Logic 8 would detect any spike above 1.2 volts as a logic high, whereas a 12V part would ignore everything up to a much higher voltage. The same can happen when recording 5 volt CMOS.
* Recording with narrow hysteresis comparators: Logic Pro 8 and Logic Pro 16 use high-speed comparators instead of CMOS buffers for the input. They have a much smaller hysteresis band as the result. That means that small voltage fluctuations around the threshold voltage could be recorded as spikes, whereas these would normally be filtered out by a CMOS input buffer that requires a much larger voltage swing before the buffer input changes.

    That makes Logic Pro 8 and Logic Pro 16 much more susceptible to glitches, especially around edges of digital signals.

**Why is the Noise Not Present in the Analog Capture?**

The analog inputs are filtered at a much lower bandwidth through an anti-aliasing filter before being recorded by the ADC. Because noise or glitches on the digital inputs is usually at a higher bandwidth than even the digital sampling rate and are usually much smaller than full digital swing to begin with, they will be completely filtered out before being recorded, even at the highest analog sample rate. If you see the noise in the analog capture, it must be significantly slower than typical digital noise.

**Solutions**

* Different IO standards: Whenever possible, make sure you are using the best available IO voltage setting on the device for your application. Logic Pro 8, Logic Pro 16, and the original Logic16 have adjustable input modes.
* In the case of cross talk, try physically separating the wires in the wire harness so they do not run close to each other. Also, connect more ground signals.
* Use shorter logic probes. If you can make your own leads connect to the logic analyzer, you could dramatically shorten the wire between the signal source and the logic analyzer.
* Slow the sample rate. Generally, the glitches on the bus are actually much smaller than 1 sample. Sampling slower dramatically reduces the probability that a glitch will be recorded when sampling, but it will not completely eliminate it.
* For especially noisy signals, you can create your own analog low pass filter network and place it before the input of the logic analyzer.
* The current software includes a user selectable glitch filter.[https://trello.com/c/sazcP6WO](https://trello.com/c/sazcP6WO). You can enter the width of the smallest allowable event, and all smaller events will be filtered out. Generally, noise and glitches picked up by the units is only 1 sample wide, which is actually above the maximum rated bandwidth for any given sample rate, making it particularly easy to filter out without affecting your data. 

**What to Do If Cross Talk or Noise Is Still Present after the Above Steps**

Provide Saleae with the following:

* A description of the circuit being recorded
* A description of how the circuit is being powered \(AC power supply, USB power, batteries, etc.\)
* A description of what signals Logic is recording and how it is connected
* A description of other connections between the circuit and the PC
* A description of how the PC is powered \(AC power, laptop with AC adapter, laptop on battery, etc.\)
* Any unusual noise sources \(e.g., recording signals inside an AC power supply, etc.\)

