# Are the Inputs Synchronously Sampled or Sweep Sampled?

All of the digital channels are sampled simultaneously, as are the analog channels. The digital channels are not sampled at exactly the same time as the analog channels, even when using identical sample rates. However, the analog and digital sample clocks are always related. (The digital sample clock is derived from the analog sample clock, which is driven from an oscillator.)

Each device actually has as many ADCs as it has analog channels. The analog inputs are not multiplexed, which allows for simultaneous sampling.

Variations in the analog input networks and trace delays inside and outside the FPGA will cause minor phase delays between the analog channels, but these delays should be very minor.
