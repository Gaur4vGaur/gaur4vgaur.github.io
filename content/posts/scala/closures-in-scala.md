---
title: Closures in Scala
subtitle: If you're trying Scala out, see how closures work to bind free variables to function literals with some sample code.
description: This quick hands-on lesson on closures in Scala. It binds free variables to function literals. The article also provides closure code snippet
date: 2018-02-16
---

Before we begin discussing closures in Scala, let us have a quick look at a function. The function literal bill below accepts only one input parameter: `netBill`. However, the function calculates the final bill by adding a service charge to `netBill`.

```java
val bill = (netBill: Double) => netBill*(1 + serviceCharge/100)
```
So if we try to compile the above function, Scala is going to complain that it does not know anything about `serviceCharge`.

We have one bounded variable: `netBill`. It is bound to the function call and takes its value from whatever is provided to the function. But `serviceCharge` is a free variable, and the function literal does not provide it with any value.

In order to execute our function literal, we need to provide a value to `serviceCharge` outside the function `bill`.

```java
val serviceCharge = 14
```

And now, if we redefine our `bill` function again, then Scala will be quite happy with our declaration.

The function value created at runtime from this function literal bill is called a closure because we capture the binding of its free variable by closing the function. In the above example, we have captured the value of `serviceCharge` as 14.

The video tutorial highlights the concept in more detail with few more examples:

<iframe src="https://www.youtube.com/embed/WQOGQ6ytmdw"></iframe>
