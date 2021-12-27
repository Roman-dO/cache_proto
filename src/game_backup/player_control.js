let player;
// Система управления именно игроками
let player_interact = (target) => {
    player.give_item(target);
};

prev_handlers = {
    'press': e => { player.pressKey(e.code) },
    'up':    e => { player.upKey(e.code)    }
}

// Передача управления игроку над Entity
function RegisterPlayerEntity(pl) {
    if (player) UnRegisterPlayerEntity(player);
    player = pl;
}
function UnRegisterPlayerEntity(pl) {
    pl.clearPressed();
    console.log('Очищенно');
}

document.addEventListener('keypress', prev_handlers.press);
document.addEventListener('keyup',    prev_handlers.up);
