const navBtn = document.querySelector('.nav-button')
const mobileNav = document.querySelector('.mobile-nav')
const body = document.body;

navBtn.addEventListener('click', function(){
    mobileNav.classList.toggle('mobile-nav-active') 
    navBtn.classList.toggle('nav-button-close')
    body.classList.toggle('no-scroll')
})