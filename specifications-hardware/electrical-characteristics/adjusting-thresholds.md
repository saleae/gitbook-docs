# Is It Possible to Adjust the Logic Thresholds for the Digital Inputs?

Some of the Saleae logic analyzers do support selectable thresholds. Full details on the threshold options for each product can be found here:

{% content-ref url="../../../product/user-guide/supported-voltages.md" %}
[supported-voltages.md](../../../product/user-guide/supported-voltages.md)
{% endcontent-ref %}

However, none of the products support a continuously variable user selectable threshold voltage. Specifically, that means that for devices with selectable thresholds, only a few fixed options can be chosen from. The user cannot choose a threshold voltage outside of the provided list of options.

We are keeping this in mind for future product generations, most likely by feeding the input comparators with a DAC.
