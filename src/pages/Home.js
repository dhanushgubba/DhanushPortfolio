import React from "react";
import './Home.css';
import ProfileImage from '../images/myprofileimage.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <img src={ProfileImage} alt="Profile" />
                <div className="home-text">
                    <h1>I AM <span className="highlight">DHANUSH GUBBA</span></h1>
                    <h2 className="fade-text first">A Passionate Full Stack Developer</h2>
                    <h2 className="fade-text second">I am a Computer Science Student</h2><br/><br/><br/>
                    <h3>Currently Pursuing B.Tech (CSE) at KL University</h3> 
                    
                    <div className="fun-fact-container">
                        <button type="submit" className="fun-fact">
                            <i className="fas fa-lightbulb"></i> Fun Fact:
                        </button>
                        <p>First virus 'Brain' protected software!</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Made By Dhanush using <i className="fab fa-react"></i>React JS</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/gubba-venkata-naga-dhanush-43151b255/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/dhanushgubba" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/dhanush_2005.psds/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:2200030302@kluniveristy.in" className="social-icon">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>  
        
    );
}

export default Home;
