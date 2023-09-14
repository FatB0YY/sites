const timer = (time) => {
    const deadline = time

    // разница между deadline и нашем текущем времени
    function getTimeRemaining(endtime = 0) {
        const t = Date.parse(endtime) - Date.parse(new Date())
        const days = Math.floor(t / (1000 * 60 * 60 * 24))
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((t / 1000 / 60) % 60)
        const seconds = Math.floor((t / 1000) % 60)

        return {
            total: t,
            days,
            hours,
            minutes,
            seconds,
        }
    }

    // добавление 0
    function getZero(num = 0) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    // установка времени
    function setClock(selector, endtime = 0) {
        const timer = document.querySelector(selector)
        const days = timer.querySelector('#days')
        const hours = timer.querySelector('#hours')
        const minutes = timer.querySelector('#minutes')
        const seconds = timer.querySelector('#seconds')
        const timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock() {
            const t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }
    setClock('.container1', deadline)
}
export default timer