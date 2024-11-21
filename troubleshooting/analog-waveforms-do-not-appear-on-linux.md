# Analog Waveforms Do Not Appear on Linux

We're sorry for the trouble with this! On Linux specifically, we have found an issue where analog waveforms may not be rendered properly (i.e. the waveform will be invisible, or analog channels will be blank).

## The Fix <a href="#the-fix-2" id="the-fix-2"></a>

The short term fix is to delete the shader cache, then re-open the software.

`rm -r ~/.config/Logic/GPUCache`

## Some Background Information

Our software runs in Electron, which is a framework that uses Chromium to render our application.

For analog channels specifically, we use WebGL2, and render the analog data using a shader. The rest of the application for the most part is rendered as a typical web application.

After running `sudo apt upgrade` on our Ubuntu 22.04 machine, we reproduced the same problem - blank analog channels.

Under the hood, we saw the following errors (this output is not normally displayed in the console output).

```sql
THREE.WebGLProgram: shader error:  0 35715 false gl.getProgramInfoLog Program binary could not be loaded. Binary is not compatible with current driver/hardware combination. Driver build date May 12 2024. Please check build information of source that generated the binary.
  
(anonymous) @ instrument.js:123
171WebGL: INVALID_OPERATION: useProgram: program not valid
85WebGL: INVALID_OPERATION: drawArrays: no valid shader program in use
instrument.js:123 THREE.WebGLProgram: shader error:  1282 35715 false gl.getProgramInfoLog Program binary could not be loaded. Binary is not compatible with current driver/hardware combination. Driver build date May 12 2024. Please check build information of source that generated the binary.
  
(anonymous) @ instrument.js:123
three.module.js:20442 WebGL: too many errors, no more errors will be reported to the console for this context.
```

In summary, Chromium was caching our compiled shaders, and after a package update, Chromium could no longer load the cache.
