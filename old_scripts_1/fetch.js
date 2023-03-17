const requestUrl = "https://jsonplaceholder.typicode.com/users"

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        
        xhr.open(method, url)
    
        xhr.responseType = "json"
        xhr.setRequestHeader("Content-Type", "application/json")
    
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
    
        xhr.onerror = () => {
            reject(xhr.response)
        }
    
        xhr.send(JSON.stringify(body))
    })
}

function sendFetchRequest(method, url, body = null) {
    const headers = {
        "Content-Type": "application/json"
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error("Something is wrong")
            e.data = error
            throw e
        })
    })
}

// sendRequest("GET", requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body = {
    name: "Alex",
    age: 26
}

// sendRequest("POST", requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// sendFetchRequest("POST", requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


async function send(method, requestUrl, body) {
    try {
        const data = await sendRequest(method, requestUrl, body)
        console.log(data)
    } catch (ex) {
        console.log(ex)
    }
}

send("GET", requestUrl)