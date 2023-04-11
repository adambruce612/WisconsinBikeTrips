const menuToggle = document.getElementById("hamburgerIcon");
let mobileLinks = document.querySelector("mobile-nav-items");

menuToggle.addEventListener('click', () => {
   mobileLinks.classList.toggle('active');
})