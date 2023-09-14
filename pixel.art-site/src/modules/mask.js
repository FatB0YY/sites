const mask = (selector) => {
    const setCursorPosition = (pos, el) => {
        el.focus()

        // Метод HTMLInputElement.setSelectionRange()
        // устанавливает начальное и конечное положение
        // выделения текста в элементе <input>.
        if (el.setSelectionRange) {
            el.setSelectionRange(pos, pos)
        } else if (el.createTextRange) {
            let range = el.createTextRange()

            range.collapse(true)
            range.moveEnd('character', pos)
            range.moveStart('character', pos)
            range.select()
        }
    }

    function createMask(event) {
        let matrix = '+7 (___) ___-__-__'
        let i = 0
        let def = matrix.replace(/\D/g, '')
        let val = this.value.replace(/\D/g, '')

        if (def.length >= val.length) {
            val = def
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ?
                val.charAt(i++) :
                i >= val.length ?
                '' :
                a
        })

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = ''
            }
        } else {
            setCursorPosition(this.value.length, this)
        }
    }

    let inputs = document.querySelectorAll(selector)
    inputs.forEach((input) => {
        input.addEventListener('input', createMask)
        input.addEventListener('focus', createMask)
        input.addEventListener('blur', createMask)
        input.addEventListener('keydown', createMask)
    })
}
export default mask