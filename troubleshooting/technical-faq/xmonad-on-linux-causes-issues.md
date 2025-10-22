# XMonad on Linux Causes Issues

{% hint style="info" %}
Update: A customer was able to customize the XMonad configuration to fix this. The solution was to add the appropriate rule to the window hooks as per below:

```
className =? "Logic" --> doIgnore
```
{% endhint %}

### Issue summary in the past:

In our testing, the only issue we were able to reproduce was the black borders around popovers. We have not been able to observe the issue where popovers don't appear (and close instantly).

We haven't seen this issue on other window managers either. We recommend using another window manager, if possible.

If you are committed to XMonad and have time to help, we would appreciate some help reproducing the issue. We've run out of tests to run on our own computers, but if you can provide a Virtualbox or VMWare image of a Linux install demonstrating this issue or any more information about the issue, we would appreciate it.

I am sure the issue is somewhere between QT and XMonad. The latest software release uses QT 5.4.1 (statically linked). Our popovers have the following window flags: Qt::FramelessWindowHint | Qt::Window And the following Attribute: Qt::WA\_TranslucentBackground

We use event filters to close the popover when a mouse click occurs outside of the popover. I am sure the issue is sensitive to one of these things, but without being able to reproduce it, I don't think we will be able to make progress.

The animation that displays the popover is not part of QT or our code that is a product of the window manager.
