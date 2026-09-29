function  aplicarDesconto(valor,porcentagem){
    return  alert(valor-=valor*(porcentagem/100))
}

function processarVenda(valorBruto){
    if (valorBruto>100){
        return aplicarDesconto(valorBruto,10)
    }
    else{
        return alert ("valorBruto"+ valorBruto)
    }

}
console.log(processarVenda(200))