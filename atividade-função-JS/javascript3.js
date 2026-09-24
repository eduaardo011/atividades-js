// sem dificuladades, mesmo raciocinio das outras
function entrada(){
    numero = Number(prompt(`Digite um número (em CELCIUS) para conversão em Fahrenheit:`))
    return numero
}

function celsiusParaFahrenheit(conta){
    result = (conta*1.8) + 32
    return resultado
}

function saida (fah){
    alert(`Seu número convertido é ${fah}°F`)
}

let num = entrada()
let process = celsiusParaFahrenheit(número)
saida(processo)     