// Verifica login
auth.onAuthStateChanged(user => {
    if(!user){ window.location.href="../index.html"; }
});

// Logout
function logout(){ auth.signOut().then(()=>{ window.location.href="../index.html"; }); }

// Menu mobile
function toggleMenu(){ document.querySelector('nav').classList.toggle('active'); }
