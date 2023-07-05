import React from "react";
import './style.css'


const Navigation = ()=>{
  return(
    <>
     <div class="scroll-up-btn">
    <i class="fas fa-angle-up"></i>
  </div>

  <nav class="navbar">
    <div class="contain">
      <div class="logo">
        <h1>Art<span>Gallery.</span></h1>
      </div>
      <ul class="nav">
      <li><a href="#home" class="nav-btn">Home</a></li>
        <li><a href="#exhibition" class="nav-btn">Exhibition</a></li>
        <li><a href="#skills" class="nav-btn">Collection</a></li>
        <li><a href="#projects" class="nav-btn">Visit us</a></li>
        <li><a href="#about" class="nav-btn">About Us</a></li>
        {/* <li><a href="#contact" class="nav-btn">Contact</a></li> */}
      </ul>
      <div class="nav-btn">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navigation