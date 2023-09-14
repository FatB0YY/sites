export default function anchor() {
    document.querySelectorAll('a.anchor').forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault()

            const href = this.getAttribute('href').substring(1)

            const scrollTarget = document.getElementById(href)

            const topOffset = 0 //отступ сверху

            const elementPosition = scrollTarget.getBoundingClientRect().top
            const OffsetPosition = elementPosition - topOffset

            window.scrollBy({
                top: OffsetPosition,
                behavior: 'smooth',
            })
        })
    })
}