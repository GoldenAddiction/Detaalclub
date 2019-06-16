'use strict';
let imageIndex = 0;
document.addEventListener('DOMContentLoaded', init);

function init() {
    dots();
    slideShow();
    document.querySelector('#dots').addEventListener('click', clickedOnDot);
    //1000 = 1 seconde
    window.setInterval(slideShow, 8000);
}

function dots() {
    for (let img of imagesSlideShow) {
        document.querySelector('#dots').innerHTML += `<span class="dot" title="${img.name}" id="${img.id}"></span>`;
    }
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

function clickedOnDot(e) {
    //TODO Kleur van de dots veranderen als het die foto is
    if (e.target.className === "dot"){
        let clickedImg = e.target.id;
        let img = `assets/slideShowImages/${imagesSlideShow[clickedImg].image}`;
        document.querySelector('#slideShow').innerHTML = `<img alt="${imagesSlideShow[clickedImg].name}" title="${imagesSlideShow[clickedImg].name}" src=${img} >`;
    }
}