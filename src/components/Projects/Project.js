import './Project.css';
import {Link} from "react-router-dom"



function Project() {
   return (
    <div className="about">
         <Link to="/"> <button className="todo-button">Home</button></Link>
         {/* <Link to="/"> <button className="todo-button">Home</button></Link>
         <Link to="/"> <button className="todo-button">Home</button></Link> */}
        Projects
    </div>
   ) 
    
}
export default Project;