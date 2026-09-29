function calcularArea(base, altura) {
    return base * altura;
}

// Exemplo de uso:
let baseUsuario = Number(prompt("Digite o valor da base:"));
let alturaUsuario = Number(prompt("Digite o valor da altura:"));

let areaTotal = calcularArea(baseUsuario, alturaUsuario);
alert(`A área do retângulo é: ${areaTotal}`);