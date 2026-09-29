function aplicarDesconto(valor, porcentagem) {
    let valorComDesconto = valor - (valor * (porcentagem / 100));
    return valorComDesconto;
}

function processarVenda(valorBruto) {
    if (valorBruto > 100) {
        // Aplica 10% de desconto se for maior que 100
        return aplicarDesconto(valorBruto, 10);
    } else {
        // Retorna o valor bruto sem alterações se for menor ou igual a 100
        return valorBruto;
    }
}

// Testando e exibindo o resultado corretamente no console
let valorFinal = processarVenda(200);
console.log(`O valor final da venda é: R$ ${valorFinal}`);