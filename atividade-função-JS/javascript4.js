// sem dificuladades, mesmo raciocinio das outras
function entrada1(){
    peso = Number(prompt(`Digite seu peso:`))
  
    return peso
}
function entrada2(){
   
    altura = Number(prompt(`Digite sua altura:`))
    return altura
}

function calcularIMC(a, b){
    imc = a / (b*b)
    return imc
}

function saida(final){
    if(final<18.5){
        alert(`Abaixo do peso imc = ${final}`)
    }
    if(final>= 18.5 && final <=24.9){
        alert(`Peso normal imc = ${final}`)
    }
    if(final>=25){
        alert(`Sobrepeso imc = ${final}`)
    }
}

let p = entrada1()
let al = entrada2()
let cal = calcularIMC(p, al)
saida (cal)