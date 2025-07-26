import {FaInstagram,FaGithub,FaLinkedin} from "react-icons/fa";
import './App.css'

const Footer=()=>{
  return(
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Dawar's Portfolio</h3>
            <p className="text-slate-400 text-sm">Building The Future Through Code And Creativity</p>
          </div>
          
          <div className="flex gap-6">
  <a href="https://github.com"
    className="text-slate-400 hover:text-white transition duration-300 transform hover:scale-110">
    <FaGithub className="w-6 h-6"/>
  </a>
  <a
    href="https://linkedin.com"
    className="text-slate-400 hover:text-blue-600 transition duration-300 transform hover:scale-110">
    <FaLinkedin className="w-6 h-6"/>
  </a>
  <a
    href="https://instagram.com"
    className="text-slate-400 hover:text-pink-500 transition duration-300 transform hover:scale-110">
    <FaInstagram className="w-6 h-6"/>
  </a>
</div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">Made By Syed Dawar Ali Shah - {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;