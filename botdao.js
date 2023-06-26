let start = document.querySelector("#start")
let h = document.querySelector("#h")
let l = document.querySelector("#l")
let c = document.querySelector("#c")
let divbot = document.querySelector("#divbot")
let x = 0
let max = 100
let min = 0
let i = 0

function onstart(){
    max = 100
    min = 0
    i = 0
    x = calculate(max, min)
    divbot.textContent = `Is ${x} your number`
    i += 1
}
function calculate(max, min){
    return Math.floor(Math.random() * (max - min + 1) ) + min
}
function setmax(){
    max = x
    x = calculate(max, min)
    divbot.textContent = `Is ${x} your number`
    i += 1
}
function setmin(){
    min = x
    x = calculate(max, min)
    divbot.textContent = `Is ${x} your number`
    i += 1
}
function ag(){
    divbot.textContent = `Guess : ${i}`
}

start.addEventListener("click", onstart)
h.addEventListener("click", setmax)
l.addEventListener("click", setmin)
c.addEventListener("click", ag) 