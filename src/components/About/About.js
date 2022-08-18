import './About.css';
import {Link} from "react-router-dom"



function About() {
   return (
    <div className="about">
         <Link to="/"> <button className="todo-button">Home</button></Link>
        This is the About Page!!
    </div>
   ) 
    
}
export default About;