class Drawing {
    static list = [];
    dom;
    entity;

    static Draw() {Drawing.list.forEach(entity => entity.Draw())}
    Draw() {
        this.update_dom_position();
    }

    update_dom_position() {
        this.dom.style.left   = `${this.entity.position.x}px`;
        this.dom.style.bottom = `${this.entity.position.y}px`;
    }

    constructor(self, x=0, y=0) {
        this.entity = self;

        this.entity.position.x = x;
        this.entity.position.y = y;
        this.dom = CreateEntity(x, y);

        Drawing.list.push(this);
    }
}

setInterval(() => {
    Drawing.Draw();
}, 1000 / TARGET_FPS);
