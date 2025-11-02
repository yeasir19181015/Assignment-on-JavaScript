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

// 1. 
const obj9 = {...obj8};
// 2.  
Object.assign (obj2,obj1);
// 3.
for (key in obj8)
{
    let newKey = key;
    let newValue = obj8[key];
    const obj9[newKey] = newValue;
}

