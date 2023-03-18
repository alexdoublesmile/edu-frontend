import "../index.css";
import LOGO_IMG from "../assets/logo.jpg";

console.log("Hi, there");

const imgHTML = document.createElement("img");
imgHTML.classList.add("logo-img");
imgHTML.src = "LOGO_IMG";

document.body.append(imgHTML);