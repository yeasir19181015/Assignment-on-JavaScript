console.log("Day 15: JavaScript Array Master Course");


{
    const mixedArray = [100, true, "tapaScript", {}];

    // index = The position of an element in the array is known as its index.
    // index starts with 0
    // index end with length - 1

    const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

    function Car(model) {
        this.model = model;
    }

    const bmwCar = new Car("BMW X1");
    console.log(bmwCar);

    const anotherSalad = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");

    console.log("Salad", salad);
    console.log("Another Salad", anotherSalad);

    console.log(salad === anotherSalad);

    const two = new Array(1, 2);
    console.log(two); // [1, 2]

    // const element = array[index]

    console.log(salad[0]); // '🍅'
    console.log(salad[2]); // '🥦'
    console.log(salad[5]); // '🥕'

    // const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

    for (let i = 0; i <= salad.length - 1; i++) {
        console.log(`Element at index ${i} is ${salad[i]}`);
    }

    // push() - end
    const ret = salad.push("🥜");
    console.log(ret); // 8
    console.log(salad);

    // unshift() - start

    const unRet = salad.unshift("🥜");
    console.log(unRet); // 9
    console.log(salad);