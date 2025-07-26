import './App.css'

const NavBar=({darkMode,setDarkMode})=>{
  return(
    <nav className="flex justify-between items-center px-8 py-6 bg-slate-900 border-b border-slate-800">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Dawar's Portfolio</h1>

      <div className="flex gap-6 items-center">

        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-slate-300 font-medium text-sm hover:text-teal-400 transition">About</a>
          <a href="#skills" className="text-slate-300 font-medium text-sm hover:text-teal-400 transition">Skills</a>
          <a href="#projects" className="text-slate-300 font-medium text-sm hover:text-teal-400 transition">Projects</a>
        </nav>

        <div className="flex items-center gap-3 cursor-pointer" onClick={()=>setDarkMode(!darkMode)}>

  <span className="text-sm text-slate-300">{darkMode ? "Dark Mode" : "Light Mode"}</span>

  <div className={`w-14 h-8 flex items-center bg-slate-600 rounded-full p-1 transition duration-300`}>

  <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition duration-300 ${darkMode ? "translate-x-6" : ""}`}/>
  
  </div>

      </div>

    </div> 

    </nav>
  )
}

export default NavBar;