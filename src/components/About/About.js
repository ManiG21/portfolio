import './About.css';
import Me from './Me2.jpeg';
// import Resume from './Armani_Grant_Resume.docx'


function About() {
   return (
    <div className="about container">
       
        <header>About Me</header>  
         <img className='logo'id='Me' src={Me} alt='Me'></img>
         <p className='para'>Hello my name is Armani Grant. I am a avid learner that is always looking for ways to improve to 
            become the best I can be at my craft. I have a passion front-end website development. 
            When designing I use my creativity and attention to detail to implement my ideas into code. 
            I aspire to go into to career in front-end website development and eventually UI/UX design as my pursuit for knowledge continues.
            {/* Here's a link to my resume <Link src= {Resume}>Resume</Link> */}
             
         </p>
    </div>
   ) 
    
}
export default About;