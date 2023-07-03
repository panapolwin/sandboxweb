let sc1 = document.querySelector("#sc1")
let round = document.querySelector("#round")
let sc2 = document.querySelector("#sc2")
let imgp = document.querySelector("#imgp")
let imgb = document.querySelector("#imgb")
let rockbut = document.querySelector("#rockbut")
let paperbut = document.querySelector("#paperbut")
let scisorbut = document.querySelector("#scisorbut")
let resbut = document.querySelector("#resbut")
let worl = document.querySelector("#worl")
let x = 0
let y = 0
let r = 0
let s1 = 0
let s2 = 0

function rockshub(){
    x = 0
    imgp.src = "img/rock.png"
    y = botshub()
    tudsin()
    printpol()
}
function papershub(){
    x = 1
    imgp.src = "img/paper.png"
    y = botshub()
    tudsin()
    printpol()
}
function scisorshub(){
    x = 2
    imgp.src = "img/scisor.png"
    y = botshub()
    tudsin()
    printpol()
}
function botshub(){
    let a =  Math.floor(Math.random() * 3)
    if(a==0){imgb.src = "img/rock.png"}
    if(a==1){imgb.src = "img/paper.png"}
    if(a==2){imgb.src = "img/scisor.png"}
    return a
}
function tudsin(){
    r += 1
    if(x==1 && y==0){s1 += 1}
    if(x==2 && y==0){s2 += 1}
    if(x==0 && y==1){s2 += 1}
    if(x==2 && y==1){s1 += 1}
    if(x==0 && y==2){s1 += 1}
    if(x==1 && y==2){s2 += 1}
    if(r==5){lock()}
}
function printpol(){
    sc1.textContent = `Player: ${s1}`
    sc2.textContent = `Bot: ${s2}`
    round.textContent = `round ${r}`
}
function reset(){
    rockbut.disabled = false
    paperbut.disabled = false
    scisorbut.disabled = false
    x = 0
    y = 0
    r = 0
    s1 = 0
    s2 = 0
    printpol()
    worl.textContent = ``
}
function lock(){
    rockbut.disabled = true
    paperbut.disabled = true
    scisorbut.disabled = true
    jobgame()
}
function jobgame(){
    if(s1 > s2){
        worl.textContent = `You Win!`
        worl.style.color = "lime"
    }
    else if(s1 < s2){
        worl.textContent = `You Lost!`
        worl.style.color = "red"
    }
    else if(s1 == s2){
        worl.textContent = `Tie!`
        worl.style.color = "yellow"
    }
}

rockbut.addEventListener("click", rockshub)
paperbut.addEventListener("click", papershub)
scisorbut.addEventListener("click", scisorshub)
resbut.addEventListener("click", reset)