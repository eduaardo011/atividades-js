/*Apliquei a fórmula matemática da área (base * altura) dentro da função e usei o return para devolver o resultado ENTRADAS, PROCESSAMENTO E SAÍDA:Entradas: Valores de base e altura, Processamento: Multiplicação (base * altura, Saída: Valor da área retornado.*/

function calcularAreaRetangulo(base, altura) {
    var area = base * altura;
    return area;
}

var base = 5;
var altura = 3;
var resultado = calcularAreaRetangulo(base, altura);

console.log("A área do retângulo é: " + resultado); 