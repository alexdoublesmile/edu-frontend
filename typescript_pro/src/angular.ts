

interface ComponentDecorator {
    selector: string
    template: string
}

function Component(config: ComponentDecorator) {
    return function
        <T extends { new(...args: any[]): object}>
    (Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args)

                const element = document.querySelector(config.selector)!
                element.innerHTML = config.template
            }
        }
    }
}

@Component({
    selector: "#card",
    template: `
        <div class="card">
            <div class="card-content">
                <div class="card-title">
                    Card Coponent
                </div>
            </div>
        </div>
    `
})
class CardComponent {
    constructor(public name: string) {
    }
}

const card = new CardComponent("Card Component");