function lerDados() {
    let peso = Number(prompt("Digite o seu peso (ex: 70):"));
    let altura = Number(prompt("Digite a sua altura (ex: 1.75):"));
    
    return calcularIMC(peso, altura);
}

function calcularIMC(peso, altura) {
    // Evita divisão por zero ou dados inválidos
    if (!peso || !altura || altura <= 0) return 0;
    
    let imc = peso / (altura * altura);
    return imc;
}

function classifica(numero) {
    if (numero <= 0) {
        return alert("Valores inválidos inseridos.");
    }

    // Usando if/else if em escada para organizar melhor as faixas
    if (numero < 18.5) {
        alert("Abaixo do peso");
    } else if (numero >= 18.5 && numero <= 24.9) {
        alert(`Peso normal (IMC: ${numero.toFixed(1)})`);
    } else {
        alert(`Sobrepeso / Acima do peso (IMC: ${numero.toFixed(1)})`);
    }
}

// Execução principal
let resultadoIMC = lerDados();
classifica(resultadoIMC);