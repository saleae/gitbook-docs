---
description: >-
  Analog Measurement Extensions for Logic 2 contributed by Saleae and the
  community
---

# Analog Measurement Extensions

**Usage:** High Level Analyzers Can be installed from within Logic 2 by navigating to 'Extensions' in the right hand menu and selecting 'install' on the extension of your choice. The extensions are listed alphabetically.

#### [Voltage RMS ★ 0](https://github.com/saleae/voltage-statistics-measurement)

**Version:** 0.0.2\
**Author:** Saleae\
**Description:** Measure RMS voltage

**Extensions:**

* **voltageData**: Type: AnalogMeasurement
  * Metrics:
    * voltageRms: Voltage RMS (V<sub>RMS</sub>)

***

#### [Voltage Min and Max ★ 0](https://github.com/timreyes/voltageMinMax)

**Version:** 0.0.1\
**Author:** Tim Reyes\
**Description:** Analog measurement for min/max volts

**Extensions:**

* **MinAndMax**: Type: AnalogMeasurement
  * Metrics:
    * minimum: Minimum (V<sub>min</sub>)
    * maximum: Maximum (V<sub>max\</sub)</sub>

***

#### [Peak-to-Peak Voltage ★ 0](https://github.com/timreyes/voltagePeakToPeak)

**Version:** 0.0.1\
**Author:** Tim Reyes\
**Description:** Analog measurement for Vpeak-to-peak

**Extensions:**

* **PeakToPeak**: Type: AnalogMeasurement
  * Metrics:
    * peakToPeak: Peak-To-Peak Voltage (V<sub>pp</sub>)

***

#### [Analog Export ★ 2](https://github.com/jonathangjertsen/AnalogExport)

**Version:** 1.0.1\
**Author:** Jonathan Reichelt Gjertsen\
**Description:** Exports analog measurements to "CSV", that is, one row of data per sample. Please see README.md for caveats!

**Extensions:**

* **Analog Export**: Type: AnalogMeasurement
  * Metrics:
    * exp\_hint: Export hint (exp\_hint)
    * exp\_status: Export status (exp\_status)

***

#### [Voltage Start and End ★ 0](https://github.com/jonathangjertsen/VoltageStartAndEnd)

**Version:** 1.0.0\
**Author:** Jonathan Reichelt Gjertsen\
**Description:** Provides the start and end voltages.

**Extensions:**

* **Voltage Start and End**: Type: AnalogMeasurement
  * Metrics:
    * v\_start: Start voltage (V<sub>start</sub>)
    * v\_end: End voltage (V<sub>end</sub>)

***

#### [Voltage Statistics ★ 1](https://github.com/jonathangjertsen/VoltageStatistics)

**Version:** 1.0.0\
**Author:** Jonathan Reichelt Gjertsen\
**Description:** Provides mean, standard deviation, median, 5% quantile and 95% quantile.

**Extensions:**

* **Voltage Statistics**: Type: AnalogMeasurement
  * Metrics:
    * v\_avg: Voltage (V<sub>avg</sub>)
    * v\_std: Standard deviation (V<sub>std</sub>)
    * v\_med: Median deviation (V<sub>med</sub>)
    * v\_q05: 5% quantile (Q<sub>5%</sub>)
    * v\_q95: 95% quantile (Q<sub>95%</sub>)

***

#### [Analog Fundamental Frequency ★ 1](https://github.com/Marcus10110/Analog-Fundamental-Frequency-Measurement)

**Version:** 0.0.3\
**Author:** Mark "Cool Guy" Garrison\
**Description:** Measures fundamental frequency using autocorrelation.

**Extensions:**

* **Analog Frequency Analysis**: Type: AnalogMeasurement
  * Metrics:
    * fundamental: fundamental (_f_<sub>0</sub>)

***

#### [Rise/Fall Time ★ 1](https://github.com/FabianoGK/logic2-rise-fall-time-extension)

**Version:** 1.0.0\
**Author:** Fabiano Kovalski\
**Description:** Measures average rise and fall time from 30% to 70%

**Extensions:**

* **Rise/Fall Time**: Type: AnalogMeasurement
  * Metrics:
    * v\_30p: Voltage 30% (V<sub>30%</sub>)
    * v\_70p: Voltage 70% (V<sub>70%</sub>)
    * t\_rise: Average Rise Time (T<sub>rise</sub>)
    * t\_fall: Average Fall Time (T<sub>fall</sub>)

***

#### [HummingBird: I2C SPEC testing ★ 3](https://github.com/googleinterns/cros-hummingbird)

**Version:** 1.0.0\
**Author:** Peggy Lin\
**Description:** Automated Electrical Test for I2C Signal

**Extensions:**

* **HummingBird**: Type: AnalogMeasurement
  * Metrics:
    * spec: spec check result (Pass/Fail) (FAILs)
    * v\_high\_scl\_worst: SCL voltage at the HIGH level (V<sub>H,scl</sub>)
    * v\_low\_scl\_worst: SCL voltage at the LOW level (V<sub>L,scl</sub>)
    * v\_high\_sda\_worst: SDA voltage at the HIGH level (V<sub>H,sda</sub>)
    * v\_low\_sda\_worst: SDA voltage at the LOW level (V<sub>L,sda</sub>)
    * v\_nh\_scl\_worst: SCL noise margin at the HIGH level (V<sub>nh,scl</sub>)
    * v\_nl\_scl\_worst: SCL noise margin at the LOW level (V<sub>nl,scl</sub>)
    * v\_nh\_sda\_worst: SDA noise margin at the HIGH level (V<sub>nh,sda</sub>)
    * v\_nl\_sda\_worst: SDA noise margin at the LOW level (V<sub>nl,sda</sub>)
    * t\_rise\_scl\_worst: SCL max Rise Time (T<sub>r,scl</sub>)
    * t\_fall\_scl\_worst: SCL max Fall Time (T<sub>f,scl</sub>)
    * t\_rise\_sda\_worst: SDA max Rise Time (T<sub>r,sda</sub>)
    * t\_fall\_sda\_worst: SDA max Fall Time (T<sub>f,sda</sub>)
    * t\_low\_worst: Minimum low period Time (T<sub>low</sub>)
    * t\_high\_worst: Minimum high period Time (T<sub>high</sub>)
    * f\_clk\_worst: max clk frequency (f<sub>CLK</sub>)
    * t\_SU\_STA\_worst: RESTART setup time (T<sub>SU,Sr</sub>)
    * t\_HD\_STA\_S\_worst: START hold time (T<sub>HD,S</sub>)
    * t\_HD\_STA\_Sr\_worst: RESTART hold time (T<sub>HD,Sr</sub>)
    * t\_SU\_DAT\_rising\_host\_worst: rising data setup time (T<sub>SU,dat, wr,r</sub>)
    * t\_SU\_DAT\_falling\_host\_worst: falling data setup time (T<sub>SU,dat, wr,f</sub>)
    * t\_HD\_DAT\_rising\_host\_worst: rising data hold time (T<sub>HD,dat, wr,r</sub>)
    * t\_HD\_DAT\_falling\_host\_worst: falling data hold time (T<sub>HD,dat, wr,f</sub>)
    * t\_SU\_DAT\_rising\_dev\_worst: rising data setup time (T<sub>SU,dat, rd,r</sub>)
    * t\_SU\_DAT\_falling\_dev\_worst: falling data setup time (T<sub>SU,dat, rd,f</sub>)
    * t\_HD\_DAT\_rising\_dev\_worst: rising data hold time (T<sub>HD,dat, rd,r</sub>)
    * t\_HD\_DAT\_falling\_dev\_worst: falling data hold time (T<sub>HD,dat, rd,f</sub>)
    * t\_SU\_STO\_worst: STOP setup time (T<sub>SU,STO</sub>)
    * t\_BUF\_worst: bus free time between STOP and START (T<sub>BUF</sub>)

***

#### [Area Under Curve ★ 0](https://github.com/jvieira88/AreaUnderCurve)

**Version:** 1.0.0\
**Author:** Joao Vieira\
**Description:** An extension for Saleae Logic Analyser that determines the area under curve of an analog measurement.

**Extensions:**

* **Area Under Curve**: Type: AnalogMeasurement
  * Metrics:
    * area: Area (Vsec)

***

#### [Current Consumption ★ 1](https://github.com/jenish-rudani/Current-Consumption-Measurement_Saleae-Logic-Analyzer)

**Version:** 1.0.0\
**Author:** Jenish Rudani\
**Description:** An extension for Saleae Logic Analyser that determines the area under curve of an analog voltage measurement against 18 Ohm resistor to determine average current consumption

**Extensions:**

* **Average Current Consumption**: Type: AnalogMeasurement
  * Metrics:
    * Iavg: Current (I<sub>avg</sub>(V<sub>avg</sub>/18))
    * Vavg: Voltage (V<sub>avg</sub>)
    * Imax: Current (I<sub>max</sub>(V<sub>max</sub>/18))
    * Vmax: Voltage (V<sub>max</sub>)

***

#### [Saleae Measurements V2 ★ 2](https://github.com/saleae/saleae-measurements-v2)

**Version:** 0.0.3\
**Author:** Saleae\
**Description:** Saleae built-in V2 Measurements

**Extensions:**

* **Voltage Measurements**: Type: AnalogMeasurement
* **Pulse Measurements**: Type: AnalogMeasurement
* **Time Measurements**: Type: AnalogMeasurement

***
