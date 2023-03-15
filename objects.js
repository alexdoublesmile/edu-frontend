const person = {
    name: "Alex",
    age: 18,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    "complex key": "Complex Value",
    ["key_" + (1 + 3)]: "Computed Key",
    oldGreet: function() {
        console.log("greet from person")
    },
    greet() {
        console.log("greet from person")
    }
}

console.log(person.name)

const ageKey = "age"
console.log(person[ageKey])
console.log(person["complex key"])

person.greet()

person.age++
person.languages.push("tr")
delete person.key_4

console.log(person)
console.log(person.key_4)

const {name, age: personAge = 12, languages} = person
console.log(name)
// console.log(age)
console.log(personAge)
console.log(languages)

console.log("---------------------------------------")
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log("key: " + key)
        console.log("value: " + person[key])
        
    }
}

console.log("--------- simple key-value list ------------------------------")
Object.keys(person).forEach(key => {
    console.log("key: " + key)
    console.log("value: " + person[key])
})

console.log("--------- logger keys list ------------------------------")
const logger = {
    logKeys(someArg1, someArg2) {
        console.log(Object.keys(this))
        console.log(someArg1)
        console.log(someArg2)
    },
    logKeysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`'${key}': ${this[key]}`)
        })
    },
    // error - anon func has own ctx
    // logKeysAndValuesByAnon() {
    //     Object.keys(this).forEach(function(key) {
    //         console.log(`'${key}': ${this[key]}`)
    //     })
    // },
    logKeysAndValuesByAnon() {
        Object.keys(this).forEach(function(key) {
            console.log(`'${key}': ${this[key]}`)
        }.bind(this))
    }
}
logger.logKeys()
const logKeysBoundedToLogger = logger.logKeys.bind(logger)
logKeysBoundedToLogger()
const logKeysBoundedToPerson = logger.logKeys.bind(person)
logKeysBoundedToPerson()

console.log("--------- logger key-value list ------------------------------")
logger.logKeysAndValues()
const logKeysAndValuesBoundedToPerson = logger.logKeysAndValues.bind(person)
logKeysAndValuesBoundedToPerson()

console.log("--------- logger anon key-value list ------------------------------")
const logKeysAndValuesByAnonBoundedToPerson = logger.logKeysAndValuesByAnon.bind(person)
logKeysAndValuesBoundedToPerson()

logger.logKeys.bind(person)
logger.logKeys.call(person, "1arg")
logger.logKeys.apply(person, ["1arg"])

// Destructuring
console.log("-----------------------------------------")
const array = [1, undefined, 3, 5, 8, 13]
const [a, b = 42, ...c] = array
console.log(a, b, c)

const[at,, ct] = array
console.log(at, ct)

const address = {
    country: "Russia",
    city: "Moscow",
    // street: "Lenina",
    concat() {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}

const {city, country, street = "Tverskaya", concat: addressConcat} = address

console.log(addressConcat.call(address))
console.log(street)

const {city2, ...rest} = address
console.log(city2)
console.log(rest)

const newAddress = {...address, street: "Tverskaya", code: 123}
console.log(newAddress)
console.log(address.concat())

const first = {a: 1}
const second = {b: 1}

Object.is(a, b)
Object.assign(a, b)
Object.assign({}, a, b)
Object.entries(a)
Object.keys(b)
Object.values(c)