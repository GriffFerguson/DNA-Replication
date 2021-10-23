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
    introElems.title.style.transform = 'translateY(-5rem)'
    introElems.buttonWrapper.style.transform = 'translateY(110vh)'
}

introElems.buttons.help.addEventListener('click', e => {
    introExit()
    showHelp('instructions')
})