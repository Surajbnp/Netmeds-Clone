function nav() {
    return`<div class="main">
    <div id="up">
        <a href="index.html"><img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt=""></a>
        <input type="text" placeholder="Search medicines and wellness products">
        <div style="display:flex">
        <i class="fa fa-upload fa-2x" aria-hidden="true"></i>
        <a href="">Upload</a>
        </div>
        <div style="display:flex">
        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
        <a id="cart" href="cart.html">Cart</a>
        </div>
        <div style="display:flex">
        <i class="fa fa-user fa-2x" aria-hidden="true"></i>
        <a id="login_val" href="signup.html">SignIn/Signup</a>
        </div>
    </div>
    <div id="down">
      <div class="dropdown">
        <button class="dropbtn">Medicines</button>
        <div class="dropdown-content">
          <a href="">All Medicines</a>
          <a href="">Ordered Product</a>
        
        </div>
      </div>
        <a href="">Wellness</a>
        <a href="">Lab Tests</a>
        <div class="dropdown">
          <button class="dropbtn">Beauty</button>
          <div class="dropdown-content">
            <a href="">Personal Care</a>
            <a href="">Make-Up</a>
            <a href="">Hair</a>
            <a href="skincare.html">Skin Care</a>
            <a href="">Tools & Apliances</a>
            <a href="">Mom & Baby</a>
            <a href="">Fragrences</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Health Corner</button>
          <div class="dropdown-content">
            <a href="">Health Library</a>
            <a href="">Patience Alike</a>
            <a href="">Corona Awareness</a>
          </div>
        </div>
    </div>
 
    <div class="d">
    <div class="down">
        <h4>Covid Essentials</h4>
        <h4>Diabetes</h4>
        <h4>Eyewear</h4>
        <h4>Ayush</h4>
        <h4>Ayurvedic</h4>
        <h4>Homeopathy</h4>
        <h4>Fitness</h4>
        <h4>Mom & Baby</h4>
        <h4>Devices</h4>
        <h4>Surgicals</h4>
        <h4>Sexual Wellness</h4>
        <h4>Treatments</h4>
    </div>
    </div> 

  </div>`

  return nav;
}

export { nav };