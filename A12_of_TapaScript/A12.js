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


// 5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.


// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples 


// 7. How do you check if an object has a certain property? 

// 8. What will be the output and why? 
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);

// 9. What’s the best way to deeply copy a nested object? Expalin with examples 

const student = {
  name: "Yeasir",
  info: {
    age: 21,
    department: "ICT"
  }
};

// Shallow copy using spread operator
const copyStudent = { ...student };

// Modify nested object
copyStudent.info.age = 25;

console.log(student.info.age); // ❌ 25 — also changed!



// 10. Loop and print values using Object destructuiring
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];