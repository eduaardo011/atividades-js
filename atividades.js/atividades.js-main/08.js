function validarSenha(senha) {
    // Retorna direto o resultado da comparação (true ou false)
    // Corrigido de 'lenght' para 'length'
    return senha.length >= 6;
}

function autenticarUsuario(usuario, senha) {
    let senhaValida = validarSenha(senha);

    // Como 'senhaValida' já é booleana, podemos testá-la diretamente
    if (senhaValida) {
        alert(`Acesso concedido para ${usuario}!`);
    } else {
        alert(`Senha muito curta para o usuário ${usuario}. Mínimo de 6 caracteres.`);
    }
}

// Execução principal
let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite sua senha:");

autenticarUsuario(usuario, senha);