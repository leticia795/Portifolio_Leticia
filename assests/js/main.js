/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE LINK =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: true
});

sr.reveal('.home__data',{}); 
sr.reveal('.home__img',{delay: 200}); 
sr.reveal('.about__img',{});
sr.reveal('.about__text_container',{delay: 200}); 
sr.reveal('.skills__data',{interval: 100}); 
sr.reveal('.experience',{});
sr.reveal('.career',{});
sr.reveal('.work__img',{interval: 200}); 
sr.reveal('.volunteering',{});
sr.reveal('.contact__form',{delay: 200});
