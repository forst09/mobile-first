'use strict';

import headerMenu from './src/js/header';
import { accordions } from './src/js/accordion';

document.addEventListener('DOMContentLoaded', () => {
    //header menu accordions
    const headerAccordions = document.querySelectorAll(".menu__item.dropdown>.menu__link");
    accordions(headerAccordions, 0);


    //header menu 
    const menuBtn = document.querySelector('.header__btn');
    headerMenu(menuBtn);
})