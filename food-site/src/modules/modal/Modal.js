export default function ModalF() {
    // 1) кнопки открытия
    // 2) кнопки закрытия
    // 3) модальное окно (modal)
    // 4) overlay модалки

    class Modal {
        constructor(modalOpenButtons, modal, overlay) {
            this.modalOpenButtons = modalOpenButtons
            this.modal = modal
            this.overlay = overlay

            this.addListeners()
        }

        addListeners() {
            const modalOpenButtons = document.querySelectorAll(this.modalOpenButtons)
            const modal = document.querySelector(this.modal)
            const overlay = document.querySelector(this.overlay)

            modalOpenButtons.forEach((btn) => {
                btn.addEventListener('click', () => {
                    this.openModal(modal)
                })
            })

            modal.addEventListener('click', (event) => {
                const target = event.target

                if (target.getAttribute('data-close') === 'true' || target === overlay) {
                    this.closeModal(modal)
                }
            })
        }

        openModal(modal) {
            modal.classList.remove('hide')
            modal.classList.add('open')
            document.addEventListener(
                'keydown',
                (event) => {
                    this.escapeHandler(event, modal)
                }, {
                    once: true,
                }
            )
        }

        closeModal(modal) {
            modal.classList.remove('open')
            modal.classList.add('hide')
            setTimeout(() => {
                modal.classList.remove('hide')
            }, 250)
        }

        escapeHandler(event, modal) {
            const keyCode = event.keyCode
            if (event.code === 'Escape' || keyCode === 27 || keyCode === '27') {
                this.closeModal(modal)
            }
        }
    }
    const modal1 = new Modal('button[data-modal="true"]', '.modal', '.modal-overlay')
        // --------------
        // forms
        // собираем все формы
    const forms = document.querySelectorAll('form')
        // сообщения для вывода в tanksModal
    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо ! Скоро свяжемся',
        failure: 'Error',
    }

    // для каждой формы делаем функцию
    forms.forEach((item) => {
        bindpostData(item)
    })

    // XMLHTTPREQUEST JSON
    // function postData(form) {
    //     form.addEventListener('submit', (event) => {
    //         event.preventDefault()

    //         // сообщения пользователю
    //         const statusMessage = document.createElement('img')
    //         statusMessage.src = message.loading
    //         statusMessage.style.cssText = `
    //             display: block;
    //             margin: 0 auto;
    //         `
    //         form.append(statusMessage)

    //         const request = new XMLHttpRequest()
    //         request.open('POST', 'server.php')

    //         // всегда нужен name в input
    //         // заголовок не нужен ! при formData
    //         request.setRequestHeader('Content-type', 'application/json')
    //         const formData = new FormData(form)

    //         const object = {}
    //         formData.forEach((value, key) => {
    //             object[key] = value
    //         })
    //         const json = JSON.stringify(object)

    //         request.send(json)
    //         request.addEventListener('load', () => {
    //             if (request.status === 200) {
    //                 console.log(request.response)
    //                 showThanksModal(message.success)
    //                 form.reset()
    //                 statusMessage.remove()
    //             } else {
    //                 showThanksModal(message.failure)
    //             }
    //         })
    //     })
    // }

    // появление модалки после отправки формы
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal-window')
        prevModalDialog.classList.add('hide')

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal-window')
        thanksModal.innerHTML = `
            <div data-close="true" class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        `
        document.querySelector('.modal-overlay').append(thanksModal)

        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('open')
            prevModalDialog.classList.remove('hide')
            const modal = document.querySelector('.modal')
            modal1.closeModal(modal)
        }, 1000)
    }

    // ---------- пишем xmlhttprequet толкьо с помощью fetch
    // это полнсоть асинхронный код !
    // JSON
    // отправка данных на сервер постинг
    // просто выносим в отдельную функцию
    const postData = async(url, data) => {
        // await дожидается и потом выполняет код, но не блокирует код дальше
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })

        return await result.json()
    }

    // привязка постинка
    function bindpostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault()

            const statusMessage = document.createElement('img')
            statusMessage.src = message.loading
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `
            form.insertAdjacentElement('afterend', statusMessage)

            const formData = new FormData(form)
            const values = Object.fromEntries(formData.entries())
            console.log('values:', values)

            // const object = {}
            // formData.forEach(function(value, key) {
            //     object[key] = value
            // })
            // заменили на:
            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3030/requests', json)
                .then((data) => {
                    console.log(data)
                    showThanksModal(message.success)
                    statusMessage.remove()
                })
                .catch((error) => {
                    console.log(error)
                    showThanksModal(message.failure)
                })
                .finally(() => {
                    form.reset()
                })
        })
    }
    //npx json-server --watch db.json

    // --------- axios

    // ------------------
    // баннер
    function iniSetTimeout(time = 5) {
        time *= 1000
        const timerId = setTimeout(() => {
            const modal = document.querySelector('.modal')
            modal1.openModal(modal)
        }, time)
    }
    iniSetTimeout(50) // через сколько секунд вывести

    // показ модалки по достижению конца страницы
    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            const modal = document.querySelector('.modal')
            modal1.openModal(modal)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }
    window.addEventListener('scroll', showModalByScroll)
}