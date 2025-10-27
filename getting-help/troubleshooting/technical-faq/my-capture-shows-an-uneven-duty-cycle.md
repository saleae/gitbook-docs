# My Capture Shows an Uneven Duty Cycle

You may wish to review asynchronous sampling before continuing.

{% content-ref url="what-is-asynchronous-sampling.md" %}
[what-is-asynchronous-sampling.md](what-is-asynchronous-sampling.md)
{% endcontent-ref %}

When recording a signal using asynchronous sampling, like in the case of the Saleae products, the exact time of the rising and falling edges of the signal is not recorded. Instead, the signal is periodically sampled at the specified sample rate, and only the state during those samples is recorded. In effect, the precise times of the rising and falling edges are rounded to the nearest sample.

That can be complicated by the non-zero rise and fall time of the signal. If a signal is sampled during a transition, it is recorded as a logic high or a logic low, based on the current voltage of the signal compared to the recording device's logic threshold voltages. See logic thresholds for details for below.

{% content-ref url="../../../product/user-guide/supported-voltages.md" %}
[supported-voltages.md](../../../product/user-guide/supported-voltages.md)
{% endcontent-ref %}

There are several reasons the recorded shape of a signal may not look like the expected shape.

**Non-Ideal IO Thresholds**

Depending on the IO voltages of the signal recorded, and the IO thresholds in use of the logic analyzer, these thresholds may not be well matched. This usually results in an exaggeration of the duty cycle. For instance, if you are recording a 10-volt signal but the logic analyzer has a logic threshold specifically for 3.3-volt logic (1.65 volt threshold in the case of the Logic Pro devices), then the logic analyzer will most likely interpret the rising and falling edges as predominantly high, causing the recorded duty cycle to be higher than expected. Ideally, the logic analyzer would interpret the exact halfway point of the transition to be the point where the signal switches between high and low. However, in the case of a 10-volt logic signal, the threshold of the logic analyzer would need to be 5.0 volts, which simply isn't supported. It's okay to use a non-ideal threshold voltage to record a signal; it just won't produce ideal timing results. In most cases, that should not be a problem.

**Low Sample Rate**

The sample rate of the logic analyzer determines the resolution in time of the recording. We recommend recording at the highest sample rate possible as often as possible, even when recording slower signals. For instance, if you are recording a 1 MHz square wave, technically the minimum required sample rate to record it would be 4 MSPS. However, this will only result in 4 samples per cycle. Since other sources of error are present, you will most likely observe several possible duty cycles: 50%, 25%, and 75%. However, if you sampled the same 1 MHz signal at 100 MSPS, you would most likely see duty cycles in the range of +/- 1% of the actual duty cycle.

**Unusual Wave Shape**

In the case of open drain signals where logic low is strongly driven but logic high is accomplished with a pull-up resistor, the rising and falling edge wave shapes will not be similar. Open drain signals will usually have a sharp falling edge but a slow, decay-shaped rising edge. The rising edge can be very slow in some cases, which will affect the recorded wave shape.

If you're curious, we encourage you to record the wave shape at a high analog sample rate. Keep in mind that when recording analog, you will want to record at least 10 times faster than the signal you are recording. Also, keep in mind that the anti-alias filter on the input will affect the analog wave shape on the display due to the lower bandwidth of the analog input.
