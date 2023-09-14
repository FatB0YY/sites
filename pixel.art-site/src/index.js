import 'core-js/stable'
import 'regenerator-runtime/runtime'

import './scss/index.scss'
import './babel'

import modals from './modules/modals'
import sliders from './modules/sliders'
import forms from './modules/forms'
import mask from './modules/mask'
// только русский язык для инпутов
// import checkTextInputs from './modules/checkTextInputs'
import showMoreStyles from './modules/showMoreStyles'
import calc from './modules/calc'
import filter from './modules/filter'
import pictureSize from './modules/pictureSize'
import accordion from './modules/accordion'
import burger from './modules/burger'
import anchor from './modules/anchor'
import drop from './modules/drop'
// swiper -----
import Swiper from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
// wow -------
import WOW from 'wowjs'

document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    new WOW.WOW().init()
    modals()
    sliders('.main-slider-item', 'vertical')
    forms()
    mask('[name="phone"]')
        // checkTextInputs('[name="name"]')
        // checkTextInputs('[name="message"]')
    showMoreStyles('.button-styles', '#styles .row')
    calc('#size', '#material', '#options', '.promocode', '.calc-price')
    filter()
    pictureSize('.sizes-block')
    accordion('.accordion-heading', '.accordion-block')
    burger('.burger-menu', '.burger')
    anchor()
    drop()
        // swiper -----
    SwiperCore.use([Navigation, Pagination])
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
})