export default function Cards() {
    class Card {
        constructor(img, title, description, price, alt, parent, ...classes) {
            this.img = img
            this.title = title
            this.description = description
            this.price = price
            this.alt = alt
            this.parent = parent
            this.classes = classes

            this.transfer = 27
            this.changeToUAH()

            this.render()
        }

        render() {
            const menuItems = document.querySelector(this.parent)

            const classesNames = this.classes.join(' ')

            menuItems.insertAdjacentHTML(
                'afterbegin',
                `
                <div class="menu__item ${classesNames}">
                    <img src="${this.img}" alt="${this.alt}" />
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total">
                            <span>${this.price}</span> грн/день
                        </div>
                    </div>
                </div>`
            )
        }

        changeToUAH() {
            this.price *= this.transfer
        }
    }

    const card1 = new Card(
        'img/tabs/vegy.jpg',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        '9',
        'vegy',
        '.menu__items',
        'testClass1',
        'testClass2'
    )
    const card2 = new Card(
        'img/tabs/post.jpg',
        'Меню "Постное"',
        'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        '14',
        'post',
        '.menu__items',
        'testClass2',
        'testClass3'
    )
    const card3 = new Card(
        'img/tabs/elite.jpg',
        'Меню "Премиум"',
        'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        '21',
        'elite',
        '.menu__items',
        'testClass4',
        'testClass5'
    )

    // карточки с сервера
    // const getResourcesCard = async(url) => {
    //     const result = await fetch(url)
    //         // обрабатываем вручную ошибки
    //     if (!result.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${result.status}`)
    //     }

    //     return await result.json()
    // }

    // getResourcesCard('http://localhost:3030/menu').then((data) => {
    //     data.forEach((obj) => {
    //         new Card(
    //             obj.img,
    //             obj.title,
    //             obj.descr,
    //             obj.price,
    //             obj.altimg,
    //             '.menu__items'
    //         )
    //     })
    // })

    // //теперь все через axios
    // axios.get('http://localhost:3030/menu').then((data) => {
    //     data.data.forEach((obj) => {
    //         new Card(
    //             obj.img,
    //             obj.title,
    //             obj.descr,
    //             obj.price,
    //             obj.altimg,
    //             '.menu__items'
    //         )
    //     })
    // })
}