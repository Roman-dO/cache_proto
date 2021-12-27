class InventoryItem {
    modules = {
        drawing: null,
    };

    position = {x: 0, y: 0};
    update_position() {

    }

    item;
    dom;

    constructor(item) {
        this.modules.drawing = new Drawing(this);
    }
}
