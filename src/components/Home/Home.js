import './Home.css';
import {Link} from "react-router-dom"



function Home() {
   return (
    <div className="about">
         <Link to="/"> <button className="todo-button">Home</button></Link>
        Home
    </div>
   ) 
    
}
export default Home;