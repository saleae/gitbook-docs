# VB.NET Support for Automation

Our Socket API automation utility allows for a VB.NET application to control Logic. In general, the API is agnostic to language, and any language that can open up a TCP/IP socket can interact with Logic.

Unfortunately, we don't have a library available for VB.NET, but we do provide libraries for Python and C# which could be ported to VB.NET. The Python and C# libraries can be found below.

{% content-ref url="../automation.md" %}
[automation.md](../automation.md)
{% endcontent-ref %}

A [C# example called LumberJack](https://github.com/DuckPaddle/LumberJack-for-Saleae) is fairly similar to a potential VB.NET implementation.

When data graphs are required, Matlab is generally recommended for ease-of-use and can generally save you several lines of code when compared to VB.NET. An open-source equivalent of Matlab, called [Octave](https://www.gnu.org/software/octave/), has similar plotting capabilities.&#x20;
