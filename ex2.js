let int1 = document.querySelector("#int1")
let int2 = document.querySelector("#int2")
let div2 = document.querySelector("#div2")
let p = document.querySelector("#p")
let m = document.querySelector("#m")
let t = document.querySelector("#t")
let d = document.querySelector("#d")

function cp(){
    div2.textContent = parseInt(int1.value) + parseInt(int2.value)
}
function cm(){
    div2.textContent = parseInt(int1.value) - parseInt(int2.value)
}
function ct(){
    div2.textContent = parseInt(int1.value) * parseInt(int2.value)
}
function cd(){
    div2.textContent = parseInt(int1.value) / parseInt(int2.value)
}

p.addEventListener("click", cp)
m.addEventListener("click", cm)
t.addEventListener("click", ct)
d.addEventListener("click", cd)