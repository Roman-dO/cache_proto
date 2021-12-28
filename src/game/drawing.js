class Drawing {
    static list = [];
    dom;
    owner;
    _scale = {x: 0, y: 0};

    is_shown = true;
    show() {
        if (this.is_shown) return;
        this.dom.style.display = '';
        this.is_shown = true;
    }
    hide() {
        if (!this.is_shown) return;
        this.dom.style.display = 'none';
        this.is_shown = false;
    }

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
        ySize=30,
        ...types
    ) {
        this.owner = self;

        this.dom = CreateAbsoluteDrawable(x, y, ...types);
        this.dom.style.width  = `${xSize}px`;
        this.dom.style.height = `${ySize}px`;

        Drawing.list.push(this);
    }
}

setInterval(() => {
    Drawing.Draw();
}, 1000 / TARGET_FPS);
