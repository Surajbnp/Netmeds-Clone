import {nav} from "../components/navbar.js"
import {foot} from "../components/footer.js"

let n = document.getElementById("navbar")
n.innerHTML = nav();

let data = JSON.parse(localStorage.getItem("product"))
console.log(data)
let img_div = document.querySelector(".image")
let img = document.createElement("img")
img.style.width="80%"
img.src = data.poster;
img_div.append(img)


let nme = document.getElementById("name")
nme.innerText=data.name;
let t = document.getElementById("type")
t.innerText="Product type : " + data.type;

let p = document.getElementById("price")
p.innerText="₹"+ data.price;


let span = document.getElementById("span")
span.innerText = +data.price + 20.00

let brand = document.getElementById("brand")
brand.innerText=data.brand


let f = document.querySelector("footer")
f.innerHTML=foot();

document.getElementById("btn").addEventListener("click", () =>{
    let cart_item =  JSON.parse(localStorage.getItem("cart_item")) || [];
     cart_item.push(data)
     localStorage.setItem("cart_item", JSON.stringify(cart_item))

     let c_data = JSON.parse(localStorage.getItem("cart_item"))  || [];
     console.log(c_data)
    document.getElementById("cart").innerText=`Cart (${c_data.length})`

 })







