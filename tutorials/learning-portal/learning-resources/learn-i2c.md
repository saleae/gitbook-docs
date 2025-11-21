# Learn I2C - Inter-Integrated Circuit

I2C is a very common communication protocol typically used by microcontrollers to communicate with various peripheral ICs, typically on the same PCB. I2C has two wires: a data (SDA) line and a clock (SCL) line. Peripherals on the bus each have their own address. Among other reasons, I2C is attractive because it is highly standardized.

### **Topology**

<figure><img src="../../../.gitbook/assets/Topology (1).png" alt=""><figcaption></figcaption></figure>

I2C uses just two wires: a data line called SDA and a clock line called SCL. Even as you add more devices to the bus, there are still only two wires.

<figure><img src="../../../.gitbook/assets/Topology2.png" alt=""><figcaption></figcaption></figure>

Both I2C lines are open-drain and are pulled up with a resistor. To put a 1 on the wire, you change your output to high-z. To put a 0 on the wire, pull it low.

If using a microcontroller GPIO pin, change the pin to input mode to produce a 1; to produce a 0, you would output a 0 to the pin and then change its mode to output mode.

The voltage used in I2C can be any logic level (e.g., 3.3V) that all the participants can tolerate.

### **Synchronization Without Enable Lines**

Recall that SPI enable lines provide synchronization. When the enable line transitions from inactive to active, this event establishes the beginning of a data transfer. How does I2C produce a synchronization event from only two wires?

With synchronous serial in general (including SPI), the data line is allowed to change pretty much any time it can get away with it. I2C changes this, establishing that under normal circumstances, the data line may only change state when the clock is low.

During normal data transfer, the data line may only change when the clock is low.

<figure><img src="../../../.gitbook/assets/Sync.png" alt=""><figcaption></figcaption></figure>

Since changing the data line when the clock is high is not allowed during normal data transfer, I2C "reserves" this case and uses it to signal a synchronization event.

There are two ways the data line can change while the clock is high. It can transition from 0 to 1 while the clock is high, or it can transition from 1 to 0. In I2C, these each mean something specific.

### **START and STOP – I2C's Synchronization Events**

* A START event occurs when the CLK (clock) is high and SDA (data line) falls (1 to 0).

<figure><img src="../../../.gitbook/assets/Start.png" alt=""><figcaption></figcaption></figure>

* A STOP event occurs when the CLK (clock) is high and SDA (data line) rises (0 to 1).

<figure><img src="../../../.gitbook/assets/Stop.png" alt=""><figcaption></figcaption></figure>

### **Selecting a Slave to Talk To – Without Enable Lines**

With the SPI bus, the master has individual enable lines for each slave, allowing it to specify exactly which one it wanted to talk with.

Instead, I2C uses addresses. Here's how it works:

Every slave device on the bus has an address. These addresses are assigned by NXP and vary with the type of device (eeproms, DACs, sensors, etc.). Sometimes, devices have a few pins that can be used to slightly change their address. You can look up your device's address in its datasheet.

In I2C, addresses are 7-bits long.

### **Writing a Bit on the Bus**

As long as SDA (data) does not change when CLK (clock) is high, data can be sent on the bus. CLK will go low, SDA will change to a 1 or 0 if it needs to, and then the clock will go high. In I2C, a clock rising edge means that the data line is valid.

<figure><img src="../../../.gitbook/assets/Write.png" alt=""><figcaption></figcaption></figure>

CLK then goes low again, and the process repeats. During the time that SCK is high, SDA should not change unless the master is trying to signal START or STOP.

Bits are written with the most significant bit first.

### **A Step-by-Step I2C Transaction**

**Idle**

When the bus is idle, no one is pulling either line low. They are both pulled up.

<figure><img src="../../../.gitbook/assets/Idle.png" alt=""><figcaption></figcaption></figure>

**Start Event**

The master pulls the SDA (data) line low. Since the CLK is still high, this special situation is recognized by anyone listening as a START event. The START event means "listen up in case your name is called."

<figure><img src="../../../.gitbook/assets/Stop (1).png" alt=""><figcaption></figcaption></figure>

**Address, Read/Write Bit**

Next, the master writes out 7 address bits (most significant first, as with all I2C data).

The master pulls the clock line low, changes (if required) the data line, and brings the clock line high, writing the first bit. Then the clock line is pulled low again, and the process repeats.

The 8th bit is the direction bit. If this bit is a 0, it means this: Hey, device, I'm going to write some data to you. If it is a 1, it means this: Hey, device, please send me some data.

<figure><img src="../../../.gitbook/assets/ReadWrite.png" alt=""><figcaption></figcaption></figure>

**Acknowledge**

At this point, the master has written out 8 bits. The first 7 bits are the slave's address, and the 8th bit is if it will be writing data to the slave or reading data from it.

If there actually is device on the bus that has the particular address and is actually paying attention, that device will write the next bit (the 9th bit) as a zero.

Here is the way it works: The master lets the data line float (1). If a slave wants to acknowledge, it pulls down the data line (0). On the positive edge of the clock, the master checks the data line. If it's a 1, no device has acknowledged (a NAK). If it's a 0, then the device we addressed has heard us and is ready to move on to the next step.

**Data Transfer**

The very first 8 bits after a START indicate the address of the slave device, and direction data will flow.

The master can now write (or read) as much data as it wants from the slave. More clocks just mean more data bits. The only way out of this is with a START/RESTART or STOP event.

Data is sent one byte (8 bits) at a time, MSB first. If writing data to the device, the master controls both the data line and the clock line. If reading data from the device, the master controls just the clock line and lets the slave pull down the data line as it needs to.

Each byte sent or received is followed by a NAK (leaving the data line high) or ACK (pulling the data line low) by the slave. This acknowledgment bit is the 9th bit.

<figure><img src="../../../.gitbook/assets/Byte.png" alt=""><figcaption></figcaption></figure>

In the image above, we send (or receive) the 0b 10101010, followed by an acknowledge.

**Clock Stretching**

Sometimes a slave device may not be able to keep up with the master (remember, the master is controlling the clock). After each byte, the slave can force the master to wait. To do this, it first acknowledges the previous byte (as usual), waits for the master to bring the clock low again (in preparation for the first bit of the next byte), and then it pulls the clock low itself until it is ready to proceed with the next byte.

When it comes time for the master to "clock in" the next bit, it will release (float) the clock. If the slave device is not ready and is stretching the clock, the master will notice that the clock has not actually returned to a logic 1 and will know to wait.

**STOP (or Repeated START)**

This process of reading (or writing) bytes continues until one of two things happens: (1) The master decides it is done, or (2) the slave replies to one of the bytes with a NAK.

If the master receives a NAK from the slave, it must start over (issue a STOP or repeated START).

A repeated START is simply a START that has been preceded by another START without any STOP in between.

If there is only one master, then STOP and repeated START are functionally identical. Regardless, if a slave detects a START or a repeated START, it must start paying attention and listening to the address that will follow.

The only reason the STOP event is needed is to tell other master devices that the current master is done using the bus. We'll discuss multiple masters a little further on.

### **The I2C Transaction, Summarized**

1. The master performs a START (or repeated START).&#x20;
2. The master writes out 7 bits (the address of the slave it wants to talk to).&#x20;
3. The master writes out one bit, indicating if it wants to write to or read from the slave (0=write to slave, 1=read from slave).&#x20;
4. The slave, if it exists and is working, replies with an ACK. If the master gets a NAK, it must restart the process (go to step 1).&#x20;
5. The master, at its leisure, then reads (or writes) data to/from the slave.
   * Data are always sent MSB first, 8 bits at a time, followed by 1 acknowledge bit.&#x20;
   * If the master is writing to the slave, it controls both the clock and the data line.
   * If the master is reading from the slave, it controls the clock line and lets the slave control the data line.&#x20;
   * If the master received a NAK as the acknowledge bit, it must restart the process (go to step 1).&#x20;
   * If the slave wants more time, it may hold the clock line low after the master has pulled it low following the acknowledge bit. When the master subsequently releases (floats) the clock line, it must notice that the clock line does not float high and must then wait until the slave releases it and it does become high.
6. Communication continues, one byte at a time, with the addressed slave and in the direction indicated. To communicate with a different slave or change the direction of data transfer, the master must restart the procedure (go to step 1).
7. If the master is completely done and wishes to allow other master devices access to the bus, it issues the STOP event.

### **Multiple Masters**

In some situations, such as when devices can be "hot plugged" into a bus, there may be multiple masters on the same bus.

Masters monitor start and stop conditions on the bus and know not to use the bus until any START events are terminated with a STOP. In addition, when first starting up, a master should monitor the bus for any activity in case it has started up in the middle of bus communication, such as when it is hot plugged. If any activity at all is detected, it must wait until a STOP event.

In the rare (but possible) event that two or more masters begin talking at the same time, a process of arbitration occurs. This is actually quite simple. Since the I2C bus is pulled up, any master writing a 0 will win out over any master attempting to write a 1. After attempting to write a 1, each master checks to make sure the bus actually has a 1 on it. If not, it knows that it has lost arbitration with another master and must wait for a STOP event.

### **Variations and Settings**

A significant difference between the different low-level protocols (SPI, serial, I2C, etc.) is the level of variation there can be in exactly how it operates.

One of the advantages of I2C (or disadvantages, depending on your point of view) is that it is fairly rigid in its specification.

### **Data Rates**

Since I2C is a synchronous serial implementation, it can operate at a variety of clock speeds. Generally, I2C runs in the range of 100kbit to 400kbit. Speeds up to 3.4Mbit are possible, but a special, master-controlled pull-up is generally required to speed up the CLK rise time.

### **10-Bit Addresses**

The I2C specification was extended to allow 10-bit addresses since, due to its popularity, more addresses were needed. 10-bit devices can co-exist with 7-bit devices on the same bus.

Here is how 10-bit addresses are used:

* The master puts a 7-bit address on the bus, as usual.
* This address is in the form 0b 1111 0XX.
* The master then writes a the 8th bit, the direction bit, as usual.
* The two XX bits in the address byte above specify the most significant bits of the 10-bit address.
* Next, the master sends a 2nd byte, 0b XXXX XXXX, which comprises the least significant 8 bits of the 10-bit address.

### **How 7-Bit Addresses Are Listed in Datasheets**

Imagine you are using a microcontroller to write out the 7-bit address and direction bit to initiate talking with a slave device. If using a I2C peripheral (or subroutine), you would load it with a single byte, with the address and direction bit combined.

Often, datasheets will refer to the slave's address as an 8-bit number, which includes the direction bit. Don't be confused. The address is really just 7 bits long.

Not surprisingly, there is some disagreement as to how the address and direction should be displayed. Therefore, the Saleae I2C analyzer has the following display options:

<figure><img src="../../../.gitbook/assets/Address.png" alt=""><figcaption></figcaption></figure>

**Reference**

| [Wikipedia](http://en.wikipedia.org/wiki/I%C2%B2C) | [I2C Specification 2.1](http://www.nxp.com/documents/user_manual/UM10204.pdf) |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |

**Example I2C Devices**

| [EEPROM](http://www.sparkfun.com/products/525)                              | [GPIO Expander](http://www.sparkfun.com/products/8130)           | [Digital to Analog converter (DAC)](http://www.sparkfun.com/products/8736) |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [Real time clock](http://www.sparkfun.com/products/99)                      | [Compass](http://www.sparkfun.com/products/7915)                 | [Capacitive touch](http://www.sparkfun.com/products/10250)                 |
| [Camera - (also uses parallel data)](http://www.sparkfun.com/products/8667) | [Programmable Oscillator](http://www.sparkfun.com/products/9116) | [Nintendo Wiimote Accessories](http://www.sparkfun.com/products/9281)      |
| [Temperature sensor](http://www.sparkfun.com/products/9418)                 | [Accelerometer](http://www.sparkfun.com/products/9836)           | [Gyro](http://www.sparkfun.com/products/10612)                             |

### Further Reading

**Top Resources**

* [Wikipedia](http://en.wikipedia.org/wiki/I%C2%B2C)
* [I2C Specification 2.1](http://www.nxp.com/documents/user_manual/UM10204.pdf)
* [SparkFun Tutorial](https://learn.sparkfun.com/tutorials/i2c/introduction)
* [NXP I2C Overview (video)](http://www.youtube.com/watch?v=BcWixZcZ6JY\&list=PLB1BE22BA36431CFD)

**Example I2C Parts**

* [EEPROM](http://www.sparkfun.com/products/525)
* [GPIO Expander](http://www.sparkfun.com/products/8130)
* [Digital to Analog converter (DAC)](http://www.sparkfun.com/products/8736)
* [Real time clock](http://www.sparkfun.com/products/99)
* [Compass](http://www.sparkfun.com/products/7915)
* [Capacitive touch](http://www.sparkfun.com/products/10250)
* [Camera (also uses parallel data)](http://www.sparkfun.com/products/8667)
* [Programmable Oscillator](http://www.sparkfun.com/products/9116)
* [Nintendo Wiimote Accessories](http://www.sparkfun.com/products/9281)
* [Temperature sensor](http://www.sparkfun.com/products/9418)
* [Accelerometer](http://www.sparkfun.com/products/9836)
* [Gyro](http://www.sparkfun.com/products/10612)
