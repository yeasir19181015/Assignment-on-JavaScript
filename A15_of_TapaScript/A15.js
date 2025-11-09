// *** T-001: Create an array of 5 elements using the Array Constructor. 
// Answer:
const myArray = new Array(10, 20, 30, 40, 50);
// Print the array
console.log(myArray);


// *** T-002: Create an array of 3 empty slots. 
const emptyArray = new Array(3);
// Print the array and its length
console.log(emptyArray);
console.log(emptyArray.length);


// *** T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
// Answer:
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange", "Pineapple"];
// Access the 4th element using the length property
const fourthElement = fruits[fruits.length - 3];
// Print the result
console.log(fourthElement);



// *** T-004: Use the for loop on the above array to print elements in the odd index. 
// Answer:
let index = 0;
for(let fruit of fruits){
    if( index % 2 != 0){
        console.log(`odd index elements in index ${index}: ${fruit}`);
    }
    index++
}


// T-005: Add one element at the front and the end of an array. 
// Answer:
// Original array
const fruits2 = ["Apple", "Banana", "Cherry"];
// Add one element at the front
fruits2.unshift("Mango");
// Add one element at the end
fruits2.push("Orange");
// Print updated array
console.log("After adding one element at the front and the end of an array :",fruits2);



// T-006: Remove an element from the front and the end of an array. 
// Answer:
// Original array
const fruits3 = ["Apple","Mango", "Banana","Orange", "Cherry"];
// Remove one element at the front
fruits3.shift("Apple");
// Remove one element at the end
fruits3.pop("Cherry");
// Print updated array
console.log("After removing one element at the front and the end of an array :",fruits3);


// T-007: Create an array containing the name of your favorite foods(10 foods). Destructure the 6th food element from the array using destructuring. 
// Answer:
let foodArr = ["Pizza", "Cheeseburger", "ChickenBurger", "steak",  "ColdCoffee", "Faluda", "Kacchi","Payesh", "Semai", "Pithas"];
const [, , , , , sixthFood] = foodArr;
// Print the 6th food element
console.log("6th fav Food is :",sixthFood);


// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter. 
// Answer:
const [, , ...lastEightFoods] = foodArr;
// Print the last 8 foods
console.log("The last 8 food items are :",lastEightFoods);


// T-009: Clone an Array(Shallow cloning) 
// Answer:
// Original array
const originalArray = ["Apple", "Banana", "Cherry", "Mango",["nested",["array"]]];
// Shallow clone using the spread operator
const clonedArray = [...originalArray];
// Print both arrays
console.log("Original Array:", originalArray);
console.log("Cloned Array:", clonedArray);

// T-010: Empty an array using its length property
// Answer:
// Original array
let fruits_3 = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
// Empty the array using its length property
fruits_3.length = 0;
// Print the array
console.log("Making empty array using its length property :",fruits_3); // []



// T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop. 
// Answer: 
// Step 1: Create an array of numbers 1 to 10
const numbers = [];
for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}
console.log("Original array:", numbers);

// Step 2: Loop through the array and resize when number 5 is found
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    numbers.length = 6; // Resize array to length 6
    break; // Stop the loop once resized
  }
}
console.log("Resized array:", numbers);



// T-012: Create an Array of 10 elements. Use the splice() method to empty the array. 
// Answer: 
// Step 1: Create an array of 10 elements
const numbers2 = [1,2,3,4,5,6,7,8,9,10];
console.log("Original array:", numbers2);
// Step 2: Use splice() to remove all elements
numbers2.splice(0, numbers2.length);
console.log("Array after splice:", numbers2);



// T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?
// Answer:

// 1 Original array
let arr1 = [1,2,3,4,5,6,7,8,9,10];

// Method 1: Using length property
arr1.length = 0;
console.log("Using length:", arr1);

// 2️ Using pop() method
let arr2 = [1,2,3,4,5,6,7,8,9,10];
while(arr2.length > 0){
  arr2.pop();
}
console.log("Using pop:", arr2);

// 3️ Using shift() method
let arr3 = [1,2,3,4,5,6,7,8,9,10];
while(arr3.length > 0){
  arr3.shift();
}
console.log("Using shift:", arr3);

// 4️ Setting array to []
let arr4 = [1,2,3,4,5,6,7,8,9,10];
arr4 = [];
console.log("Setting to []:", arr4);

// 5️ Using splice()
let arr5 = [1,2,3,4,5,6,7,8,9,10];
arr5.splice(0, arr5.length);
console.log("Using splice:", arr5);

//Here, arr.length = 0 method is fastest & most memory-efficient . That's why it is the most efficient method. 




// T-014: What happens when you concatenate two empty arrays? 
// Answer:
const arrNew = [];
const arrNew2 = [];
const result = arrNew.concat(arrNew2);
console.log(result);
console.log(result.length);

// concat() combines the elements of two (or more) arrays into a new array.
// Here, both arr1 and arr2 are empty: [].
// Concatenating them creates another empty array:
// [].concat([]) // -> []
// The length of the resulting array is 0.




// T-015: How can you check if a value is partially matching with any of the elements of an Array?
// Answer:
// Array of strings
const fruitsNew = ["Apple", "Banana", "Cherry", "Mango"];

// Value to partially match
const searchValue = "nan";

// Check if any element partially matches
const isPartialMatch = fruitsNew.some(fruit => fruit.toLowerCase().includes(searchValue.toLowerCase()));
console.log(isPartialMatch); // true

// using filter method 
const matches = fruits.filter(fruit => fruit.toLowerCase().includes(searchValue.toLowerCase()));
console.log(matches); // ['Banana']



// T-016: What is the difference between the slice() and splice() methods?
// Answer:

const fruits6 = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

// Extract elements from index 1 to 3 (excluding 3)
const slicedFruits = fruits6.slice(1, 3);

console.log("Original Array:", fruits6);       // ["Apple", "Banana", "Cherry", "Mango", "Orange"]
console.log("Sliced Array:", slicedFruits);   // ["Banana", "Cherry"]

const fruits7 = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

// Remove 2 elements starting from index 1 and insert "Pineapple"
const removed = fruits7.splice(1, 2, "Pineapple");

console.log("Removed Elements:", removed);     // ["Banana", "Cherry"]
console.log("Modified Array:", fruits7);       // ["Apple", "Pineapple", "Mango", "Orange"]


//  T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
// Answer:
// Original array of alphanumeric strings
const items = ["B12", "A45", "C23", "D01", "A10"];

console.log("Original Array:", items);

// Ascending order (immutable)
const ascending = [...items].sort(); // Spread operator creates a copy
console.log("Ascending Order:", ascending);

// Descending order (immutable)
const descending = [...items].sort().reverse();
console.log("Descending Order:", descending);

// Verify original array is unchanged
console.log("Original Array After Sorting:", items);

// T-018: Can you give examples of sparse and dense arrays?  
// Answer:
// Example of dense array :
const denseArray = [1, 2, 3, 4, 5];

console.log("the dense array : ",denseArray);        // [1, 2, 3, 4, 5]
console.log("the dense array length : ",denseArray.length); // 5
console.log("the 3rd index of dense array : ",denseArray[2]);     // 3 (every index exists)

// Example of sparse array :
const sparseArray = [];
sparseArray[0] = 1;
sparseArray[3] = 4;

console.log("the sparse array : ",sparseArray);       // [1, <2 empty items>, 4]
console.log("the sparse array length : ",sparseArray.length); // 4
console.log("the 2nd index of sparse array : ",sparseArray[1]);     // undefined
console.log("Existence the index 1 of sparse array : ",1 in sparseArray);   // false (index 1 does not exist)


// T-019: Give a practical usages of the .fill() method 
// Answer:
// 1️ Initialize an array with default values:
const numbers3 = new Array(5).fill(0);
console.log(numbers3); // [0, 0, 0, 0, 0]
// Useful when you want a pre-filled array for calculations.

// 2️ Fill part of an array
const fruits4 = ["Apple", "Banana", "Cherry", "Mango"];
fruits.fill("Orange", 1, 3); // Fill from index 1 to 2
console.log(fruits4); // ["Apple", "Orange", "Orange", "Mango"]
// Useful for updating specific range of elements.

// 3️ Reset an array
let scores = [10, 20, 30, 40];
scores.fill(0);
console.log(scores); // [0, 0, 0, 0]
// Quickly reset all values to a default.

// 4️ Create a matrix (2D array) placeholder
const rows = 3;
const cols = 4;
const matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));
console.log(matrix);
/* Output:
[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
*/
// Useful for initializing 2D arrays for games or grids.



// T-020: How to convert an array to a string? 
// Answer:
const fruits5 = ["Apple", "Banana", "Cherry", "Mango"];

// Join with space
const str2 = fruits5.join(" ");
console.log(str2); // "Apple Banana Cherry Mango"
// Join with hyphen
const str3 = fruits5.join("-");
console.log(str3); // "Apple-Banana-Cherry-Mango"








// Consider these input arrays for question T-21 to T-48

// employees array: An array of employees working in a department.

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
// departments array: An array of departments where employees work.
const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];


//  T-021: Can you filter employees who work in the "Engineering" department?
// Answer:
// Step 1: Find the departmentId for "Engineering"
const engineeringDept = departments.find(dept => dept.name === "Engineering");

// Step 2: Filter employees whose departmentId matches Engineering
const engineeringEmployees = employees.filter(emp => emp.departmentId === engineeringDept.id);

console.log(engineeringEmployees);




//  T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
// Answer:
// Step 1: Map employee names with department names
const employeeWithDept = employees.map(emp => {
  // Find the department name for the employee
  const deptName = departments.find(dept => dept.id === emp.departmentId).name;
  return `Employee names with department ${emp.name} (${deptName})`;
});

console.log(employeeWithDept);




// T-023: Find the highest salary among employees. 
// Answer: 
//using reduce() 
const highestSalary = employees.reduce((max, emp) => {
  return emp.salary > max ? emp.salary : max; 
}, 0);
console.log("Highest Salary:", highestSalary);




// T-024: Check if there is at least one employee in the "Sales" department.
// Answer:
// Step 1: Find the departmentId for "Sales"
const salesDept = departments.find(dept => dept.name === "Sales");

// Step 2: Check if any employee belongs to that department
const hasSalesEmployee = employees.some(emp => emp.departmentId === salesDept.id);
console.log("Is there at least one employee in Sales?", hasSalesEmployee);




// T-025: Write a function to filter employees earning more than 6000. 
// Function to filter employees earning more than 6000
function filterEmployeesBySalary(employees) {
  return employees.filter(employee => employee.salary > 6000);
}
// Call the function
const highEarners = filterEmployeesBySalary(employees);

console.log("Employees earning more than 6000:");
console.log(highEarners);




//  T-026: Create an array of employee names only. 
// Answer:
// Extract only employee names using map()
const employeeNames = employees.map(employee => employee.name);
console.log("Employee Names:");
console.log(employeeNames);




// T-027: Calculate the total salary of all employees using
// Answer:
// Calculate total salary using reduce()
const totalSalary = employees.reduce((sum, employee) => sum + employee.salary ,0);
console.log("Total Salary of all employees:", totalSalary);





