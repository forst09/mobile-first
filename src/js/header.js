import { openPopup, closePopup } from "./popup";

//бургер
function headerMenu(menuBtn) {
    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            this.closest('.header').classList.toggle('burger-open');
            if (this.classList.contains('active')) {
                if (window.innerWidth > 1024) {
                    console.log(bodyScrollBar);
                    bodyScrollBar.updatePluginOptions('modal', { open: true });
                    document.querySelectorAll('.scrollbar-track').forEach(item => { item.classList.remove('show') });
                    document.querySelector('.header:not(.header-nav)').style.zIndex = '23';
                }
                else {
                    openPopup();
                }
                document.querySelector('.header__menu-wrapper').classList.add('active');
            }
            else {
                if (window.innerWidth > 1024) {
                    bodyScrollBar.updatePluginOptions('modal', { open: false });
                    document.querySelectorAll('.scrollbar-track').forEach(item => { item.classList.add('show') });
                    document.querySelector('.header:not(.header-nav)').style.zIndex = '';
                }
                else {
                    closePopup();
                }
                document.querySelector('.header__menu-wrapper').classList.remove('active');
            }
        });
    };
}

export default headerMenu;