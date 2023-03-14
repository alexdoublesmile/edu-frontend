// document.getElementById("info-text")
// document.getElementsByClassName("someClass")
// document.getElementsByName()
// document.getElementsByTagName("li")
// document.getRootNode()

const logoImg = document.querySelector(".logo")
const infoTextHeader = document.querySelector(".info-text h2")
const infoTextParagraphs = document.querySelectorAll(".info-text p")
const infoTextLinkHeader = document.querySelector(".info-text h4")
const infoTextLinks = document.querySelectorAll(".info-text a")
console.dir(logoImg)
console.dir(infoTextHeader)
console.dir(infoTextParagraphs)
console.dir(infoTextLinkHeader)
console.dir(infoTextLinks)

// setTimeout(() => {
//     addStylesTo(logoImg)
// }, 1000)

// setTimeout(() => {
//     addStylesTo(infoTextHeader)
// }, 2000)

// setTimeout(() => {
//     addStylesTo(infoTextParagraphs[0])
// }, 3000)

// setTimeout(() => {
//     addStylesTo(infoTextLinkHeader)
// }, 4000)

// setTimeout(() => {
//     addStylesTo(infoTextLinks[0])
// }, 5000)

function addStylesTo(node, text, fontSize) {
    node.style.color = "white"

    // falsy: "", null, undefined, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/en-US/docs/Web/Events
logoImg.onclick = () => {
    // logoImg.hidden = logoImg.hidden === true ? false : true
}

logoImg.addEventListener("click", () => {
    // logoImg.hidden = logoImg.hidden === true ? false : true
    // console.log(event.target.getAttribute("alt"))
    console.log(logoImg.getAttribute("alt"))
})

infoTextLinks.forEach(link => link.addEventListener("click", event => event.preventDefault()))
