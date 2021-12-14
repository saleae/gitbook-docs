# Extension File Format

Extensions are composed of at least three files, `extension.json`, `readme.md`, and one or more python files.

### extension.json File Layout

A single extension can contain multiple high level analyzers, measurements, or both.

This example is a for a single extension that contains one high level analyzer and one digital measurement.

```javascript
{
  "version": "0.0.1",
  "apiVersion": "1.0.0",
  "author": "Mark Garrison",
  "description": "Utilities to measure I2C speed and utilization",
  "name": "I2C Utilities",
  "extensions": {
    "I2C EEPROM Reader": {
      "type": "HighLevelAnalyzer",
      "entryPoint": "I2cUtilities.Eeprom"
    },
    "I2C clock speed measurement": {
      "type": "DigitalMeasurement",
      "entryPoint": "I2cUtilities.I2cClock",
      "metrics": {
        "i2cClockSpeed": {
          "name": "I2C Clock Speed",
          "notation": "N MHz"
        },
        "i2cBusUtilization": {
          "name": "I2C Bus Utilization",
          "notation": "N %"
        }
      }
    }
  }
}
```

The `author`, `description`, and `name` properties manage what appears in the Extensions panel where the extensions are managed.&#x20;

| Property    | Example                       | Description                                                                                                                                           |
| ----------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| version     | "0.0.1"                       | The version if this extension. Increase this when publishing updates in order to allow users to update.                                               |
| apiVersion  | "1.0.0"                       | The Saleae API version used. This should remain "1.0.0" until we make changes to the extension API.                                                   |
| author      | "Mark Garrison"               | Your name                                                                                                                                             |
| description | "Utilities to measure I2C..." | A one line description for display in the marketplace                                                                                                 |
| name        | "I2C Utilities"               | The name of the extension package, for display. Note - this does not have to match the names of the individual extensions, which are shown elsewhere. |
| extensions  | see below                     | An object with one key per high level analyzer or measurement.                                                                                        |

The `extensions`  section describes each high level analyzer or measurement that is contained in this extension package.

In the example above, there are 2 extensions listed.

```javascript
  "extensions": {
    "I2C EEPROM Reader": {
      "type": "HighLevelAnalyzer",
      "entryPoint": "I2cUtilities.Eeprom"
    },
    "I2C clock speed measurement": {
      "type": "DigitalMeasurement",
      "entryPoint": "I2cUtilities.I2cClock",
      "metrics": {
        "i2cClockSpeed": {
          "name": "I2C Clock Speed",
          "notation": "N MHz"
        },
        "i2cBusUtilization": {
          "name": "I2C Bus Utilization",
          "notation": "N %"
        }
      }
    }
  }
```

There are three different types of extension here, as indicated by the type property. "HighLevelAnalyzer", "DigitalMeasurement", and "AnalogMeasurement". There are some differences between these types.

#### Type: `HighLevelAnalyzer`

| Property   | Example               | Description                                                                                                                                    |
| ---------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | "HighLevelAnalyzer"   | This must be the string "HighLevelAnalyzer"                                                                                                    |
| entryPoint | "I2cUtilities.Eeprom" | The python entry point. The first part is the python filename without the extension, and the second part is the name of the class in that file |

#### Type: `AnalogMeasurement` and `DigitalMeasurement`

| Property             | Example                                                             | Description                                                                                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                 | "DigitalMeasurement"                                                | This must be either "DigitalMeasurement" or "AnalogMeasurement"                                                                                                                                                                                                      |
| entryPoint           | "I2cUtilities.I2cClock"                                             | The python entry point. The first part is the python filename without the extension, and the second part is the name of the class in that file                                                                                                                       |
| metrics              | "i2cClockSpeed": { "name": "I2C Clock Speed", "notation": "N MHz" } | Object that contains one property for each single numeric metric you wish to display. If your measurement class produces 4 different numbers, all 4 must be present here. Each metric property name must match the name of the metric produced by your python class. |
| metrics\[X].name     | "I2C Clock Speed"                                                   | The display name for a given metric                                                                                                                                                                                                                                  |
| metrics\[X].notation | "N MHz"                                                             | <p>The display string for formatting the metric. Limited HTML tags are supported: <code>['b', 'i', 'em', 'strong', 'sub']</code> </p><p>Example: <code>"N &#x3C;sub>t&#x3C;/sub>"</code></p>                                                                         |

