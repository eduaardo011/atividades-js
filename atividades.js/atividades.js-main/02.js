function ehPar() {
    let num = Number(prompt("Digite um número:"));
    
    // O operador % retorna o resto. Se o resto for 0, já retorna 'true' automaticamente.
    return num % 2 === 0;
}

let avalia = ehPar();

// Como 'avalia' já é true ou false, podemos testá-la diretamente
if (avalia) {
    alert("O número digitado é par!");
} else {
    alert("O número digitado é ímpar!");
}