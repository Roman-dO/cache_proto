class Clickable {
    static on_click = (self) => {};
    entity;

    constructor(self) {
        this.entity = self;
        this.entity.modules.drawing.dom.onclick = () => {
            Clickable.on_click(this.entity);
        }
    }
}
