//  1. Expian Temporal Dead Zone by creating 3 variables in side a block. 

{
  // Trying to access variables before declaration
  console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
  console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
  console.log(c); // ❌ ReferenceError: Cannot access 'c' before initialization

  let a = 10;
  const b = 20;
  var c = 30;

  console.log("After declaration:");
  console.log(a); // ✅ 10
  console.log(b); // ✅ 20
  console.log(c); // ✅ 30
}


// What is Hoisting?

// Hoisting means JavaScript moves variable and function declarations to the top of their scope before executing the code.
// This happens during the memory creation phase (before actual execution).

// Example 1 — Variable Hoisting 

console.log(x); // ✅ undefined (because of hoisting)
var x = 5;

console.log(y); // ❌ ReferenceError (TDZ)
let y = 10;

console.log(z); // ❌ ReferenceError (TDZ)
const z = 15;
