import JS_IMG from "../../assets/logo.jpg";

export class JSBlock {
    #container

    constructor() {
        this.#container = document.createElement("div");
        this.#container.classList.add("js-block");
    }

    render() {
        const mainTitle = document.createElement("h1");
        mainTitle.classList.add("main-title");
        mainTitle.textContent = "JavaScript";
        
        const mainImage = document.createElement("img");
        mainTitle.classList.add("main-image");
        mainTitle.src = JS_IMG;
        
        const foundedText = document.createElement("p");
        mainTitle.classList.add("founded-text");
        mainTitle.textContent = "From JavaScript creation date passed:";

        this.#container.append(mainTitle, JSImageHTML, foundedText);

        return this.#container;
    }
}