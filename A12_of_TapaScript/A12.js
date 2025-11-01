// 1. What will be the output and why? 
const user = { 
    name: "Alex",
    age: undefined };

console.log(user.age ?? "Not provided"); 
console.log(user);

// 2. What will happen if we try to modify a frozen object? 
const obj = Object.freeze({ a: 1 });
// obj.a = 2;
console.log(obj);



// 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring 
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
console.log(`Extracting name property : ${person.name}`)
console.log(`Extracting company property : ${person.company}`)
// console.log(`Extracting city property : ${person.name.company.location.city}`)




// 4. Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade. 
