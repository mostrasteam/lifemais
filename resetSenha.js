function enviar() {
    document.getElementById('recovery-form').addEventListener('submit', function (e) {
        e.preventDefault();

        var email = document.getElementById('email').value;
        var isEmailRegistered = checkEmailInDatabase(email);
        var errorMessage = document.getElementById('error-message');

        if (isEmailRegistered) {
            window.location.href = 'codigo.html'
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
        }
    });

    function checkEmailInDatabase(email) {
        if (email == "manuela@gmail.com") {
            return true;
        }
    }
}

function verificar() {
    document.getElementById('recovery-form').addEventListener('submit', function (e) {
        e.preventDefault();

        var text = document.getElementById('text').value;
        var isEmailRegistered = checkEmailInDatabase(text);
        var errorMessage = document.getElementById('error-message');

        if (isEmailRegistered) {
            window.location.href = 'redefinir.html'
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
        }
    });

    function checkEmailInDatabase(text) {
        if (text == 938501) {
            return true;
        }
    }
}

function senhaaberta() {
    var senhaInput = document.getElementById("senha");
    var olhoIcon = document.getElementById("olho");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        olhoIcon.classList.remove("bi-eye-fill");
        olhoIcon.classList.add("bi-eye-slash-fill");
    } else {
        senhaInput.type = "password";
        olhoIcon.classList.remove("bi-eye-slash-fill");
        olhoIcon.classList.add("bi-eye-fill");
    }
}

function confirmaraberto() {
    var confirmSenhaInput = document.getElementById("confirmSenha");
    var olhoIcon = document.getElementById("eyes");

    if (confirmSenhaInput.type === "password") {
        confirmSenhaInput.type = "text";
        olhoIcon.classList.remove("bi-eye-fill");
        olhoIcon.classList.add("bi-eye-slash-fill");
    } else {
        confirmSenhaInput.type = "password";
        olhoIcon.classList.remove("bi-eye-slash-fill");
        olhoIcon.classList.add("bi-eye-fill");
    }
}

function cadastrar() {
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;
    const error1 = document.getElementById('error-message1');
    const error2 = document.getElementById('error-message2');

    if (senha.length < 6) {
        error1.style.display = 'block';
        error2.style.display = 'none';
    } else if (senha !== confirmSenha) {
        error2.style.display = 'block';
        error1.style.display = 'none';
    } else {
        window.location.href = 'login.html'
    }
}
