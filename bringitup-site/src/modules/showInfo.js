export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers)
    }

    init() {
        this.btns.forEach((btn) => {
            let flag = false
            btn.addEventListener('click', () => {
                btn.classList.add('active')
                const sibling = btn.closest('.module__info-show').nextElementSibling
                if (!flag) {
                    sibling.style.display = 'block'
                    sibling.classList.add('animated', 'fadeIn')
                    flag = true
                } else {
                    sibling.classList.add('fadeOut')
                    btn.classList.remove('active')
                    setTimeout(() => {
                        sibling.style.display = 'none'
                        sibling.classList.remove('animated', 'fadeIn', 'fadeOut')
                        flag = false
                    }, 500)
                }
            })
        })
    }
}