document.addEventListener("DOMContentLoaded", function() {
    var cookieAlert = document.getElementById('cookieAlert');
    var acceptCookiesButton = document.getElementById('acceptCookies');

    // Check if the user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieAlert.style.display = 'block';
    }

    // Handle the accept button click
    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieAlert.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', (e) => {
        let valid = true;

        // Validar nombre
        if (name.value.trim() === '') {
            nameError.textContent = 'El nombre es obligatorio';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Validar correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'El correo electrónico no es válido';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Validar mensaje
        if (message.value.trim() === '') {
            messageError.textContent = 'El mensaje es obligatorio';
            valid = false;
        } else {
            messageError.textContent = '';
        }

        // Si no es válido, prevenir el envío del formulario
        if (!valid) {
            e.preventDefault();
        }
    });
});