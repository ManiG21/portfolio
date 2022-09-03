import './Home.css';
import {Link} from "react-router-dom"
import logo from './Logo.png';


function Home() {
   return (
    <div className='Home'>  
      <header>Welcome to my Portfolio</header>
    <img id='Me' src={logo}></img>
    </div>
   ) 
    
}
export default Home;