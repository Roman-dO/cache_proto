
Entity.on_click = (target) => {
    RegisterPlayerEntity(target);
}
function onload() {
    RegisterPlayerEntity(new Entity(50, 50));
    new Entity(5, 100);
    new Entity(500, 100);
    new Entity(550, 100);
    new Entity(660, 100);
}


/*document.addEventListener('keypress', e => {
    player.pressKey(e.code);
});
document.addEventListener('keyup', e => {
    player.upKey(e.code);
});*/


