export default function slider() {
    const slidesWrapper = document.querySelector('.offer__slider-wrapper')
    const slides = slidesWrapper.querySelectorAll('.offer__slide')
    const prev = document.querySelector('.offer__slider-prev')
    const next = document.querySelector('.offer__slider-next')
    const total = document.querySelector('#total')
    const current = document.querySelector('#current')
    const slidesField = slidesWrapper.querySelector('.offer__slider-inner')
    const width = window.getComputedStyle(slidesWrapper).width
    let slideIndex = 1
    let offset = 0

    // ---------- карусель
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${slideIndex}`
    } else {
        total.textContent = slides.length
        current.textContent = slideIndex
    }

    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = '0.5s all'

    slidesWrapper.style.overflow = 'hidden'

    slides.forEach((slide) => {
        slide.style.width = width
    })

    next.addEventListener('click', () => {
        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0
        } else {
            offset += +width.replace(/\D/g, '')
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == slides.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }

        // ----- dots
        dots.forEach((dot) => (dot.style.opacity = '.5'))
        dots[slideIndex - 1].style.opacity = '1'
    })

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1)
        } else {
            offset -= +width.replace(/\D/g, '')
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == 1) {
            slideIndex = slides.length
        } else {
            slideIndex--
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }

        // ----- dots
        dots.forEach((dot) => (dot.style.opacity = '.5'))
        dots[slideIndex - 1].style.opacity = '1'
    })

    // ----------- 2 вариант не карусель

    //     showSlides(slideIndex)

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`
    // } else {
    //     total.textContent = slides.length
    // }

    //     function showSlides(n) {
    //         if (n > slides.length) {
    //             slideIndex = 1
    //         }
    //         if (n < 1) {
    //             slideIndex = slides.length
    //         }

    //         slides.forEach((item) => (item.style.display = 'none'))

    //         slides[slideIndex - 1].style.display = 'block'

    //         if (slides.length < 10) {
    //             current.textContent = `0${slideIndex}`
    //         } else {
    //             current.textContent = slideIndex
    //         }
    //     }

    //     function plusSlides(n) {
    //         showSlides((slideIndex += n))
    //     }

    //     prev.addEventListener('click', () => {
    //         plusSlides(-1)
    //     })
    //     next.addEventListener('click', () => {
    //         plusSlides(+1)
    //     })

    // ------------- NavSlide

    const slider = document.querySelector('.offer__slider')
    slider.style.position = 'relative'
    const indicators = document.createElement('ol')
    const dots = []
    indicators.classList.add('carousel-indicators')
    slider.append(indicators)

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to', i + 1)
        dot.classList.add('dot')
        if (i == 0) {
            dot.style.opacity = '1'
        }
        indicators.append(dot)
        dots.push(dot)
    }

    dots.forEach((dot) => {
        dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to')
            slideIndex = slideTo
            offset = +width.replace(/\D/g, '') * (slideTo - 1)
            slidesField.style.transform = `translateX(-${offset}px)`

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`
            } else {
                current.textContent = slideIndex
            }

            // ----- dots
            dots.forEach((dot) => (dot.style.opacity = '.5'))
            dots[slideIndex - 1].style.opacity = '1'
        })
    })
}

// с регулярками можно сделать не так
// +width.slice(0, width.length - 2)
// а вот так
// +width.replace(/\D/g, '')
// удаляем все не числа