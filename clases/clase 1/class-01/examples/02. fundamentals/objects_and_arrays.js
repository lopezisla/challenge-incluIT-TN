// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let customer = {         // Objects are enclosed in curly braces.
  name: "Jonathan",      // The property "name" has value "Jonathan."
  age: 30                // The property "age" has value 30
};                       // The curly brace marks the end of the object.

// Access the properties of an object with . or []:
customer.name                   // => "Jonathan"
customer["age"]                 // => 30: another way to access property values.
customer.lastName = "Brizio";   // Create new properties by assignment.
customer.parents = {};          // {} is an empty object with no properties.

// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0]                  // => 2: the first element (index 0) of the array.
primes.length              // => 4: how many elements in the array.
primes[primes.length - 1]  // => 7: the last element of the array.
primes[4] = 9;             // Add a new element by assignment.
primes[4] = 11;            // Or alter an existing element by assignment.
let empty = [];            // [] is an empty array with no elements.
empty.length               // => 0

// Arrays and objects can hold other arrays and objects:
let points = [             // An array with 2 elements.
  {x: 0, y: 0},            // Each element is an object.
  {x: 1, y: 1}
];