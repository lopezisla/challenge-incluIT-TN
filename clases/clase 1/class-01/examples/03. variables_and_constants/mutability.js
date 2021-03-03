// Objets referenced by a constant are still mutable
const obj = {
  value: "before"
};
console.log(obj.value);   // "before"

// So far, you have a reference to an object in a constant.
// The obj constant doesn't directly contain the object, it contains a reference to the object

obj.value = "after";
// What const does is prevent you changing the actual value of obj
// object = {};

console.log(obj.value);   // "after"