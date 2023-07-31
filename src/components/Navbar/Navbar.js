import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => setOpenMenu(!openMenu)
    return <div className="nav-button">
        <button className="hamburger-menu buttonNav" onClick={toggleMenu}>☰</button>
        <div className={`${openMenu ? "opened" : "closed"} navLinkContainer`}>
            <Link to="/"> <button className="buttonNav">Welcome</button></Link>
            <Link to="/about"> <button className="buttonNav">About</button></Link>
            <Link to="/projects"> <button className="buttonNav">Projects</button></Link>
            <Link to="/contact"> <button className="buttonNav">Contact</button></Link>
        </div>
    </div>
}