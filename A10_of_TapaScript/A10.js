// // 1. What will be the output of the following code and why? 
// let user = "Alice";

// function outer() {
//     function inner() {
//         console.log(user);
//     }
//     let user = "Bob";
//     inner();
// }

// outer();

// 2. What is the mistake in the code below? 

// Global, bad practice

// function add(num) {
//     let total = 0; 
//     total += num;
//     console.log(total);
// }

// add(5);
// add(10);


// //3. Create a function with a nested function and log a variable from the parent function. 

// function parentFunction() {
//   let message = "Hello from the parent function!";

//   function childFunction() {
//     console.log(message); // accessing variable from parent
//   }

//   childFunction(); // calling the nested function
// }

// parentFunction();

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside? 

// function outer(){
//      let name="ld";
//     for(let i=0;i<10;i++){
//         name = "na"
//         console.log(name+"pp");
//     }
//    console.log(name);
// }

// outer();


// // 5. Write a function that tries to access a variable declared inside another function. 

// function func1(){
//     this.name = "Nazrul";
  
// }

// function func2(){
//     console.log(name)
// }

// func1();
// func2();


// 6. What will be the output and why? 

console.log(a);
let a = 10;

// When JavaScript runs your code, it goes through two phases:

// Memory Creation Phase (Hoisting Phase)

// Execution Phase

// During the memory phase, the variable a is hoisted —
// meaning JavaScript knows that a exists.
// But since it’s declared using let, it’s not initialized yet.

// Between the start of the block and the line where a is declared,
// the variable a is in something called the Temporal Dead Zone (TDZ).

// So when the engine tries to run console.log(a);
// → it sees a exists but is not initialized yet,
// → therefore, it throws:
// ReferenceError: Cannot access 'a' before initialization 