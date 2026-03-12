import React from "react";
import "../assets/css/style.css"; // We'll write CSS separately

function Resume() {
  return (
    <div className="resume-container text-white" id='resume'>
      <h1 style={{fontWeight: "normal", fontSize: "40px"}} className="text-center text-white mb-5 mt-5">Resume</h1>

      <div className="resume-columns">
        <div className="resume-column mt-5">
          <h2 className="mb-3" style={{fontWeight: "bold"}}>○ Skills</h2>
          <ul>
            <li>Programming Languages: C, Python, HTML, CSS, JavaScript</li>
            <li>IDE/Editors: VS Code, Arduino IDE</li>
            <li>Libraries/Frameworks:Bootstrap, Django, React</li>
            <li>Database: MySQL, SQLite</li>
            <li>Version Control: Git, Github</li>
            <li>Web Development: HTML, CSS, JavaScript, React, RESTAPI</li>
            <li>Soft Skills: Adaptability, Fast Learner, Team Collaboration, Coachability</li>
          </ul>

          <h2 className="mb-3" style={{fontWeight: "bold"}}>○ Education</h2>
          <ul>
            <li>B.Tech in Electronics and Communication Engineering</li>
            <li>Cochin University of Science and Technology ( GPA -8.33) </li>
          </ul>
        </div>

        <div className="resume-column mt-5">
          <h2 className="mb-3" style={{fontWeight: "bold"}}>○ Projects</h2>
          <ul>
            <li>
              ─ Fitnex : <br /> A platform that helps users track workouts, manage fitness routines, and monitor progress. Built with modern web technologies and integrated backend functionality.
            </li>
            <li>
              ─ Cravery : <br />A food delivery platform where users can browse menus, place orders, and manage food deliveries through an interactive interface with database integration.
            </li>
            <li>
              ─ LuxeStay : <br /> The project focuses on responsive design, modern UI layout, and user-friendly navigation for showcasing resort services and amenities.
            </li>
          </ul>
        </div>
      </div>
      <a href='#contact' className="scroll-down">ˬ</a>
    </div>
  );
}

export default Resume;