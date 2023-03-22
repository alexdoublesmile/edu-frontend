function ClassDecorator(constructor: Function) {
    console.log("---------- ClassDecorator -----------")
    console.log(`constructor: ${constructor}`)
    console.log(constructor);
}

function FieldDecorator(target: any, propName: string | Symbol) {
    console.log("---------- FieldDecorator ------------")
    console.log(`target: ${target}`)
    console.log(target)
    console.log(`propName: ${propName}`)
    console.log(propName)
}

function FunctionDecorator(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("---------- FunctionDecorator ------------")
    console.log(`target: ${target}`)
    console.log(target)
    console.log(`propName: ${propName}`)
    console.log(propName)
    console.log(`descriptor: ${descriptor}`)
    console.log(descriptor)
}

function AccessorDecorator(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("---------- AccessorDecorator ------------")
    console.log(`target: ${target}`)
    console.log(target)
    console.log(`propName: ${propName}`)
    console.log(propName)
    console.log(`descriptor: ${descriptor}`)
    console.log(descriptor)
}

@ClassDecorator
class TestComponent {
    @FieldDecorator
    name: string

    @AccessorDecorator
    get coponentName(): string {
        return this.name
    }

    constructor(name: string) {
        this.name = name
    }
    
    @FunctionDecorator
    logName(): void {
        console.log("----------- Inside invocation ----------------")
        console.log(`TestComponent name ${this.name}`)
    }
}