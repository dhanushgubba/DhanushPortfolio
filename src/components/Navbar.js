import React from "react";
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faTrophy, faProjectDiagram , faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <a href="/"><h1 className="navbar-title">Dhanush Portfolio</h1></a>
                
                <nav className="navbar-links">
                    <a href="/" className="nav-link">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </a>
                    <a href="/about" className="nav-link">
                        <FontAwesomeIcon icon={faInfoCircle} /> About
                    </a>
                    <a href="/achievements" className="nav-link">
                        <FontAwesomeIcon icon={faTrophy} /> Achievements
                    </a>
                    <a href="/projects" className="nav-link">
                        <FontAwesomeIcon icon={faProjectDiagram} /> Projects
                    </a>
                    {/*<a href="/techstacks" className="nav-link">
                        <FontAwesomeIcon icon={faLaptopCode} /> Tech Stacks
                    </a>*/}
                    <a href="/contact" className="nav-link">
                        <FontAwesomeIcon icon={faEnvelope} /> Contact
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
