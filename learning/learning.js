// let date = new Date();
// console.log (date.toDateString())

// const { use } = require("react");

// ;


// function name (Name) {
//     Name = Name.toUpperCase();
//     console.log(Name);
// }
// name("yeasir");




let user = {
    name: "Yeasir",
    age : 26,
    city : "Dhaka",
    isAdmin : false,
};
// console.log("name" in user);

// property added
user ['spouse'] = null;
// console.log(user);

// property updated
user['name'] = "Arafat";
// console.log(user);

// property delete 
delete user["isAdmin"];
console.log(user);

let a = Object.isExtensible(user);
console.log(a);

Object.defineProperty(user, 'isMaintainer',{
    value: false,
    writable: true,
    enumerable: true,
    configurable: true,
})
console.log(user);



// comparing objects in 2 ways 
// 1.using object properties 
let obj = {a:20,b:30,};
let obj2 = {a:20 , b:30,};
if (obj.a === obj2.a && obj.b === obj2.b){
    console.log(true);
} else {console.log(false)};

// 2. using JSON.stringify : 
console.log (JSON.stringify(obj)===JSON.stringify(obj2))


// *** Object iteration 
const obj3 = {a: 10, b:20, c:30, d:40,};
for(let i in obj3){
    console.log(obj3[i]);
}

