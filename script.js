'use strict';
let index = 0;
slideShow(index);

function plusSlides(n) {
    slideShow(index += n);
};

function currentSlide(n) {
    slideShow(index = n);
};

function slideShow(n) {
    let i;
    let img = document.querySelectorAll("img");
    let dots = document.querySelectorAll(".dots");
    if (n > 3) {
        index = 0;
    }
    if (n < 0) {
        index = 3;
    }
    for (i = 0; i < img.length; i++) {
        img[i].classList.add("img");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#b0b0b0";
    }
    img[index].classList.remove('img');
    dots[index].style.background = "#686868";
};