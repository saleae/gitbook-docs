---
description: >-
  Logic 2 functionality can be extended and automated with extensions, APIs, and
  SDKs. Here is a brief overview of what's available.
---

# Extensions, APIs, and SDKs

## Extensions

### [High-Level Analyzers (Python)](extensions/high-level-analyzer-extensions/)

High level analyzers are python based protocol analyzers that process the output of the existing protocol analyzers (Low-Level Analyzers)  in the Logic 2 application. They are frequently used to turn decoded protocol output into human readable messages, and can also be used analyze packets, track states, find anomalies, and more.

### [Analog Measurements (Python)](extensions/measurement-extensions/)

Write python code that processes a selected range of analog data point-by-point and outputs a parametric result to the application window. Analog Measurements are used for calculating values like max voltage, min voltage, and rise time, and allows you to build (and share) your own analog measurements.

### [Digital Measurements  (Python)](https://support.saleae.com/extensions/measurement-extensions)

Mirroring analog measurements, Digital measurements allow you to write python code that processes a selected range of digital data point-by-point and outputs a parametric result to the application window. Digital Measurements are used for calculating values like pulse duration, duty cycle, and clock frequency, and allows you to build (and share) your own digital measurements.



## SDK

### [Protocol Analyzer SDK (C++)](https://support.saleae.com/protocol-analyzers)

Logic 2 comes with [23 built-in protocol analyzers](https://support.saleae.com/protocol-analyzers/supported-protocols) and features more than [50 community shared analyzers](https://support.saleae.com/community/community-shared-protocols). Use the [Protocol Analyzer SDK](https://support.saleae.com/protocol-analyzers) to develop and share your own. Protocol Analyzers are also commonly referred to as LLAs or Low Level Analyzers.

## API

### [Logic 2 Automation (Python)](https://saleae.github.io/logic2-automation/)

The Logic 2 Automation API allows you to record, analyze, export, and save captures using Saleae's Logic 2 software and USB Logic Analyzers (Logic 8, Pro 8, and Pro 16). Saleae provides a python library, as well as direct gRPC ([https://grpc.io/](https://grpc.io/))  support, which can be used directly from any gRPC supported language (C#, C++, Java, Javascript, Go, etc.)

### [Logic MSO Automation (Python)](https://docs.saleae.com/mso-api/)

Our new headless Logic MSO Automation API enables direct Python control of the Logic MSO hardware through a lightweight library. This streamlined approach is ideal for data collection and analysis when the digital protocol decoders found in Logic 2 are not needed.
