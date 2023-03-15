class Person {
    type = "human"

    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(this.name + " says hi!")
    }
}

const max = new Person("Max")
max.greet()
console.log(max.type)

console.log(max.__proto__ === Person.prototype)

class Programer extends Person {
    constructor(name, job) {
        super(name)

        this._job = job
    }

    get job() {
        return this._job;
    }

    set job(job) {
        this._job = job
    }

    greet() {
        super.greet()
        console.log("Overrided")
    }
}

const frontend = new Programer("Max", "Frontend")
console.log(frontend)
frontend.greet()

console.log(frontend.__proto__ === Programer.prototype)


class Simple {

}