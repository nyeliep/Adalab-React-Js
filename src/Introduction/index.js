import React from "react";
import './style.css'

const Introduction = () => {
return (
  <section id="exhibition">
  <div className="container">
  {/* <h1 className="heading">What I have learnt about ReactJS</h1>
  <p>It has reusable components</p>
  <p>The writing format is JSX</p>
  <p>It is fast</p> */}
  {/* <h1>Gallery</h1> */}
  <div className="image-grid">
  
  <img src='/media/savee1.webp'  className="grid-item" alt="one"/>
  <img src='/media/savee2.webp'  className="grid-item" alt="one"/>
  <img src='/media/savee6.webp'  className="grid-item" alt="one"/>
 
 
  
  <img src='/media/savee3.webp'  className="grid-item" alt="one"/>

  <img src='/media/savee4.webp'  className="grid-item" alt="one"/>
  <img src='/media/savee5.webp'  className="grid-item" alt="one"/>
  <img src='/media/savee11.webp'  className="grid-item" alt="one"/>
  <img src='/media/savee8.webp'  className="grid-item" alt="one"/>
  <img src='/media/savee10.webp'  className="grid-item" alt="one"/>
 
  </div>
 
  
  </div>
  </section>
);
};

export default Introduction