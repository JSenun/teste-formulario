function validar(){
    var nome = document.getElementById('form-nome').value;
    var email = document.getElementById('form-email').value;
    var senha = document.getElementById('form-senha1').value;
    var senha2 = document.getElementById('form-senha2').value;

    if(nome.length < 3){
        var nomeInvalido = document.querySelector('#nome-invalido');
        nomeInvalido.innerHTML = "O campo precisa de no mínimo 5 caracteres.";

    }
    if (email.length < 1) {
        var emailInvalido = document.querySelector('#email-invalido');
        emailInvalido.innerHTML = "Campo Obrigatório"
    }

    if (senha.length < 1) {
        var senhaInvalida = document.querySelector('#senha1-invalida');
        senhaInvalida.innerHTML = "Campo Obrigatório"
    }

    if(senha != senha2){
        var senhaInvalida = document.querySelector('#senha1-invalida');
        senhaInvalida.innerHTML = "Senhas não conferem."
        
    }
}