"use Strict";
document.addEventListener('DOMContentLoaded', init);

function init() {
    loadInImages();
    document.querySelector('#galerij').addEventListener('click', clickImage);
    document.querySelector('main').addEventListener('click', clickclose);
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
    document.querySelector('#close').classList.remove('hidden');
}

function clickclose(e) {
    if (e.target.id === 'closeImage'){
        closeImage();
    }
}

function closeImage() {
    document.querySelector('#selectedImage').innerHTML = "";
    document.querySelector('#selectedImage').classList.add('hidden');
    document.querySelector('#close').classList.add('hidden');
}