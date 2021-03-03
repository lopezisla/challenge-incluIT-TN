function setTax(percentage) {
  return function(amount) {
    return amount * percentage / 100;
  };
}

let applyTax = setTax(21);

console.log(applyTax(1500));