import checkNumInputs from './checkNumInputs'

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img')
    const windowWidth = document.querySelectorAll('#width')
    const windowHeight = document.querySelectorAll('#height')
    const windowType = document.querySelectorAll('#view_type')
    const windowProfile = document.querySelectorAll('.checkbox')

    state.form = 0
    state.type = 'tree'

    checkNumInputs('#width')
    checkNumInputs('#height')

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, idx) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = idx
                        break
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            idx === 0 ?
                                (state[prop] = 'Холодное') :
                                (state[prop] = 'Теплое')

                            elem.forEach((checkbox, jdx) => {
                                checkbox.checked = false
                                if (idx == jdx) {
                                    checkbox.checked = true
                                }
                            })
                        } else {
                            state[prop] = item.value
                        }
                        break
                    case 'SELECT':
                        state[prop] = item.value
                        break
                }
            })
        })
    }

    bindActionToElems('click', windowForm, 'form')
    bindActionToElems('input', windowHeight, 'height')
    bindActionToElems('input', windowWidth, 'width')
    bindActionToElems('change', windowType, 'type')
    bindActionToElems('change', windowProfile, 'profile')
}
export default changeModalState