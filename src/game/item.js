class Item {
    id; count;

    constructor(id, count) {
        this.id = id;
        this.count = count;
    }
}

class LandedItem {
    item;

    position;

    modules = {
        drawing: null,
    }

    Draw() {

    }

    constructor(item) {

        this.modules.drawing = new Drawing(
            this,
            this.position.x,
            this.position.y,
            20,
            20);
    }
}

class InventoryItem {
    modules = {
        drawing: null,
    };

    show() {
        this.modules.drawing.show();
    }
    hide() {
        this.modules.drawing.hide();
    }

    position = null;

    inventory;
    item;
    dom;

    constructor(self, position, item) {
        this.position = position;
        this.inventory = self;
        this.item = item;

        this.modules.drawing = new StaticDrawing(
            self.modules.drawing.dom,
            'inv-item'
        );
    }
}
