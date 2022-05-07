import {nav} from "../components/navbar.js"
let navbar = document.getElementById("navbar")
navbar.innerHTML = nav();


function product(n, url, p,t,b ){
    this.name  = n;
    this.poster = url;
    this.price = p;
    this.type = t;
    this.brand= b;
}

let p11  = new product("Patanjali Saundarya Multani Mitti Face Scrub 60 gm", "https://www.netmeds.com/images/product-v1/150x150/802736/patanjali_saundarya_multani_mitti_face_scrub_60_gm_0.jpg", "75.00","face pack","patanjali")
let p13 = new product("Ayur Herbal Face Pack - Multani Mitti 100 gm", "https://www.netmeds.com/images/product-v1/150x150/829455/ayur_herbal_face_pack_multani_mitti_100_gm_0.jpg", "28.50")
let p14 = new product("Banjaras 15Minute Multani Mitti Face Pack Powder 100 gm", "https://www.netmeds.com/images/product-v1/150x150/100113/banjaras_15minute_multani_mitti_face_pack_powder_100_gm_0.jpg", " 39.60","face pack","patanjali")
let p15 = new product("Banjaras 15Minute Multani Face Pack Powder - Papaya 100 gm", "https://www.netmeds.com/images/product-v1/150x150/100123/banjaras_15minute_multani_face_pack_powder_papaya_100_gm_0.jpg", " 60.00","face pack","patanjali")
let p4 = new product("Renu Fresh Multi Purpose Solution 500 ml", "https://www.netmeds.com/images/product-v1/150x150/108961/renu_fresh_multi_purpose_solution_500_ml_0_1.jpg", "519.20","face pack","patanjali")
let p16 = new product("Ayur Herbal Face Pack - Sandal 100 gm", "https://www.netmeds.com/images/product-v1/150x150/829462/ayur_herbal_face_pack_sandal_100_gm_0.jpg", "47.50","face pack","patanjali")
let p17 = new product("VLCC Ayurveda Multani Mitti Face Pack 100 gm", "https://www.netmeds.com/images/product-v1/150x150/828850/vlcc_ayurveda_multani_mitti_face_pack_100_gm_0_1.jpg", "92.30","face pack","patanjali")
let p18 = new product("The Man Company Activated Charcoal Peel Off Mask - Moringa", "https://www.netmeds.com/images/product-v1/150x150/890566/the_man_company_activated_charcoal_peel_off_mask_moringa_gooseberry_100_gm_0.jpg", "349.00","face pack","patanjali")
// let p19 = new product("", "", "")
let p6 = new product("Lacto Calamine Oil Balance for Oily Skin Lotion 120 ml", "https://www.netmeds.com/images/product-v1/150x150/411868/lacto_calamine_oil_balance_for_oily_skin_lotion_120_ml_0_3.jpg", "194.92","Moisturiser","Botanica")
let p10 = new product("Nivea Soft Light Moisturiser 25 ml", "https://www.netmeds.com/images/product-v1/150x150/13603/nivea_soft_light_moisturiser_25_ml_0.jpg", "42.75","Moisturiser","Botanica")
let p9 = new product("Elovera Cream 150gm", "https://www.netmeds.com/images/product-v1/150x150/327036/elovera_cream_150gm_0.jpg", "360.00","Moisturiser","Botanica")
let p7 = new product("Vicco Turmeric Skin Cream 70 gm", "https://www.netmeds.com/images/product-v1/150x150/410717/vicco_turmeric_skin_cream_70_gm_0.jpg", "245.00","Moisturiser","Botanica")
let p3 = new product("Glow & Lovely Advanced Multi Vitamin Face Cream 25 gm", "https://www.netmeds.com/images/product-v1/150x150/100276/fair_lovely_advanced_multi_vitamin_face_cream_25_gm_0_1.jpg", "  58.00","Moisturiser","Botanica")
let p5 = new product("Boroline Antiseptic Ayurvedic Cream 40 gm", "https://www.netmeds.com/images/product-v1/150x150/853514/boroline_antiseptic_ayurvedic_cream_40_gm_0.jpg", " 75.00","Moisturiser","Botanica")
let p2 = new product("Boro Plus Healthy Skin Antiseptic Cream 40 ml", "https://www.netmeds.com/images/product-v1/150x150/408827/boro_plus_healthy_skin_antiseptic_cream_40_ml_0.jpg", "75.00","Moisturiser","Botanica")
let p1 = new product("Dabur Gulabari Premium Rose Water 250 ml", "https://www.netmeds.com/images/product-v1/600x600/12746/dabur_gulabari_premium_rose_water_250_ml_0_2.jpg", "75.60","Moisturiser","Botanica")
// let p20 = new product("", "", "")
let p21 = new product("Renu Fresh Multi Purpose Solution 500 ml", "https://www.netmeds.com/images/product-v1/150x150/108961/renu_fresh_multi_purpose_solution_500_ml_0_1.jpg", " 519.20","eye drop","Emmbros")
let p22 = new product("Biotrue Multi Purpose Solution 300 ml", "https://www.netmeds.com/images/product-v1/150x150/408979/biotrue_multi_purpose_solution_300_ml_0.jpg", " 515.20","eye drop","Emmbros")
let p23 = new product("Renu Fresh Multi Purpose Solution 120 ml", "https://www.netmeds.com/images/product-v1/150x150/108959/renu_fresh_multi_purpose_solution_120_ml_0.jpg", " 220.80","eye drop","Emmbros")
let p24 = new product("Himalaya Under Eye Cream 15 ml", "https://www.netmeds.com/images/product-v1/150x150/13113/himalaya_under_eye_cream_15_ml_0_2.jpg", " 188.00","eye drop","Emmbros")
let p25 = new product("Biotrue Multi Purpose Solution 120 ml", "https://www.netmeds.com/images/product-v1/150x150/408978/biotrue_multi_purpose_solution_120_ml_0_1.jpg", "Rs. 283.65","eye drop","Emmbros")
let p26 = new product("Renu Fresh Multi Purpose Solution 355 ml", "https://www.netmeds.com/images/product-v1/150x150/108960/renu_fresh_multi_purpose_solution_355_ml_0_1.jpg", " 450.00","eye drop","Emmbros")
let p27 = new product("OPTI-FREE Replenish Multipurpose Disinfecting Solution", "https://www.netmeds.com/images/product-v1/150x150/406687/opti_free_replenish_multipurpose_disinfecting_solution_300_ml_0.jpg", " 427.50","eye drop","Emmbros")
let p28 = new product("Purecon Puresoft for Sensitive Eyes Solution (360 ml + 140 ml)", "https://www.netmeds.com/images/product-v1/600x600/414030/purecon_puresoft_for_sensitive_eyes_solution_360_ml_140_ml_0_1.jpg", "324.00","eye drop","Emmbros")
// let p29 = new product("", "", "")
let p30 = new product("Mankind Acnestar Gel 22 gm", "https://www.netmeds.com/images/product-v1/600x600/827253/mankind_acnestar_gel_22_gm_0.jpg", " 104.50","skin cream","Emmbros")
let p31 = new product("Patanjali Saundarya Alovera Kesar Chandan Gel 60 ml", "https://www.netmeds.com/images/product-v1/150x150/410263/patanjali_saundarya_alovera_kesar_chandan_gel_60_ml_0.jpg", " 55.00","skin cream","Emmbros")
let p32 = new product("St.Botanica C Vitamin C 20% Professional Facial Serum 20 ml", "https://www.netmeds.com/images/product-v1/150x150/816527/st_botanica_c_vitamin_c_20_professional_facial_serum_20_ml_0_10.jpg", " 1,049.30","skin cream","patanjali")
let p33 = new product("Tvaksh Face Guard Silicone Sunscreen Gel SPF 30+ 30 gm", "https://www.netmeds.com/images/product-v1/150x150/891883/tvaksh_face_guard_silicone_sunscreen_gel_spf_30_30_gm_0_0.jpg", "477.00","skin cream", "patanjali")
let p34 = new product("Aroma Treasures Aloe Vera Gel 500 gm", "https://www.netmeds.com/images/product-v1/150x150/887898/aroma_treasures_aloe_vera_gel_500_gm_0.jpg", "Rs. 360.00","skin cream","Botanica")
let p35 = new product("Lotus Herbals Whiteglow Skin Whitening & Brightening SPF 25", "https://www.netmeds.com/images/product-v1/150x150/14407/lotus_herbals_whiteglow_skin_whitening_brightening_spf_25_pa_gel_creme_60_gm_0.jpg", "351.00","skin cream","Botanica")
let p36 = new product("Axiom Mukti Gold Aloevera Gel 125 gm - Blue", "https://www.netmeds.com/images/product-v1/150x150/824738/axiom_mukti_gold_aloevera_gel_125_gm_blue_0.jpg", "108.00","skin cream","Botanica")

let data =[];
data.push(p1,p2,p3,p4,p5,p6,p7,p9,p10,p11,p13,p14,p15,p16,p17,
    p18,p21,p22,p23,p24,p25,p26,p27,p28,p30,p31,p32,p33,
    p34,p35,p36)
    
    console.log(data)


function Append(data){

    let container = document.querySelector(".p2")
    container.innerHTML = null;

 data.forEach(function(el, index){
    

    let div = document.createElement("div")
    div.style.border="1px solid grey"
    div.style.padding="20px"
    div.style.width="100%"
    div.style.marginTop="10%"
    div.style.borderRadius="10px"
    div.style.cursor="pointer"

    let name = document.createElement("h3")
    name.innerText = el.name;
    let img = document.createElement("img")
    img.style.width="100%"
    img.style.height="50%"
    img.src = el.poster;

    let p = document.createElement("p")
    p.style.fontWeight="600"
    p.style.color="red"
    p.innerText = "Best Price*" + el.price;
    let btn = document.createElement("button")
    btn.style.width="95%"
    btn.style.height="10%"
    btn.style.borderRadius="5px"
    btn.style.outline="none"
    btn.style.border="none"
    btn.style.background="#32AEB1"
    btn.style.color="white"
    btn.style.fontWeight="600"
    btn.innerText = "Add to Cart";

    btn.addEventListener("click", () =>{
       let cart_item =  JSON.parse(localStorage.getItem("cart_item")) || [];
        cart_item.push(data[index])
        localStorage.setItem("cart_item", JSON.stringify(cart_item))

        let c_data = JSON.parse(localStorage.getItem("cart_item"))
       document.getElementById("cart").innerText=`Cart (${c_data.length})`

    })

    img.addEventListener("click", () =>{
        localStorage.setItem("product", JSON.stringify(data[index]))
        window.location.href="product.html"
    })

    div.append(img,name, p, btn)
    container.append(div)


 });  

};

Append(data)

// catagory filter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById("serum").addEventListener("click", () =>{
    let serum = document.getElementById("serum")

   if(serum.checked==true){
    data =  data.filter((el) =>{
        if(el.type == "skin cream"){
            return el
        }
    })
    console.log(data)
    Append(data)
   }
})
document.getElementById("face").addEventListener("click", () =>{
    let face = document.getElementById("face")
console.log(data)
   if(face.checked==true){
    data =  data.filter((el) =>{
        if(el.type == "face pack"){
            return el
        }
    })
    console.log(data)

    Append(data)
   }
})

document.getElementById("moist").addEventListener("click", () =>{
    let moist = document.getElementById("moist")

   data =  data.filter((el) =>{
        if(el.type == "Moisturiser"){
            return el
        }
    })
    console.log(data)

    Append(data)
})

document.getElementById("eye").addEventListener("click", () =>{
    let eye = document.getElementById("eye")

   data =  data.filter((el) =>{
        if(el.type == "eye drop"){
            return el
        }
    })
    console.log(data)

    Append(data)
})


// Price filter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById("high").addEventListener("click", () =>{
    let high = document.getElementById("high")

    if(high.checked == true){
        data.sort(function(a,b){
            return Number(b.price) - Number(a.price);
        });

        Append(data)
    }
})

document.getElementById("low").addEventListener("click", () =>{
    let low = document.getElementById("low")

    if(low.checked == true){
        data.sort(function(a,b){
            return Number(a.price) - Number(b.price);
        });

        Append(data)
    }
})


// Brand filter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById("Emmbros").addEventListener("click", () =>{
    let low = document.getElementById("Emmbros")

    data =  data.filter((el) =>{
        if(el.brand == "Emmbros"){
            return el
        }
    })
    console.log(data)

    Append(data)

    
})

document.getElementById("Botanica").addEventListener("click", () =>{
    let low = document.getElementById("Botanica")

    data =  data.filter((el) =>{
        if(el.brand == "Botanica"){
            return el
        }
    })
    console.log(data)

    Append(data)

    
})

document.getElementById("patanjali").addEventListener("click", () =>{
    let low = document.getElementById("patanjali")

    data =  data.filter((el) =>{
        if(el.brand == "patanjali"){
            return el
        }
    })
    console.log(data)

    Append(data)

    
})


let c_data = JSON.parse(localStorage.getItem("cart_item"))
console.log(c_data)
document.getElementById("cart").innerText=`Cart (${c_data.length})`



