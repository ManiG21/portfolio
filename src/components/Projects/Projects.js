import './Projects.css';
import { Link } from "react-router-dom"
import mult from './MultiVersus.mp4'


function Project() {
   return (
      <div className='pro-buttons-container'>
         <header>My Projects</header>
         <div className="pro-buttons">
           {/* <video src={mult}>
             
           </video> */}
         
            <a className='project-button' id='Calc' href='https://manig21.github.io/Calculator-Project/' target='_blank' >Calculator</a>
            <a className='project-button'  id='Game' href='https://www.google.com/' target='_blank' >Game Project</a>
            <a className='project-button'id='Music' href='https://www.google.com/' target='_blank' >Coming Soon</a>
            <a className='project-button' id='Pro' href='https://www.google.com/' target='_blank' >Coming Soon</a>
            {/* <a className='project-button' href=''> <div >Game Project</div></a>
            <a className='project-button' href=''> <div >Coming Soon</div></a>
            <a className='project-button' href=''> <div >Coming Soon</div></a> */}
         </div>
      </div>
   )

}
export default Project;