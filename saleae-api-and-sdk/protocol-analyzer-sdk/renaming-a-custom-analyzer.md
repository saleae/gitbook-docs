# Renaming a Custom Analyzer

If you are building your custom analyzer from one of the pre-installed analyzers listed at the bottom of the article below, then you may want to rename the analyzer to suit your needs.

{% page-ref page="./" %}

The rename\_analyzer.py script as shared in our [SampleAnalyzer](https://github.com/saleae/SampleAnalyzer) only works with the SampleAnalyzer. If you plan on building a custom analyzer using another existing analyzer as a starting point, then the steps below will help rename your analyzer so that it appears in the software as you'd like.

Specifically, to change the name of the analyzer, you really only need to edit some things below. Here we are using the [SPI Analyzer](https://github.com/saleae/spi-analyzer) source code as the example.:

1. In `CMakeLists.txt`. 
   * Change `project(spi_analyzer)` to `project(my_analyzer)`. This controls the output library's file name \(e.g. `spi_analyzer.dll`, `libspi_analyzer.so`, etc\)
   * The line of code is [here](https://github.com/saleae/spi-analyzer/blob/9e6e160daa461863713ec6466d4ea536e7dc0c58/CMakeLists.txt#L2).
2. In two places in the `SPIAnalyzer.cpp`, change `"SPI"` to `"My Analyzer"` :
   * [Here](https://github.com/saleae/spi-analyzer/blob/9e6e160daa461863713ec6466d4ea536e7dc0c58/src/SpiAnalyzer.cpp#L317) and [Here](https://github.com/saleae/spi-analyzer/blob/9e6e160daa461863713ec6466d4ea536e7dc0c58/src/SpiAnalyzer.cpp#L322).
   * These control the name of the analyzer as shown in the Logic software.
3. Optional - You may also edit the source file names and the class names, but this is not required.



