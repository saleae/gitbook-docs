# Management Data Input/Output (MDIO)

MDIO is a two-wire serial used to read and write the contents of registers in a specific device. MDIO is used in conjunction with a much higher-speed protocol called Media Independent Interface (MII). MDIO and MII are used primarily in network interfaces to connect the Media Access Control (MAC) device to the Ethernet Physical Layer (PHY) device. MDIO acts as the high-level control, while MII provides the high-speed data throughput.

**Top Resources**

* [Wikipedia](http://en.wikipedia.org/wiki/Management_Data_Input/Output)
* [Total Phase Tutorial](http://www.totalphase.com/support/kb/10042/)
* [Accessing Control Registers (MDIO)](http://www.latticesemi.com/~/media/Documents/ReferenceDesigns/MDIOPeripheral-WISHBONECompatible-Documentation.PDF?document_id=36310)

**Example MDIO Parts**

* [Altera Cyclone IV FPGA](http://www.altera.com/devices/fpga/cyclone-iv/cyiv-index.jsp)

**What Logic Decodes**

<figure><img src="../../../.gitbook/assets/MDIO.png" alt=""><figcaption></figcaption></figure>

* Start of Frame
* OP Code
* PHY Address
* Register Address
* Turnaround Time To Change Ownership
* STA Write Data
* MMD Read Data
