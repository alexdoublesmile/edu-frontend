// const actionAfterTimeout = setTimeout(() => {
//     console.log("After timeout")
// }, 2500)
// clearTimeout(actionAfterTimeout)

// const actionWithInterval = setInterval(() => {
//     console.log("With interval timeout")
// }, 1000)
// clearInterval(actionWithInterval)


const delay = (wait = 1000, isError = false) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isError) {
                reject("it was error")
            } else {
                resolve()
            }
        }, wait)
    })
    return promise;
}

delay(2500)
    .then(() => {
        console.log("After 2.5 sec")
    })
    .catch(err => console.error("Error: ", err))
    .finally(() => console.log("Finally"))

const getData = () => new Promise(resolve => resolve([1, 2, 3, 4]))
// getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log("Data: ", data)

    } catch (ex) {
        console.log(ex)
        
    } finally {
        console.log("Finally")
    }
} 

asyncExample()
