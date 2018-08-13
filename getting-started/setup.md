# Setup

The Saleae Logic Analyzer is a powerful tool capable of capturing multiple signals from a digital circuit and displaying that information in the form of timing diagrams. Saleae’s _Logic_ software can help you decode a variety of digital protocols, including UART, SPI, I2C, 1-Wire, I2S, CAN, USB, and many more. These features can make debugging your embedded designs much simpler.

To begin, download and install the _Logic_ software from [Saleae's downloads page](https://www.saleae.com/downloads/). If you need help with the installation process, refer to the [Software Download & Installation](https://saleae.gitbook.io/docs/~/edit/drafts/-LJeeG9zi2cw3l7lNm3x/user-guide/using-logic/untitled-2) section of the User Guide.

Connect one or more cable harnesses to the Saleae Logic Analyzer. Note that each cable harness has an arrow on the top of the connector. This arrow should point up \(same side as the Saleae logo\) and to the left \(the side with the ‘S’ in Saleae\).

![](../.gitbook/assets/saleae_harness_1.jpg)

The unlabeled black wires are ground \(GND\), and the signal wires are labeled 0-8 \(repeated if you have the Logic Pro 16\). Looking straight at the ports of the analyzer, the top row of pins are labeled 0-8.

![](../.gitbook/assets/saleae_annotated_pins.png)

Build your test circuit, connect at least one ground wire to your circuit's ground node, and connect one or more signal wires to the nodes you wish to measure.

![](../.gitbook/assets/saleae_example_circuit.jpg)

