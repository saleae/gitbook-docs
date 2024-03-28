# VS Code Fails to Launch Python Automation API Script

It's been reported that launching a [Python Automation API](https://www.saleae.com/pages/automation) script from within VS Code fails to launch our Logic 2 software. We were able to find the root cause and there is a [full discussion here](https://discuss.saleae.com/t/logic-2-4-7-error-using-launch-from-unittest/2267/1).

#### For C# Users

It's worth printing out all the environment variables that are currently set, from C#, moments before you launch our application. If VS Code is setting `ELECTRON_RUN_AS_NODE`, you will need to un-set it from C# before launching our app.
