import './About.css';
import Me from './Me2.jpeg';
import Chicken from './Chicken.JPG';
import Gohan from './Gohan-ssj2.gif'
import Linkin from './Linkin.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image';
// import { useState } from 'react';
// import Resume from './Armani_Grant_Resume.docx'

const hobbyImages = [
   {
      img: <img src={Chicken}> </img> 
   },
   {
      img: <img src= {Gohan} ></img> 
   },
   {
      img:
   }
]

function About() {
   // Create a variable to store where we are in the carousel
   // Create a way to automatically increment the carousel number 
      // When are our Carousel is out of images reset to the first one
      // Need animations for images going out and in

   // useState()
   
   return (
      <div className="about container">

         <header>About Me</header>

         <div className='para'> <h2 id='ab'>Introduction </h2>
            <div className='row wrap'>
               <img className='logo' id='Me' src={Me} alt='Me'></img>
               <p className='intro'> Hello my name is Armani Grant. I am a avid
                  learner that is always looking for ways to improve to become the best I can be at my craft.
                  I have a passion for front-end website development. When designing I use my creativity and
                  attention to detail to implement my ideas into code. I aspire to go into to career in front-end
                  website development and eventually UI/UX design as my pursuit for knowledge continues. </p>
               {/*Here's a link to my resume:  <Link src= {Resume}>Resume</Link> */} </div>
         </div>

         <div className='para'> 
            <h2 id='ab'>Personal Interests/Hobbies</h2>
            <div className='row wrap'>   
               <div>
                  <img className='logo' id='Chick' src={Chicken} alt='Chicken'></img>
                  <img className='logo' id='ssj' src={Gohan} alt='Gohan'></img>
              </div>

               <p> Here are a few things are enjoy doing  in my free time. I really enjoy cooking, my favorite dish to cook is Chicken Parmagina. My favorite
                  sport is basketball, I have played it for most of my life and still occasionally to this day.
                  I workout regularly whether it's lifting weights, calistentics or just simply going for a walk in
                  the park (at least once a day). Music is a constant in my life, it's something I listen to everyday and all different
                  types depending the feel of the day. Some of my favorite artists are Michael Jackson, Ne-Yo, Alicia Keys
                  and Linkin Park.
               </p> 
               
            </div>
         </div>
      </div>
   )

}
export default About;