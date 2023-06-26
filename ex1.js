let int1 = document.querySelector("#int1")
let div1 = document.querySelector("#div1")
let but1 = document.querySelector("#but1")

function onClicked(){
    div1.textContent = int1.value
}
but1.addEventListener("click", onClicked)