class Drawing {
    static list = [];
    dom;
    owner;
    _scale = {x: 0, y: 0};

    static Draw() {Drawing.list.forEach(entity => entity.Draw())}
    Draw() {
        this.update_dom_position();
    }

    update_dom_position() {
        this.dom.style.left   = `${this.owner.position.x + this._scale.x}px`;
        this.dom.style.bottom = `${this.owner.position.y + this._scale.y}px`;
    }

    constructor(
        self,
        x=0,
        y=0,
        xSize=30,
        ySize=30
    ) {
        this.owner = self;

        this.dom = CreateDrawable(x, y);
        this.dom.style.width  = `${xSize}px`;
        this.dom.style.height = `${ySize}px`;

        Drawing.list.push(this);
    }
}

setInterval(() => {
    Drawing.Draw();
}, 1000 / TARGET_FPS);
