
let hamburger = document.getElementById('menu-icon');
let show = document.querySelector('.Hanberger')
let nav = document.querySelector('.mob-nav')

let count = 1;

hamburger.addEventListener('click', function () {
    if (count === 1) {
        show.classList.add('display-block');
        nav.classList.add('position-menu')
        count = 2;
    }
    else {
        show.classList.remove('display-block')
        nav.classList.remove('position-menu')
        count = 1;
    }
})