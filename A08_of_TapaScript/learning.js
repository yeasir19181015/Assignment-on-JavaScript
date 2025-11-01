//////    1. Pure function ==== >>>>


// var point = {
//     x : 45 ,
//     y : 100,
// }

// function printPoint(point){
//     point.x = 100;
//     point.y = 200;
//     console.log (point)
// }
// printPoint(point); // { x: 100, y: 200 } , the value of point object has been changed for side effect



// //////    First Class function ==== >>>>

// function add (a,b){
//     return a+b ;
// }

// var sum = add;
// console.log(sum(4,5));

// var arr = [];
// arr.push (add);
// console.log(arr[0](5,3));

// var obj ={
//     sum : add 
// }
// console.log(obj.sum(7,9)) 

// setTimeout (function(){
//     console.log ('I have created....')
// } , 2000 )






//////    Higher order function ==== >>>>

function camera(){
    console.log("cannon");
}

function getCapture(camera){
    camera();

}
getCapture(camera) // higher order function 


function returnFunc(){
    return function(){
        console.log("Hello");
    }
}
returnFunc();
const result = returnFunc();
result();    

let sum =  0;
for (let i = 0; i<=10;i++){
  
    sum += i;
}
console.log (sum);