import React from 'react'
import img1 from '../assets/images/python.png'
import img2 from '../assets/images/mysql.png'
import img3 from '../assets/images/django.png'
import img4 from '../assets/images/html.png'
import img5 from '../assets/images/css.png'
import img6 from '../assets/images/bootstrap.png'
import img7 from '../assets/images/react.png'
import img8 from '../assets/images/js.png'

function Skills() {

const skills = [
  {name:"Python", img:img1, level:"90%", color:"bg-light"},
  {name:"Django", img:img3, level:"85%", color:"bg-light"},
  {name:"HTML", img:img4, level:"95%", color:"bg-light"},
  {name:"CSS", img:img5, level:"95%", color:"bg-light"},
  {name:"JavaScript", img:img8, level:"75%", color:"bg-light"},
  {name:"React", img:img7, level:"70%", color:"bg-light"},
  {name:"Bootstrap", img:img6, level:"90%", color:"bg-light"},
  {name:"MySQL", img:img2, level:"95%", color:"bg-light"}
]

  return (
    <div className="container py-5" id='skills'>

      <h1 style={{fontWeight: "normal", fontSize: "40px"}} className="text-center text-white mb-5">Skills</h1>

      <div className="row g-4">

        {skills.map((skill,index)=>(
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>

            <div className="card skill-card text-center p-4">

              <img src={skill.img} alt={skill.name} className="skill-icon"/>

              <h5 className="mt-3 text-white" style={{fontWeight: "600"}}>{skill.name}</h5>

              <div className="progress mt-3 mb-3">
                <div
                  className={`progress-bar ${skill.color}`}
                  style={{width: skill.level,}}
                >
                </div>
              </div>
              

            </div>

          </div>
        ))}


      </div>
      <a href='#projects' className="scroll-down">ˬ</a>

    </div>
  )
}

export default Skills