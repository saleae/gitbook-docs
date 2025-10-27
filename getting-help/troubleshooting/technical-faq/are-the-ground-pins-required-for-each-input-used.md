# Are the Ground Pins Required for Each Input Used?

The input channels on the Saleae devices are not isolated and share a common ground. The devices are also not isolated from the USB connection to the PC.

Our Gen 2 devices (Logic 4, Logic 8, Logic Pro 8, and Logic Pro 16) have a ground lead for each signal. You can refer to the image below for the location of the ground pins.

![Logic Pro 8 Channel Pins and Ground Pins](<../../../.gitbook/assets/image (12).png>)

When signal integrity is a concern—such as when working with high-speed digital or analog in the presence of cross-talk sources—connect a ground for each signal. Connect noisy digital inputs to leads as far as possible from leads connected to sensitive analog measurements.

At least one ground connection is required in order for the device to capture signals from the device under test, and additional connections are optional.
