---
description: >-
  Digital Measurement Extensions for Logic 2 contributed by Saleae and the
  community
---

# Digital Measurement Extensions

**Usage:** High Level Analyzers Can be installed from within Logic 2 by navigating to 'Extensions' in the right hand menu and selecting 'install' on the extension of your choice. The extensions are listed alphabetically.

#### [Clock Stats ★ 1](https://github.com/saleae/clock-statistics-measurement)

**Version:** 0.0.2\
**Author:** Saleae\
**Description:** Builtin clock stats - Average frequency, edge count, etc

**Extensions:**

* **clockStats**: Type: DigitalMeasurement
  * Metrics:
    * edgesFalling: No. Falling Edges (N<sub>falling</sub>)
    * edgesRising: No. Rising Edges (N<sub>rising</sub>)
    * frequencyMin: Minimum Frequency (_f_<sub>min</sub>)
    * frequencyMax: Maximum Frequency (_f_<sub>max</sub>)
    * frequencyAvg: Average Frequency (_f_<sub>mean</sub>)
    * periodStdDev: Period STD (T<sub>std</sub>)

***

#### [Average Period ★ 0](https://github.com/timreyes/averagePeriod)

**Version:** 0.0.1\
**Author:** Tim Reyes\
**Description:** Digital measurement for avg period

**Extensions:**

* **AvgPeriod**: Type: DigitalMeasurement
  * Metrics:
    * averagePeriod: Average Period (T<sub>avg</sub>)

***

#### [Pulse Count ★ 1](https://github.com/timreyes/pulseCount)

**Version:** 0.0.1\
**Author:** Tim Reyes\
**Description:** Count pos and neg pulses

**Extensions:**

* **Pulses**: Type: DigitalMeasurement
  * Metrics:
    * positivePulses: Positive Pulses (N<sub>p(+)</sub>)
    * negativePulses: Negative Pulses (N<sub>p(-)</sub>)

***

#### [Total Periods ★ 0](https://github.com/timreyes/totalPeriods)

**Version:** 0.0.1\
**Author:** Tim Reyes\
**Description:** Digital measurement for total periods

**Extensions:**

* **min pos pulse**: Type: DigitalMeasurement
  * Metrics:
    * totalPeriods: Total Periods (P<sub>total</sub>)

***

#### [Duty Cycle ★ 1](https://github.com/timreyes/dutyCycle)

**Version:** 0.0.1\
**Author:** Tim Reyes\
**Description:** Digital Measurement for duty cycle

**Extensions:**

* **DutyCycle**: Type: DigitalMeasurement
  * Metrics:
    * dutyCycle: Duty Cycle (D<sub>cycle</sub>)

***

#### [Idle Period Count ★ 0](https://github.com/mark-blackburn-orpyx/idle-period-count)

**Version:** 0.0.1\
**Author:** Mark Blackburn (Blackbeard Software)\
**Description:** Count idle periods in a signal

**Extensions:**

* **Idle Search**: Type: DigitalMeasurement
  * Metrics:
    * idlePeriods: Idle Periods (N<sub>i)</sub>

***

#### [Baud rate estimate ★ 4](https://github.com/jonathangjertsen/BaudRateEstimate)

**Version:** 1.0.1\
**Author:** Jonathan Reichelt Gjetsen\
**Description:** Estimates the baud rate of a digital signal.

**Extensions:**

* **BaudRateEstimate**: Type: DigitalMeasurement
  * Metrics:
    * baud\_rate: Baud rate (f<sub>baud</sub>)

***

#### [Pulse Stats ★ 3](https://github.com/GrandFatherADI/PulseStats)

**Version:** 1.1.2\
**Author:** Peter Jaquiery\
**Description:** Calculate min, mean and max pulse width stats

**Extensions:**

* **PulseStats**: Type: DigitalMeasurement
  * Metrics:
    * pHMin: High Min (H<sub>min</sub>)
    * pHMean: High Mean (H<sub>mean</sub>)
    * pHSDev: High Std Dev (H<sub>SDev</sub>)
    * pHMax: High Max (H<sub>max</sub>)
    * pLMin: Low Min (L<sub>min</sub>)
    * pLMean: Low Mean (L<sub>mean</sub>)
    * pLSDev: Low Std Dev (L<sub>SDev</sub>)
    * pLMax: Low Max (L<sub>max</sub>)

***

#### [Fan RPM's ★ 0](https://github.com/cklopotic/fanRPMs)

**Version:** 0.0.1\
**Author:** Cory Klopotic\
**Description:** Measures the RPM's from a fan using the fan's TACH signal. TACH signal goes low 2 times per revolution.

**Extensions:**

* **Fan RPM's**: Type: DigitalMeasurement
  * Metrics:
    * RPM: RPM (RPM)

***

#### [Burst Stats ★ 0](https://github.com/GrandFatherADI/BurstStats)

**Version:** 1.0.3\
**Author:** Peter Jaquiery\
**Description:** Calculate min, mean and max cycle period stats

**Extensions:**

* **BurstStats**: Type: DigitalMeasurement
  * Metrics:
    * pPMin: Min Period (P<sub>min</sub>)
    * pPMean: Mean Period (P<sub>mean</sub>)
    * pPSDev: Period Std Dev (P<sub>SDev</sub>)
    * pPMax: Max Period (P<sub>max</sub>)
    * pBursts: Bursts count (Count)

***

#### [task\_detector ★ 0](https://github.com/enoble89/ezairo_task_measurement)

**Version:** 0.0.1\
**Author:** Evan Noble\
**Description:**

**Extensions:**

* **task\_detector**: Type: DigitalMeasurement
  * Metrics:
    * signal\_path\_bypass: signal\_path\_bypass (bypass)
    * signal\_path: signal\_path (sp)
    * freq\_shift: freq\_shift (fs)
    * aux\_out: aux\_out (aux)
    * compressor: compressor (comp)
    * tnr: tnr (tnr)
    * sig\_gen: sig\_gen (sgen)
    * mpo: mpo (mpo)
    * virtual\_fb: virtual\_fb (vfb)
    * mlnr: mlnr (mlnr)
    * fbm\_update: fbm\_update (fbm\_u)
    * fbm: fbm (fbm)
    * volume: volume (vol)

***

#### [CPU load analyzer ★ 0](https://github.com/m-syc/CPU-load-analyzer)

**Version:** 0.0.1\
**Author:** Mateusz Syc\
**Description:**

**Extensions:**

* **CPU load monitor**: Type: DigitalMeasurement
  * Metrics:
    * cpu\_load\_avg: Average CPU load (CPU load<sub>avg</sub>)
    * cpu\_load\_max: Max CPU load (CPU load<sub>max</sub>)
    * ts\_max: Max timestamp (t<sub>cpuload max</sub>)
    * cpu\_load\_min: Min CPU load (CPU load<sub>min</sub>)
    * ts\_min: Min timestamp (t<sub>cpuload min</sub>)

***

#### [lowTime ★ 0](https://github.com/peterstaylor/lowTimeSalae)

**Version:** 0.0.1\
**Author:** shy coder\
**Description:**

**Extensions:**

* **lowTime**: Type: DigitalMeasurement
  * Metrics:
    * metricKey: \<metric\_name> (\<short\_notation>)

***

#### [Pulse Interval Stats ★ 0](https://github.com/cvpines/Pulse-Interval-Stats---Saleae-Logic-2)

**Version:** 0.0.1\
**Author:** Coriander V. Pines\
**Description:** Calculate min, mean, and max interval lengths for pulses.

**Extensions:**

* **Pulse Stats**: Type: DigitalMeasurement
  * Metrics:
    * polarity: Interval Polarity (I<sub>pol</sub>)
    * count: Interval Count (I<sub>count</sub>)
    * min: Minimum Interval Length (I<sub>min</sub>)
    * mean: Mean Interval Length (I<sub>mean</sub>)
    * max: Maximum Interval Length (I<sub>max</sub>)
    * stddev: Interval Length Standard Deviation (I<sub>stddev</sub>)

***

#### [Period Stats ★ 0](https://github.com/GrandFatherADI/PeriodStats)

**Version:** 1.0.0\
**Author:** Peter Jaquiery\
**Description:** Calculate min, mean and max period stats

**Extensions:**

* **PeriodStats**: Type: DigitalMeasurement
  * Metrics:
    * pMin: Min (Min)
    * pMean: Mean (Mean)
    * pFreq: Freq (Freq)
    * pSDev: Std Dev (SDev)
    * pMax: Max (Max)
    * pCount: Count (Count)

***

#### [PacketMarker ★ 0](https://github.com/An2anetti/cxpi)

**Version:** 3.3.5\
**Author:** Nikolay\
**Description:** PacketMarkerCXPI

**Extensions:**

* **PacketMarker**: Type: DigitalMeasurement
  * Metrics:
    * metricKey: Throughput (TP)
    * anotherMetricKey: Latency (LT)

***

#### [freeRTS ★ 0](https://github.com/Jiemba5/logic2-rts)

**Version:** 0.0.2\
**Author:** jiemba5\
**Description:** Includes measures for finding utilization data for a sequential Real-Time Systems Task scheduler.

**Extensions:**

* **freeRTS**: Type: DigitalMeasurement
  * Metrics:
    * c\_average: Average c (C<sub>average</sub>)
    * c\_worst: Worst c (C<sub>worst</sub>)
    * c\_best: Best c (C<sub>best</sub>)
    * c\_std: Std c (C<sub>std</sub>)
    * t\_complete: Tasks completed (N<sub>completed</sub>)
    * p\_average: Average task period (T<sub>mean</sub>)

***

#### [ws2812 ★ 0](https://github.com/c520ve/saleae)

**Version:** 0.0.1\
**Author:** shy coder\
**Description:**

**Extensions:**

* **ws2812**: Type: DigitalMeasurement
  * Metrics:
    * metricKey: \<metric\_name> (\<short\_notation>)

***

#### [Hold-time Measurement - High ★ 1](https://github.com/ZOMLI/saleae_logic_addon_HighHoldTime)

**Version:** 0.0.2\
**Author:** ZOMLI\
**Description:** Measure the high hold time (between the first low level to the last low level).It will show the sum/mean/max/min of high\_hold time in measurement interval

**Extensions:**

* **high\_hold measure**: Type: DigitalMeasurement
  * Metrics:
    * highholdsum: hight hold Time sum (T<sub>Hsum</sub>)
    * highholdmean: hight hold Time mean (T<sub>Hmean</sub>)
    * highholdmax: hight hold Time max (T<sub>Hmax</sub>)
    * highholdmin: hight hold Time min (T<sub>Hmin</sub>)

***

#### [Hold-time Measurement - Low ★ 0](https://github.com/ZOMLI/saleae_logic_addon_LowHoldTime)

**Version:** 0.0.2\
**Author:** ZOMLI\
**Description:** Measure the low hold time (between the first low level to the last low level).It will show the sum/mean/max/min of low\_hold time in measurement interval

**Extensions:**

* **high\_hold measure**: Type: DigitalMeasurement
  * Metrics:
    * lowholdsum: low hold Time sum (T<sub>Lsum</sub>)
    * lowholdmean: low hold Time mean (T<sub>Lmean</sub>)
    * lowholdmax: low hold Time max (T<sub>Lmax</sub>)
    * lowholdmin: low hold Time min (T<sub>Lmin</sub>)

***

#### [An Extended Pulse Measurements Plugin ★ 0](https://github.com/ferret-guy/Digital-Pulse-Stats)

**Version:** 1.0.1\
**Author:** Mark Omo\
**Description:** Measures positive and negative pulse widths, duty cycle, and frequency (mean, min, max).

**Extensions:**

* **ExtendedDigital**: Type: DigitalMeasurement
  * Metrics:
    * posPulseWidthMean: Positive Pulse Width Mean (T<sub>posMean</sub>)
    * posPulseWidthMin: Positive Pulse Width Min (T<sub>posMin</sub>)
    * posPulseWidthMax: Positive Pulse Width Max (T<sub>posMax</sub>)
    * negPulseWidthMean: Negative Pulse Width Mean (T<sub>negMean</sub>)
    * negPulseWidthMin: Negative Pulse Width Min (T<sub>negMin</sub>)
    * negPulseWidthMax: Negative Pulse Width Max (T<sub>negMax</sub>)
    * dutyMean: Duty Cycle Mean (Duty<sub>mean</sub>)
    * dutyMin: Duty Cycle Min (Duty<sub>min</sub>)
    * dutyMax: Duty Cycle Max (Duty<sub>max</sub>)
    * freqMean: Frequency Mean (f<sub>mean</sub>)
    * freqMin: Frequency Min (f<sub>min</sub>)
    * freqMax: Frequency Max (f<sub>max</sub>)

***
