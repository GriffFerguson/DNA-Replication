var textAssets = null;
var helpOverlay = document.getElementById('helpOverlay');
var helpContent = document.getElementById('helpContent');
fetch('../resources/textAssets.json')
    .then(function (response) { return response.json(); })
    .then(function (json) { textAssets = json; console.log(json); });
function showHelp(message) {
    helpContent.innerHTML = textAssets[message];
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
document.getElementById('exitHelp').addEventListener('click', function (e) {
    hideHelp();
});
//# sourceMappingURL=help.js.map