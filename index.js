let count_EL= document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resultEl = document.getElementById("result-el")
let count=0
let counter = 0

function increment(){
    count+=1
    counter+=1
    count_EL.innerText =count
}

function save(){
    let str = count + " - "

    saveEl.textContent += str 
    count_EL.innerText =0
    count =0
}

function result(){
    let str = counter 
    
    // let amount = str + count
    // let res =  amount
    let text = "El total de clientes es: "
    resultEl.textContent = text + str 
}
