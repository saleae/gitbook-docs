# Unable to Ship to PO Box Error

In rare cases, you may come across the error message below when trying to purchase from [www.saleae.com](https://www.saleae.com/). This is usually because the address contains the word "Post" in it.

_`"Unfortunately we are unable to ship to PO Boxes"`_

![PO Box Error Message](<../../../.gitbook/assets/po box error.png>)

### Solution

To quickly solve this, swap the “Address” and “Apartment, suite, etc” fields like shown below. If the address does not contain an apartment/suite number, then you can leave the "Address" field blank. This works because our cart system only checks for the word "Post" in the "Address" field.

![Swap the Address and Apartment/suite fields](../../../.gitbook/assets/swap.png)

### Some Background on the Issue

Our website does not allow orders to be shipped to PO Boxes. Therefore, our cart system blocks the word "Post" in the "Address" field. We plan to fix this in the future, but in the meantime, you will need to use the workaround described above to place your order. Sorry for the trouble with this in the meantime!
