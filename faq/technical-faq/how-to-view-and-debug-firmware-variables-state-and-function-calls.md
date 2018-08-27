# How to View and Debug Firmware Variables, State, and Function Calls

## How to View and Debug Firmware Variables, State, and Function Calls

Here are several suggestions for performing more advanced firmware debugging using Saleae logic analyzers and microcontrollers. All require that you have the ability to control one or more IO pins from firmware that can then be recorded by Logic.

Common applications:

* Benchmark the time required for a function to complete
* Carefully track and time transitions between power states
* Record the number of occurrences of a particular event
* Monitor program state and function call chains
* Capture variable values
* Get an overall picture of the timing of your program, end to end.

Before going into detail, it's worth noting that using a logic analyzer isn't the only way to debug or gain insight into what your embedded program is doing. Odds are you are already set up with an in-circuit debugger or a serial output already logging to the PC. While both of these debugging options are highly recommended, they also have big drawbacks that make using a logic analyzer an ideal complement to these tools.

**Breakpoints and stepping through code:** This is a great way to examine the state of your application, monitor variables, and single step through complicated functions. They are super useful for all embedded applications, but they have some pretty big drawbacks. First, the entire program halts when a breakpoint is hit. That means that if your code is time-sensitive, you will not be able to debug your code during the most important parts. For instance, if you want to debug code that is responsible for receiving some kind of signal, doing some processing, and then transmitting back in a fixed amount of time, you can use breakpoints to examine the state of the firmware, but the overall application will fail due to the unexpected delay or failure to receive a response. Breakpoints also can only be set on firmware instructions. You can't set a breakpoint for when an i/o pin changes state, and a breakpoint \(or internal variable checking\) won't tell you why SPI data isn't getting written to the bus when you call the write command.

**Serial print messages:** printf has been a staple of programming since before I could code, and although it's still very powerful, it has always had serious issues. The biggest is probably its speed. Generally, your serial port will be running at 9600 baud, but even if you have it clocked a lot faster, simply sending the string "done" or "error" could take thousands of times longer than the rest of your program's operation. If you're running an update loop at 1,000 Hz or even 100 Hz, adding one or two blocking print statements will stall out your program. For timing-sensitive applications, printf can cause more bugs than it can solve.

**Using a Logic Analyzer for Firmware Debugging**

The most common use of a logic analyzer during firmware debugging, beyond protocol decoding, is to simply check to see if a particular part of code is running at all. A simple toggling of an IO pin is low overhead \(usually 4 clock cycles or less on some microcontrollers\) and can be recorded using a logic analyzer with high precision. When sampling 4x faster than the core clock of your microcontroller, you can usually measure the timing between toggles down to the clock cycle, if necessary.

Toggling an IO pin, however, only provides 1 bit of information. The next logical step after toggling just one IO is to toggle multiple IO pins to print a parallel state. The Saleae software includes a simple parallel analyzer that can be used to decode the parallel state into an integer value. The parallel analyzer requires a clock channel in order to decode the data automatically, so it's recommended to dedicate one IO pin to the clock channel and then write a macro to output the parallel word and cycle the clock channel. That may require double the instructions as before, up to about 8 in many cases. \(With a 20 MHz instruction clock, that's about 400 ns, or 0.4 us, which is still a lot faster than 1 ms required to transmit 1 byte with 9600 baud serial.\)

**What if you're running low on IO pins or run out? What if you need to transmit more information than just a few bits?**

Saleae devices can record and decode serial data at much higher bit-rates than any USB to serial adapter. Logic 8 should have no trouble recording and decoding up to 25 mbps serial streams \(when sampling at 100 MSPS\).

Another common problem is when working on a form-factor PCB design where there are few or no unused IO that are accessible. In these cases, a little creativity can go a long way.

In our own designs, we've used an exposed I2C bus to print debug messages for Logic to record. Since a I2C host won't send data payloads unless a device ACKs its address, we've even implemented a debug system where only the address byte of a packet is used to print debug information. It's slow, and you need to make sure you don't accidentally write to a real device, but it's infinitely better than having no debug output at all.

Also, if the microcontroller directly or indirectly drives an LED, you can output high-speed bit-banged serial to that pin and record it with Logic. That is a lot more useful than using the LED as a basic status light.

There are a lot of other ways to extract debug information from your complete design when none of the obvious methods are available. If you can, we recommend designing in a logic analyzer debug header \(or two\) so you can directly connect Logic to your design. We recommend using 4x2 0.1" pitch male unshrouded headers and accessory connectors you can find here: [Logic-to-2x4 Header \(Gen 2\)](https://www.saleae.com/accessories)

**Suggested Analysis Strategies**

Logic analyzers are already very useful for decoding protocol data, verifying timing and operation of signaling, measuring frequency and duty cycle and measuring time between events and counting occurrences. Here are some suggestions for analyzing firmware operation by recording signals that were purposely created for firmware debugging and would not normally be present in an application.

**Interrupt handling:** Making sure that interrupts are not missed and handled appropriately. Try toggling a pin when the interrupt routine enters and again when it exits. Then record that pin as well as the signal that triggers the interrupt. Is there any chance that the event might occur again one or more times while the interrupt handler is still running? You may need to move data processing to a queue to free up the interrupt faster.

**Program flow verification:** It's very common for more advanced modules such as authentication modules, phones, and network connections to have complicated handshaking procedures that require careful state management. Printing a basic Hex word to a 3-bit parallel interface every time your application's state machine changes state will help you trace your application through the initialization process. If a resource is not always available, for instance, does your state machine properly go back to a valid state?

**Power state monitoring:** If you print out the power state with a few IO pins every time it changes state, you can record this extremely accurately using a high sample rate. Then use the built-in measurement tools to compute the duty cycle for which your device is awake. Already printing this to the serial port? That serial print command might be taking longer than the rest of your application time combined.

**Benchmarking and Profiling:** Some development tools include a cycle accurate simulator for finding the bottlenecks in high-performance code. However, if the performance relies on a physical event or signal that can't be simulated accurately, then this might not help. Toggle pins or print parallel words before and after every piece of code you would like to profile, and consider using inline assembly, if necessary. It should only add a few instructions as a very deterministic overhead. Move the statements around and retest to zero in on the problem.

Keep in mind that the Saleae Logic devices can record at high speeds for considerable lengths of time when little activity is present on the bus. In most cases, you should be able to record for minutes or even hours to thoroughly test your design. In some cases, it may be helpful to set up long recordings of your device's operation. For long-term recording or to automate captures, you can use our socket API below.

{% page-ref page="how-can-i-take-long-captures-that-cannot-fit-into-memory.md" %}

