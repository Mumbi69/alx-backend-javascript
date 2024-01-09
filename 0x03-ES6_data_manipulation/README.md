# ES6 data manipulation
* Map: The map function is used to apply a given function to each element of an array, creating a new array with the results. It doesn't modify the original array but produces a new array with the transformed values.
* Filter: The filter function is used to create a new array containing only the elements that satisfy a given condition.
* Reduce: The reduce function is used to accumulate the elements of an array into a single value. It takes a callback function that defines the logic for combining elements.
* Typed arrays are a way to work with binary data in a more controlled manner than regular arrays. Unlike regular arrays, which can hold elements of any type, typed arrays are designed to hold a specific type of data, such as integers or floating-point numbers.
* The Set is a built-in data structure in JavaScript that allows you to store unique values. It ensures that each element can only appear once in the set.
* Set provides methods to add, delete, and check the existence of elements efficiently. It's useful when you need to work with a collection of distinct values.
* The Map is another built-in data structure in JavaScript that allows you to store key-value pairs. Unlike objects, keys in a Map can be of any data type, and the order of key-value pairs is maintained.
* WeakMap is similar to Map but with some differences. In a WeakMap, keys must be objects, and the references to key objects are weakly held, meaning they don't prevent the objects from being garbage collected if there are no other references.
* The advantage of WeakMap is that it can be useful in scenarios where you want to associate additional data with objects without preventing those objects from being collected by the garbage collector when they are no longer needed.
