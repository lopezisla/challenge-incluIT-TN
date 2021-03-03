function redundantRepetition() {
  'use strict';
  var x = "alpha";
  // …lots of code here…
  var x = "bravo"; // Exception: SyntaxCannotRedeclared
  // …lots of code here…
  return x;
}
const valueToReturn = redundantRepetition();
console.log(valueToReturn); // Q: What value you guess that should be return?

