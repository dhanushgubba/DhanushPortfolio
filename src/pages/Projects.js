import React from "react";
import './Projects.css';
import JFSDImage from '../images/JFSDProject.png';
import EPImage from '../images/epimage.png';
import VotingImage from '../images/votingimage.png';

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-container">
                <div className="project-item">
                    <img src={JFSDImage} alt="Domestic Violence" className="project-image" />
                    <h2>Gender Responsive Mechanism to Combat Violence</h2>
                    <p>~ JFSD (SpringBoot)</p>
                    <a href="https://safeheavendomesticsdpproject.up.railway.app/" target="_blank" rel="noopener noreferrer">
                        <button className="btn">View Project</button>
                    </a>
                </div>
                <div className="project-item">
                    <img src={EPImage} alt="E-Approval System" className="project-image" />
                    <h2>E-Approval System (Document Approval System) </h2>
                    <p>~ EP (Enterprise Programming) </p>
                    <a href="https://github.com/dhanushgubba/E-ApprovalSystem" target="_blank" rel="noopener noreferrer">
                        <button className="btn">View Project</button>
                    </a>
                </div>
                <div className="project-item">
                    <img src={VotingImage} alt="Voting System" className="project-image" />
                    <h2>Gender Responsive Mechanism to Combat Violence</h2>
                    <p>~ MERN STACK</p>
                    <a href="https://github.com/dhanushgubba/votingsys.git" target="_blank" rel="noopener noreferrer">
                        <button className="btn">View Project</button>
                    </a>
                </div>
            </div>

        </div>  
    );
}

export default Projects;
