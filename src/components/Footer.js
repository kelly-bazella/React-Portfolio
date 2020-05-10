import React from "react";

function Footer() {
  return (
  
      <footer className="fixed-bottom" style={{backgroundColor:"salmon", height: "60px"}}>
        <div className="container">
          <div className="col-md-9">
          <h4>Kelly Bazella</h4>
        <p>Aspiring Web Developer</p>
          </div>
        <div className="col-md-3">
         <a href="https://www.linkedin.com/in/kellybazella/" 
           target="_blank"
           rel="noopener noreferrer"
           className="btn btn-primary"
         >LinkedIn</a>
       
        </div>
        </div>
       
      </footer>
    
  );
}

export default Footer;
