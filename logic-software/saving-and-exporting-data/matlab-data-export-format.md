# MATLAB Data Export Format - Legacy Logic 1.x

{% hint style="info" %}
Please note that the MATLAB data export option is only available in our legacy Logic 1.x software and is currently not available as an export option in our latest [Logic 2 software](https://www.saleae.com/downloads/). We no longer officially support the older Logic 1.x software, however, we continue to provide is as-is for anyone that needs it (download link below).

If you'd like to see support for MATLAB exports added to our latest Logic 2 software, please [add your vote/comment here](https://ideas.saleae.com/b/feature-requests/export-to-matlab-mat-file-format/)!
{% endhint %}

{% content-ref url="../../../product/logic-software/legacy-software/older-software-releases.md" %}
[older-software-releases.md](../../../product/logic-software/legacy-software/older-software-releases.md)
{% endcontent-ref %}

Our legacy Logic 1.x software can export digital recordings, analog recordings, and recordings of both digital and analog channels to a \*.mat file.

If one or more digital channels are present in the export, the following variables will be added to the file, which will then be added to your workspace on loading:

*   digital\_sample\_rate\_hz

    &#x20; The samples per second used to record the digital data
*   num\_samples\_digital

    &#x20; Total number of samples recorded
*   digital\_channel\_indexes

    &#x20; Array containing the channel indexes included in the export. (If only channels 2 and 5 were exported, this would be \[2 5].
*   digital\_channel\_initial\_bitstates

    &#x20; The digital data exported is run-length encoded so the file does not need to contain the bitstate of every sample.

    &#x20; This is an array containing the initial state (high or low) of every digital channel at the beginning of the exported data.
*   digital\_channel\_X

    &#x20; This is where X is an index that starts with 0. Note: It is not the channel index, but instead the 0-based index of the exported channels. Cross-reference with digital\_channel\_indexes to find which array corresponds with which channel.

    &#x20; The array contains the number of samples between transitions. For instance, if the initial bitstate was 0 and digital\_channel\_0 is \[100 42 209 4], then the exported data was low for 100 samples, then high for 42, then low for 209, then high for 4 more.

If one or more analog channels are exported in the \*.mat file, then the following variables will be included:

*   analog\_sample\_rate\_hz

    &#x20; The analog sample rate (samples per second)
*   num\_samples\_analog

    &#x20; The total number of analog samples in the export
*   analog\_channel\_indexes

    &#x20; Similar to the digital version, this is an array containing the channel indexes included in the export.
*   analog\_channel\_X

    &#x20; One of these arrays was included for each exported analog data. X is not the channel index, but instead the 0-based index into the exported channels. See the digital description for details.

    &#x20; This array either contains calibrated voltages or ADC sample numbers, depending on which option was selected in the export. ADC values will either be in the range of 0–255 or 0–4095.

In the future, we plan to provide help functions to ease data access, especially with the digital data, to help access information.

**Compatibility and Versions**

We save using the \*.mat file version 4 format. This is a very old and obsolete format [that should work with all versions of Matlab](http://www.mathworks.com/help/matlab/import_export/mat-file-versions.html).
