# Is There Cross-Platform Support for the SaleaeSocketApi C# Project

The C# wrapper and demo project for the Saleae Socket Scripting API is currently hosted on github.com and is Windows-only.

You can find it here: [https://github.com/saleae/SaleaeSocketApi](https://github.com/saleae/SaleaeSocketApi)

We plan to migrate the project to [.NET Core cli](https://dotnet.github.io) in the future, but we are waiting for at least the first official "tooling" release of .net core cli. The tooling release is the first release that includes visual studio integration.

In the meantime, we have done a quick port of the API to .net core cli. You can download that port here: [http://downloads.saleae.com/SDK/coreSaleaeAPI.zip](http://downloads.saleae.com/SDK/coreSaleaeAPI.zip)

You will also need to install the current version of .net core cli. You can find instructions here: [https://dotnet.github.io/](https://dotnet.github.io)

Once .Net core is installed and working, follow these instructions:

1. Launch the software and enable the socket server.
2. Open a terminal and cd to the freshly extracted coreSaleaeAPI directory.
3. Run "dotnet restore".
4. Run "dotnet run".
5. The sample app will automatically connect to the software and start a capture. Once the capture is finished, the console app will say "Done!" and you can press any key to exit.

That's it! This is a very rough port, and a few changes need to be made off the official GitHub project. Once we are able, we will port the official GitHub project so it can run using both .NET core and the standard .NET framework.

Note: This has only been tested on Windows and Ubuntu 14.04. If you have any problems, please contact Saleae support.
