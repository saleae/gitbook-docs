# Community Shared Protocols

The following analyzers are not officially supported by Saleae, but instead, were kindly shared by our community of users. Please [contact us](https://contact.saleae.com/hc/en-us/requests/new) if you need any help. Also, If you have your own analyzer you would like to see featured here, let us know!

### **List of Community Shared Protocols**

* [Anybus CompactCom SPI](https://github.com/hms-networks/AbccSpiAnalyzer)
* [APDU](https://github.com/zwizwa/sl-apdu)
* [Async Serial \(Dual channel & Packet detection\)](https://github.com/martonmiklos/dual-channel-packetiser-serial-analyzer)
* [CAN-FD](https://github.com/acosmith/Saleae_CAN-FD_Analyser)
* [Digital Command Control](https://www.ejberg.dk/portfolio/saleae-dcc-decoder/)
* [DHT2x](https://github.com/jakeson21/DHT2xProtocolAnalyzer)
* [Gamecube Controller Analyzer](https://github.com/jefflongo/GameCubeControllerAnalyzer)
* [InfraRed](https://github.com/procule/IRAnalyzer)
* [ISO7816 \(smart cards and secure elements\)](https://github.com/nezza/ISO7816Analyzer)
* [Luos Analyzer](https://github.com/Luos-io/Analyzer)
* [MBus](https://github.com/lab11/MBusAnalzyer)
* [MIPI DSI LP Analyzer](https://github.com/stawiski/Saleae-MIPI-DSI-LP-Analyzer)
* [MIPI RFFE v1](https://github.com/alejmrm/RFFEAnalyzer)
* [MIPI RFFE v2](https://github.com/blargony/RFFEAnalyzer)
* [N64 Controller](https://github.com/lunixbochs/n64-saleae-logic)
* [NEC IR Remote Control](https://github.com/LiveOverflow/NECAnalyzer) \(developed by [LiveOverflow](https://github.com/LiveOverflow)\)
* [NEC IR Remote Control](https://github.com/kodizhuk/Salae-Logic-NEC-Analyzer) \(developed by [kodizhuk](https://github.com/kodizhuk)\)
* [Parallel Analyzer \(Clockless\)](https://github.com/Zweikeks/saleae-logic-SimpleParallelNoClock-Analyzer)
* [PJON \(Padded Jittering Operative Network\)](https://github.com/aperepel/saleae-pjon-protocol-analyzer)
* [PWM Analyzer](https://github.com/dustin/logic-pwm)
* [QSPI \(Quad SPI\)](https://github.com/dedicatedcomputing/saleae_qspi)
* [Quadrature](https://github.com/dirkx/Quadrature-Saleae-Analyser)
* [Realtek TX2/RX2](https://github.com/pzl/Saleae-Realtek-T-RX2)
* [Robotis Dynamixel Servos](https://github.com/KurtE/SaleaeDynamixelAnalyzer)
* [S/PDIF](https://github.com/pfrench42/saleae_spdif)
* [SD/MMC](https://github.com/dirker/sdmmc-analyzer)
* [SDIO](https://github.com/bdodge/SDIOanalyzer) \(developed by [bdodge](https://github.com/bdodge)\)
* [SDIO](https://github.com/ewfuentes/SaleaeSDIOAnalyzer) \(developed by [ewfuentes](https://github.com/ewfuentes)\)
* [SDQ for Apple Lightning, MagSafe, and Battery](https://github.com/nezza/SDQAnalyzer)  
* [SENT Analyzer](https://github.com/melexis/SENTAnalyzer)
* [Smart Cards and SIM cards](https://github.com/dirkx/saleae-logic-ISO7816-smartcard-Analyser)
* [Smart Cards and SIM cards \(with added features\)](https://github.com/watsug/saleae-logic-ISO7816-smartcard-Analyser)
* [SPI Flash](https://github.com/kasjer/saleae_spiflash)
* [Vehicle Area Network \(VAN\) Analyzer](https://github.com/morcibacsi/VanAnalyzer)

### Installing the Analyzer

The instructions for installing an analyzer is described in the article below.

{% page-ref page="../faq/technical-faq/setting-up-developer-directory.md" %}

In case the library file \(.dll, .so, or .dylib depending on your OS\) is not provided in the respective GitHub repository, then you will need to build it.

### Building the Analyzer

Some of the community analyzers listed above are distributed as source code \(not including the required library file\) and will require our Protocol Analyzer SDK in the article below to compile it and build the appropriate library file for that analyzer.

{% page-ref page="../saleae-api-and-sdk/protocol-analyzer-sdk/" %}

### Community Shared Protocol Tools

* [Enrichable SPI Analyzer](https://github.com/coddingtonbear/saleae-enrichable-spi-analyzer) with an [Example Implementation](https://github.com/coddingtonbear/saleae-scriptable-spi-analyzer/blob/master/examples/custom_class.py)
* [HLA Stream Parser](https://github.com/andreobi/HLA_Stream_Parser)
