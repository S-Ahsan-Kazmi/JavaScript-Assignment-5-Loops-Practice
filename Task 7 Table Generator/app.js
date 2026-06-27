// Task 7: Table Generator
// Take a number from the user using prompt() and display its multiplication table up to 10.

// Example
// Input:

// 5

// Output:

// 5 x 1 = 5

// 5 x 2 = 10

// 5 x 3 = 15

// ...

// 5 x 10 = 50


let tableInput = prompt("Enter Your Table Number","");

for(let i = 1; i <= 10; i++){
    // console.log(`${tableInput} x ${i} = ${tableInput * i}`);
    
    document.write(`${tableInput} x ${i} = ${tableInput * i} </br>`)    

}




















