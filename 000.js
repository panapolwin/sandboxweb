let shoppings = ["bread", "milk", "cheese", "bacon", "noodles"]
let textField1 = document.querySelector("#text1")
let button1 = document.querySelector("#button1")
let i = 0

function onClicked() {
    console.log(i)
    textField1.value = shoppings[i]
    i++
    i = i % shoppings.length
}
button1.addEventListener("click", onClicked)