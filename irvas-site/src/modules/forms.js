import checkNumInputs from './checkNumInputs'

const forms = (state) => {
    const form = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')

    checkNumInputs('input[name="user_phone"]')

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    }

    const postData = async(url, data) => {
        document.querySelector('.status').textContent = message.loading
        let res = await fetch(url, {
            method: 'POST',
            body: data,
        })

        return await res.text()
    }

    const clearInputs = () => {
        inputs.forEach((item) => {
            item.value = ''
        })
    }

    form.forEach((item) => {
        item.addEventListener('submit', (event) => {
            event.preventDefault()

            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            item.appendChild(statusMessage)

            let counter = 0
            for (let key in state) {
                if (Object.prototype.hasOwnProperty.call(state, key)) {
                    counter++
                }
            }
            if (counter != 5 && item.getAttribute('data-calc') === 'end') {
                statusMessage.textContent = 'Введите все пункты'
                setTimeout(() => {
                    statusMessage.remove()
                }, 3000)
            } else {
                const formData = new FormData(item)
                const values = Object.fromEntries(formData.entries())
                console.log('values:', values)

                if (item.getAttribute('data-calc') === 'end') {
                    for (let key in state) {
                        if (Object.prototype.hasOwnProperty.call(state, key)) {
                            formData.append(key, state[key])
                        }
                    }
                }

                postData('assets/server.php', formData)
                    .then(() => {
                        statusMessage.textContent = message.success
                    })
                    .catch(() => (statusMessage.textContent = message.failure))
                    .finally(() => {
                        clearInputs()
                        setTimeout(() => {
                            statusMessage.remove()
                        }, 3000)
                        setTimeout(() => {
                            const popupCalcEnd = document.querySelector('.popup_calc_end')
                            popupCalcEnd.style.display = 'none'
                            document.body.style.overflowY = ''
                            document.body.style.marginRight = `0px`
                        }, 4000)
                    })
            }
        })
    })
}

export default forms