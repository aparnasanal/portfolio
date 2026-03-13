import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Foot from './components/Foot'

function App() {
  const user = {"name" : "Aparna Sanal"}
  return (
    <div>
      <NavBar></NavBar>
      <Home user={user}></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
      {/* <Foot></Foot> */}
    </div>
  )
}

export default App
