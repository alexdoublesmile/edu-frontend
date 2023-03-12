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
const greet = function greet(name) {
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