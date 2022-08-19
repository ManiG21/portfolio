import './Home.css';
import {Link} from "react-router-dom"
// import logo from './logo';


function Home() {
   return (
    <div className="nav-button">
         <Link to="/"> <button id='home-button'>Home</button></Link>
         <Link to="/contact"> <button id='contact-button'>Contact</button></Link>
         <Link to="/about"> <button id='about-button'>About</button></Link>
         <Link to="/projects"> <button id='projects-button'>Projects</button></Link>
         {/* <img src={Logo} alt='logo'></img> */}
        
    </div>
   ) 
    
}
export default Home;