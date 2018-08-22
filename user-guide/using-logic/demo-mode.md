# Demo Mode

### **Demo Mode**

When the software is not connected to a Saleae Logic device, it switches into demo mode so potential users can explore the features of the software before deciding to buy the unit.

In demo mode, the title bar will say _\[Disconnected\]_ and the green button will say _Start Simulation_. 

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/5ae220e1cb015c014d4b4936/30ef9ace4896111a083853b2a1552941/Start-sim.png)

When you click Start Simulation, the capture will proceed, and the results will contain data that appear to transition randomly.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/5ae220e1cb015c014d4b4936/d8c8397cf987aef9056a0f5dad339796/sim-data.png)

### **Simulating Protocol Analyzer Data**

If any protocol analyzers were added to the session before the simulation mode was run, then clicking _Start Simulation_ will generate valid protocol data. This is useful to demonstrate the functionality of each protocol analyzer, without having to record real protocol data using the Logic hardware. In the example below, we have added an the _Async Seria_' Analyzer to Channel 0. Afterwards, clicking 'Start Simulation' will generate serial data as shown.

![](https://trello-attachments.s3.amazonaws.com/55f0ad9685db3c82f0f3aeba/5ae220e1cb015c014d4b4936/8e0d64ab4755e8acfd3b9c54e2fa1604/protocol-sim.png)

