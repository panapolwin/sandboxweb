let sc1 = document.querySelector("#sc1")
let round = document.querySelector("#round")
let sc2 = document.querySelector("#sc2")
let imgp = document.querySelector("#imgp")
let imgb = document.querySelector("#imgb")
let rockbut = document.querySelector("#rockbut")
let paperbut = document.querySelector("#paperbut")
let scisorbut = document.querySelector("#scisorbut")
let resbut = document.querySelector("#resbut")
let x = 0
let y = 0
let r = 0
let s1 = 0
let s2 = 0

function rockshub(){
    x = 0
    imgp.src = "img/rock.png"
    y = botshub()
    tudsin(x,y)
    printpol(x,y)
}
function papershub(){
    x = 1
    imgp.src = "img/paper.png"
    y = botshub()
    tudsin(x,y)
    printpol(x,y)
}
function scisorshub(){
    x = 2
    imgp.src = "img/scisor.png"
    y = botshub()
    tudsin(x,y)
    printpol(x,y)
}
function botshub(){
    let a =  Math.floor(Math.random() * 3)
    if(a==0){imgb.src = "img/rock.png"}
    if(a==1){imgb.src = "img/paper.png"}
    if(a==2){imgb.src = "img/scisor.png"}
    return a
}
function tudsin(x,y){
    r += 1
    if(x==1 && y==0){s1 += 1}
    if(x==2 && y==0){s2 += 1}
    if(x==0 && y==1){s2 += 1}
    if(x==2 && y==1){s1 += 1}
    if(x==0 && y==2){s1 += 1}
    if(x==1 && y==2){s2 += 1}
    else{
        s1 += 1
        s2 += 1
    }
}
function printpol(x,y){
    sc1.textContent = `Player: ${s1}`
    sc2.textContent = `Bot: ${s2}`
    round.textContent = `round ${r}`
}

rockbut.addEventListener("click", rockshub)
paperbut.addEventListener("click", papershub)
scisorbut.addEventListener("click", scisorshub)