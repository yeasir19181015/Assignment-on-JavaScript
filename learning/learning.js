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


