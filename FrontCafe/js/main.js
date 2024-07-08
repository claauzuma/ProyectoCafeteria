const formulario = document.getElementById("formularioRegistro");

function validarCorreoElectronico(correo) {
    var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
}

const mostrarError = (input, mensaje) => {
    const divPadre = input.parentNode;
    const errorText = divPadre.querySelector('.error-text');
    errorText.innerText = mensaje;
}

const enviarBtn = document.getElementById("enviarBtn");
const registrarseBtn = document.getElementById("registrarseBtn");

const emailInput = document.getElementById("registrarEmail");
const passwordInput = document.getElementById("registrarContraseña");

emailInput.addEventListener("input", () => {
    if (validarCorreoElectronico(emailInput.value)) {
        mostrarError(emailInput, "");
    }
});

passwordInput.addEventListener("input", () => {
    if (passwordInput.value != "") {
        mostrarError(passwordInput, "");
    }
});

enviarBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let isValid = true;
    
    if (emailInput.value === "") {
        mostrarError(emailInput, "Campo obligatorio");
        isValid = false;
    } else if (!validarCorreoElectronico(emailInput.value)) {
        mostrarError(emailInput, "Ingrese un mail valido");
        isValid = false;
    } else {
        mostrarError(emailInput, "");
    }
    
    if (passwordInput.value === "") {
        mostrarError(passwordInput, "Campo obligatorio");
        isValid = false;
    } else {
        mostrarError(passwordInput, "");
    }

    if (isValid) {
        //Enviar form al back
    }

});

registrarseBtn.addEventListener("click", () => {
    window.location.href = "./registro.html";
});

