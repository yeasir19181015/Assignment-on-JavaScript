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


function add (a,b){
    return a+b ;
}

var sum = add;
console.log(sum(4,5));

var arr = [];
arr.push (add);
console.log(arr[0](5,3));