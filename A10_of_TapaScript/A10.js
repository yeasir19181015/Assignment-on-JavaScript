// 1. What will be the output of the following code and why? 
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();

// 2. What is the mistake in the code below? 

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

// 3. Create a function with a nested function and log a variable from the parent function. 

