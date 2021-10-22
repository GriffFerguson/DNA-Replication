var textAssets = null;
var helpOverlay = document.getElementById('helpOverlay')

fetch('/resources/textAssets.json')
.then(response => {return response.json()})
.then(json => {textAssets = json; console.log(json)})

function showHelp(message:string) {
    helpOverlay.innerHTML = textAssets[message]
    helpOverlay.style.transform = 'translateY(6vh)'
}

function hideHelp() {
    helpOverlay.style.transform = 'translateY(110vh)'
}