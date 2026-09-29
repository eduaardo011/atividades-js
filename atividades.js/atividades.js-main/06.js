const pessoa = {
    nome: prompt("Digite seu nome:"),
    idade: Number(prompt("Digite sua idade:")), // Convertido para número por boa prática
    profissao: prompt("Digite sua profissão:")
};

function formatarPessoa(objPessoa) {
    // Usando template string para organizar a frase com crases e ${}
    let mensagem = `Olá, meu nome é ${objPessoa.nome}, tenho ${objPessoa.idade} anos e trabalho como${objPessoa.profissao}.`;
    
    return alert(mensagem);
}

formatarPessoa(pessoa);