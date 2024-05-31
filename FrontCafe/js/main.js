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

enviarBtn.addEventListener("click", () => {
    const emailInput = document.getElementById("registrarEmail");
    const passwordInput = document.getElementById("registrarContraseña");
    
    if (emailInput.value === "") {
        mostrarError(emailInput, "Campo obligatorio");
    } else if (!validarCorreoElectronico(emailInput.value)) {
        mostrarError(emailInput, "Ingrese un mail valido")
    } else {
        mostrarError(emailInput, "");
    }
    
    if (passwordInput.value === "") {
        mostrarError(passwordInput, "Campo obligatorio");
    } else {
        mostrarError(passwordInput, "");
    }
});

