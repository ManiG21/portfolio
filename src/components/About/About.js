import './About.css';
import {Link} from "react-router-dom"
// import Me from './Me.png';


function About() {
   return (
    <div className="about">
         <Link to="/"> <button className="todo-button">Home</button></Link>
         <Link to="/contact"> <button id='contact-button'>Contact</button></Link>
         <Link to="/projects"> <button id='projects-button'>Projects</button></Link>
         About Me 
         {/* <img src={Me} alt='Me'></img> */}
    </div>
   ) 
    
}
export default About;