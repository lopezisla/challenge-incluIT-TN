// Like var, let declares variables:
let x = 2;
x += 40;
console.log(x); // 42

// You can use let anywhere you can use var.
// Just as with var, you don't have to use an initializer with let;
// if you don't, the variable's value defaults to undefined:

let a;
console.log(a); // undefined


// const declares constants:
const value = "It's a constant!";
console.log(value);

// Important: Constants are just like variables, except their values can't change.

// What do you think happens when you try to assign a new value to a constant?
const answer = 42;
console.log(answer); // 42
answer = 67;         // TypeError: invalid assignment to const 'answer'

// When initialize a const without a value
const myConst; // SyntaxError