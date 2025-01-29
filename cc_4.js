//Task 1: If Statements
let purchaseAmount = 2500       //declaring purchaseAmount
let finalAmount = purchaseAmount 
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.75; 
};      //if statement to apply discount if amount is greater than 100
console.log("Task 1")
console.log(`       Final amount after discount of 25%: $${finalAmount}`);

//Task 2: For Loop
let sales = [100, 200, 300, 400 ,500];
let totalSales = 0;     //using for loop to calculate total sales
for  (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
console.log("Task 2")       // logging total sales
console.log(`       Total Sales:, $${totalSales}`);

//Task 3: While Loop
let stock = 10
console.log("Task 3")
while (stock > -1) {
    console.log(`       Inventory Amount: ${stock}`);
    stock--
} //logged each inventory amount while it decreased.

//Task 4: Do...While Loop
let responses = 0
console.log("Task 4")
do {
    console.log(`       Customer Survey Response Count: ${responses}`);
    responses++;
} while (responses <= 3); // logged the customer survey responses starting at 0 ending at 3

//Task 5: For...In Loop
let employee = {
    name:"Alice",
    position: "Manager",
    salary: 75000,
};
console.log("Task 5") //logged employee information
for (let property in employee) {
    console.log(`       ${property}: ${employee[property]}`);
}

//Task 6: For...Of Loop
let products = ["IPhone", "IPad", "IPod"];
console.log("Task 6")
for (let product of products) {
    console.log(`       Display Product: ${product}`);
} //logged each product name

//Task 7: forEach() Method
let orders = [23, 24, 25]
console.log("Task 6")
orders.forEach((order) => {
    console.log(`       Order Number: ${order}`);
}); //logged each order number with forEach

//Task 8: Function Declaration
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
let amount = 500
let taxRate = 0.10
let returnTax = calculateTax(amount, taxRate);
console.log("Task 8")
console.log(`       Tax Amount Returned: $${returnTax}`); // logged tax amount returned

//Task 9: Function Expressions
let price = 200
let applyDiscount = function discount(price) {
    return price * 0.90;
};
let discountPrice = applyDiscount(price);
console.log("Task 9")
console.log(`       Price with 10% Discount Applied: $${discountPrice}`); //logged discounted price










