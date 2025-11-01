// 1. What will be the output of the following code and why? 

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

// The inner function “remembers” the variable from its parent function (even after the parent is done) — that’s a closure.
// | Step                   | What Happens                              | `count` Value | Output |
// | ---------------------- | ----------------------------------------- | ------------- | ------ |
// | `outer()` runs         | Creates `count = 0` and returns `inner()` | 0             | —      |
// | `counter()` (1st time) | `count++` → 1                             | 1             | 1      |
// | `counter()` (2nd time) | `count++` → 2                             | 2             | 2      |





// 2. What will be the output and why? 
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());
// Answer of 2 === > 
// The inner function “remembers” the value of x (10) from its parent function —
// this is a closure, and that’s why the output is 100. 
// | Step | Expression        | What Happens                     | Result                          |
// | ---- | ----------------- | -------------------------------- | ------------------------------- |
// | 1    | `testClosure()`   | Returns inner function (closure) | `function () { return x * x; }` |
// | 2    | `testClosure()()` | Executes inner function          | `10 * 10` = **100**             |


// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.


// Step 1: Create the outer function
function createButtonWithCounter() {
  let count = 0; // this variable is stored in closure

  // Step 2: Create a button dynamically
  const button = document.createElement("button");
  button.textContent = "Click Me!";
  document.body.appendChild(button);

  // Step 3: Attach a click event listener
  button.addEventListener("click", function () {
    count++; // inner function accessing outer variable (closure)
    console.log(`Button clicked ${count} times`);
  });
}




function setUpButton(){
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function(){
        clickCount ++;
        console.log(`Button clicked here for ${clickCount} times`)
    })
}

setUpButton();


// Step 4: Call the function to create the button
createButtonWithCounter();







// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers. 