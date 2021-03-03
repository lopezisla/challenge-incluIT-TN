const foo = ['This', 'training', 'is', 'awesome'];
console.log(...foo);

// Others uses of spread operator
let owned = ['AMD', 'MELI', 'DIS'];
let toPurchase = ['AMZN', 'QCOM'];
let stocks = [...owned, ...toPurchase, 'APPL'];

console.log(stocks);