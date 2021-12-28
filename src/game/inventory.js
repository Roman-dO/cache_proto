class Inventory {
    static between_dist = 30;

    opened = true;
    switch() {
        if (this.opened) this.close();
        else                   this.open();
    }
    open() {
        this.modules.drawing.show();
        this.opened = true;
        this.showItems();
    }
    close() {
        this.modules.drawing.hide();
        this.opened = false;
        this.hideItems();
    }

    showItems=()=>{
        this.items
            .forEach(item => {
                item.show()
                console.log('s');
            });
        console.log(this.items);
    }
    hideItems=()=>this.items.filter(item=>item)
        .forEach(item => {
            item.hide()
            console.log('h');
        });

    items = [];
    capacity = 2;

    entity;
    modules = {
        drawing: null,
    }

    constructor(self, ...items) {
        this.entity = self;
        this.position = this.entity.position
        this.modules.drawing = new Drawing(
            this,
            this.entity.position.x,
            this.entity.position.y + 45,
            100, 50,
            'inventory-ui'
        );

        this.modules.drawing._scale.x = -35;
        this.modules.drawing._scale.y = 33;

        for (let item of Object.keys(items)) {
            let inv_item = new InventoryItem(
                this,
                this.position,
                item,
            );

            this.items.push(inv_item);
        }
    }
}