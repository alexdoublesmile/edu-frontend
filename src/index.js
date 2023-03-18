import "../index.css";

console.log("Hi, there");

const imgHTML = document.createElement("img");
imgHTML.classList.add("logo-img");
imgHTML.src = "../assets/logo.png";

document.body.append(imgHTML);