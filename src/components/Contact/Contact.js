import './Contact.css';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";



function Contact() {
   return (
      <div className="contact container">
         <header> Contact Me </header>
         <div className='logos'>
         <a href='https://github.com/ManiG21'> <GoMarkGithub className='logos' id='git' /></a>
         <a href='https://github.com/ManiG21'> <MdEmail className='logos' /></a>
         <a href='https://www.linkedin.com/in/armani-grant-1a7b75227/'><AiFillLinkedin className='logos' /></a>
         </div>
      </div>
   )
}
export default Contact;