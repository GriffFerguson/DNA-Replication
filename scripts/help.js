var textAssets = null;
var helpOverlay = document.getElementById('helpOverlay');
fetch('/resources/textAssets.json')
    .then(function (response) { return response.json(); })
    .then(function (json) { textAssets = json; console.log(json); });
function showHelp(message) {
    helpOverlay.innerHTML = textAssets[message];
    helpOverlay.style.display = 'block';
    setTimeout(function () {
        helpOverlay.style.transform = 'translateY(0)';
    }, 2);
}
function hideHelp() {
    introEnter();
    window.scrollTo(0, 0);
    helpOverlay.style.transform = 'translateY(110vh)';
    setTimeout(function () {
        helpOverlay.style.display = 'none';
    }, 1510);
}
//# sourceMappingURL=help.js.map