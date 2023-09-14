export default function TabsF() {
    // li табов
    // контент табов
    // ul табов
    // active class
    // li только без . (костыль)
    class Tabs {
        constructor(tabs, tabsContent, tabsParent, activeClass, withoutPoint) {
            this.tabs = tabs
            this.tabsContent = tabsContent
            this.tabsParen = tabsParent
            this.activeClass = activeClass
            this.withoutPoint = withoutPoint

            this.addListeners(activeClass, withoutPoint)
        }

        addListeners(activeClass, withoutPoint) {
            const tabs = document.querySelectorAll(this.tabs)
            const tabsContent = document.querySelectorAll(this.tabsContent)
            const tabsParent = document.querySelector(this.tabsParen)

            tabsParent.addEventListener('click', (event) => {
                const target = event.target
                if (target && target.classList.contains(withoutPoint)) {
                    tabs.forEach((item, idx) => {
                        if (target == item) {
                            this.hideTabContent(tabsContent, tabs, activeClass)
                            this.showTabContent(
                                idx,
                                tabsContent,
                                tabs,
                                activeClass
                            )
                        }
                    })
                }
            })
            this.hideTabContent(tabsContent, tabs, activeClass)
            this.showTabContent(0, tabsContent, tabs, activeClass)
        }

        hideTabContent(tabsContent, tabs, activeClass) {
            tabsContent.forEach((item) => {
                item.classList.add('hide')
                item.classList.remove('show', 'fade')
            })

            tabs.forEach((item) => {
                item.classList.remove(activeClass)
            })
        }

        showTabContent(i = 0, tabsContent, tabs, activeClass) {
            tabsContent[i].classList.add('show', 'fade')
            tabsContent[i].classList.remove('hide')
            tabs[i].classList.add(activeClass)
        }
    }
    const tab1 = new Tabs(
        '.tabheader__item',
        '.tabcontent',
        '.tabheader__items',
        'tabheader__item_active',
        'tabheader__item'
    )
}