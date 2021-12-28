class StaticDrawing {
    dom;

    constructor(parent, ...classes) {
        this.parent = parent;
        this.dom = CreateStaticDrawable(parent, ...classes);
        console.log(this);
    }
}
