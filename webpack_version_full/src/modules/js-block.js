import JS_IMG_PATH from "../../assets/logo.jpg";

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
        mainImage.classList.add("main-image");
        mainImage.src = JS_IMG_PATH;
        
        const foundedText = document.createElement("p");
        foundedText.classList.add("founded-text");
        foundedText.textContent = "From JavaScript creation date passed:";

        this.#container.append(mainTitle, mainImage, foundedText);

        return this.#container;
    }
}