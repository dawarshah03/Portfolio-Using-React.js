import './App.css'

const About=()=>{
  return(
    <section id="about" className="px-8 py-20 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2 order-2 md:order-1">
          <h2 className="text-3xl font-extrabold text-gray-500 mb-6">Frontend Developer &<br/>AI Enthusiast</h2>
          <p className="text-lg leading-relaxed mb-8 font-bold">
            I'm Dawar Shah, a Software Engineering Student passionate about creating beautiful, functional interfaces
            and exploring the possibilities of Artificial Intelligence.
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">Download CV</button>
            <button className="px-6 py-3 rounded-lg font-medium border border-slate-300 bg-gray-100 text-gray-800 hover:bg-white hover:border-teal-500 hover:text-teal-600 hover:shadow-lg hover:scale-105 transition-all duration-300">Contact Me</button>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="w-64 h-64 bg-gradient-to-tr from-teal-500 to-emerald-600 rounded-full absolute inset-0 blur-3xl opacity-20" />
          <img src="/src/about.jpeg" className="relative w-64 h-64 rounded-full object-cover border-4 border-slate-900 shadow-xl"/>
        </div>
      </div>
    </section>
  )
}

export default About;