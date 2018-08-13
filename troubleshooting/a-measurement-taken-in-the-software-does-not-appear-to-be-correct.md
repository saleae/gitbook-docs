# A Measurement Taken in the Software Does Not Appear to Be Correct



This is either a bug in the measurement code in the Saleae software or the measurement is not configured properly.

The software has four main types of measurements:

* Instantaneous digital measurement

    When you move the mouse over a digital channel, this is the measurement that actively follows the mouse.

* Instantaneous analog measurement

    When you move the mouse over an analog channel, this is the measurement that actively follows the mouse.

* Persistent digital measurement annotation

    When you add a measurement from the annotations panel \(or by pressing the "M" key\) and place the measurement on a digital channel, this type of measurement is used.

* Persistent analog measurement annotation

    When you add a measurement from the annotations panel \(or by pressing the "M" key\) and place the measurement on an analog channel, this type of measurement is used.

Each type of measurement has a number of possible calculations that can be enabled or disabled. Many of these calculations are shared between measurement types.

If you believe a measurement calculation is wrong, it's possible that the wrong measurement calculation is active. Some measurement calculations unfortunately don't make as much sense in some cases, and we are working to correct it.

Please report any suspected issues to support. Include a screenshot and a copy of the saved capture so we can open it in the debugger to see what's happening.

**Common Issues**

* Width vs. Period

    The definition of these calculations is different for instantaneous measurements and persistent measurements.

    For instantaneous measurements, the width takes the region under the mouse cursor and finds the nearest transitions on either side. That distance is the width result. The period result takes that width and adds to it the width of the next region to the right of the mouse cursor.

    For the persistent measurement, width and period become the time between the start of the measurement and the end of the measurement and don't have much value. For persistent measurements, please take a look at the minimum, maximum, and average measurements, which will analyze each cycle within the measurement instead.  

* Period vanishes sometimes for the instantaneous measurement

    Sometimes the pulse to the right of the pulse under the mouse is too narrow to see. In that case, since it's not visually distinct enough for the user to notice the second pulse, the measurement shuts down all computations based on the second pulse. To get these measurements back, just zoom in until you can see the next pulse.

