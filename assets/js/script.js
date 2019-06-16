'use strict';
let imageIndex = 0;
document.addEventListener('DOMContentLoaded', init);

function init() {
    slideShow();
    //1000 = 1 seconde
    window.setInterval(slideShow, 5000);
}

function slideShow() {
    let randomNumber = 0;
    while (imageIndex === randomNumber) {
        randomNumber = Math.floor(Math.random() * imagesSlideShow.length);
    }
    imageIndex = randomNumber;
    let alt = imagesSlideShow[imageIndex].name;
    let img = `assets/slideShowImages/${imagesSlideShow[imageIndex].image}`;
    document.querySelector('#slideShow').innerHTML = `<img alt="${alt}" title="${alt}" src=${img} >`;

}