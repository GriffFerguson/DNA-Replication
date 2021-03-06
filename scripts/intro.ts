var introElems = {
    wrapper: document.getElementById('intro'),
    title: document.getElementById('gameTitle'),
    buttonWrapper: document.getElementById('introButtons'),
    buttons: {
        play: document.getElementById('playButton'),
        help: document.getElementById('introHelp'),
    },
}

function introEnter() {
    introElems.title.style.transform = 'translateY(6rem)'
    introElems.buttonWrapper.style.transform = 'translateY(50vh)'
}
function introExit() {
    introElems.title.style.transform = 'translateY(-10rem)'
    introElems.buttonWrapper.style.transform = 'translateY(130vh)'
}

introElems.buttons.help.addEventListener('click', e => {
    introExit()
    showHelp()
})

introElems.buttons.play.addEventListener('click', e => {
    introExit()
    setTimeout(() => {
        sessionStorage.setItem('phase', 'game')
        startGame()
    }, 2240)
})