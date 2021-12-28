Clickable.on_left_click = (target) => {

    RegisterPlayerEntity(target);
}

function onload() {

    RegisterPlayerEntity(new Entity(50, 50));
    new Entity(5, 100);
    new Entity(500, 100);
    new Entity(550, 100);
    new Entity(660, 100);
}




