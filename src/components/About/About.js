import './About.css';
import Me from './Me.png';


function About() {
   return (
    <div className="about container">
       
        <header>About Me</header>  
         <img className='logo'id='Me' src={Me} alt='Me'></img>
         <p> I am a avid learner. I am always looking for ways to improve to 
            become the best I can be at my craft. Here are a few words I would use to describe myself.The first
            being hardworking, I would use this term to describe myself because
            The second team player
            The third detailed oriented
            The final 
            team player, detailed oriented and perfectionist.  I would use team player because I work well 
             in groups. Here's a link to my resume
         </p>
         {/* <Link>Resume</Link> */}
    </div>
   ) 
    
}
export default About;