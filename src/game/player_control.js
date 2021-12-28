let player;

let pressed = {
    KeyD: false,
    KeyA: false,
    KeyS: false,
    KeyW: false,
};

// Система управления именно игроками
let player_interact = (target) => {
    player.give_item(target);
};

prev_handlers = {
    'press': e => { player.pressKey(e.code); pressed[e.code] = true  },
    'up':    e => { player.upKey(e.code);    pressed[e.code] = false },
}

// Передача управления игроку над Entity
function RegisterPlayerEntity(pl) {
    if (player) UnRegisterPlayerEntity(player);
    player = pl;

    if (pressed)
        for (let key in pressed) {
            if (pressed[key]) player.pressKey(key);
            else              player.upKey(key);
        }

    if (player.modules.drawing)
        player.modules.drawing.dom.classList.add('player');
}
function UnRegisterPlayerEntity(pl) {
    pl.clearPressed();

    if (player.modules.drawing)
        player.modules.drawing.dom.classList.remove('player');
}

document.addEventListener('keypress', prev_handlers.press);
document.addEventListener('keyup',    prev_handlers.up);
