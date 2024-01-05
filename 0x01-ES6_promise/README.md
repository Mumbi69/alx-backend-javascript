# Promises
* How: Promises are a way of handling asynchronous operations in JavaScript. A Promise represents a value that may be available now, or in the future, or never. It has three states: pending, fulfilled, or rejected.
* Why: Promises improve code readability and maintainability for asynchronous code. They make it easier to reason about and handle errors in asynchronous operations.
* What: A Promise has two parts: the producer (which produces the result, whether immediate or delayed) and the consumer (which consumes the result or handles errors).
* Using then, resolve, catch methods:
> * then: Used to handle the fulfilled result of a Promise.
> * resolve: A function used within a Promise to fulfill it with a given value.
> * catch: Used to handle errors (rejections) in a Promise chain.
* Using every method of the Promise object:
> * The Promise.every method is not a standard method in JavaScript. It might be a custom method or a method from a library. If you mean Promise.all, it's used to wait for all promises to be fulfilled.
* Throw/Try:
> * throw: Used to signal that an error has occurred in a block of code.
> * try: Used to define a block of code to be tested for errors while it's being executed.
* The await operator:
> * The await operator is used in an async function to wait for a Promise to settle. It can only be used inside an async function.
* How to use an async function:
> An async function returns a Promise and can use the await keyword inside its body to pause execution until a Promise is settled.
