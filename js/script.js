import  calculator from './modules/calculator';
import  cards from './modules/cards';
import  form from './modules/form';
import  modal from './modules/modal';
import  slider from './modules/slider';
import  tabs from './modules/tabs';
import  timer from './modules/timer';
import {openModal} from './modules/modal';
window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(()=>openModal('.modal', modalTimerId), 300000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-01-01');
    cards();
    calculator();
    form('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.offer__slide'
    });
});
