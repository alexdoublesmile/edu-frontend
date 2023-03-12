// var types
const someFirstName = "Alex"
const someAge = 36
let someName = "Alex Plohoy"
var oldName = "global Alex"
// console.log("-----------------")
// console.log("Name: " + someFirstName + " and age: " + someAge)
// console.log(someAge)

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
// console.log("-----------------")
// console.log(typeof isEnabled)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof num)
// console.log(typeof binaryNum)
// console.log(typeof hexNum)
// console.log(typeof undefinedVar)
// console.log(typeof nullVar)
// console.log(typeof null)
// console.log(null)
// console.log(typeof numArray)
// console.log(typeof numArray.length)
// console.log(typeof numArray[0])
// console.log(numArray)
// console.log(numArray.length)
// console.log(numArray[0])

// operations
console.log("-----------------")
const appState = "stoppe"
if (appState === "enabled") {
    console.log("App is enabled")
} else if (appState === "stopped") {
    console.log("App is stopped")
} else {
    console.log("App has invalid state")
}

// cycle
console.log("-----------------")
for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
}

console.log("-----------------")
for (let num of numArray) {
    console.log(num)
}

// objects and functions
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

// console.log("-----------------")
// console.log(person)
// console.log(person.lastName)
// console.log(person["lastName"])
// console.log(person.someProperty)
// console.log(person["someProperty"])
// console.log(person.languages)
// console.log(person.isProgrammer)
// person.isProgrammer = false
// console.log(person.isProgrammer)
// console.log(person.hasWife)
// person.hasWife = true
// console.log(person.hasWife)
// console.log("-----------------")
// person.doWork()
// person.doSmth
// person.doSmth = function() {
//     console.log("doing smth...")
// }
// person.doSmth()
// person.printName()
// person.printSmth("something")