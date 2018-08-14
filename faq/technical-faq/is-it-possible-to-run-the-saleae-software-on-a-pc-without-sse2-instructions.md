# Is It Possible to Run the Saleae Software on a PC without SSE2 Instructions?

The Saleae software includes optimizations using the SSE2 instruction set. These optimizations were handwritten to optimize the analog graph rendering as well as optimize filters.

We do not intend to support CPUs without SSE2. In the future, we do plan to support them but will not require more modern SIMD instructions. At that time, we may add a fall back system to support normal math instructions.

Unfortunately, it's a non-trivial change. Significant changes would need to be made to support falling back. It would not simply be a compiler settings change.

The system requirements have been updated to reflect this:

[https://trello.com/c/xs0Qv8SC/139-what-are-the-system-requirements-for-the-saleae-products](https://trello.com/c/xs0Qv8SC/139-what-are-the-system-requirements-for-the-saleae-products)

