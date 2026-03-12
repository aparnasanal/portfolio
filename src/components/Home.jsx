import React from 'react'
import '../assets/css/style.css'
import bg from '../assets/images/bg.png'
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div id='home'>
      <div
        className="home-container"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center -150px",
          backgroundSize: "cover"
        }}
      >

        <div className="hero-content">

          <h1 className="name">Aparna Sanal</h1>

          <p className="tagline">
            <i>
              I'm a{" "}
              <ReactTyped
                strings={["Full Stack Developer"]}
                typeSpeed={30}
                backSpeed={50}
                loop
              />
            </i>
          </p>

          <div className="btn-container">
            <button className="resume-btn">Resume</button>

            <button className="project-btn">
              Projects
            </button>
          </div>

        </div>
        <a href='#about' className="scroll-down">ˬ</a>
      </div>
    </div>
  )
}

export default Home