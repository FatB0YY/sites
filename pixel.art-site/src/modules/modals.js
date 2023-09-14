const modals = () => {
    let btnPressed = false
    const header = document.querySelector('header')

    function bindModal(
        triggerSelector,
        modalSelector,
        closeSelector,
        closeClickOverlay = true,
        destroy = false
    ) {
        const trigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)
        const windows = document.querySelectorAll('[data-modal]')
        const scroll = calcScroll()

        trigger.forEach((item) => {
            item.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault()
                }

                btnPressed = true

                if (destroy) {
                    item.remove()
                }

                modal.classList.add('show')
                document.body.style.overflowY = 'hidden'
                document.body.style.marginRight = `${scroll}px`
                header.style.marginRight = `${scroll}px`

                document.addEventListener('keydown', (event) => {
                    escapeHandler(windows, modal, event)
                })
            })
        })

        close.addEventListener('click', () => {
            codeForCloseModal(modal, windows)
        })

        modal.addEventListener('click', (event) => {
            if (event.target === modal && closeClickOverlay) {
                codeForCloseModal(modal, windows)
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let opacity
            document.querySelectorAll('[data-modal]').forEach((item) => {
                if (getComputedStyle(item).opacity !== '0') {
                    opacity = '1'
                }
            })

            if (!opacity) {
                document.querySelector(selector).classList.add('show')
                document.body.style.overflow = 'hidden'
                let scroll = calcScroll()

                document.body.style.marginRight = `${scroll}px`
                header.style.marginRight = `${scroll}px`
            }
        }, time)
    }

    function escapeHandler(windows, modal, event) {
        const keyCode = event.keyCode
        if (event.code === 'Escape' || keyCode === 27 || keyCode === '27') {
            codeForCloseModal(modal, windows)
        }
    }

    function calcScroll() {
        const div = document.createElement('div')
        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflowY = 'scroll'
        div.style.visibility = 'hidden'

        document.body.appendChild(div)
        let scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()
        return scrollWidth
    }

    function codeForCloseModal(modal) {
        modal.classList.add('hide')

        setTimeout(() => {
            modal.classList.remove('show')
            document.body.style.overflowY = ''
            document.body.style.marginRight = `0px`
            header.style.marginRight = `0px`
        }, 300)
        setTimeout(() => {
            modal.classList.remove('hide')
        }, 350)
    }

    function showModalByScroll(selector) {
        window.addEventListener('scroll', () => {
            // поддержка старых браузеров
            let scrollHeight = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight
            )

            if (!btnPressed &&
                window.pageYOffset + document.documentElement.clientHeight >=
                scrollHeight
            ) {
                // click() типа мы кликнули и это нахуй гениально
                document.querySelector(selector).click()
                header.style.marginRight = `${scroll}px`
            }
        })
    }

    // ----------
    showModalByTime('.popup-consultation', 60000)
    showModalByScroll('.fixed-gift')
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
    bindModal(
        '.button-consultation',
        '.popup-consultation',
        '.popup-consultation .popup-close'
    )
    bindModal(
        '.fixed-gift',
        '.popup-gift',
        '.popup-gift .popup-close',
        true,
        true
    )
}
export default modals