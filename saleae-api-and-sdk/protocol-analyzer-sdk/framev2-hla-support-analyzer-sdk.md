# FrameV2 / HLA Support - Analyzer SDK

The C++ analyzer SDK was created before our new, python high level analyzers were introduced.

High level analyzers allow for new analyzers to be created, which instead of processing the raw input signals recorded by the device, instead process frames produced by C++ analyzers.

When the HLA system was introduced, only a handful of Saleae created protocol analyzers produced results that could be passed into the HLA system.

However, as of Saleae Logic 2.3.43, released in early 2022, it is now possible for custom 3rd party C++ analyzers to produce results that can be then interpreted by HLAs. This requires C++ analyzers to be updated to use the new "FrameV2" API.

The FrameV2 API does not completely replace the existing "Frame" class and collection yet. The existing "Frame" class is still exclusively used to produce the displayed bubbles, and for the analyzer-specific export feature. However, If a C++ analyzer uses FrameV2, these new objects will be available to HLAs.

Additionally, FrameV2 objects replace the original Frame objects in the data table, allowing for multiple, user configurable columns, as well as a variety of data formats.

### Using FrameV2

**Requirements:**

1. Make sure you're using the latest version of the Analyzer SDK. The newest version of the Analyzer SDK contains the new public method `UseFrameV2` in the Analyzer.h header file.
2. Make sure you're using the Latest Logic software, 2.3.43 or newer. Note, analyzers that support FrameV2 cannot be loaded in older versions of the application.
3. This example assumes you already have a working C++ Analyzer, and just want to add FrameV2 support.

#### Usage example:

```cpp
// Example taken from the async-rgb-led-analyzer
// https://github.com/saleae/async-rgb-led-analyzer/blob/alpha/src/AsyncRgbLedAnalyzer.cpp

// Step 1: add UseFrameV2 to your constructor.
AsyncRgbLedAnalyzer::AsyncRgbLedAnalyzer() : Analyzer2(), mSettings( new AsyncRgbLedAnalyzerSettings )
{
    SetAnalyzerSettings( mSettings.get() );
    // Add this line to your Analyzer constructor!
    UseFrameV2();
}

// Step 2: Create FrameV2 objects
// The following code goes wherever you already create and add Frame objects.
// Example existing Frame V1 code.
// Don't delete yours! It's still used to display the bubbles on the graph.
Frame frame;
frame.mFlags = 0;
frame.mStartingSampleInclusive = result.mValueBeginSample;
frame.mEndingSampleInclusive = result.mValueEndSample;
frame.mData1 = result.mRGB.ConvertToU64();
frame.mData2 = frameInPacketIndex++;
mResults->AddFrame( frame );

// New FrameV2 code.
FrameV2 frame_v2;
// you can add any number of key value pairs. Each will get it's own column in the data table.
frame_v2.AddInteger( "index", frame.mData2 );
frame_v2.AddInteger( "red", result.mRGB.red );
frame_v2.AddInteger( "green", result.mRGB.green );
frame_v2.AddInteger( "blue", result.mRGB.blue );
// This actually saves your new FrameV2. In this example, we just copy the same start and end sample number from Frame V1 above.
// The second parameter is the frame "type". Any string is allowed. 
mResults->AddFrameV2( frame_v2, "pixel", frame.mStartingSampleInclusive, frame.mEndingSampleInclusive );

// You should already be calling this to make submitted frames available to the rest of the system. It's still required.
mResults->CommitResults();
```

#### Screenshots:

![Once you have added UseFrameV2(), and start Adding FrameV2s, you will see them in the data table like this.](<../../.gitbook/assets/image (12).png>)

### API Documentation

`UseFrameV2();`

Call from the constructor one time to register your Analyzer as using FrameV2 objects. Without this, the V1 Frame objects will be displayed in the data table, and you will not be able to use your C++ Analyzer with HLAs.

#### FrameV2 Methods

The new FrameV2 class declaration can be viewed here: [https://github.com/saleae/AnalyzerSDK/blob/fc2fd81512a0c3d97a516b7f52b8c73fbd404889/include/AnalyzerResults.h#L14](https://github.com/saleae/AnalyzerSDK/blob/fc2fd81512a0c3d97a516b7f52b8c73fbd404889/include/AnalyzerResults.h#L14)

```cpp
// used for adding a string to the FrameV2.
void AddString( const char* key, const char* value );
// used for adding a double to the FrameV2
void AddDouble( const char* key, double value );
// used for adding a signed, 64 bit integer to the FrameV2
// Note, when the data table shows integers in HEX mode, all leading zeros will be displayed.
// For data displayed as HEX, AddByteArray is preferred.
void AddInteger( const char* key, S64 value );
// used for adding a boolean to the FrameV2
void AddBoolean( const char* key, bool value );
// used for adding a single byte to the FrameV2
void AddByte( const char* key, U8 value );
// used for adding a byte array to the FrameV2. The byte array is copied.
void AddByteArray( const char* key, const U8* data, U64 length );
```



### Usage from an HLA

Before writing your own HLA, you can test your C++ Analyzer using the "LLA Frame V2 Tester" available in the marketplace. It's a simple utility which converts the key value pairs from the connected C++ analyzer into JSON objects, for easy inspection.

Check out our HLA data format documentation:

{% content-ref url="../../extensions/analyzer-frame-types/" %}
[analyzer-frame-types](../../extensions/analyzer-frame-types/)
{% endcontent-ref %}

Learn more about building HLAs here:

{% content-ref url="../../extensions/high-level-analyzer-quickstart.md" %}
[high-level-analyzer-quickstart.md](../../extensions/high-level-analyzer-quickstart.md)
{% endcontent-ref %}

```python
// In your HLA, you could decode the FrameV2 objects created above like so:
    def decode(self, frame):
        if frame.type == 'pixel':
            print(frame.data['index'])
			print(frame.data['red'])
			print(frame.data['green'])
			print(frame.data['blue'])
```
