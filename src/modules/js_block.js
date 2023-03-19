class JSBlock {
    constructor() {
        this.container = document.createElement("div");
        this.container.classList.add("js_block");
    }

    render() {
        const mainTitle = document.createElement("h1");
        mainTitle.classList.add("main-title");
    }
}