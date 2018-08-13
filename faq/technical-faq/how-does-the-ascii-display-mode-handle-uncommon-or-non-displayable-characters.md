# How Does the ASCII Display Mode Handle Uncommon or Non-Displayable Characters?

When the software display mode is set to ASCII, it will attempt to map 8-bit values to their corresponding ASCII characters. This is particularly useful when decoding protocols that contain clear text such as asynchronous serial communications \(GPS NMEA data\), ASCII-based Modbus, Character LCD communications, or PS/2 Keyboard data.

When in this mode, common characters such as alpha-numeric characters and punctuation will just display in their ASCII equivalent. However, there are some special cases.

1. Characters that have standard escape sequences \(line feeds, carriage returns, and tabs\) will display their escape sequence like this: \r, \n, \t.
2. All values below 0x20 and values above 0x7E, with the exception of \t, \r, and \n, will be displayed as decimal instead of ASCII, surrounded by single quotes like this: '127'.
3. The space character will be surrounded by single quotes like this: ' '.
4. Commas will be displayed as the string COMMA. This is subject to change in future releases as the Analyzer SDK is updated to support different display modes for on-screen results and CSV export text.

**Hints and Common Issues**

* In many cases, ASCII is not the ideal display radix. You can change the display radix by following the instructions here: [https://trello.com/c/rNmkwkmP](https://trello.com/c/rNmkwkmP).
* One of the most helpful display bases when dealing with mixed ASCII text and raw data is "ASCII & Hex," which will display both values for each byte.
* Sometimes you might be in ASCII mode but not realize it. ASCII mode can look like decimal mode when dealing with values greater than 8 bits. If you see single quotes around your decimal numbers, you are actually still in ASCII mode. I recommend switching to decimal or hexadecimal to avoid issues displaying smaller numbers.

