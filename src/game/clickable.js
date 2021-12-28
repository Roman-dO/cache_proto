class Clickable {
    static on_left_click = (self) => {
        console.log(1)
    };
    static on_right_click = (self) => {};

    on_left_click  = (self) => {};
    on_right_click = (self) => {};

    owner;

    constructor(self, handlers) {
        this.owner = self;

        if (!handlers) {
            console.log('handlers set to default.');
            this.on_right_click = Clickable.on_right_click;
            this.on_left_click = Clickable.on_right_click;
        }
        else {
            if (handlers.right) this.on_right_click = handlers.right;
            else this.on_right_click = Clickable.on_right_click;

            if (handlers.left) this.on_left_click = handlers.left;
            else this.on_left_click = Clickable.on_left_click;
        }

        this.owner.modules.drawing.dom.onclick =       (e) => {
            this.on_left_click(this.owner);
        }
        this.owner.modules.drawing.dom.oncontextmenu = (e) => {
            this.on_right_click(this.owner);
        }
    }
}
