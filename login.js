let loginForm = document.getElementById('login-form');
let registerForm = document.getElementById('register-form');
let Indikator = document.getElementById("Indikator");

function daftar() {
    registerForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    Indikator.style.transform = "translateX(70px)";
}

function login() {
    registerForm.style.transform = "translateX(490px)";
    loginForm.style.transform = "translateX(490px)";
    Indikator.style.transform = "translateX(-80px)";
}