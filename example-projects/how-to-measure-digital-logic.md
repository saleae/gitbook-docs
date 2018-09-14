# How to Measure Digital Logic

## How to Measure Digital Logic

The easiest way to test your Logic Analyzer is to use it to measure digital signals, that is, voltages that transition between two discrete values, such as 0 V and 3.3 V.

To demonstrate this, the example code \(see below\) for the STM32 Nucleo-F446RE can be uploaded via [Arduino](https://www.arduino.cc/), [mbed](https://os.mbed.com/), or as a project for the [AC6 System Workbench for STM32 \(SW4STM32\)](http://www.openstm32.org/) integrated development environment \(IDE\).

**Required Materials**

| Item |
| :--- |
| One of the Saleae logic analyzers: [Saleae Logic 8](https://usd.saleae.com/products/saleae-logic-8), [Saleae Logic Pro 8](https://usd.saleae.com/products/saleae-logic-pro-8), or [Saleae Logic Pro 16](https://usd.saleae.com/products/saleae-logic-pro-16)​ |
| ​[Nucleo-F446RE](https://www.digikey.com/product-detail/en/stmicroelectronics/NUCLEO-F446RE/497-15882-ND/5347712)​ |

#### Connect Hardware {#connect-hardware}

To begin, plug 2 cable harnesses into your Saleae Logic Analyzer. Note that the arrow on the harness connector should be facing up and to the left \(toward the ‘S’ in Saleae on your Logic Analyzer\). While the colors of the wires do not ultimately matter, it can be helpful to have them line up with the resistor color code \(from left to right\): black, brown, red, orange, yellow, green, blue, violet.

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LK-cRuCDRBtYSjHV9yh%2F-LK-clI1S3R3-uCjgPGL%2Fsaleae_harness_2.jpg?alt=media&token=b97b6736-ce68-4c88-b63d-718ea4402e57)

Connect the wires to the male header pins on the Nucleo board as shown in the diagram. Note that most of the inner male pins are connected to the female pins in the Arduino UNO configuration. For a full pinout of the Nucleo-F446RE, refer to the [pinout section on the mbed page](https://os.mbed.com/platforms/ST-Nucleo-F446RE/#nucleo-pinout).

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LK-cRuCDRBtYSjHV9yh%2F-LK-d6D9D_CX_dEpDNNE%2Fdigital_circuit_fritzing.png?alt=media&token=c97e8b3c-d1f7-4edc-a72e-b1606325a1ef)

#### Run Demo Application {#run-demo-application}

Download the example code for your IDE:

* ​[Digital Example - Arduino](http://localhost:4000/assets/code/digital_example_arduino.zip)​
* ​[Digital Example - mbed](http://localhost:4000/assets/code/digital_example_mbed.zip)​
* ​[Digital Example - SW4STM32](http://localhost:4000/assets/code/digital_example_sw4stm32.zip)​

If you would like to try running the code without installing any IDE, download the mbed example. Plug in your Nucleo board, and it should enumerate as a USB mass storage device on your computer. Unzip the example, and copy the .bin file to the Nucleo drive. The Nucleo board will reset, and the program will begin to run automatically.

Open the demo in your chosen IDE. Compile the program, and upload it to the Nucleo-F446RE development board. Whenever the board has power, it should begin running the digital example program, which counts in binary on pins D2-D9 \(D2 is least significant bit\).

#### Measure Signals {#measure-signals}

Open the Logic software and make sure your Logic Analyzer is connected via USB \(you should see “Connected” appear at the top of the window\). Click on the **Device Settings Button** \(the up/down arrow near _Start_\). This will open the device settings window.

Set the speed to **at least 50 MS/s** and the duration to **1 second** \(length of time the analyzer will collect data\). Click to enable **8 digital channels** \(0 through 7 in the top row\). Make sure **3.3+ Volts** is selected \(only for Logic Pro 8 and Logic Pro 16; the Logic 8 does not have this setting but will automatically adjust for digital logic in the 1.8 - 5.5 V range\).

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LK-cRuCDRBtYSjHV9yh%2F-LK-clHMK4tq_qjBqnMT%2Fscreen_06.png?alt=media&token=6a962d47-1f37-4e4f-8d00-19c2fc6866ae)

Click the **Device Settings Button** again to close the configuration window. You should see all 8 channels appear on the left side. Click **Start**. The software should take a moment to collect data, and show you the results to the right of their respective channels.

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LK-cRuCDRBtYSjHV9yh%2F-LK-clHOfY5RgKOeMSz9%2Fscreen_07.png?alt=media&token=c2626c67-4fe6-4a4b-a896-711e861dbce0)

Zoom in using your mouse wheel or the plus \(+\) key. Hover your mouse over a part of the waveform from Channel 0. You should see some text pop up, giving you some information about the pulses. The Logic software will automatically calculate the pulse width \(w\), the frequency \(f\), and the period \(τ\).

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LK-cRuCDRBtYSjHV9yh%2F-LK-clHRDxOAb7FLtR01%2Fscreen_08.png?alt=media&token=8dc40fcc-a523-4808-99ba-4172599b4585)

#### Using the Trigger {#using-the-trigger}

Sometimes, you need to measure a pulse or signal that happens sporadically. If you are unable to time the capture appropriately \(e.g. within the 1 second capture time\), you can use _triggers_ to start the capture process whenever a channel changes state.

For example, we will configure the Logic software to begin capturing whenever Channel 7 \(the most significant bit in our counter\) switches from high to low \(falling edge\). This will center the capturing process around the point \(t = 0\) when the counter rolls over from 255 \(0xFF\) to 0 \(0x00\).

By default, the Logic Analyzer should be configured to trigger on a rising edge for Channel 0. Click on the **Trigger Settings Button** for Channel 0 and click on the **Rising Edge** button, which should disable all triggers for the analyzer. Verify that the trigger buttons for all channels change to the rising edge icon.

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LK-cRuCDRBtYSjHV9yh%2F-LK-clHTbcZAXBcgXUBQ%2Fscreen_09.png?alt=media&token=dcb0413f-a785-4d84-a4f4-a3f529398999)

Click on the **Trigger Settings Button** for Channel 7. Select the **Trigger on Falling Edge** button.

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LK-cRuCDRBtYSjHV9yh%2F-LK-clHWyQzLKZU1gdc1%2Fscreen_10.png?alt=media&token=3a94a401-373d-44ed-9710-4249020132be)

Press the **Start** button and wait while the logic analyzers captures and processes data. Waveforms should appear in the main window pane. Zoom in around the trigger point, which should read _0 s : 0 ms : 0μs_. You should see that the falling edge of Channel 7 lines up with this point \(origin in time\).

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LK-cRuCDRBtYSjHV9yh%2F-LK-clHXiPwrtkIoOP4S%2Fscreen_11.png?alt=media&token=3415086a-d4e5-4334-8d80-e358368fe652)

If you pan left on the waveforms, you should see that the Logic Analyzer is capable of capturing up to about 0.5 ms prior to the trigger point.

If you zoom in around the trigger point, you should see that not all pins on the microcontroller are capable of toggling at the exact same time.

