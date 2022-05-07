import { nav } from "../components/navbar.js";

let n = document.getElementById("navbar")
n.innerHTML=nav()

document.getElementById("order").addEventListener("click", () =>{
    alert("Payment Sucessfull (order placed)")
    window.location.href="index.html"
})