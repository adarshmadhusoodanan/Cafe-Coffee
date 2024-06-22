
//humburger bar

let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu').onclick = () =>{
    navbar.classList.add('active');

}
document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');

}



// mousemove home img

document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')  

        const x =(window.innerWidth - e.pageX*speed)/120
        const y =(window.innerWidth - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`


      })
}



// landing motions

gsap.from('.logo',{opacity: 0, duration: 1, delay: 2, y:10})
gsap.from('.navbar .nav_item',{opacity: 0, duration: 1, delay: 2.1, y:30, stagger: 0.2})

gsap.from('.title',{opacity: 0, duration: 1, delay: 1.6, y:30})
gsap.from('.description',{opacity: 0, duration: 1, delay: 1.8, y:30})
gsap.from('.btn',{opacity: 0, duration: 1, delay: 2.1, y:30})
gsap.from('.image',{opacity: 0, duration: 1, delay: 2.3, y:30})
gsap.from('.body .menu',{opacity: 0, duration: 1, delay: 1.8, y:30})





// scrolling animation

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 60) {

            // changing bg color when scroll
            header.style.backgroundColor = "#a8692f";

        

        } else {
            header.style.backgroundColor= "";
            
        }
    
    });


});

document.addEventListener("DOMContentLoaded", function() {
    const about = document.querySelector(".about");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 60) {

            // changing bg color when scroll
            header.style.backgroundColor = "#a8692f";

        

        } else {
            header.style.backgroundColor= "";
            
        }
    
    });


});

