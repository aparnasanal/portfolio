import React, { useState } from "react";

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="nav-container" style={{position: "fixed"}}>

        <h1 style={{ color: "white", fontSize: "20px" }}>Aparna.</h1>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </div>
  );
}

export default NavBar;