// Q: What values you guess that return?

function pass() {
  console.log(answer);
  answer = 42;
  console.log(answer);
  var answer = 67;
}
pass();


// Explanation!
// This happens because when entering the pass function,
// the JavaScript engine scans through the function handling var declarations
// and creating the necessary variables before it starts running any of the step-by-step code;

// With let and const, you can't use a variable until its declaration
// is processed in the step-by-step execution of the code:

function exception() {
  console.log(answer);
  answer = 42;
  console.log(answer);
  let answer = 67;
}
exception();

// The let declaration isn't hoisted up to the top of the function like a var declaration is.
// But that's a popular misconception: let and const are hoisted, too.
// They're just hoisted differently.