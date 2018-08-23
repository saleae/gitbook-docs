# Setup

The Saleae Logic Analyzer is a powerful tool capable of capturing multiple signals from a digital circuit and displaying that information in the form of timing diagrams. Saleae’s _Logic_ software can help you decode a variety of digital protocols, including UART, SPI, I2C, 1-Wire, I2S, CAN, USB, and many more. These features can make debugging your embedded designs much simpler.

To begin, download and install the _Logic_ software from [Saleae's downloads page](https://www.saleae.com/downloads/).

If you do not have a logic analyzer, you can still try out the _Logic_ software with simulated data. Once _Logic_ starts, simply click **Start Simulation**.

Connect one or more cable harnesses to the Saleae Logic Analyzer. Note that each cable harness has an arrow on the top of the connector. This arrow should point up \(same side as the Saleae logo\) and to the left \(the side with the ‘S’ in Saleae\).

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LJyTJ_59L9MNB5rtuO1%2F-LJyUNVtqiXktXimYgDa%2Fsaleae_harness_1.jpg?alt=media&token=da3b4357-3040-4a20-b9bb-9bbf7b645c77)

The unlabeled black wires are ground \(GND\), and the signal wires are labeled 0-8 \(repeated if you have the Logic Pro 16\). Looking straight at the ports of the analyzer, the top row of pins are labeled 0-8.

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LJyTJ_59L9MNB5rtuO1%2F-LJyULJIx8TfUpVJcLgP%2Fsaleae_annotated_pins.png?alt=media&token=942a2625-f589-4dde-b1a3-a856c7868db2)

Build your test circuit, connect at least one ground wire to your circuit's ground node, and connect one or more signal wires to the nodes you wish to measure.

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJyR1KEnjYBK2_cUw23%2F-LJyTJ_59L9MNB5rtuO1%2F-LJyUM48FpCaWS4UrU5F%2Fsaleae_example_circuit.jpg?alt=media&token=8e1c371f-6947-440a-ae13-edf765fc97f4)

