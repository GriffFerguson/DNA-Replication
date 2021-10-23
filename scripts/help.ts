var textAssets = null;
var helpOverlay = document.getElementById('helpOverlay')

fetch('/resources/textAssets.json')
.then(response => {return response.json()})
.then(json => {textAssets = json; console.log(json)})

function showHelp(message:string) {
    helpOverlay.innerHTML = textAssets[message]
    helpOverlay.style.display = 'block'
    setTimeout(() => {
        helpOverlay.style.transform = 'translateY(0)'
    }, 2)
}

function hideHelp() {
    introEnter()
    window.scrollTo(0,0)
    helpOverlay.style.transform = 'translateY(110vh)'
    setTimeout(() => {
        helpOverlay.style.display = 'none'
    }, 1510)
}