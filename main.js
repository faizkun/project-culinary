// Cara header berubah warna

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

//Membuat Navigation Close
navMenu.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")



})