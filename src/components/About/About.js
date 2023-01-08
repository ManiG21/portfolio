import './About.css';
import Me from './Me2.jpeg';


function About() {
   return (
    <div className="about container">
       
        <header>About Me</header>  
         <img className='logo'id='Me' src={Me} alt='Me'></img>
         <p className='para'> I am a avid learner. I am always looking for ways to improve to 
            become the best I can be at my craft. I am developer that enjoys front-end website development. 
            I use my creativity and attention to detail to implement my ideas into code. 
            I aspire to go into website development and eventually UI/UX design with my newly acquired knowledge.
             Here's a link to my resume
         </p>
         {/* <Link>Resume</Link> */}
    </div>
   ) 
    
}
export default About;