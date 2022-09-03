import './Contact.css';
import { Link } from "react-router-dom"
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";




function Contact() {
   return (
      <div className="contact">
         <header> My Contact</header>
         <a href='https://github.com/ManiG21'> <GoMarkGithub className='logos' /></a>
       <a href='https://www.linkedin.com/in/armani-grant-1a7b75227/'><AiFillLinkedin className='logos' /></a>

      </div>
   )

}
export default Contact;