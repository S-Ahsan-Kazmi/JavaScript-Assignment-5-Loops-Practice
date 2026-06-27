// Task 10: Range Counter (Challenge Task ⭐)
// Take two numbers from the user:

// Start Number
// End Number
// Display all numbers between the given range.

// Example
// Input:

// 5

// 10

// Output:

// 5

// 6

// 7

// 8

// 9

// 10

let startNum = +prompt("Enter Your Start Number","");
let endNum = +prompt("Enter Your End Number","");

// console.log(startNum);
// console.log(endNum);

for(let i = startNum; i <= endNum; i++){

   document.write(`${i} </br>`)

}

