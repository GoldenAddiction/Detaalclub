"use Strict";
document.addEventListener('DOMContentLoaded', init);
function init() {
    document.querySelector('#menu').addEventListener('click', showDropDownMenu);

}

function showDropDownMenu(e) {
    e.preventDefault();
    if (document.querySelector('#dropDown').classList.contains("hidden") ){
        document.querySelector('#dropDown').classList.replace("hidden", "none");
    } else {
        document.querySelector('#dropDown').classList.replace("none", "hidden");
    }
}

