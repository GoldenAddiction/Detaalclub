'use strict';



document.addEventListener('DOMContentLoaded', init);

function init() {
    slideShow();
    window.setInterval(slideShow, 8000);
}

function slideShow() {
    document.querySelector('#slideShown').innerHTML = `<img src="assets/images/img_lights_wide.jpg">`;
}

/*"use strict";

let pawnIndex = 0;

document.addEventListener("DOMContentLoaded", init);

function init() {
    randomTip();
    window.setInterval(randomTip, 8000);
    fetchMatchMakingStatus();
    document.querySelector("#readyButton").addEventListener("click",playerReady);
}

function randomTip() {
    let randomNumber = 0;
    while (pawnIndex === randomNumber) {
        randomNumber = Math.floor(Math.random() * pawns.length);
    }
    pawnIndex = randomNumber;
    let nedName = pawns[pawnIndex].nedName;
    let img = `assets/image/${pawns[pawnIndex].image}`;
    let tip = pawns[pawnIndex].tip;
    document.querySelector('#randomTip').innerHTML = `<img alt="${nedName}" title="${nedName}" src=${img} ><p>${tip}</p>`;
}*/