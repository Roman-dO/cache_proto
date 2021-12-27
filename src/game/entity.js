class Entity {
    static list = [];
    position = {x: 0, y: 0};

    modules = {
        drawing: null,
        clickable: null
    };

    pressed = {};
    pressKey(button) {
        setTimeout(() => this.recalculateMoving(),0);
        this.pressed[button] = true;
    }
    upKey(button) {
        setTimeout(() => this.recalculateMoving(),0);
        this.pressed[button] = false;
    }

    clearPressed() {
        this.pressed = {};
        setTimeout(() => {
            this.recalculateMoving()
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

    constructor(x, y) {
        this.modules.drawing = new Drawing(this, x, y);
        this.modules.clickable = new Clickable(this);
        Entity.list.push(this);
    }
}

setInterval(() => Entity.update(), 1000 / PHYSIC_UPDATE_RATE);
