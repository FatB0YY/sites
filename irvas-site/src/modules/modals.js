const modals = () => {
    function bindModal(
        triggerSelector,
        modalSelector,
        closeSelector,
        closeClickOverlay = true
    ) {
        const trigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)
        const windows = document.querySelectorAll('[data-modal="true"]')
        const scroll = calcScroll()

        trigger.forEach((item, idx) => {
            item.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault()
                }

                if (!modal.classList.contains('calc')) {
                    modal.classList.add('show')
                } else {
                    windows.forEach((modal) => {
                        if (modal.classList.contains('calc')) {
                            modal.style.display = 'none'
                        }
                    })
                    modal.style.display = 'block'
                }

                document.body.style.overflowY = 'hidden'
                document.body.style.marginRight = `${scroll}px`

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
            document.querySelector(selector).style.display = 'block'
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
        const scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()
        return scrollWidth
    }

    function codeForCloseModal(modal, windows) {
        if (!modal.classList.contains('calc')) {
            modal.classList.add('hide')
        } else {
            windows.forEach((modal) => {
                if (modal.classList.contains('calc')) {
                    modal.style.display = 'none'
                }
            })
            modal.style.display = 'none'
        }
        setTimeout(() => {
            modal.classList.remove('show')
            document.body.style.overflowY = ''
            document.body.style.marginRight = `0px`
        }, 300)
        setTimeout(() => {
            modal.classList.remove('hide')
        }, 350)
    }

    showModalByTime('.popup', 60000)

    // ----------

    bindModal(
        '.popup_engineer_btn',
        '.popup_engineer',
        '.popup_engineer .popup_close'
    )
    bindModal('.phone_link', '.popup', '.popup_close')
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
    bindModal(
        '.popup_calc_button',
        '.popup_calc_profile',
        '.popup_calc_profile_close',
        false
    )
    bindModal(
        '.popup_calc_profile_button',
        '.popup_calc_end',
        '.popup_calc_end_close',
        false
    )
}
export default modals