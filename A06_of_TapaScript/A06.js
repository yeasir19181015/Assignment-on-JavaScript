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
