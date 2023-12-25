function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector)
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' })
    }
}

const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

link1.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('.header')
})

link2.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('.header', 1)
})

link3.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('.column')
})


function ir() {
    window.location.href = "./Pages/form-system.html"
};

function contactFrom() {
  window.location.href = "./Pages/form.html"
}

function getstarted() {
  window.location.href = './Pages/getStarted.html'
}

function listair() {
  window.location.href = 'https://aprendendo-react.bigbig5.repl.co/'
}

function agendair() {
  window.location.href = 'https://chess-game.bigbig5.repl.co'
}

function climair() {
  window.location.href = 'https://aplicativo-de-tempo.bigbig5.repl.co'
}

function codignir() {
  window.location.href = 'https://coding-editor-live.bigbig5.repl.co'
}