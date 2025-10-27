// 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit

let celsius = 54;

function celsiusToFahrenheit(celsius){
    let Fahrenheit = (celsius * 9/5) + 32;
    console.log(`the fahrenheit is ${Fahrenheit}`)

}

celsiusToFahrenheit(celsius);


// 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

let num1 = 99 ;
let num2 =13;
console.log (`here is two numbers ${num1} & ${num2}`)
function findMax(num1,num2){
    if (num1>num2){
        console.log (`the larger number is ${num1}`)

    }
    else{
        console.log (`the larger number is ${num2}`)

    }
}

findMax(num1,num2);

// 3.unction to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.


function isPalindrome(str) {
  // check if input is a string
  if (typeof str !== "string") {
    return "Invalid input";
  }

  // remove spaces (optional, for cleaner checking)
  str = str.toLowerCase(); // make case-insensitive

  let reversed = "";

  // manually reverse the string (without using built-in reverse function)
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  // check if reversed string is same as original
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("hello"));  // false
console.log(isPalindrome("level"));  // true


// 4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) {
  if (n < 0) return "Invalid input";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120


// 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  // check if input is a string
  if (typeof str !== "string") {
    return "Invalid input";
  }

  // convert string to lowercase (so A/a, E/e works same)
  str = str.toLowerCase();

  let count = 0;

  // loop through each character
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    // check if character is a vowel
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels("Yeasir Arafat Zim")); // Output: 6

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

function capitalizeWords(sentence) {
  // Input check
  if (typeof sentence !== "string") {
    return "Invalid input";
  }

  // Split sentence into words
  let words = sentence.split(" "); // words array তৈরি হয়

  // Capitalize first letter of each word
  let capitalizedWords = words.map(word => {
    if (word.length === 0) return ""; // empty string handle
    return word[0].toUpperCase() + word.slice(1); // প্রথম letter uppercase + বাকিটা 그대로
  });

  // Join words back into a sentence
  return capitalizedWords.join(" ");
}

// Example usage:
console.log(capitalizeWords("javascript is fun to learn")); 
// Output: "Javascript Is Fun To Learn"

console.log(capitalizeWords("yeasir arafat zim")); 
// Output: "Yeasir Arafat Zim"





// 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument

