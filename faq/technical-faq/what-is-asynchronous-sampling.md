# What is Asynchronous Sampling?

Asynchronous sampling means that the timing of when a signal is sampled is independent of the recorded signal.

Saleae Logic Analyzers use asynchronous sampling. They record signals at the sample rate specified by the user.

For example, if the sample rate is 1,000 Hz, then the Logic analyzer will record your signal once every 1 millisecond, or 1,000 times per second. Any activity between these sample points is ignored. That is why it is important to over-sample your signal in order to accurately capture the signal's behavior.

