let menu = document.querySelector('.nav-bar');
let hamburger = document.querySelector('.hamburger');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const services = document.querySelector("#services");
const project = document.querySelector("#project");


hamburger.addEventListener('click',()=>{
    menu.classList.toggle('active')
    hamburger.classList.toggle('active')
})

function remove(){
    hamburger.classList.remove('active');
    menu.classList.remove('active');
}

home.addEventListener('click', () => {
    remove();
})
about.addEventListener('click', () => {
    remove();
})

services.addEventListener('click', () => {
    remove();
})
project.addEventListener('click',()  => { 
    remove();
})
function scroll1() {
    let container1 = document.querySelector('#main_header');
    container1.scrollIntoView({ behavior: "smooth" });
}

function scroll2() {
    let container2 = document.querySelector('.about');
    container2.scrollIntoView({ behavior: "smooth" });
}

function scroll3() {
    let container3 = document.querySelector('.service');
    container3.scrollIntoView({ behavior: "smooth" });
}

function scroll4() {
    let container4 = document.querySelector('.project');
    container4.scrollIntoView({ behavior: "smooth" });
}
