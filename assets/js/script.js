'use strict';
let imageIndex = 0;
document.addEventListener('DOMContentLoaded', init);

function init() {
    document.querySelector('#dots').addEventListener('click', clickedOnDot);
    //1000 = 1 seconde
    window.setInterval(slideShow, 3000);
    dots();
}

function dots() {
    for (let img of imagesSlideShow) {
        document.querySelector('#dots').innerHTML += `<span class="dot" title="${img.name}" id="dot-${img.id}"></span>`;
    }
}

function slideShow() {
    removeDotColor();
    if (imageIndex === 3){
        imageIndex = 0;
    } else {
        imageIndex +=1;
    }
    let alt = imagesSlideShow[imageIndex].name;
    let img = `assets/slideShowImages/${imagesSlideShow[imageIndex].image}`;
    document.querySelector('#slideShow').innerHTML = `<img alt="${alt}" title="${alt}" src=${img} >`;
    document.querySelector(`#dot-${imageIndex}`).classList.replace('dot', 'selectedDot');
}

function clickedOnDot(e) {
    if (e.target.className === "dot") {
        let clickedImg = e.target.id;
        let id = Number(clickedImg.substring(4, clickedImg.length));
        let img = `assets/slideShowImages/${imagesSlideShow[id].image}`;
        document.querySelector('#slideShow').innerHTML = `<img alt="${imagesSlideShow[id].name}" title="${imagesSlideShow[id].name}" src=${img} >`;
        removeDotColor();
        document.querySelector(`#dot-${id}`).classList.replace('dot', 'selectedDot');
        imageIndex = id;
    }
}

function removeDotColor() {
    for (let img of imagesSlideShow ) {
        document.querySelector(`#dot-${img.id}`).classList.replace('selectedDot', 'dot');
    }
}