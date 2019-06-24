'use strict';
let imageIndex = 0;
document.addEventListener('DOMContentLoaded', init);



function init() {
// let width = window.matchMedia("(max-width: 768px)");
// checkScreenSize(width);
// width.addListener(checkScreenSize);
//1000 = 1 seconde
    document.querySelector('#dots').addEventListener('click', clickedOnDot);
   /* window.setInterval(slideShow, 8000);*/
    dots();

}

function dots() {
    for (let img of imagesSlideShow) {
        document.querySelector('#dots').innerHTML += `<span class="dot" title="${img.name}" id="dot-${img.id}"></span>`;
    }
}

function slideShow() {
    removeDotColor();
    if (imageIndex === imagesSlideShow.length-1){
        imageIndex = 0;
    } else {
        imageIndex +=1;
    }
    let alt = imagesSlideShow[imageIndex].name;
    let img = `assets/slideShowImages/${imagesSlideShow[imageIndex].image}`;
    document.querySelector('#slideShow').innerHTML = `<img alt="${alt}" title="${alt}" src=${img} class="fade" >`;
    document.querySelector(`#dot-${imageIndex}`).classList.replace('dot', 'selectedDot');
}

function clickedOnDot(e) {
    if (e.target.className === "dot") {
        let clickedImg = e.target.id;
        let id = Number(clickedImg.substring(4, clickedImg.length));
        let img = `assets/slideShowImages/${imagesSlideShow[id].image}`;
        document.querySelector('#slideShow').innerHTML = `<img alt="${imagesSlideShow[id].name}" title="${imagesSlideShow[id].name}" src=${img} class="fade" >`;
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

