# Migrate Code to the New Analyzer SDK

## Migrate Code to the New Analyzer SDK 

\(from SDK 1.1.14 to Newer Versions\)

Current custom analyzer code should work with the software without any changes to it.  
It only has to be built against the new analyzer library shipped with the new software.

However, code changes required to be made with the new SDK will include the analyzer's data in the Decoded Protocols \(search\) results.

Below is a description of the changes required to include an analyzer's data into the search results. The example below is based on Serial Analyzer's source code.

The latest source code to all analyzers can be found below.

{% page-ref page="../protocol-analyzer-sdk/" %}

**Update Steps**

1. Inherit from Analyzer2 instead of Analyzer in the .h ex:  
_SerialAnalyzer.h_

```text
class ANALYZER_EXPORT SerialAnalyzer : public Analyzer2
```

2. Implement the function _SetupResults_ in .cpp ex:  
_SerialAnalyzer.cpp_

```text
void SerialAnalyzer::SetupResults()   
{   
    mResults.reset( new SerialAnalyzerResults( this, mSettings.get() ) );   
    SetAnalyzerResults( mResults.get() );   
    mResults->AddChannelBubblesWillAppearOn( mSettings->mInputChannel );   
}
```

The above code was previously implemented in

```text
void SerialAnalyzer::WorkerThread()
```

Remove the three lines of code \(now in _SetupResults_\) from _WorkerThread_.

3. In the .cpp, in the implementation of

```text
virtual void GenerateFrameTabularText (U64 frame_index, DisplayBase display_base );
```

Instead of using:

```text
AddResultString( <string_name> );
```

Use:

```text
AddTabularText( <string_name> );
```

and do not call

```text
ClearResultStrings(); 
```

in this function.

If you are using SDK version &gt;= 1.1.32, call

```text
ClearTabularText();
```

at the start of this function. The software will crash without this.

This should update your code to include results in search.

