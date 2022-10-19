const menuToggle = document.getElementById("hamburgerIcon");
let mobileLinks = document.getElementById("mobile-nav-items");

menuToggle.addEventListener('click', () => {
   mobileLinks.classList.toggle('active');
   console.log(mobileLinks.classList);
})