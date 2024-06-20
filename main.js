'use strict';

import headerMenu from './src/js/header';
import headerNav from './src/js/header-nav';
import { accordions } from './src/js/accordion';

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 1870) {
        //header menu accordions
        const headerAccordions = document.querySelectorAll(".menu__item.dropdown>.menu__link");
        accordions(headerAccordions, 0);
    }

    //header menu 
    const menuBtn = document.querySelector('.header__btn');
    headerMenu(menuBtn);

    //navigation
    headerNav();
})