# HLA Fails to Display Special Characters

When using your custom HLA, you may notice that some special characters may display incorrectly in its decoded bubble. For example:

* `=` displays as `&#3D`
* `"` displays as `&quot;`

Despite this issue, the special character should still be correctly displayed under the Data Table.

### Workaround

Although this is currently an issue we need to address, we do have a workaround for this. In summary, you can use triple braces to get around the issue. For example:

 `"Value: {{{ data.value }}}"`

We've also noted a few forum posts below, as some users have provided examples for how they have implemented this workaround.

* [Discuss Forum - Extension Output Message Format](https://discuss.saleae.com/t/extension-output-message-format/1021)
* [Discuss Forum - Issue Rendering HLA Messages in the Overlay](https://discuss.saleae.com/t/issue-rendering-hla-messages-in-the-overlay/1209)



