const interval = setInterval(() => {
    const classHTML = '._3auIg'
    const audios = document.querySelector(classHTML)
    if (audios) {
        clearInterval(interval)

        const normal = createCustomButton()
        normal.innerHTML = "1x"
        normal.classList.add("change-speed")
        normal.classList.add("clicked")
        audios.appendChild(normal)

        const middle = createCustomButton()
        middle.innerHTML = "1.5x"
        middle.classList.add("change-speed")
        audios.appendChild(middle)

        const fast = createCustomButton()
        fast.innerHTML = "2x"
        fast.classList.add("change-speed")
        audios.appendChild(fast)

        const buttons = document.querySelectorAll("customButton.change-speed")

        normal.addEventListener("click", () => {
            checked(buttons, normal)
            setSpeed("normal")
        })
        middle.addEventListener("click", () => {
            checked(buttons, middle)
            setSpeed("middle")
        })
        fast.addEventListener("click", () => {
            checked(buttons, fast)
            setSpeed("fast")
        })
    }
}, 1000)

function createCustomButton() {
    return document.createElement('customButton')
}

function setSpeed(speed) {
    const audios = document.querySelectorAll("audio")

    const methods = {
        normal() {
            audios.forEach((n) => n.playbackRate = 1.0)
        },
        middle() {
            audios.forEach((n) => n.playbackRate = 1.5)
        },
        fast() {
            audios.forEach((n) => n.playbackRate = 2.0)
        },
    }
    methods[speed]()
}

function checked(buttons, button) {
    buttons.forEach((n) => n.classList.remove('clicked'))
    button.classList.add("clicked")
}