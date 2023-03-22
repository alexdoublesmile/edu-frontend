function Component(constructor: any) {
    
}

@Component
class AngularComponent {
    constructor(public name: string) {}
    
    logName(): void {
        console.log("----------- Inside invocation ----------------")
        console.log(`TestComponent name ${this.name}`)
    }
}