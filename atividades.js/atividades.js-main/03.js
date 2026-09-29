function celsiusParaFahrenheit() {
    let celsius = Number(prompt("Digite a temperatura em °C:"));

    // Validação opcional para garantir que é um número válido
    if (isNaN(celsius)) {
        return alert("Por favor, digite um valor numérico válido.");
    }

    let conversao = (celsius * 1.8) + 32;
    return conversao;
}

let temperaturaFahrenheit = celsiusParaFahrenheit();

// Se o usuário digitou um número válido, exibe o resultado
if (temperaturaFahrenheit !== undefined) {
    alert(`A temperatura em graus Fahrenheit é: ${temperaturaFahrenheit.toFixed(1)}°F`);
}