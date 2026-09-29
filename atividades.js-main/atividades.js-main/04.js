function  lerDados() {
    let peso= Number(prompt("Digite o seu peso:"))
    let altura= Number(prompt("Digite a sua altura:"))
    let numeroIMC = calcularIMC(peso, altura)
    return numeroIMC
}

function calcularIMC(peso, altura){
    let IMC = peso /(altura*altura)
    return IMC
}



function classifica(numero){
     if (numero < 18.5) {
        alert("Abaixo do peso")
    }
    else
     
    if (numero>18.5 && numero<24.9){
        alert("Peso normal")
    }
    else{
        alert("Sobrepeso")
    }
}

let numeroIMC = lerDados()
classifica(numeroIMC)




     