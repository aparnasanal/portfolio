import React from 'react'
import img1 from '../assets/images/about-img.png'

function About() {
  return (
    <div id='about' className='about-bg'>
      <div className="about-container">

        <div className="headings">

          <h4>About Me</h4>
          <h1>FROM CIRCUITS TO CODE</h1>

          <p>
            My journey started with Electronics and Communication Engineering, where I developed strong analytical and problem-solving skills.
            Gradually, my interest shifted towards software development and building digital solutions.
            Today, I work with technologies like React, Django, JavaScript, and Python to create responsive
            and user-friendly web applications, constantly learning and growing as a Full Stack Developer.
          </p>

          <h4 className="edu-heading">Education</h4>
          <div className="edu-card">
            <div className="edu-icon">
              <i className="bi bi-mortarboard" />
            </div>
            <div className="edu-body">
              <p className="edu-degree">BTech in Electronics & Communication Engineering</p>
              <p className="edu-uni">Cochin University of Science and Technology</p>
              <span className="edu-badge">
                <i className="bi bi-geo-alt" /> Kochi, India
              </span>
            </div>
          </div>


        </div>
    <a href='#skills' className="scroll-down">ˬ</a>
      </div>
    </div>
  )
}

export default About
