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

const obj4 = {a:10 , b:20};
const copyObj4 = {};
let x = Object.assign(copyObj4,obj4);
console.log (x);

console.log("here is obj4", obj4);
console.log("here is copyObj4", copyObj4);

// using "assign" method in objects 
const obj5 = {a :1 , b: {c:2}};
const obj6 = Object.assign({}, obj5);
console.log(obj5);

console.log(obj5.b.c);
console.log(obj6.b.c);

// using structured method in objects 
const obj7 =structuredClone(obj5);
obj7.a = 300;
obj7.b.c = 400;
console.log(obj7.a);
console.log(obj5.a);
console.log(obj7.b.c);
console.log(obj5.b.c);

// spread operation using 

// // 1. 
// const obj9 = {...obj8};
// // 2.  
// Object.assign (obj2,obj1);
// // 3.
// for (key in obj8)
// {
//     let newKey = key;
//     let newValue = obj8[key];
//     const obj9[newKey] = newValue;
// }

// object to array convert :
let objj = {a:10, b:20, c:30};
console.log(objj);
console.log(Object.keys(objj));
console.log(Object.values(objj));
const newArr = Object.entries(objj)
console.log(newArr);
const newObj = Object.fromEntries(newArr);
console.log(newObj);

// seal method : if seal is used then the existing property of object can be updated but can not add any property in the main object 
const dept={name:"EEE"};
Object.seal(dept);
dept.name = "ICT";
console.log(dept.name);

// freeze & deepfreeze methods :
let obj11 = {a:10, b:20, c:30};
let newObj11 = Object.freeze(obj11);
console.log(newObj11 === obj11); // true

// deepfreeze : is used to freeze nested object 
// let user1 = {
//     name1 : "Yeasir",
//     age1 : 26,
//     Address : {
//         city1: "Dhaka",
//         thana: "Mohammadpur",
//     }
// }
// let deepfreeze = (user1) => {
//     Object.keys(user1).array.forEach(key => {
//           if (typeof user1['key']=== "Object"){
//              deepfreeze(user1[key]);
//           }
//            Object.freeze(user1);
//     })
// }
// deepfreeze(user1)

// // Point 2 objects with same reference: 
// Object(xx,xy);


let user1 = {
  name1: "Yeasir",
  age1: 26,
  Address: {
    city1: "Dhaka",
    thana: "Mohammadpur",
  },
};
let deepfreeze = (user1) => {
  Object.keys(user1).forEach((key) => {
    if (typeof user1["key"] === "Object") {
      deepfreeze(user1[key]);
    }
    return Object.freeze(user1);
  });
};
deepfreeze(user1);
console.log("check check ")
console.log(Object.isFrozen(user1));
console.log(Object.isSealed(user1));



