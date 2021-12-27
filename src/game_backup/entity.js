class Entity {
    position = {x: 0, y: 0};

    dom;
    static list = [];
    static on_click = (self) => {};

    pressed = {};
    pressKey(button) {
        setTimeout(() => this.recalculateMoving(),0);
        this.pressed[button] = true;
        if (this.cleared) console.log('press after clear:', button);
    }
    upKey(button) {
        setTimeout(() => this.recalculateMoving(),0);
        this.pressed[button] = false;
        if (this.cleared) console.log('up after clear:', button);
    }
    cleared = false;
    clearPressed() {
        this.pressed = {};
        setTimeout(() => {
            this.recalculateMoving()
            this.cleared = true;
            console.log('after clear:', this.pressed);
        }, 0);
    }

    moving = {x: 0, y: 0};
    recalculateMoving() {
        if (this.pressed.KeyW) {
            this.moving.y = 1;
        }
        else if (this.pressed.KeyS) {
            this.moving.y = -1;
        }
        else {
            this.moving.y = 0;
        }
        if (this.pressed.KeyD) {
            this.moving.x = 1;
        }
        else if (this.pressed.KeyA) {
            this.moving.x = -1;
        }
        else {
            this.moving.x = 0;
        }
    }

    static Draw() {Entity.list.forEach(entity => entity.Draw())}
    Draw() {
        this.update_dom_position();
    }
    static update() {
        Entity.list.forEach(entity => entity.update())
    }
    moving_update() {
        this.position.x += this.moving.x;
        this.position.y += this.moving.y;
    }
    update() {
        this.moving_update();
    }
    update_dom_position() {
        this.dom.style.left   = `${this.position.x}px`;
        this.dom.style.bottom = `${this.position.y}px`;
    }

    constructor(x=0, y=0) {
        this.position.x = x;
        this.position.y = y;
        this.dom = CreateEntity(x, y);
        Entity.list.push(this);

        this.dom.onclick = (e) => {
            Entity.on_click(this);
        }
    }
}

setInterval(Entity.update, 1000 / PHYSIC_UPDATE_RATE);
setInterval(Entity.Draw, 1000 / TARGET_FPS);
