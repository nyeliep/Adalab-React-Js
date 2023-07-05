import React from "react";
import './style.css'

const Homepage = ()=>{
  return(
    <>
     <section id="home">
    <div className="home">
     
      <div>
      <h1>Master the art<br></br> of realism</h1>
      <p>July 4 - Aug 10<br></br>
        View at the Met First Avenue in Gallery 101<br></br>
        Accompanied by a catalogue and an audio Guide<br></br>
      </p>
      </div>
      <img src='/media/savee14.webp'  className="homeImg1"  alt="one"/>
      <img src='/media/savee10.webp'  className="homeImg"  alt="one"/>
    
    </div>
    </section>
    </>
  )
}

export default Homepage