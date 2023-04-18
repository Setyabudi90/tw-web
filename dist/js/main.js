const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function() {
   hamburger.classList.toggle('hamburger-active')
   menu.classList.toggle('hidden')
}); 

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixed = header.offsetTop;

    if(window.pageYOffset > fixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.target != menu) {
        hamburger.classList.remove('hamburger-active');
        menu.classList.add('hidden');
    }
});

