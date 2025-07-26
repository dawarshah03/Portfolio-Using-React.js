import './App.css'

const Skills=()=>{
  const skills=["Python","React","Node.js","Express.js","C++","MongoDB","JavaScript","Java"];
  return(
    <section id="skills" className="px-8 py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-100 mb-12 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill,index)=>(
            <div key={index} className="p-4 bg-white dark:bg-slate-800 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                </div>
                <span className="font-medium text-slate-300">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;