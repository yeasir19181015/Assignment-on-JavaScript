function highLightText(){
    console.log("About to a hightlighted text");

    let elements = document.querySelectorAll("p.info");

    elements.forEach((element) =>  {
        element.style.backgroundColor = "yellow";
    })
}


function filterList(){
    const inputElem = document.getElementById("searchInput");
    const input = inputElem.value;

    const items = document.querySelectorAll("ul#itemList li");

    items.forEach((item) => {
       item.style.display =item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none"
    })
}

