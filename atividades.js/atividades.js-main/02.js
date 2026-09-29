function ehPar() {
    let num = Number(prompt("Digite um número:"))

    if (num%2 == 0) {
        return true
    }
    else{
        return false
    }
}
 
let avalia = ehPar()




     if (avalia == true) {
        alert("O numero digitado e par")
    }
    else{
        alert("O numero digitado e impar")
    }


