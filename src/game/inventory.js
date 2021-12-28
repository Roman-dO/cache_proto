class Inventory {

    update() {

    }
    items = []
    capacity = 10;

    entity;
    modules = {
        drawing: null,
    }

    give_item(landed_item) {
        if (this.is_full()) return;

        // Удаляет предмет с пола
        // или возвращает null если предмет уже взят
        let item = landed_item.get_item();

        if (!item) return;

        // Оптимизировать позже
        for (let i = 0; i <= landed_item.count; i++) {
            let item = this.get_item_by_id(item.id);
            item |= new Item(landed_item.id);
            item.count += 1;
        }
    }
    
    // Возвращает или Item, или null
    get_item_by_id(id) {
        return this.items.find(item => {
            return item.id === id;
        });
    }
    is_full() {
        return this.items.filter( el => el ).length >= this.capacity;
    }

    constructor(self, ...items) {
        this.entity = self;
        this.position = this.entity.position
        this.modules.drawing = new Drawing(
            this,
            this.entity.position.x,
            this.entity.position.y + 45,
            100, 50);
        this.modules.drawing._scale.x = -35;
        this.modules.drawing._scale.y = 33;

    }
}