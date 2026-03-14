import React from "react";
import luxe from "../assets/images/luxestay.png";
import fitnex from "../assets/images/fitnex.png";
import cravery from "../assets/images/cravery.png";
import "../assets/css/style.css";

function Projects() {

const projects = [
{
title: "LuxeStay",
tag: "Frontend",
img: luxe,
repo: "https://github.com/aparnasanal/LuxeStay.git",
demo: "https://aparnasanal.github.io/LuxeStay/",
desc: "A responsive resort website designed to showcase luxury accommodation, amenities, and services. The project focuses on modern UI layout, smooth navigation, and an engaging visual experience for users.",
tech: ["HTML","CSS","Bootstrap"],
highlights:[
"Responsive resort layout",
"Modern UI design",
"Bootstrap components"
]
},

{
title: "Fitnex",
tag: "Full Stack",
img: fitnex,
repo: "https://github.com/aparnasanal/Fitnex.git",
desc: "A fitness web application that helps users track workouts, follow exercise routines, and monitor progress. The platform integrates backend functionality to manage workout data and personalized suggestions.",
tech: ["HTML","CSS","Bootstrap","Python","Django","SQLite"],
highlights:[
"Workout tracking",
"AI diet engine",
"AI workout suggestions",
]
},

{
title: "Cravery",
tag: "Full Stack",
img: cravery,
repo: "https://github.com/aparnasanal/Cravery.git",
desc: "A food delivery web platform where users can browse restaurant menus, place food orders through an interactive interface with database integration and backend functionality.",
tech: ["HTML","CSS","Bootstrap","Python","Django","SQLite"],
highlights:[
"Food ordering system",
"Browse restaurants",
"Interactive UI",
"Backend database"
]
}

];

return (
  <section id="projects">
    <div className="projects-section">

<h1 style={{fontWeight: "normal", fontSize: "40px"}} className="projects-title">Projects</h1>

<div className="projects-grid">

{projects.map(p=>

<div className="project-card">

<img src={p.img} width={'290px'} className="project-img"/>

<div className="project-body mt-3">

<span className="tag">{p.tag}</span>

<h3>{p.title}</h3>

<p className="mb-3">{p.desc}</p>

<h6 className="mb-3">Highlights:</h6>

<ul>
{p.highlights.map(h=>
<li>✓ {h}</li>
)}
</ul>

<div className="tech-stack">
{p.tech.map(t=>
<span>{t}</span>
)}
</div>

<div className="project-buttons">
  <a href={p.repo} target="_blank" rel="noreferrer" className="code">GitHub</a>
  {p.demo && (
    <a href={p.demo} target="_blank" rel="noreferrer" className="demo">Demo</a>
  )}
</div> 
</div>
</div>

)}

</div>
<a href='#resume' className="scroll-down">ˬ</a>

</div>
  </section>



)

}

export default Projects