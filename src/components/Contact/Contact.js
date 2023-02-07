import './Contact.css';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";




function Contact() {
   return (

      
      <div className="contact container">

         <header> My Contacts</header>
         <a href='https://github.com/ManiG21'> <GoMarkGithub className='logos logo' /></a>
       <a href='https://www.linkedin.com/in/armani-grant-1a7b75227/'><AiFillLinkedin id='w' className='logos logo' /></a>
       {/* <a href='https://www.linkedin.com/in/armani-grant-1a7b75227/'><AiFillLinkedin className='logos logo' /></a> */}
      {/* <a> <button href='https://docs.google.com/document/d/1pVDDVXQyLd6HbmMB4lzG6WT-9g4pbLmh/edit?usp=sharing&ouid=115760810265057557144&rtpof=true&sd=true' className="buttonNav">My Resume</button> </a> */}
         
      </div>
   )

}
export default Contact;