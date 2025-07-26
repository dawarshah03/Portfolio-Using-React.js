import { useState} from "react";
import './App.css'
import NavBar from './NavBar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

const App=()=>{
  const [darkMode,setDarkMode]=useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#111827" : "#F3F4F6",
        color: darkMode ? "#F3F4F6" : "#111827"
      }}
      className={
        `min-h-screen transition-colors duration-500 ${darkMode ? "dark" : ""}`
      }
    >
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App