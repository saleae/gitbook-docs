# Can Logic Operate with a Full-Speed USB Isolator?

## Can Logic Operate with a Full-Speed USB Isolator?

USB 2.0 full speed is a significantly slower and older USB specification, primarily used by older PC peripherals as well as devices requiring low USB bandwidth, such as USB mice and keyboards. All Saleae devices were designed to operate either over USB 2.0 high speed or USB 3.0 super speed.

The main reason you may want to operate a Saleae device over USB full speed is so the device can be used with an inexpensive USB 2.0 full speed isolator.

Only the original Logic currently works over USB 2.0/USB 1.1 full speed. All other products will not operate properly. The original Logic will only be able to record at 500 kSPS.

Keep in mind that USB 2.0 full speed is approximately 40 times slower than USB 2.0 high speed. Since the Saleae Logic devices all operate by streaming captured data over USB 2.0 high speed, the maximum sample rate is significantly limited.

All devices were tested using a USB 1.1 hub. Only the original Logic is able to sample using the latest software.

There are USB 2.0 high speed and USB 3.0 super speed isolators now on the market. For recommendations on these, please see this article.

{% page-ref page="suggestions-for-electrical-isolation.md" %}

