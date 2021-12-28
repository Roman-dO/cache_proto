class Clickable {
    static on_left_click = (self) => {};
    static on_right_click = (self) => {};

    entity;

    constructor(self) {
        this.entity = self;
        this.entity.modules.drawing.dom.onclick = (e) => {
            Clickable.on_left_click(this.entity);
        }
        this.entity.modules.drawing.dom.oncontextmenu = (e) => {
            Clickable.on_right_click(this.entity);
        }

    }
}
