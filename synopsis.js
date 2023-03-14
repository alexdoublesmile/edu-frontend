// var types
const someFirstName = "Alex"
const someAge = 36
let someName = "Alex Plohoy"
var oldName = "global Alex"
console.log("-----------------")
console.log("Name: " + someFirstName + " and age: " + someAge)
console.log(someAge)

// data types
const isEnabled = true
const name = "Ivan"
const age = 18
const num = 19.2
const binaryNum = 0b0110
const hexNum = 0x0110f3
let undefinedVar
const nullVar = null
const numArray = ["one", "two", "three", 7]
console.log("-----------------")
console.log(typeof isEnabled)
console.log(typeof name)
console.log(typeof age)
console.log(typeof num)
console.log(typeof binaryNum)
console.log(typeof hexNum)
console.log(typeof undefinedVar)
console.log(typeof nullVar)
console.log(typeof null)
console.log(typeof NaN)
console.log(null)
console.log(typeof numArray)
console.log(typeof numArray.length)
console.log(typeof numArray[0])
console.log(numArray)
console.log(numArray.length)
console.log(numArray[0])

// expressions
console.log("-----------------")
const appState = "stoppe"
if (appState === "enabled") {
    console.log("App is enabled")
} else if (appState === "stopped") {
    console.log("App is stopped")
} else {
    console.log("App has invalid state")
}

console.log("-----------------")
for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
}

console.log("-----------------")
for (let num of numArray) {
    console.log(num)
}

// objects
function someFun(name, age, arg2, arg3) {
    // to do
}

const person = {
    firstName: "Alex",
    lastName: "Smith",
    age: 36,
    languages: ["ru", "en", "tr", "de"],
    isProgrammer: true,
    doWork: function() {
        console.log("doing work...")
    },
    printName: function(firstName) {
        console.log("my name is " + firstName)
    },
    printSmth: function(arg) {
        console.log("here is " + arg)
    }
}

console.log("-----------------")
console.log(person)
console.log(person.lastName)
console.log(person["lastName"])
console.log(person.someProperty)
console.log(person["someProperty"])
console.log(person.languages)
console.log(person.isProgrammer)
person.isProgrammer = false
console.log(person.isProgrammer)
console.log(person.hasWife)
person.hasWife = true
console.log(person.hasWife)
console.log("-----------------")
person.doWork()
person.doSmth
person.doSmth = function() {
    console.log("doing smth...")
}
person.doSmth()
person.printName()
person.printSmth("something")

// utils
let numberString = "42"
let floatString = "42.42"
let bigNuber = 543n
Number.MAX_SAFE_INTEGER
console.log("-----------------")
console.log(Number.parseInt(numberString) + 2)
console.log(Number(numberString) + 2)
console.log(+numberString + 2)
console.log(Number.parseFloat(floatString) + 2)
console.log(Number.parseFloat(floatString) + .2)
console.log((Number.parseFloat(floatString) + .2).toFixed(2))
console.log("-----------------")
console.log(bigNuber)
console.log(bigNuber + 12n)
console.log(Number.parseInt(bigNuber) + 12)
console.log(Number(bigNuber) + 12)
console.log(bigNuber + BigInt(12))
// console.log(bigNuber + 12) // error


// string specific functions
const str = `Name: ${name} and age: ${age} doing ${getDoing(age)}`

function getDoing(num) {
    return num + num
}

function printStr(s, arg1, arg2) {
    console.log(`${s[0]}${arg1}${s[1]}${arg2}${s[2]}`)
}

console.log(str)

const output = printStr`String with ${num} and with ${age}`

// function declaration
function greet(name) {
    // to do
}

// function expression
const greet2 = function greet(name) {
    // to do
}

greet("Alex")

console.log(typeof greet)
console.dir(greet)

// anonymous function
let counter = 0
const interval = setInterval(function() {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)

// arrow function
const arrow = (name, arrow) => {
    // to do
}

const pow = num => num ** 2

// default params
const sum = (a = 40, b = a * 2) => a + b
console.log(sum(41, 4))
console.log(sum())

// res param
function sumAll(...all) {
    // todo
}

// closure
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember("Alex")
logWithLastName("Smith")
logWithLastName("Ivanov")

// array
const cars = [
    {
        name: "BMW",
        price: 100000
    },
    {
        name: "Mazda",
        price: 50000
    },
    {
        name: "Mercedes",
        price: 150000
    }
]
console.log(cars)

cars.push("Some car")
console.log(cars)
cars.pop()
console.log(cars)
cars.unshift("Some car") // push analog
console.log(cars)
cars.shift() // pop analog
console.log(cars)
console.log("--------------")

cars.reverse()
console.log(cars)

// for (let car of cars) {
//     console.log(car.name === "BMW")
// }

const bmwIndex = cars.findIndex(function(car) {
    return car.name === "BMW"
})

const bmw = cars.find(function(car) {
    return car.name === "BMW"
})

const bmw2 = cars.find(car => car.name !== null)

console.log(bmwIndex)
console.log(bmw)
console.log(bmw2)

const hasNullCarName = cars.includes(car => car.name === null)
console.log(hasNullCarName)

const pow2 = num => num ** 2
const sum2 = (num1, num2) => num1 + num2
const carsAllPowedPrice = cars
    .map(car => car.price)
    .map(pow2)
    .filter(price => price > 2500000000)
    .reduce(sum)

console.log(carsAllPowedPrice)