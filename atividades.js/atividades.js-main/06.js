const pessoa = {
    nome: prompt("Digite seu nome:"),
    idade: prompt("Digita sua idade:"),
    profissao: prompt("Digite sua profissão:")
}

function formatarPessoa(pessoa) {
    return alert("Olá, meu nome é " + pessoa.nome + ", tenho " + pessoa.idade + " anos trabalho como " + pessoa.profissao)
}
formatarPessoa(pessoa)
