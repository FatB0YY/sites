const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector)
    const burgerElem = document.querySelector(burgerSelector)

    menuElem.classList.remove('active')

    burgerElem.addEventListener('click', () => {
        if (!menuElem.classList.contains('active')) {
            menuElem.classList.add('active')
        } else {
            menuElem.classList.remove('active')
        }
    })
}
export default burger