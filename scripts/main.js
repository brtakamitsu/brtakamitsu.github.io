// Import Firebase
// <script src="scripts/firebase.js"></script> já no HTML

function loginFirebase() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const msgErro = document.getElementById("msgErro");

    auth.signInWithEmailAndPassword(email, senha)
        .then(() => { window.location.href = "pages/pagina-restrita.html"; })
        .catch(error => { msgErro.textContent = error.message; });
}

// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('menu');
menuToggle.addEventListener('click', () => { nav.classList.toggle('show'); });
