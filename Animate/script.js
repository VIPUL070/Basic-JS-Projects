"use strict";

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

let img = document.querySelector('#fixed-image')
let element = document.querySelector('#elem-container')
element.addEventListener("mouseenter", (e) => {
    img.style.display = 'block'
})

element.addEventListener("mouseleave", (e) => {
    img.style.display = 'none'
})

let elems = document.querySelectorAll('.elem')
elems.forEach(e => {
    e.addEventListener('mouseenter', (event) => {
        let image = e.getAttribute("data-img")
        img.style.backgroundImage = `url(${image})`
    })
});

function menuAnimation() {

    var menu = document.querySelector("nav h4")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation(){
    let loader = document.querySelector('#loader')
    setInterval(() => {
        loader.style.top = "-100%";
    }, 4000);
}

// menuAnimation()
loaderAnimation()