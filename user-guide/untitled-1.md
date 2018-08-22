# Safety & Warranty

{% hint style="info" %}
Before operating your Saleae Logic product for the first time, please carefully review the safety guidelines below to avoid any injury and damage.
{% endhint %}

### **Electrical Isolation**

The input channels on Saleae Logic analyzers are not electrically isolated from each other. The Saleae Logic is also not electrically isolated from the PC.

### **High Voltage Safety**

| Products | Absolute Maximum Voltage Range |
| :--- | :--- |
| Original Logic & Logic16 | −0.5V to 5.25V |
| Logic 4, Logic 8, Logic Pro 8, Logic Pro 16 | −25V to 25V |

{% hint style="info" %}
_Caution:_ Connecting one of the input channels to voltages outside this range, even for a very short time, can result in damage to the device.
{% endhint %}

{% hint style="info" %}
_Safety Tip:_ If you're working with high voltages near the absolute maximum limit, first ensure that the wire harnesses are securely attached to your DUT and you've done some basic testing to make sure the clips won't pop off your connections. Afterwards, you can connect the wire harnesses to the logic analyzer.
{% endhint %}

### **Ground Current Safety**

Specifically, this is when a high current flows from the ground pin on the logic analyzer to the ground on the USB port of your computer, or vice versa. This current can easily damage the logic analyzer, your PC, and your DUT. All Saleae logic analyzers have fuses in their ground return paths, but these are not always fast enough to protect the unit from damage.

The user should be cautious of this when the logic analyzer is used in the presence of a ground loop. Specifically, this means that the logic analyzer is not the only ground path between your DUT and the host PC. Ground loops by themselves are not necessarily bad, but requires extra caution from the user.

Common Ways a Ground Loop Can Exist:

* Other USB devices \(such as programmers\) are connected to the DUT, or the DUT itself is plugged into the USB port on your computer. In addition to the logic analyzer's ground connection, the DUT's ground is also connected to the PC's ground through another USB port.
* Non-isolated power supplies Most AC power supplies with 3-prong plugs will short the MAINS earth ground pin to the power supply ground output. That includes your PC's ground. If your DUT is powered from a 3-prong wall power supply and your PC is also plugged in, that will form another ground path. Keep in mind that if you're using a laptop that's not plugged in, even an attached external monitor or printer will create a ground loop.

Common Ways Damage Can Occur:

* When connecting or disconnecting probes, one of the ground probes from the logic analyzer is accidentally brushed against a power supply pin on the DUT, such as +5V. If there are no other ground paths between the DUT and the PC, nothing will happen. However, if there is a ground path, then current will flow from that voltage supply through the logic analyzer's ground pin, through the USB cable and the host PC, and then through the secondary ground connection—either MAIN earth ground or another USB port, back to the ground on the DUT. Basically, that is the same as shorting out the voltage supply on your DUT, but it uses the logic analyzer and your host PC as the short circuit, which could damage all components in the loop.
* What if the DUT's ground reference isn't at the same voltage as the ground loop connection? For instance, if your circuit is powered by a bipolar power supply used to produce +10 volts and -10 volts, and then your circuit uses the -10 volt rail as its ground voltage, but there exists a ground loop through MAINS earth ground to the power supply's 0 volt output, then effectively the ground on your DUT is actually -10 volts relative to the host PC. Connecting Logic will immediately short out the DUT power supply and potentially damage all devices present in the loop.

### **Testing Multiple DUTs**

In some cases, you need to record signals from multiple devices under test simultaneously with the same logic analyzer. This can be done safely, but it is important to review how both devices are powered before connecting the logic analyzer.

Since the channels in each Saleae logic analyzer are not electrically isolated from each other, all devices will need to share a common ground. If the devices under test already share a common ground, then you're all set. However, if they are floating relative each other \(meaning their grounds are not directly or indirectly connected to each other\), or if there is a common mode voltage setup between them, then the additional steps below are required:

* If one or both of the devices under test are floating, do they need to be floating? In order to record with a logic analyzer, they will need to be common grounded to each other AND to the PC to which the logic analyzer is connected. This also means MAINS earth ground in most cases.
* If one of the boards is powered from another with a ground difference such as a large negative voltage supply, then it is NOT safe to connect the logic analyzers to both devices. In addition, it is not sufficient to isolate the USB connection or the test PC from the devices. The inputs themselves need to be isolated between the device under test and the logic analyzer for at least one of the two devices under test. Please see the SI labs isolation development kit at the bottom of this article for input channel isolation.
* If the devices are already common grounded to each other, then there are no special steps to follow. Just review the general ground loop information above.

### **Identifying if a Ground Loop is Present**

To identify a potential ground loop between the Logic device and the DUT, you could check the resistance between the DUT ground and the Saleae Logic ground. While the Saleae Logic is connected to the PC, if the resistance reads infinite on a multi-meter, then the grounds are isolated. Otherwise, they are connected, and a ground loop exists.

_Caution:_ If a ground loop is present, extra care should be taken, as highlighted below, before connecting the logic analyzer ground to the DUT ground.

If you believe there is a ground loop between the DUT and the host PC but you are uncertain if the grounds on both sides you plan to use are at the same potential, there is a quick test you can perform with a multi-meter. If you happen to have a large resistor \(&gt; 10K ohm\), there is an additional test you can perform.

1. Connect the logic analyzer to the PC but not the DUT.
2. Measure the voltage between the ground pin on the logic analyzer and the ground pin on the DUT.
3. If there is a ground loop and you measure a voltage greater than about +/- 100mV, then a common mode ground current may occur when they are connected, damaging your equipment.
4. If there is a ground loop and you measure a voltage smaller than about +/- 100mV, then it is safe to connect the ground pins.
5. If there is not a ground loop or you are not sure there is a ground loop, then the voltage may drift significantly. If you are SURE there is no ground loop, then it is safe to connect the grounds.

If you are not sure there is a ground loop or would like to perform another test anyway, connect the resistor \(~10K\) between the two grounds and then measure the voltage across the resistor.

* If you see a voltage that indicates a noticeable current, then there is a ground loop between devices and you should not connect the grounds together.
* If you see an insignificant voltage across the resistor, then either there is no ground loop or there is a ground loop, but both grounds are at the same reference. It is safe to connect the logic analyzer.

### **Identifying if the DUT is Isolated from the PC**

The DUT's local ground is isolated from the host PC when one of the following is true:

* The DUT is battery-powered and has no other electrical connections to the host PC or devices powered from MAINS power.
* The DUT is powered from an isolated power supply that does NOT short MAINS earth ground to the output ground. Bench top supplies with a separate green earth ground terminal do this. USB wall adapters also do this. Common AC power adapters \(chargers, "wall warts"\) with 2-prong plugs are also isolated. Most power supplies do have transformers that can provide isolation if implemented properly.
* The Host PC is a laptop running from a battery or is plugged into an instrumentation isolation transformer. Note that normal isolation transformers connect earth ground for human safety reasons.

_Warning:_ When working in an electrically isolated state, keep in mind that floating grounds can be dangerous to the operator. When operating with equipment with a floating ground, please review and follow appropriate safety measures.

### **Using an Isolated Wall Adapter to Power the DUT**

Using isolated wall adapters such as USB wall adapters to power the DUT will isolate its ground from MAINS ground, although that does not always eliminate ground loops. For example, if the DUT was connected to the same computer that the Logic device is connected to, then a ground loop is formed.

### **Is the Logic Device Safe to Use in the Presence of Ground Loops?**

Yes, it is completely safe to use the Logic device as long as both grounds are at the same voltage level and as long as you only connect the Logic ground to the ground of the DUT.

### **Isolation: There Is a Ground Loop and a Difference in Potential Between Grounds**

What do you do if the grounds are related but not at the same potential? You will need to fully isolate the DUT from the PC. You can do this on either side of the logic analyzer.

To isolate the digital input side of the logic analyzer, you can consider using the [SI84XXISO Evaluation Kit](http://www.digikey.com/product-detail/en/SI84XXISO-KIT/336-1765-ND/2170672)

To isolate the USB 2.0 high-speed connection, you can consider using the [Intona High Speed USB Isolator](http://intona.eu/usbiso). We recently purchased this isolator and will be performing an evaluation soon. This is the first true high-speed USB 2.0 isolator on the market. All other USB 2.0 isolators are only full speed and low speed, which is insufficient for our products to operate.

### **Warranty Coverage**

Saleae products are covered by a 3-year warranty, regardless of where you purchased the product. For more information, see the article below.

{% page-ref page="../180-day-return-policy-and-3-year-warranty/3-year-warranty.md" %}

If you believe your Logic hardware is broken, please follow the troubleshooting steps in the article below.

{% page-ref page="../180-day-return-policy-and-3-year-warranty/saleae-warranty-and-rma-testing-procedure.md" %}







