// let numbers = [3,2,1,5,4];
// numbers.sort();
// console.log(numbers);


// // numbers.sort(function(a,b){
// //     return a===b ? 0 : a>b ? -1:1;
// // })
// // console.log("after descending order :", numbers);

// // [ 1, 2, 3, 4, 5 ]
// // numbers.splice(1,3,9);
// // console.log(numbers.splice(1,3,9));
// // const arr = numbers.slice(1,2);
// console.log(numbers.slice(1,2));




// let customers = [
//     {
//         id: 001,
//         f_name: "Abby",
//         l_name: "Thomas",
//         gender: "M",
//         married: true,
//         age: 32,
//         expense: 500,
//         purchased: ["Shampoo", "Toys", "Book"],
//     },
//     {
//         id: 002,
//         f_name: "Jerry",
//         l_name: "Tom",
//         gender: "M",
//         married: true,
//         age: 64,
//         expense: 100,
//         purchased: ["Stick", "Blade"],
//     },
//     {
//         id: 003,
//         f_name: "Dianna",
//         l_name: "Cherry",
//         gender: "F",
//         married: true,
//         age: 22,
//         expense: 1500,
//         purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
//     },
//     {
//         id: 004,
//         f_name: "Dev",
//         l_name: "Currian",
//         gender: "M",
//         married: true,
//         age: 82,
//         expense: 90,
//         purchased: ["Book"],
//     },
//     {
//         id: 005,
//         f_name: "Maria",
//         l_name: "Gomes",
//         gender: "F",
//         married: false,
//         age: 7,
//         expense: 300,
//         purchased: ["Toys"],
//     },
// ];

// // filter() - Get 'Senior Citizens' by Filtering out other customers

// const seniorCustomers = customers.filter((customer) => {
//     return customer.age >= 60;
// });
// console.log("Senior Customer list", seniorCustomers);

// // map() - Transform to add title and full name

// const customersWithFullName = customers.map((customer) => {
//     let title = "";

//     if (customer.gender === "M") {
//         title = "Mr.";
//     } else if (customer.gender === "F" && customer.married) {
//         title = "Mrs.";
//     } else {
//         title = "Miss";
//     }

//     customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;

//     return customer;
// });

// console.log("Customer after adding fullname", customersWithFullName);


// {
// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(result);
// }

// let count = 0;
// const total = customers.reduce((accumulator, customer) => {
//     if (customer.purchased.includes("Book")) {
//         accumulator = accumulator + customer.age;
//         count = count + 1;
//     }
//     return accumulator;
// }, 0);

// console.log("Customer Avg age Purchased Book:", Math.floor(total / count));

// // reduceRight() -- To reduce from the right

// let number = [100, 40, 15];

// const subsResult = number.reduceRight((accumulator, current) => {
//     return accumulator - current;
// });

// console.log("Subs", subsResult);



// let car = prompt("which is your favorite car?");
// let favCar = {
//     [car] :5 ,
// }
// console.log(favCar);

// let car = prompt("which is your favorite car?");
// let favCar = {
// }
// favCar.car= car;
// console.log(favCar.car);


// create an object using function 
function createUser(name,age){
  return {name,age}
}
const user15 = createUser("Yeasir", 26);
console.log(user15);


