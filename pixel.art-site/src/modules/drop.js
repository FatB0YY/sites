const drop = () => {
    // * = срабатывают на эл который мы перетаскиваем
    // drag *
    // dragend *
    // dragenter - обьект над dropArea
    // dragexit *
    // dragleave - обьект за пределами dropArea
    // dragover - обьект зависает над dropArea
    // dragstart *
    // drop - отпустил кнопку мыши и наш обект упал в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');
    [('dragenter', 'dragleave', 'dragover', 'drop')].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, preventDefaults, false)
        })
    });
    [('dragenter', 'dragover')].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, () => highlight(input), false)
        })
    });
    [('dragleave', 'drop')].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, () => unhighlight(input), false)
        })
    })

    fileInputs.forEach((input) => {
        input.addEventListener('drop', (event) => {
            input.files = event.dataTransfer.files
            let dots
            const arr = input.files[0].name.split('.')

            arr[0].length > 6 ? (dots = '...') : (dots = '.')
            const name = arr[0].substring(0, 6) + dots + arr[1]
            input.previousElementSibling.textContent = name
        })
    })

    function preventDefaults(event) {
        event.preventDefault()
        event.stopPropagation()
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow'
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .7)'
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none'
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff'
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed'
        }
    }
}
export default drop