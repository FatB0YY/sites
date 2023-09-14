export default class DownLoad {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers)
        this.path = 'assets/img/mainbg.jpg'
    }

    init() {
        this.btns.forEach((btn) => {
            // здесь можно определить какой именно фоайл, через data-attribute
            btn.addEventListener('click', (event) => {
                event.preventDefault()
                event.stopPropagation()
                this.downloadItem(this.path)
            })
        })
    }

    downloadItem(path) {
        const link = document.createElement('a')
        link.setAttribute('href', path)
        link.setAttribute('download', 'nice__picture')
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
}