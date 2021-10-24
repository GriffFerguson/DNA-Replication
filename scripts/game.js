var gameElems = {
    wrapper: document.getElementById('game'),
    timer: document.getElementById('timer')
};
function startGame() {
    gameElems.wrapper.style.display = 'block';
    setTimeout(function () {
        gameElems.wrapper.style.opacity = '1';
    }, 5);
}
//# sourceMappingURL=game.js.map