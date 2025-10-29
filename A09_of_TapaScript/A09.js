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
