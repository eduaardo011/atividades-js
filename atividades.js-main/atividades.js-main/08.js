function validarSenha(senha){
    if (senha.lenght >= 6)  {
        return true
    }
    else{
        return false
    }
}

function autenticarUsuario(usuario, senha){

    let retorno=validarSenha(senha)
    if (retorno == true){
        alert("Acesso concedido para " + usuario)
    }

    else{
         alert("Senha muito curta para o usuário " + usuario)
    }
}
let usuario = prompt("Digite o usuario: ")
let senha = prompt("Digite sua senha: ")
autenticarUsuario(usuario,senha)