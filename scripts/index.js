import {nav} from "../components/navbar.js"
import {foot} from "../components/footer.js"

let navbar = document.getElementById("navbar")
navbar.innerHTML = nav();

let f = document.getElementById("footer")
f.innerHTML = foot();

let status = JSON.parse(localStorage.getItem("status"))
let username = JSON.parse(localStorage.getItem("username"))

let login_val = document.getElementById("login_val")
if(status === true){
    login_val.innerText = `Hi! ${username} (Logout)`;
}else{
    login_val.innerText="SignIn/SignUp"
}


let c_data = JSON.parse(localStorage.getItem("cart_item"))
console.log(c_data)
document.getElementById("cart").innerText=`Cart(${c_data.length})`