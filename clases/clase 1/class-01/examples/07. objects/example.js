// Creating Objects
let empty = {};                          // An object with no properties
let point = { x: 0, y: 0 };              // Two numeric properties
let p2 = { x: point.x, y: point.y+1 };   // More complex values
let book = {
  "main title": "JavaScript",            // These property names include spaces,
  "sub-title": "The Definitive Guide",   // and hyphens, so use string literals.
  for: "all audiences",                  // for is reserved, but no quotes.
  author: {                              // The value of this property is
    firstname: "David",                  // itself an object.
    surname: "Flanagan"
  }
};

// Creating Objects with new
let obj = new Object();  // Create an empty object: same as {}.

// Object.create()
let o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y.
o1.x + o1.y;                          // => 3

// Querying and Setting Properties
let title = book["main title"]; // Get the "main title" property of the book.

book.edition = 7;                   // Create an "edition" property of book.
book["main title"] = "ECMAScript";  // Change the "main title" property.

// Deleting Properties
delete book.author;          // The book object now has no author property.
delete book["main title"];   // Now it doesn't have "main title", either.

// Other useful methods
// * Copy properties from one object into another with Object.assign()
// * Copy properties from one object into another with spread operator