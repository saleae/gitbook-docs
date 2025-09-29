---
description: >-
  Logic 2 functionality can be extended and automated with extensions, APIs, and
  SDKs. Here is a brief overview of what's available.
---

# Extensions, APIs, and SDKs

## Extensions

### [High-Level Analyzers (Python)](../extensions/high-level-analyzer-extensions/)

High level analyzers are python based protocol analyzers that process the output of the existing protocol analyzers (Low-Level Analyzers)  in the Logic 2 application. They are frequently used to turn decoded protocol output into human readable messages, and can also be used analyze packets, track states, find anomalies, and more.

### [Analog Measurements (Python)](../extensions/measurement-extensions/)

Write python code that processes a selected range of analog data point-by-point and outputs a parametric result to the application window. Analog Measurements are used for calculating values like max voltage, min voltage, and rise time, and allows you to build (and share) your own analog measurements.

### [Digital Measurements  (Python)](https://support.saleae.com/extensions/measurement-extensions)

Mirroring analog measurements, Digital measurements allow you to write python code that processes a selected range of digital data point-by-point and outputs a parametric result to the application window. Digital Measurements are used for calculating values like pulse duration, duty cycle, and clock frequency, and allows you to build (and share) your own digital measurements.



## SDK

### [Protocol Analyzer SDK (C)](https://support.saleae.com/protocol-analyzers)

Logic 2 comes with [23 built-in protocol analyzers](https://support.saleae.com/protocol-analyzers/supported-protocols) and features more than [50 community shared analyzers](https://support.saleae.com/community/community-shared-protocols). Use the [Protocol Analyzer SDK](https://support.saleae.com/protocol-analyzers) to develop and share your own. Protocol Analyzers are also commonly referred to as LLAs or Low Level Analyzers.

## API

### [Logic 2 Automation (Python)](https://saleae.github.io/logic2-automation/)

If you're looking to automate measurements in Logic 2, the Logic 2 Automation Interface allows you to remote-control the Logic 2 application using gRPC ([https://grpc.io/](https://grpc.io/)) and is exposed as a Python library which wraps the gRPC interface.



