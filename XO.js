let buttons = document.querySelectorAll(".xoimg")
let worl = document.querySelector("#worl")
let r = 0
let count = [buttons.length]
let score = [buttons.length]

function select(event,a){
    if(r%2 == 0 && count[a] != 1){
        rota(event.target.id)
        buttons[a].src = "img/o.png"
        score[a] = 'o'
        tudsin()
        r+=1
    }
    else if(r%2 != 0 && count[a] != 1){
        rota(event.target.id)
        buttons[a].src = "img/x.png"
        score[a] = 'x'
        tudsin()
        r+=1
    }
    count[a] = 1
}
function tudsin(){
    if(score[0]=='o' && score[3]=='o' && score[6]=='o'){
        worl.textContent = `O Win!`
        worl.style.color = "deepskyblue"
    }
    if(score[1]=='o' && score[4]=='o' && score[7]=='o'){
        worl.textContent = `O Win!`
        worl.style.color = "deepskyblue"
    }
    if(score[2]=='o' && score[5]=='o' && score[8]=='o'){
        worl.textContent = `O Win!`
        worl.style.color = "deepskyblue"
    }
    if(score[0]=='o' && score[1]=='o' && score[2]=='o'){
        worl.textContent = `O Win!`
        worl.style.color = "deepskyblue"
    }
    if(score[3]=='o' && score[4]=='o' && score[5]=='o'){
        worl.textContent = `O Win!`
        worl.style.color = "deepskyblue"
    }
    if(score[6]=='o' && score[7]=='o' && score[8]=='o'){
        worl.textContent = `O Win!`
        worl.style.color = "deepskyblue"
    }
    if(score[0]=='o' && score[4]=='o' && score[8]=='o'){
        worl.textContent = `O Win!`
        worl.style.color = "deepskyblue"
    }
    if(score[2]=='o' && score[4]=='o' && score[6]=='o'){
        worl.textContent = `O Win!`
        worl.style.color = "deepskyblue"
    }
    if(score[0]=='x' && score[3]=='x' && score[6]=='x'){
        worl.textContent = `X Win!`
        worl.style.color = "red"
    }
    if(score[1]=='x' && score[4]=='x' && score[7]=='x'){
        worl.textContent = `X Win!`
        worl.style.color = "red"
    }
    if(score[2]=='x' && score[5]=='x' && score[8]=='x'){
        worl.textContent = `X Win!`
        worl.style.color = "red"
    }
    if(score[0]=='x' && score[1]=='x' && score[2]=='x'){
        worl.textContent = `X Win!`
        worl.style.color = "red"
    }
    if(score[3]=='x' && score[4]=='x' && score[5]=='x'){
        worl.textContent = `X Win!`
        worl.style.color = "red"
    }
    if(score[6]=='x' && score[7]=='x' && score[8]=='x'){
        worl.textContent = `X Win!`
        worl.style.color = "red"
    }
    if(score[0]=='x' && score[4]=='x' && score[8]=='x'){
        worl.textContent = `X Win!`
        worl.style.color = "red"
    }
    if(score[2]=='x' && score[4]=='x' && score[6]=='x'){
        worl.textContent = `X Win!`
        worl.style.color = "red"
    }
}
function rota(event){
    gsap.to("#"+event, {duration: 1,rotation: 360,})
    gsap.fromTo("#"+event, {x: -100,y: -50,opacity: 0}, {x: 0,y: 0,opacity: 1, duration: 1})
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", (event)=>select(event,i))
}