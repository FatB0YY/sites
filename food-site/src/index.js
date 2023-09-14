import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './scss/index.scss'
import './babel'
import axios from 'axios'
import tabs from './modules/tabs/Tabs'
import timer from './modules/timer/Timer'
import calculate from './modules/calculate/calculate'
import slider from './modules/slider/Slider'
import cards from './modules/cards/Cards'
import modal from './modules/modal/Modal'
import anchor from './modules/anchor/anchor'

// --------------
window.addEventListener('DOMContentLoaded', () => {
    try {
        tabs()
    } catch (error) {
        console.log('error:', error.name)
        console.log('error:', error.message)
        console.log('error:', error.stack)
    }
    try {
        timer()
    } catch (error) {
        console.log(error)
    }
    try {
        calculate()
    } catch (error) {
        console.log(error)
    }
    try {
        slider()
    } catch (error) {
        console.log(error)
    }
    try {
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
    } catch (error) {
        console.log(error)
    }
    try {
        cards()
    } catch (error) {
        console.log(error)
    }
    try {
        modal()
    } catch (error) {
        console.log(error)
    }
    try {
        axios()
    } catch (error) {
        console.log(error)
    }
    try {
        anchor()
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finally!')
    }
})