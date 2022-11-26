import './Home.css';
import logo from './Logo.png';


function Home() {
   return (
    <div className='home container'>  
      <header>Welcome to my Portfolio</header>
    <img className='logo' id='Me' alt='Me' src={logo}></img>
    </div>
   ) 
    
}
export default Home;