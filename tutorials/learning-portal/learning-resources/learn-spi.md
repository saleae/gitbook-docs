# Learn SPI - Serial Peripheral Interface

SPI (serial peripheral interface) is a common application of synchronous serial—where a dedicated clock line indicates when to read one or more data lines. Generally, SPI consists of a single master (typically a microcontroller) and one or more slave devices. In a typical application, there are 4 wires: A clock line, an enable line, a dedicated master-to-slave data line, and a dedicated slave-to-master data line.

### **SPI and Synchronous Serial**

SPI is a particular type of synchronous serial. We'll start by discussing the characteristics of synchronous serial.

### **Serial vs. Parallel**

Serial (as opposed to parallel) means one bit (1 or 0) is placed on the bus (wire or wires) at a time.

### **Synchronous Serial vs. Asynchronous Serial**

When we talked about asynchronous serial, recall that the receiver was responsible for figuring out exactly when a bit should be read from the bus. To do this, we used a timer and kept track of how much time had elapsed. At certain time intervals, we would record what was on the bus.

<figure><img src="../../../.gitbook/assets/SyncAsync.png" alt=""><figcaption></figcaption></figure>

With synchronous serial, things are more straightforward. We are explicitly told when we should read the data line. To do this, another wire is added (for a total of 2 wires). This other wire, called the clock line, tells us when to read the data line.

<figure><img src="../../../.gitbook/assets/SyncAsync1.png" alt=""><figcaption></figcaption></figure>

### **How the Clock Line Tells Us When to Read the Data Line**

There are several ways in which the clock line could tell us when to read the data line. For example, maybe we should read the data line whenever the clock line is a logic 1. A better way is to use the "edge" or "transition" between logic states to indicate that the data line should be read. This has the advantage of being a single event—a single snapshot in time—rather than a region of time. This reduces any ambiguity about when exactly the data line should be read.

### **Rising Edge or Falling Edge?**

The rising edge (also called positive edge or posedge) is when the state changes from a low to a high (0 to 1). The falling edge (also called negative edge or negedge) is when the state changes from a high to a low (1 to 0).

<figure><img src="../../../.gitbook/assets/RiseFall.jpg" alt=""><figcaption></figcaption></figure>

In SPI, data are only ever valid (should be read) on either the rising or falling edge. Which one it is—rising or falling edge—depends on the implementation. For existing parts and systems, you'll have to look it up (typically in a datasheet). In some applications, you may have the flexibility to use either (you'll need to pick one), and then make sure everyone sticks to the standard.

### **Synchronization – Which Bit Belongs to Which Byte?**

We know when to read a bit, but how do we know which bit we are reading? In other words, how do we synchronize? The most straightforward way to synchronize is to use a third wire. Ahead of time, we decide that a rising (or falling) edge of that wire will be our synchronization event. Typically, this wire is called enable or reset (but it's the same idea.) It allows the different parts of a system to synchronize—to revert to a known starting state.

### **Enable and Disable**

The enable line is used for synchronization, but it usually also serves another purpose. Its state (0 or 1) indicates if something should be enabled or disabled. For example, maybe you don't need a particular device to be running all the time. You may be able to disable it, putting it into a low power mode. In SPI, that has the added benefit of choosing which device you want to talk to. You simply disable all the devices except the one you want to talk to.

### **A Simple Implementation of Synchronous Serial – the Shift Register**

In practice, shift registers are often used in the implementation of SPI.

### **Point-to-Point Connection**

There are many possible ways in which a synchronous serial could be used with more than two devices. One simple way is that each pair of devices that needs to communicate has dedicated connections. Notice, however, that the number of connections you need grows geometrically. So this isn't a great solution.

<figure><img src="../../../.gitbook/assets/DataClock.jpg" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/ThreeDevice.png" alt=""><figcaption></figcaption></figure>

### **Bus**

A bus is a collection of wires shared by many devices.

<figure><img src="../../../.gitbook/assets/FiveDevice.png" alt=""><figcaption></figcaption></figure>

Notice that a bus uses far fewer connections. However, there are some limitations:

* Only one device can "talk" at a time.
* If two devices talk at a time, this is a "bus collision." Imagine what happens if one device outputs a 0 at the same time another device outputs a 1. That is a short circuit!
* A device needs some way of knowing if someone is already talking on the bus.
* The bus needs to recover from potential conflicts and have a way to figure out who gets to go first.

While a bus topology like the one shown is very powerful, it requires electrical- and protocol-level complexity to deal with the issues raised above. It's not ideal for very cheap and simple devices.

### **The SPI Way**

SPI uses a bus but makes a few compromises to make things very simple.&#x20;

<figure><img src="../../../.gitbook/assets/SPIWay.png" alt=""><figcaption></figcaption></figure>

### **Only One Master**

In SPI, only one of the devices is in charge. It alone decides who can talk on the bus. Furthermore, devices can only talk to the master device; they can't talk to each other.

### **The Lowly Slaves**

All other devices on the SPI are called slaves.

### **Choosing Which Slave Gets to Talk with the Master**

In SPI, the master uses an enable line for each and every slave. In this way, the master can select which slave is active. Generally speaking, only one slave can be active at a time.

### **SS or EN**

In SPI, the enable line is usually called SS (slave select) or EN (enable). It's all the same thing.

### **Enable (EN or SS) Is Active Low**

The SPI enable line is almost always inverted: 1 means disabled; 0 means enabled.

### **Communications with the Active Slave**

**MOSI**

In SPI, the master has a dedicated data output line called MOSI (master out, slave in). All the slaves listen on this line but ignore it if they are not active. In SPI, data are typically sent most significant bit first (MSB first).

**MISO**

The master also has a dedicated data input line called MISO (master in, slave out). Only the active slave is allowed to transmit on this line. All the other slaves MUST transition to high-z mode when they are not active (i.e., they may not drive the line). This is the function of a tri-state buffer. In SPI, data are typically sent most significant bit first (MSB first).

**CLK**

Since this is synchronous serial, there needs to be a clock, which is typically called CLK. The clock is used with both the MOSI and MISO data lines.

**The Unspecified Details**

SPI leaves a couple things unspecified. For example, should a slave read the MOSI line on CLK's rising edge or its falling edge? An additional complication is that the slave must generate output data on MOSI such that its data will be valid when the master reads it in accordance with its own CLK signal. That is a little backward.

**Clock Polarity and Phase – CPOL and CPHA**

Datasheets specify the previously mentioned details in terms of clock polarity (CPOL) and clock phase (CPHA). An additional complication is that the slave must generate output data on MOSI such that its data will be valid when the master reads it in accordance with its own CLK signal. That is a little backward. Clock polarity (CPOL) is the state of the clock at the moment a slave's enable line becomes active. CPOL=0 means that the clock is low (0) as the slave becomes enabled. CPOL=1 means the clock is high (1) when the slave becomes enabled.

<figure><img src="../../../.gitbook/assets/Polarity.png" alt=""><figcaption></figcaption></figure>

At some point after a slave becomes active, the clock likely will change. If the data on MOSI and MISO should be read on this first edge, the Clock Phase (CPHA) is 0. Alternatively, if data on MOSI and MISO should be read the 2nd time the CLK changes, the Clock Phase (CPHA) is 1.&#x20;

CPOL=0 (the clock starts out low) CPHA=0 (data is valid on the 1st clock edge)

<figure><img src="../../../.gitbook/assets/Pol00.png" alt=""><figcaption></figcaption></figure>

CPOL=0 (the clock starts out low) CPHA=1 (data is valid on the 2nd clock edge) &#x20;

<figure><img src="../../../.gitbook/assets/Pol01.png" alt=""><figcaption></figcaption></figure>

CPOL=1 (the clock starts out high) CPHA=0 (data is valid on the 1st clock edge) &#x20;

<figure><img src="../../../.gitbook/assets/Pol10.png" alt=""><figcaption></figcaption></figure>

CPOL=1 (the clock starts out high) CPHA=1 (data is valid on the 2nd clock edge)&#x20;

<figure><img src="../../../.gitbook/assets/Pol11 (1).png" alt=""><figcaption></figcaption></figure>

**SPI Variations / Settings**

**Clock Polarity and Clock Phase**

The SPI variations you'll typically need to worry the most about is the clock polarity and clock phase discussed above.

<figure><img src="../../../.gitbook/assets/PolPhase.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/PolPhase1.png" alt=""><figcaption></figcaption></figure>

**Bit Rate**

The bit rate is the fastest speed at which the CLK line will operate. This can vary wildly with the application, from a few hundred bits per second to many tens of MHz. Since the CLK line provides us when to read the data line, there is no significant difference in how things operate, assuming all the devices can keep up.

**Bit Order**

Data are sent over the SPI most significant bit first. However, you may find yourself using SPI code or an SPI hardware peripheral with synchronous serial that isn't strictly SPI.&#x20;

<figure><img src="../../../.gitbook/assets/BitOrder.png" alt=""><figcaption></figcaption></figure>

**Bits per Transfer/Word**

In most applications, data sent over an SPI are byte-oriented. However, there is no fast rule in this area, so technically, any number of bits could comprise a word. SPI synchronizes using the Enable (or SS) line; there is no delimiter to specify when one word ends and the next begins.&#x20;

<figure><img src="../../../.gitbook/assets/BitPerTrans.png" alt=""><figcaption></figcaption></figure>

**Enable/Slave Select Polarity**

SPI applications typically use logic 0 as the active state for the enable line. For synchronous serial more generally, this could easily be the other way around.

<figure><img src="../../../.gitbook/assets/Enable.png" alt=""><figcaption></figcaption></figure>

**Some Good Resources**

| [Wikipedia](http://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus) | [Microchip SPI Presentation](http://ww1.microchip.com/downloads/en/devicedoc/spi.pdf) | [EE Times SPI Article](http://www.eetimes.com/discussion/beginner-s-corner/4023908/Introduction-to-Serial-Peripheral-Interface) |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |

**Example Parts That Use SPI**

| [EEPROM](http://www.sparkfun.com/products/301)                             | [LCD](http://www.sparkfun.com/products/9363)             | [Magnometer](http://www.sparkfun.com/products/244)     |
| -------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| [SD Card](http://www.sparkfun.com/products/8163)                           | [Gyro](http://www.sparkfun.com/products/8372)            | [Accelerometer](http://www.sparkfun.com/products/8791) |
| [Analog to Digital Converter (ADC)](http://www.sparkfun.com/products/8636) | [Pressure Sensor](http://www.sparkfun.com/products/9721) |                                                        |

### Further Reading

**Top Resources**

* [Wikipedia](http://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus)
* [Microchip SPI Presentation](http://ww1.microchip.com/downloads/en/devicedoc/spi.pdf)

**Example SPI Parts**

* [EEPROM](http://www.sparkfun.com/products/301)
* [LCD](http://www.sparkfun.com/products/9363)
* [Magnometer](http://www.sparkfun.com/products/244)
* [SD Card](https://www.sparkfun.com/products/11609)
* [Gyro](https://www.sparkfun.com/products/11341)
* [Analog to Digital Converter (ADC)](http://www.sparkfun.com/products/8636)
* [Pressure Sensor](http://www.sparkfun.com/products/9721)
