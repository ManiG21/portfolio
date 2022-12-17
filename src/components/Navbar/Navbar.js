import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return <div className="nav-button">
    <Link to="/"> <button className="buttonNav">Home</button></Link>
    <Link to="/about"> <button className="buttonNav">About</button></Link>
    <Link to="/projects"> <button className="buttonNav">Projects</button></Link>
    <Link to="/contact"> <button className="buttonNav">Contact</button></Link>
    {/* <a href="/Armani_Grant_Resume.docx"> My Resume</a> */}
    {/* <img src={Logo} alt='logo'></img> */}
    
    </div>
}