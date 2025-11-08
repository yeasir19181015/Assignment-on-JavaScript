// *** T-001: Create an array of 5 elements using the Array Constructor. 
const myArray = new Array(10, 20, 30, 40, 50);
// Print the array
console.log(myArray);


// *** T-002: Create an array of 3 empty slots. 
const emptyArray = new Array(3);
// Print the array and its length
console.log(emptyArray);
console.log(emptyArray.length);


// *** T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange", "Pineapple"];
// Access the 4th element using the length property
const fourthElement = fruits[fruits.length - 3];
// Print the result
console.log(fourthElement);



// *** T-004: Use the for loop on the above array to print elements in the odd index. 
let index = 0;
for(let fruit of fruits){
    if( index % 2 != 0){
        console.log(`odd index elements in index ${index}: ${fruit}`);
    }
    index++
}


// T-005: Add one element at the front and the end of an array. 
// Original array
const fruits2 = ["Apple", "Banana", "Cherry"];
// Add one element at the front
fruits2.unshift("Mango");
// Add one element at the end
fruits2.push("Orange");
// Print updated array
console.log("After adding one element at the front and the end of an array :",fruits2);



// T-006: Remove an element from the front and the end of an array. 
// Original array
const fruits3 = ["Apple","Mango", "Banana","Orange", "Cherry"];
// Remove one element at the front
fruits3.shift("Apple");
// Remove one element at the end
fruits3.pop("Cherry");
// Print updated array
console.log("After removing one element at the front and the end of an array :",fruits3);


