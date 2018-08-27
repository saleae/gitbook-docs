# Are the Ground Pins Required for Each Input Used?

## Are the Ground Pins Required for Each Input Used?

The input channels on the Saleae devices are not isolated and share a common ground. The devices are also not isolated from the USB connection to the PC.

The new devices have a ground lead for each signal. When signal integrity is a concern—such as when working with high-speed digital or analog in the presence of cross-talk sources—connect a ground for each signal. Connect noisy digital inputs to leads as far as possible from leads connected to sensitive analog measurements.

At least one ground connection is required in order for the device to capture signals from the device under test, and additional connections are optional.

