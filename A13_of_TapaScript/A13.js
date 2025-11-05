// 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations
// At the Global
// Inside an Object Method
// Inside the Standalone non-Arrow Function
// Inside an Arrow Function(standalone)
// Inside an Arrow Function(as object method)
// Inside an object created with the Constructor Function
// Please add examples for each of the scenarios.


// Answer :
// check the readme file of Assignment 13 




// 2. What is the problem here? Fix it to log the correct name and explain the fix


const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};
user.greet();


// 3. Can you explain what is the problem here and fix the issue to log the correct name?
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
const greetFn = obj.greet;
greetFn();

// correct fixes 
// Option 1: Use .bind() to Permanently Bind this 
const obj_1 = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn_1 = obj.greet.bind(obj);
greetFn(); // ✅ Output: Hello, Tom!


// Option 2: Call it Using the Object Reference
// Instead of detaching the function, just call it directly from the object:
obj.greet(); // ✅ Hello, Tom!


// Option 3: Use an Arrow Function Inside (Less Common but Works)

// If you used an arrow function inside the method (not for the method itself),
// it could capture this from the enclosing function.

// Example:

const obj_3 = {
  name: "Tom",
  greet: function () {
    const sayHi = () => console.log(`Hello, ${this.name}!`);
    sayHi();
  },
};

const greetFn_3 = obj_3.greet;
greetFn(); // ✅ Hello, Tom!


// 4. What is the problem with the following code? Why isn't it logging the name correctly?
const user2 = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user2.greet();


// 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details



// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};


// 7. What will be the output of the following code and why?
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

// Options are: 
// A: "Charlie" and "Charlie"
// B: "Charlie" and undefined
// C: "Charlie" and "" (empty string)
// D: undefined and "Charlie"