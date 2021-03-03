// Array Literals
let empty = [];                 // An array with no elements
let primes = [2, 3, 5, 7, 11];  // An array with 5 numeric elements
let misc = [ 1.1, true, "a" ]; // 3 elements of various types

// The Spread Operator
let a = [1, 2, 3];
let b = [0, ...a, 4];  // b == [0, 1, 2, 3, 4]

// The Array() Constructor
let a = new Array();
let a = new Array(3, 2, 1, "awesome");

// Array Iterator Methods

// forEach
let data = [1,2,3,4,5];
let sum = 0;

// Compute the sum of the elements of the array
data.forEach(value => { sum += value; }); // sum == 15

// Map
let arr = [1, 2, 3];
arr.map(x => x * x);  // => [1, 4, 9]: the function takes input x and returns x*x

// Filter
let arr = [5, 4, 3, 2, 1];
arr.filter(x => x < 3) // => [2, 1]; values less than 3

// Sort
// Important: with no arguments, it sorts the array elements in alphabetical order
let arr = ["banana", "cherry", "apple"];
arr.sort(); // a == ["apple", "banana", "cherry"]

// More things to learn
// * Iterating Arrays using for/of loop
// * Adding and Deleting Array Elements
// * Array Length