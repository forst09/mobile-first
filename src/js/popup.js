const openPopup = function () {
    document.querySelector('html').style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
}

const closePopup = function () {
    document.querySelector('html').style.overflowY = '';
    document.body.style.overflowY = '';
}

export { openPopup, closePopup };