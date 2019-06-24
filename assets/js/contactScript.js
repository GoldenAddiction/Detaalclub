"use Strict";
document.addEventListener('DOMContentLoaded', init);
function init() {
    document.querySelector('#sendMail').addEventListener('click', showMailForm);

}

function showMailForm() {
    document.querySelector('#mail').classList.remove('hidden');
    document.querySelector('#contactForms').classList.add('hidden');
}