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

const hasNullCarName = cars.includes(car => car.nae === null)
console.log(hasNullCarName)

const pow2 = num => num ** 2
const sum = (num1, num2) => num1 + num2
const carsAllPowedPrice = cars
    .map(car => car.price)
    .map(pow2)
    .filter(price => price > 2500000000)
    .reduce(sum)

console.log(carsAllPowedPrice)