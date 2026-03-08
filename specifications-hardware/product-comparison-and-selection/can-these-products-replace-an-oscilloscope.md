# Can These Products Replace an Oscilloscope?

Not exactly. The Saleae products are logic analyzers with analog data logging, not mixed signal oscilloscopes.

The analog inputs on the new Saleae products are lower bandwidth than oscilloscopes. They do not have variable gain and shift inputs, which means the input voltage range is fixed.

However, it could be much better than an oscilloscope for many applications, especially applications where a microcontroller is interacting with an analog signal in some way, such as reading an analog voltage or controlling an analog voltage.

Logic is not a good fit for the following applications:

* signal integrity work
* high-bandwidth analog signals
* small voltages at high resolution (such as less than 100mVpp)
* analog voltages outside the range of 0-5V (Logic 4, Logic 8) or -10V – 10V (Logic Pro 8, Logic Pro 16).

Several users have requested that we add oscilloscope-like features, such as repeated triggers. You can vote and comment for the idea [here](https://ideas.saleae.com/b/feature-requests/repeated-trigger-capture/)!
