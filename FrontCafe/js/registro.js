document.addEventListener('DOMContentLoaded', () => {
    const registrarEmail = document.getElementById('registrarEmail');
    const registrarContraseña = document.getElementById('registrarContraseña');
    const confirmarContraseña = document.getElementById('confirmarContraseña');
    const registrarseBtn = document.getElementById('registrarseBtn');

    registrarseBtn.addEventListener('click', () => {
        const email = registrarEmail.value;
        const password = registrarContraseña.value;
        const confirmPassword = confirmarContraseña.value;

        let valid = true;

        if (!email) {
            valid = false;
            document.getElementById('email-error').innerText = 'El correo electrónico es obligatorio.';
        } else {
            document.getElementById('email-error').innerText = '';
        }

        if (!password) {
            valid = false;
            document.getElementById('password-error').innerText = 'La contraseña es obligatoria.';
        } else {
            document.getElementById('password-error').innerText = '';
        }

        if (password !== confirmPassword) {
            valid = false;
            document.getElementById('confirm-password-error').innerText = 'Las contraseñas no coinciden.';
        } else {
            document.getElementById('confirm-password-error').innerText = '';
        }

        if (valid) {
            fetch('https://api.example.com/register', { // URL de tu API de registro
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Registro exitoso');
                    // Redirigir al usuario a la página de inicio de sesión u otra página
                    window.location.href = 'sesion.html';
                } else {
                    alert('Error en el registro: ' + data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        }
    });
});
