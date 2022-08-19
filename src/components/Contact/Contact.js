import './Contact.css';
import {Link} from "react-router-dom"



function Contact() {
   return (
    <div className="contact">
         <Link to="/"> <button className="home-button">Home</button></Link>
         <Link to="/about"> <button id='about-button'>About</button></Link>
         <Link to="/projects"> <button id='projects-button'>Projects</button></Link>
        This is my Contact Page
    </div>
   ) 
    
}
export default Contact;