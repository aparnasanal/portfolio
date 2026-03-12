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
desc: "The project focuses on responsive design, modern UI layout, and user-friendly navigation for showcasing resort services and amenities.",
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
desc: "A platform that helps users track workouts, manage fitness routines, and monitor progress. Built with modern web technologies and integrated backend functionality.",
tech: ["HTML","CSS","Bootstrap","Python","Django","SQLite"],
highlights:[
"Workout tracking",
"AI diet engine",
"AI workout suggestions",
"Workout tutorials"
]
},

{
title: "Cravery",
tag: "Full Stack",
img: cravery,
repo: "https://github.com/aparnasanal/Cravery.git",
desc: "A food delivery platform where users can browse menus, place orders, and manage food deliveries through an interactive interface with database integration.",
tech: ["HTML","CSS","Bootstrap","Python","Django","SQLite"],
highlights:[
"Food ordering system",
"Interactive UI",
"Backend database"
]
}

];

return (

<div className="projects-section" id="projects">

<h1 style={{fontWeight: "normal", fontSize: "40px"}} className="projects-title">Projects</h1>

<div className="projects-grid">

{projects.map((p,index)=>(

<div className="project-card" key={index}>

<img src={p.img} width={'290px'} className="project-img"/>

<div className="project-body mt-3">

<span className="tag">{p.tag}</span>

<h3>{p.title}</h3>

<p className="mb-3">{p.desc}</p>

<h6 className="mb-3">Highlights:</h6>

<ul>
{p.highlights.map((h,i)=>(
<li key={i}>✓ {h} </li>
))}
</ul>

<div className="tech-stack">
{p.tech.map((t,i)=>(
<span key={i}>{t}</span>
))}
</div>

<div className="project-buttons">
  <a href={p.repo} target="_blank" rel="noreferrer" className="code">GitHub</a>
  <a href={p.demo} target="_blank" rel="noreferrer" className="demo">Demo</a>
</div> 
</div>

</div>

))}

</div>
<a href='#resume' className="scroll-down">ˬ</a>

</div>

)

}

export default Projects