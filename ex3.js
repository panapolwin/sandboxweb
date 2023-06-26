let int1 = document.querySelector("#int1")
let int2 = document.querySelector("#int2")
let sel1 = document.querySelector("#sel1")
let sel2 = document.querySelector("#sel2")

function onClicked(){
    if(sel1.value == "inch" && sel2.value == "mm"){
        int2.value = parseInt(int1.value) * 25.4
    }
    else if(sel1.value == "inch" && sel2.value == "m"){
        int2.value = parseInt(int1.value) * 0.0254
    }
    else if(sel1.value == "mm" && sel2.value == "inch"){
        int2.value = parseInt(int1.value) / 25.4
    }
    else if(sel1.value == "mm" && sel2.value == "m"){
        int2.value = parseInt(int1.value) / 1000
    }
    else if(sel1.value == "m" && sel2.value == "inch"){
        int2.value = parseInt(int1.value) / 0.0254
    }
    else if(sel1.value == "m" && sel2.value == "mm"){
        int2.value = parseInt(int1.value) * 1000
    }
    else{
        int2.value = int1.value
    }
}

int1.addEventListener("input", onClicked)
sel1.addEventListener("change", onClicked)
sel2.addEventListener("change", onClicked)