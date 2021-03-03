// Functions are parameterized blocks of JavaScript code that we can invoke.
function addCountryTax(amount) {
    return amount * 30 / 100;
};

// Functions are values and can be assigned to vars
let addRetention = function(amount) {
    return amount * 35 / 100;
};

const currentDollarPrice = 94.31;
const amountToPurchase = 100;

const totalAmountInARS = currentDollarPrice * amountToPurchase;
const totalTaxInArs = addCountryTax(totalAmountInARS) + addRetention(totalAmountInARS);

console.log(`Monto total en pesos $${totalAmountInARS + totalTaxInArs}`);