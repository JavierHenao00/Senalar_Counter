let count_EL= document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count=0

function increment(){
    count+=1
    count_EL.innerText =count
}

function save(){
    let str = count + " - "

    saveEl.textContent += str 
    count_EL.innerText =0
}

