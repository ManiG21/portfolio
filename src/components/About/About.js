import './About.css';
import Me from './Me2.jpeg';
import Chicken from './Chicken.JPG';
// import Resume from './Armani_Grant_Resume.docx'


function About() {
   return (
    <div className="about container">
       
        <header>About Me</header>  
         <img className='logo'id='Me' src={Me} alt='Me'></img>
         <p className='para'> <h2 id='ab'>Introduction </h2> Hello my name is Armani Grant. I am a avid learner that is always looking for ways to improve to 
            become the best I can be at my craft. I have a passion for front-end website development. 
            When designing I use my creativity and attention to detail to implement my ideas into code. 
            I aspire to go into to career in front-end website development and eventually UI/UX design as my pursuit for knowledge continues.
            {/* A link to my resume <Link src= {Resume}>Resume</Link> */}
         </p>
         <img className='logo'id='Chick' src={Chicken} alt='Me'></img>

         <p className='para'> <h2 id='ab'>Personal Interests/Hobbies</h2>Here are a few things are enjoy doing in my free time. I really enjoy cooking, my favorite dish to cook is 
            Chicken Parmagina. My favorite sport is basketball, I have played it for most of my life and still 
            occasionally to this day. I workout regularly whether it's lifting weights, calistentics or just simply
            going for a walk in the park (at least once a day). 
         </p>
    </div>
   ) 
    
}
export default About;