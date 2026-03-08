# Running Logic in a CI Environment on Windows with the SYSTEM Account

If you're setting up a CI environment using the Logic software and hardware, such as with GitLab CI/CD or GitHub Actions, it's common to install a local runner on the machine where the Logic hardware is connected. These runners can run under either a local user account or the Windows SYSTEM account.

When using the SYSTEM account on Windows, there is an additional step required to ensure that Logic runs correctly. This is because the SYSTEM account operates in an environment without a desktop, which can cause issues with the software's GPU process.

## Problem Statement

When Logic is launched using the SYSTEM account with the `--automation` flag, it may crash on startup with the error message:

```
GPU process exited unexpectedly: exit_code=34
```

## Solution

To resolve this issue, you need to add an extra command-line argument to disable GPU rendering. Use the following command to launch Logic in automation mode while running under the SYSTEM account:

```
Logic.exe --automation --disable-gpu
```

This additional `--disable-gpu` flag ensures that Logic can operate in the SYSTEM account environment by disabling GPU rendering, which is unnecessary for automation tasks.

## Additional Notes

* If you’re running Logic under a local user account, the `--disable-gpu` flag is not required. You can simply use `Logic.exe --automation`.
* Always ensure that your CI runner has the necessary permissions to access the Logic hardware connected to your machine.
* For further details on setting up Logic in CI environments, refer to our [Automation API Documentation here](https://saleae.github.io/logic2-automation/).

If you encounter any issues or have questions, please [contact our support team](https://contact.saleae.com/hc/en-us/requests/new).
