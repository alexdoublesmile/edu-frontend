import { JSBlock } from "./js-block";

export class App {
    #jsBlock

    container() {
        this.#jsBlock = new JSBlock();
    }

    run() {
        const jsBlockHTML = this.#jsBlock.render();
        document.body.append(jsBlockHTML);
    }
}