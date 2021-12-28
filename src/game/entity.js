class Entity {
    static list = [];
    position = {x: 0, y: 0};

    modules = {
        drawing: null,
        clickable: null,
        inventory: null,
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
        for (let module of Object.values(this.modules)) if (module && module.update) module.update()
    }

    constructor(x, y) {
        this.modules.drawing   = new Drawing(this, x, y);
        this.modules.clickable = new Clickable(this);
        this.modules.inventory = new Inventory(this, new Item(3, 2));
        Entity.list.push(this);
    }
}

setInterval(() => Entity.update(), 1000 / PHYSIC_UPDATE_RATE);
