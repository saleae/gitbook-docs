# Pre-Trigger Buffer is Incomplete

## Pre-Trigger Buffer is Incomplete

When the Start button is clicked, the Logic software begins recording data into the pre-trigger buffer until the trigger event occurs.

In cases where the trigger event occurs almost immediately after the Start button is clicked, it may seem that the pre-trigger buffer size setting was ignored and the buffer may look incomplete.

For example, if the pre-trigger buffer size was set to 100 ms and the trigger occurs 10 μs after you click Start, then the pre-trigger buffer will only contain 10 μs of recorded data and not the full 100 ms that was expected. That might be the case for fast periodic signals that can cause a trigger event shortly after the Start button is clicked.

