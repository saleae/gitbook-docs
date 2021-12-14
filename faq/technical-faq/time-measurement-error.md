# Time Measurement Error

There are two primary contributions to error when we measure the time between two pulse edges.

**The first error source is due to time base inaccuracy** or error in the frequency of the sample clock source inside the logic analyzer. That is only significant for measuring long-time durations such as several seconds.

In percentage terms:\
\+/- .005% for Logic 4/8 and Logic Pro 8/16 ( +/- 50ppm)\
\+/- .02% for the original Logic/Logic16 ( +/- 200ppm)

In absolute terms (seconds):\
\+/- ( time\_period\_s _50us ) for Logic 4/8 and Logic Pro 8/16 ( +/- 50ppm)_\
_+/- ( time\_period\_s_ 200us ) for the original Logic/Logic16

**The second error (uncertainty) source is from asynchronous sampling.**

In the picture below, the arrows indicate when the logic analyzer is sampling the signal. The two waveforms show the two extreme cases in which the logic analyzer will report the same pulse width.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/57215d5f13aaa4b48c641d89/2382f69dd11a13f5bbe9827e31fdbf88/uncertainty\_error.png)

This is a total error (uncertainty) of 2 sample periods, or +/- 1 sample period.

In percentage terms:\
\+/- ( time period\_s / sample\_rate\_hz )

In absolute terms (seconds):\
\+/- ( 1 / sample\_rate\_hz )

Assumptions: We are assuming that the signal is perfectly digital (zero rise time) and that the sample clock has no jitter (i.e., perfectly periodic). For most purposes, that will be a reasonable assumption.

Please note that our Logic products were designed to be used at room temperature. Operations outside of room temperature may bring about other error sources that were not described in this article.

**Example**

When recording a 5 MHz crystal with a reported tolerance of +/- 30 PPM using Logic 8, what is the minimum and maximum frequency that could be measured in the software?

Note: For the most accurate frequency measurements using the Saleae Logic Software, we recommend recording for more than 1 second and using the measurement annotation to count the total of clock cycles over that range. More information on measurements can be found [here](https://trello.com/c/E5FWiUx7).

A 5 MHz Crystal with a tolerance of +/- 30 PPM could generate a clock frequency between 5.00015 MHz and 4.99985 MHz.

When recording this signal with a Logic 8 at 100 MS/s, the actual sample rate will be between 100.005 MS/s and 99.995 MS/s.

For a 100 million sample recording, the actual recording length will be between 1.00005 seconds and 0.99995 seconds.

That means between 5,000,400 and 4,999,735 clock cycles will be recorded. Using the measurement feature in the software, the measured average frequency should be in the range 5.000400 MHz and 4.999735 MHz.
