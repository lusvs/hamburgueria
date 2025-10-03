function login() {
    let usuario = document.getElementById('txtUsuario').value;
    let senha = document.getElementById('txtSenha').value;
    let menasagem = document.getElementById('mensagem');

    if (usuario == 'user' && senha == '123') {
        menasagem.style.color = 'green';
        menasagem.innerText = 'Usuario Correto';

        setTimeout(() => {
            window.location.href = '../../../index.html';
        }, 500);
    }

    else if (usuario == 'admin' && senha =='123'){
        menasagem.style.color = 'green';
        menasagem.innerText = 'Usuario Correto';

        setTimeout(() => {
            window.location.href = '../../../index.html';
        }, 500);
    }

    else {
        menasagem.style.color = 'red';
        menasagem.innerText = 'Usuario/senha invalida';
    }
}