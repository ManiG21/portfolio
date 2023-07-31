import './Contact.css';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";




function Contact() {
   return (

      <div className="contact container">
         <header> Contact Me </header>
         <a href='https://github.com/ManiG21'> <GoMarkGithub className='logos logo' /></a>
         <a href='https://www.linkedin.com/in/armani-grant-1a7b75227/'><AiFillLinkedin id='w' className='logos logo' /></a>
      </div>
   )
}
export default Contact;