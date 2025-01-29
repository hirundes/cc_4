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

