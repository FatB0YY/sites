const anchor = () => {
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

    const pageup = document.querySelector('.pageup')
    pageup.style.display = 'none'
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            pageup.style.display = 'block'
            pageup.classList.add('animated', 'fadeIn')
            pageup.classList.remove('fadeOut')
        } else {
            if (pageup.classList.contains('fadeIn')) {
                pageup.classList.add('fadeOut')
                pageup.classList.remove('fadeIn')
            }
        }
    })
}
export default anchor