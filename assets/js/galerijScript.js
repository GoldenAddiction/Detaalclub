"use Strict";
document.addEventListener('DOMContentLoaded', init);

function init() {
    loadInImages();
    document.querySelector('#galerij').addEventListener('click', clickImage);
    document.querySelector('#selectedImage').addEventListener('click', clickclose);
}

function loadInImages() {
    for (let image of imagesSlideShow) {
        let alt = image.name;
        let img = `assets/slideShowImages/${image.image}`;
        document.querySelector('#galerij').innerHTML += `<img alt="${alt}" title="${alt}" src=${img}>`;
    }
}

function clickImage(e) {
    if (e.target.localName === 'img'){
        showImage(e);
    }
}

function showImage(e) {
    document.querySelector('#selectedImage').innerHTML += e.target.outerHTML;
    document.querySelector('#selectedImage').classList.remove('hidden');
}

function clickclose(e) {
    if (e.target.alt === 'close'){
        closeImage();
    }
}

function closeImage() {
    document.querySelector('#selectedImage').innerHTML = "<div class='close' id='close'><img src='images/close.svg' alt='close' title='close'></div>";
    document.querySelector('#selectedImage').classList.add('hidden');
}