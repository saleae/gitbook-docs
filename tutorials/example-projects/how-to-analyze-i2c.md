# STM32 Nucleo Board - Analyzing I2C

Inter-Integrated Circuit (I2C or IIC) is a 2-wire communication protocol that allows multiple low-speed peripherals, such as sensors, to be attached to the same bus. Normally, a single microprocessor or microcontroller is configured as the master, which initiates all communication on the bus.

The 2 lines used in I2C are Serial Data Line (SDA) and Serial Clock Line (SCL). The lines are [open collector or open drain](https://en.wikipedia.org/wiki/Open\_collector), which means the drivers on the master or devices can pull the lines low but cannot pull them high. This configuration prevents damage to the drivers when more than one device attempts to communicate on the bus at the same time.

Example code is provided below for [Arduino](https://www.arduino.cc/), [mbed](https://os.mbed.com/), or [AC6 System Workbench for STM32 (SW4STM32)](http://www.openstm32.org/).

**Required Materials**

| Item                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One of the Saleae logic analyzers: [Saleae Logic 8](https://usd.saleae.com/products/saleae-logic-8), [Saleae Logic Pro 8](https://usd.saleae.com/products/saleae-logic-pro-8), or [Saleae Logic Pro 16](https://usd.saleae.com/products/saleae-logic-pro-16)​ |
| ​[Nucleo-F446RE](https://www.digikey.com/product-detail/en/stmicroelectronics/NUCLEO-F446RE/497-15882-ND/5347712)​                                                                                                                                            |
| ​[TMP102 temperature sensor breakout board](https://www.digikey.com/product-detail/en/sparkfun-electronics/SEN-13314/1568-1520-ND/6797646)​                                                                                                                   |
| ​[Male 0.100 inch headers](https://www.digikey.com/product-detail/en/sullins-connector-solutions/PRPC040SAAN-RC/S1011EC-40-ND/2775214)​                                                                                                                       |
| ​[Breadboard](https://www.digikey.com/product-detail/en/bud-industries/BB-32621/377-2094-ND/4156445)​                                                                                                                                                         |
| ​[Jumper wires](https://www.digikey.com/product-detail/en/sparkfun-electronics/PRT-12795/1568-1512-ND/5993860)​                                                                                                                                               |

#### Connect Hardware <a href="#connect-hardware-4" id="connect-hardware-4"></a>

One of the easiest to use I2C sensors is the inexpensive TMP102 temperature sensor. The sensor can be configured to drive an alert pin when certain temperature thresholds are met. However, we only need to worry about reading from the Temperature register. On power up, the TMP102 will simply begin sampling and storing temperature data in that register.

Solder header pins to the TMP102 breakout board, and connect the Nucleo to the TMP102 breakout board as shown in the following diagram. Note that GND, SDA, and SCL are broken out to the male pins to the right of the female Arduino headers on the Nucleo. This setup allows us to attach the Saleae Logic Analyzer wires.

![](../../.gitbook/assets/i2c\_circuit\_fritzing.png)

#### Run Demo Application <a href="#run-demo-application-4" id="run-demo-application-4"></a>

Download the example code for your IDE:

{% file src="../../.gitbook/assets/i2c_example_arduino.zip" %}
I2C Example - Arduino
{% endfile %}

{% file src="../../.gitbook/assets/i2c_example_mbed.zip" %}
I2C Example - mbed
{% endfile %}

{% file src="../../.gitbook/assets/i2c_example_sw4stm32.zip" %}
I2C Example - SW4STM32
{% endfile %}

Open the demo in your chosen IDE. Compile the program, and upload it to the Nucleo-F446RE development board.

Open the serial terminal program that you downloaded from the UART example.

Connect to the Nucleo board over the assigned serial port with a baud rate of **115200**, 8 data bits, no parity bit, and 1 stop bit (**8-N-1**). Open the connection, and you should see the temperature (in Celsius) being reported to you in regular intervals. Try breathing on the TMP102 sensor to change the readings.

![](../../.gitbook/assets/screen\_26.png)

#### Measure the Signal <a href="#measure-the-signal-3" id="measure-the-signal-3"></a>

Open the Logic software with the Logic Analyzer plugged in. Click on the **Device Settings Button**.

In the device settings window, set the speed to **at least 50 MS/s** and the duration to **1 second**. Click both **Clear** buttons to disable all channels, leaving only digital Channel 0 enabled. Click **digital Channel 1** to enable it as well.

![](../../.gitbook/assets/screen\_27.png)

Set the protocol analyzer by clicking on the plus button (**+**) next to _Analyzers_ on the right side. Select **I2C** to bring up the settings window. Leave everything as default and click **Save**.

![](../../.gitbook/assets/screen\_28.png)

The data line (SDA) is normally the first signal to change during an I2C transfer. Because the lines are _open drain_, they will be nominally high, which means that we need to watch for a high-to-low transition. Click on the **Trigger Button** next to _Channel 0 (I2C - SDA)_, and select the **Trigger on Falling Edge** option.

![](../../.gitbook/assets/screen\_29.png)

Click on the **Trigger Button** again to close the pop-up. Click **Start** to begin collecting data. Because we told the Nucleo to read from the sensor every 0.2 seconds, we should begin collecting data right away.

Zoom in around the _0 s : 0 ms : 0 μs_ mark, and you should see some I2C data. Click on the _gear icon_ next to _I2C_ under _Analyzers_. Click on **Hex** under _Display Radix_ to show the interpreted data as hexadecimal.

You should see a write operation and a read operation. Both should begin with the address of the TMP102, which is 0x48 as a 7-bit number. If we shift it left by 1 bit, we get 0x90, and the last bit determines the type of operation (0 for write and 1 for read).

![](../../.gitbook/assets/screen\_30.png)

If you look at the write operation, you should see that the address is followed by the memory location of the TMP102’s _Temperature_ register (0x00) and an _ACK_ (line is low for 1 bit). Immediately following the write operation, you should see a read operation. Here, the microcontroller waits for 2 bytes to be sent by the TMP102. In the picture, the bytes returned are 0x017 0x30 (binary 0001 0111 0011 0000). The first byte is followed by an _ACK_ (line kept low for 1 bit) and the second byte is followed by a _NACK_ (line returned to high for 1 bit to indicate the end of the transmission).

This binary data represents the temperature reading by the TMP102 and is interpreted in the program to produce a human-readable result (in Celsius). Try breathing on the sensor to change the reading and see if you can capture the results.
