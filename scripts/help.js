var textAssets = null;
var helpOverlay = document.getElementById('helpOverlay');
fetch('/resources/textAssets.json')
    .then(function (response) { return response.json(); })
    .then(function (json) { textAssets = json; console.log(json); });
function showHelp(message) {
    helpOverlay.innerHTML = textAssets[message];
    helpOverlay.style.transform = 'translateY(6vh)';
}
function hideHelp() {
    helpOverlay.style.transform = 'translateY(110vh)';
}
//# sourceMappingURL=help.js.map