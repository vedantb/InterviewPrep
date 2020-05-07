# Introducing Asymptotic Measures

Asymptotic analysis is widely used in Computer Science to describe the limiting behavior of algorithms resource use.

We look at functions to see their behaviour (often to track resource consumption) **when an input gets arbitrarily large (big)**

But first off, **what is a function?** What does `y = 2x` mean? Let's go way back:

It means this:

- Each variable is something we are **tracking**. Here we track `y` and `x`. They can be anything we want them to be.
- `y` and `x` are intimately related by our function that we defined
- **Each time we gain 1 unit of x, we gain 2 units of y.**
- `x` is **input** and `y` is **output** (Remember: we can have more than 1 input influencing y)

So what is `y` and what is `x` (or our series of inputs if we had more)? Whatever we want them to be.

Commonly:

- We call the `x` an `n` instead.
- The `y` can measure the comparisons, exchanges, iterations etc of an algorithm.
- `n` can be the length of an array, length of a string etc.
- If we have more than 1 input, we may use `m` and `n` to precisely denote each respective input.

#### Asymptotics

In asymptotic analysis, we care about what a function does when `n` is very large.

We take the concrete function (e.g. `y = x`) and extract a "higher meaning" from it. Something that we can use to relate it into a family of other functions.

But, this is only one of the tools in your toolkit to analyze algorithms.
