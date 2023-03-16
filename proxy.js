const person = {
    name: "Alex",
    age: 25,
    job: "dev"
}

const op = new Proxy(person, {
    // op.prop
    get(target, prop) {
        console.log(`Getting prop ${prop}`)
        return target[prop]
    },
    // op.prop = value
    set(target, prop, value) {
        if (prop in target) {
            console.log(`Setting prop ${prop}`)
            target[prop] = value
        } else {
            console.log(`Not Setting prop ${prop}`)
            throw new Error(`No ${prop} field in target`)
        }
    },
    // prop in op
    has(target, prop) {
        return [age, name, job].includes(prop)
    },
    // delete op.prop
    deleteProperty(target, prop) {
        console.log(`Deleting prop ${prop}`)
        delete target[prop]
    }
})

const log = text => `Log: ${text}`
const fp = new Proxy(log, {
    // fp()
    apply(target, thisArg, args) {
        console.log("Calling fn ...")

        return target.apply(thisArg, args).toUpperCase()
    }
})

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const personProxy = new Proxy(Person, {
    // new personProxy()
    construct(target, args) {
        console.log("Constructing Person...")

        return new target(...args)
    }
})

const p = new personProxy("Max", 20)


const personProxyDeep = new Proxy(Person, {
    // new personProxyDeep()
    construct(target, args) {
        console.log("Constructing Person...")

        return new Proxy(new target(...args), {
            // pDeep[prop]
            get(t, prop) {
                console.log("Getting person prop..")
                return t[prop]
            }
        })
    }
})

const pDeep = new personProxyDeep("MaxDeep", 30)
