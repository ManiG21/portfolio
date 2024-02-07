import './Projects.css';

function Project() {
   return (
      <div className='pro-buttons-container container'>
         <header>My Projects</header>
         <div className="pro-buttons">
         {/* <video  width="320" height="240" autoPlay muted>
             <source src={mult} type='video/mp4'></source>
           </video> */}
           
         {/* <video  width="320" height="240" autoPlay muted>
             <source src={mult} type='video/mp4'></source>
           </video> */}
            <a className='project-button' id='Calc' href='https://manig21.github.io/Calculator-Project/' target='_blank' rel='noreferrer' >Calculator</a>
            <a className='project-button' id='Calc' href='https://manig21.github.io/Calculator-Project/' target='_blank' rel='noreferrer' >Calculator</a>
            <a className='project-button'  id='Game' href='https://manig21.github.io/Game-Project/Sonic/sonic.html' target='_blank' rel='noreferrer' >Game Project</a>
            <a className='project-button'id='Movies-More' href='https://imaginative-unicorn-f88fec.netlify.app/' target='_blank' rel='noreferrer' >Movies & More</a>
            <a className='project-button' id='Pro' href='https://main.d3156uqzn4jd72.amplifyapp.com/ ' target='_blank' rel='noreferrer' >Me Myself & I</a>
         
         </div>
      </div>
   )
}
export default Project;