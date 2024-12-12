import React from "react";
import './Home.css';
import ProfileImage from '../images/myprofileimage.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <img src={ProfileImage} alt="Profile" />
                <div className="home-text">
                    <h1>I AM <span className="highlight">V N DHANUSH GUBBA</span></h1>
                    <h2 className="fade-text first">A Passionate Full Stack Developer</h2>
                    <h2 className="fade-text second">I am a Computer Science Student</h2><br/><br/><br/>
                    <h3>Currently Pursuing B.Tech (CSE) at KL University</h3> 
                    
                    <div className="fun-fact-container">
                        <button type="submit" className="fun-fact">
                            <i className="fas fa-lightbulb"></i> Fun Fact:
                        </button>
                        <p>First virus 'Brain' protected software!</p>
                    </div>
                    <div className="footer">
                        <p>Made By Dhanush using the React JS</p>
                    </div>
                </div>
            </div>
            
        </div>  
    );
}

export default Home;
