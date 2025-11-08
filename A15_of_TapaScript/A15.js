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
