let box = document.querySelectorAll(".boxpic")
let lifetxt = document.querySelector("#lifetxt")
let scoretxt = document.querySelector("#scoretxt")
let worl = document.querySelector("#worl")
let val = [box.length]
let shop = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8']
let pol =[]
let pol2 = []
let life = 3
let score = 0

function boxClicked(event,a){
    if(pol2.length < 2 && val[a] != 'stop'){
        if(typeof val[a] != "string"){
            let ran = Math.floor(Math.random() * (shop.length + 1))
            val[a] = shop[ran]
            delete shop[ran]
            shop = shop.filter((v) => v != null)
        }
        pol.push(val[a])
        pol2.push(a)
        picselect(a)
        console.log(pol)
        console.log(pol2)
        if(pol2.length == 2){
            if(pol[0] != pol[1]){
                setTimeout(() => {
                    box[pol2[0]].src = "img/box.png"
                    box[pol2[1]].src = "img/box.png"
                    pol2.pop()
                    pol2.pop()
                    pol.pop()
                    pol.pop()
                    boxnum = 0
                    life -= 1
                    printpol()
                }, 1000);
            }
            else{
                val[pol2[0]] = 'stop'
                val[pol2[1]] = 'stop'
                pol2.pop()
                pol2.pop()
                pol.pop()
                pol.pop()
                boxnum = 0
                score += 1
                printpol()
            }
        }
    }
}
function picselect(a){
    if(val[a] == '1'){
        box[a].src = "img/flow1.png"
    }
    if(val[a] == '2'){
        box[a].src = "img/flow2.png"
    }
    if(val[a] == '3'){
        box[a].src = "img/flow3.png"
    }
    if(val[a] == '4'){
        box[a].src = "img/flow4.png"
    }
    if(val[a] == '5'){
        box[a].src = "img/flow5.png"
    }
    if(val[a] == '6'){
        box[a].src = "img/flow6.png"
    }
    if(val[a] == '7'){
        box[a].src = "img/flow7.png"
    }
    if(val[a] == '8'){
        box[a].src = "img/flow8.png"
    }
}
function printpol(){
    lifetxt.textContent = `Life: ${life}`
    scoretxt.textContent = `Score: ${score}`
    if(life <= 0){
        worl.style.color = "red"
        worl.textContent = `Game over`
        for(let j = 0; j < box.length; j++){
            val[j] = 'stop'
        }
    }
}

for(let i = 0; i < box.length; i++){
    box[i].addEventListener("click", (event)=>boxClicked(event,i))
}