console.log("Day 11 - Closure");

// Outher Inner
function outer() {
    let x = 10;

    return function inner() {
        console.log(x);
    };
}

const func = outer();
console.log(func());

// Count Closure
function outerCount() {
    let count = 0;

    return function innerCount() {
        count++;
        console.log(count);
    };
}