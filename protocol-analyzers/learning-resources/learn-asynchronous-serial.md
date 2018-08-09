# Learn Asynchronous Serial

Asynchronous serial \(often called simply "serial"\) generally refers to single-wire, half-duplex communication where data bits are located at fixed time intervals after a start bit. Instead of using a dedicated clock line, asynchronous serial requires the receiver to sample the incoming signal at specific time intervals after a start bit's leading edge.

**Topology – Where Do the Wires Go?**

Async Serial data is sent with just one wire \(not including ground\). In most cases, there is one device that is the sender and one or more devices that listen.

![](https://trello-attachments.s3.amazonaws.com/57215d6370ea3b4f27eb4ead/899x337/616bb96b9e2989f99288ed0900713144/Topology.png)

If communication needs to be two-way, then generally you need to add another wire for the other direction. These wires are often referred to as TX \(outgoing transmission\) and RX \(receiving line\) to convey their direction with respect to a particular device.

![](https://trello-attachments.s3.amazonaws.com/57215d6370ea3b4f27eb4ead/637x268/ef8a90030bac5b85e158b3abdaf6260e/Topology1.png)

**Voltages**

Serial uses two voltage levels to convey information—1 and 0. The exact voltages that represent 1 and 0 can be different, depending on the setup, but both sides of the communication need to use the same voltages. In "logic level" serial, the voltages are 0V for a digital 0 and the logic-high voltage for digital 1. \(The logic high voltage would be something like 5V, 3.3V, etc., depending on the application.\) When using the RS-232 electrical standard \(used by older computers and equipment but still being used today, although considerably less so\), Logic 0 is 15V, and Logic 1 is -15V. A bit backward-seeming, yes. A lot of equipment cheats a little and doesn't use +/-15V, opting instead for voltages that are easier to generate such as +/-7V. This is still RS-232 compliant and will work with RS-232 equipment.

| Serial Type | Logic 0 | Logic 1 |
| :--- | :--- | :--- |
| 5V | 0V | 5V |
| 3.3V | 0V | 3.3V |
| RS-232 | 15V | -15V |
|  |  |  |

**How Do You Transmit Information with Only One Wire?**

Since you only have one wire to work with, the only way to send information is by using some sort of timing scheme that both sides agree on. We'll start by agreeing on the amount of time each bit gets on the wire \(we'll start calling it a bus now\) before the next bit replaces it. Bus just means wire, or group of wires.

**The Bits on the Bus Go One at a Time**

When you talk about bit rates, you're really describing how long each bit has on the bus before the next bit gets put on the bus. For example, if you send 10 bits every second, each bit will get .1 seconds on the bus, and then the next bit will be placed on the bus.

**Sending Bits to a Friend in Another Room, Using a Switch**

Imagine you are putting bits on the bus, once every second. You use a stop watch. Every second, you decide the next bit to send and then move a switch to either on or off \(1 or 0\). It turns on \(or off\) a light in another room. Remember, the light may or may not change every bit. Maybe you need to send a lot of 1s in a row. For example:

![](https://trello-attachments.s3.amazonaws.com/57215d6370ea3b4f27eb4ead/845x303/b818b9caf3fb88221380b61b32a5b4a3/Rooms.png)

In the middle of each second \(.5 seconds after the new bit is on the bus and .5 seconds before the next one\), your friend writes down the value—1 if the light is on, 0 if the light is off.

![](https://trello-attachments.s3.amazonaws.com/57215d6370ea3b4f27eb4ead/1091x520/2bddb93a77bb7f19656bf4ad2d887c3e/Rooms2.png)

**Ways your friend could get confused**

However, there are some issues with this approach. For example, if you don't yell into the other room, how does your friend know exactly when you started sending bits?

What if their watch \(or yours\) isn't very accurate, and over a long time, they start writing down bits at the wrong times? They think they are writing down the bit exactly in the middle of the time it's on the bus, but that starts to drift. It can drift so far that ever so often they end up skipping a bit or adding an extra bit. You can imagine the mayhem that will produce if these bits are supposed to be grouped into bytes, which they usually are.

**More Speed, More Problems**

The faster that bits get put on the bus, the more difficult the issue becomes. Even small drifting in the sender’s and receiver’s clocks will mean losing track of what bit you are on. If each bit is only on the bus for 1 microsecond, you would have to have very accurate, expensive clocks on both ends to be sure you didn't drift more than 1 microsecond over a long period, maybe even hours or days.

**The Solution, Part 1: Let's Agree to Periodically Resynchronize Our Clocks**

If we could come up with a way to resynchronize our clocks ever so often, we could get away with cheap clocks that drift a lot. In fact, the more often we synchronize our clocks, the more errors we can tolerate.

**Resetting the Clocks Every Time the Bit Changes from a 0 to a 1, or a 1 to a 0**

Well, you might point out, one great way to synchronize our clocks would be to reset them every single time the bit on the bus changes from a 0 to a 1, or a 1 to a 0. That is a great idea! Congrats if you already thought of it.

![](https://trello-attachments.s3.amazonaws.com/57215d6370ea3b4f27eb4ead/949x339/b16ab4b469c2596c52d4f585204e9cd9/Reset.png)

**But What If the Sender Is Sending a LOT of 0s or a LOT of 1s?**

If the sender sends a lot of 0s or a lot of 1s, then we wind up with the same problem. We don't have a chance to resynchronize our cheap clocks.

![](https://trello-attachments.s3.amazonaws.com/57215d6370ea3b4f27eb4ead/944x399/c0082caf6e46f1be67d1d192205e6f06/Reset2.png)

You might think that won't happen in real life or not very often, in any case. But remember, we need a solution that works in general for every situation.

And how do we synchronize the very first time so we know for sure we have the very first bit?

**The Solution, Part 2: Idle Periods, Dedicated Start Bits, and Dedicated Stop Bits**

**Idle Periods**

Before data starts getting sent, we agree that we'll have something called Idle, where nothing is going on. Idle is when Logic 1 is on the bus for an extended period of time. Both sides—the transmitter and the receiver—agree that we'll both start up in this situation.

**The Start Bit**

Both sides agree that the very first thing that will happen after Idle is that a start bit is put on the bus. The start bit has the value of logic 0—otherwise, it would be the same as Idle after all, and we wouldn't have known it even happened.

**When the Start Bit Starts—When the Logic Level Changes from 1 to 0—We Restart Our Clock**

Remember, the start bit isn't data that we're trying to send. It's ALWAYS 0. No useful data are getting sent here. It's here to reset our clock and let us know that more bits are coming up.

**The First Real Data Bit—The Bit That Comes after the Start Bit: What If It's Also a 0?**

How do we know when enough time has passed that we're now in the middle of our first actual data bit? Simple: We time it. This is how the serial port on the IBM PC did it, and it's how a PIC or MSP430 or Arduino do it.

**8 Data Bits – Why Not More or Less?**

By convention, serial usually has 8 data bits after the start bit. It's enough for exactly one byte. However, any variation is possible, especially if you are making up your own serial data protocol. You can have as many or as few data bits as you like. Just remember the problem of timing drift \(what if our nifty 128-bit serial packet was all zeros? We might need to have better, more expensive clocks or, equivalently, run at slower bit rates\).

**The Stop Bit – What Is It Even For? It Looks Indistinguishable from the Idle Period That Follows It**

The stop bit \(or bits\) come after the very last data bit is finished. They are logic 1—the same as idle. In fact, there may be quite a bit of idle time after the stop bit.

Here's the secret. It's not really a bit. It's just a minimum, guaranteed amount of idle time.

**Why Do We Need a Minimum, Guaranteed Amount of Idle Time—aka Stop Bits?**

Well, we need to resynchronize. We need to make absolutely sure that the receiver can reliably detect the next start bit—even if its clock isn't very accurate. The less accurate our clock, the more idle time the better. In practice, a couple if bit times should be enough.

**What's the Deal with 1.5 Stop Bits, or 2 Stop Bits, etc.?**

As you've probably guessed by now, the more stop bits we put in, the more idle time we are guaranteeing there will be—and the less we need to rely on the receiver's \(or transmitter's\) clock to be really good.

**What Happens after the Stop Bits?**

What happens after the previous serial frame is completely finished, stop bits and all? One of two things: either some more idle time or the next start bit for the next set of data bits. That's why the stop bits are really a minimum, guaranteed amount of idle time.

**What's a Framing Error?**

Let's say you're listening to serial bit sequence—start bit, data bits, stop bit\(s\)—which is known as a frame. And let’s say you're listening to those stop bits that, as you might imagine, had better be logic 1s, the idle logic level.

Instead of logic 1s, however, you discover that they are 0s, or in any event, they aren't solid 1s. This is known as a framing error. It means that something has gone wrong and we're not synchronized properly. That could happen if we were assuming the data was a different bit rate than it really was, or if we started listening to serial data right in the middle of a transmission.

**A Framing Error Could Be Useful**

A microcontroller could use a framing error to try to synchronize itself with a serial transmission that it started listening to right in the middle. Ultimately, the only really 100% reliable method is to wait for a long idle period—at least one full serial frame's worth. That might not happen, however, unless the transmitter makes sure it does.

If the sender was sending a checksum, CRC, or some other known sequence, it would be possible to synchronize with a transmission that was already under way. Such algorithms are out of the scope of this article, but you probably already have some ideas on how it could be done.

**What Order Do Data Bits Get Sent In—Most Significant Bit First, or Least Bit Significant First?**

Most significant and least significant refer to the location of a bit in a byte. In the byte 128 \(0x80, 0b 1000 0000\), the most significant bit is a 1, and all the other bits are 0s. In the byte 1 \(0x01, 0b 0000 0001\), the least significant bit is a 1, and all the other bits are 0s.

The convention for async serial data is that the least significant bit goes first, and the rest of the bits follow in order. However, it can easily be the other way around, so be sure to check. Normal RS-232 style serial is always least significant first.

**What's This About a Parity Bit?**

The parity bit was an extra \(9th, typically\) bit that was added to a serial frame to act as a crude error detection mechanism.

If a system was using odd parity \(that means that if you took all the data bits and the parity bit and added up all the 1s\), it would give you an odd number. For example, if the byte was 0x01, then the number of 1s is already odd, so the transmitter would make the parity bit a 0. However, if the number of 1s was even \(e.g., there were 4 1s\), the parity bit would be set to a 1 so the total would become odd.

The opposite would be true for a system using even parity.

The idea was that if one of the bits was received incorrectly, there would be a parity error—the number of 1s wouldn't be the agreed upon even or odd. And the receiver would know then to reject that byte.

Note that this is a fairly primitive error detection mechanism by today's standards. A far better method of detecting errors is a CRC number or similar method. In addition, a method is needed to request that the failed series of bytes be retransmitted.

**Out-of-the-Box Limitations with Serial, and Some Ways to Improve It**

In addition to not having a good method to detect errors, there is also no way to address certain bytes to a particular receiver \(if there is more than one\). There is also no good method of reliably "dropping in" on an ongoing transmission.

These limitations can all be overcome by the addition of higher layers of abstraction. In fact, it is quite possible to run TCP/IP over a two-way serial connection.

A simpler improvement is MP Mode \(also called 9-bit serial and multiprocessor mode\). That adds an extra bit to specify if a given byte is an address or data. That allows many listeners on a single line to be given data \(perhaps commands\) individually.

You may want to invent your own, higher-level protocol. For example, you could create a packet structure where the first byte is a particular header code such as 0x21 \(to pick a random number\), the next 2 bytes was an address, the next 4 bytes were some data, and the last 2 bytes was a 16-bit CRC \(or something like that\). You could build up quite an impressive robust communication system using regular old serial as the transmission medium.

**What Exactly Does Asynchronous Serial Mean?**

Serial means one bit at a time, typically on one wire. The other option is parallel, which has many bits at the same time on different wires.

Asynchronous means that there's no one telling you exactly when you need to read the value of the data on your wire. You need to figure it out for yourself. The opposite case is "synchronous serial" where a separate line, usually called the clock line, tells you exactly when to read the data line. It does that by transitioning from one state to another.

Other examples of asynchronous serial protocols include 1-Wire, CAN, UNI/O, and Manchester.

Examples of synchronous serial protocols include SPI, I2C, and Async Serial/PCM.

**How Do I Use RS-232 Serial with a Microcontroller?**

RS-232 voltages will probably damage your microcontroller and won't work in any event. You have to convert it. The MAX232 IC \(such as [http://www.sparkfun.com/products/316](http://www.sparkfun.com/products/316)\) \(and its many variants\) is a good way to do it. There are other ways as well. There are also many adapter modules you can buy such as:

* [http://www.sparkfun.com/products/449](http://www.sparkfun.com/products/449)
* [http://www.sparkfun.com/products/8780](http://www.sparkfun.com/products/8780)

**Is Async Serial on the Way Out?**

RS-232 is on the way out. But serial, since it is just so simple and useful, is not going anywhere in the foreseeable future. In addition to logic-level serial used with microcontrollers, there are more functional serial communication links such as RS-422.

**Async Serial in a USB World**

USB has almost entirely replaced RS-232 and the associated DB-9 and DB-25 connectors on the back of PCs. However, because serial is so easy to use \(especially compared with USB\), many USB adapters have been created, both providing RS-232 as well as logic-level serial. Remember, RS-232 voltages will probably damage your microcontroller and won't work anyway, and you have to convert it. The MAX232 IC \(such as [http://www.sparkfun.com/products/316](http://www.sparkfun.com/products/316)\) \(and its many variants\) is a good way to do it. Here are some other adapter modules you can buy:

* [http://www.sparkfun.com/products/8531](http://www.sparkfun.com/products/8531)
* [http://www.sparkfun.com/products/718](http://www.sparkfun.com/products/718)
* [http://www.sparkfun.com/products/10270](http://www.sparkfun.com/products/10270)

**An Example of Receiving Serial Data on a Microcontroller**

Let's take a moment to look at how we would pull off reading serial if we didn't have a fancy serial peripheral \(or the boss says we need to use a dirt-cheap $.10 microcontroller that doesn't have one\).

To make things simple, we'll assume that our function is called when the bus is idle \(not right in the middle of some serial data\).

### **Further Reading**

**Top Resources**

* [https://trello.com/c/rI0wtXgS](https://trello.com/c/rI0wtXgS)
* [Tal Tech Tutorial](http://www.taltech.com/datacollection/articles/serial_intro)
* [SparkFun Tutorial](https://learn.sparkfun.com/tutorials/serial-communication)
* [Wikipedia](http://en.wikipedia.org/wiki/Asynchronous_serial_communication)
* [Parallax Textbook PDF](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=6&ved=0CFIQFjAF&url=http%3A%2F%2Fforums.parallax.com%2Fattachment.php%3Fattachmentid%3D72648%26d%3D1282407806&ei=HZxcUry6K6vYigKWx4CQBA&usg=AFQjCNGs_caLb8AnQ8HO5-WzaRnSsrnEBA&cad=rja)

**Example Async Serial Parts**

* [MAX3232 Breakout](https://www.sparkfun.com/products/11189)
* [USB to Serial Breakout Board](https://www.sparkfun.com/products/718)
* [USB to RS232 Cable](https://www.sparkfun.com/products/11304)

**What Logic Decodes**

[ ![](https://trello-attachments.s3.amazonaws.com/57215da0d6b19b4ab3609e8c/1220x144/2fd9ac0621006d0659bee67428b0cc09/serial.png) ](https://trello-attachments.s3.amazonaws.com/57215da0d6b19b4ab3609e8c/1220x144/2fd9ac0621006d0659bee67428b0cc09/serial.png)

* Start Bit
* Data Bits
* Parity Bit
* Stop Bit
* Autodetect Baud Rate

