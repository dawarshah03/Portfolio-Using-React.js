import './App.css'

const Projects=()=>{
  const projects=[
    { 
      title:"Hadith Authenticator", 
      description:"AI-Powered Verification System For Religious Texts",
      tech:["Python","NLP","MERN"]
    },
    { 
      title:"Scientific Calculator", 
      description:"Advanced Calculator With Natural Language Processing",
      tech:["React","Python","MathJS"]
    },
    { 
      title:"Tic-Tac-Toe", 
      description:"Fun Little Interactive Game",
      tech:["JavaScript","HTML","CSS"]
    },
    { 
      title:"Weather Analytics", 
      description:"Real-Time Weather Predictor",
      tech:["Node.js","MongoDB","Python"]
    }
  ];

  return(
    <section id="projects" className="px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-extrabold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project,index)=>(
            <div key={index} className="relative bg-slate-800 rounded-2xl p-6">
              <div className="absolute inset-0 rounded-2xl border border-slate-700 pointer-events-none"/>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech,techIndex)=>(
                  <span key={techIndex} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">{tech}</span>
                ))
                }
              </div>

              <button
                onClick={()=>alert("Project Coming Soon!")}
                className="mt-2 bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;