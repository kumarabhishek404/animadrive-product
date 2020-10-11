import React from "react";
import "./Header.css";

function Header() {
  return <header id="home">
      <div className="home-div">
          <div className="img-div">
          {/* <img  src='images/home-section-img.jpg' /> */}
          </div>
          <div className="text">
                <h2>Green Guds</h2>
                <p>Live Organic</p>
          </div>
      </div>
  </header>;
}

export default Header;
