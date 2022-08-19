import './Projects.css';
import {Link} from "react-router-dom"



function Project() {
   return (
    <div className="buttons">
         <Link to="/"> <button className="home-button">Home</button></Link>
         My Projects
         {/* <Link to="/"> <button id='game-button'>Home</button></Link>
         <Link to="/"> <button id='calc-project'>Home</button></Link>
         <Link to="/"> <button id='project-button'>Home</button></Link>
         <Link to="/"> <button id=project-button'>Home</button></Link> */}
      
    </div>
   ) 
    
}
export default Project;