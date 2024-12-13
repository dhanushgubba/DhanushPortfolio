import React from "react";
import './About.css';
import AboutImage from '../images/image.jpg';

const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <h1>About Me</h1>
                <div className="about-content">
                    <div className="about-text">
                        <h2>Hello! I'm VENKATA NAGA DHANUSH GUBBA</h2>
                        <p>
                            I am a passionate web developer with experience in creating dynamic and responsive websites. I specialize in full-stack development and love building modern web applications.
                        </p>
                        <p>
                            I enjoy learning new technologies and constantly improving my skills. In my free time, I work on personal projects and contribute to open-source.
                        </p>
                        
                        <a href="images/ResumeApplication.pdf" class="btn" download="ResumeApplication.pdf">Download Resume</a>

                    </div>
                    <div className="about-image">
                        <img src={AboutImage} alt="About Me" />
                    </div>
                </div>

                <div className="education-skills">
                    <h2>Education</h2>
                    <div className="education-cards">
                        <div className="education-card">
                            <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/hrvvw25qyybbhafnmbav" alt="University" />
                            <h3>Bachelor of Science in Computer Science</h3>
                            <p>KL University <br /> <i class="fas fa-clock"></i> (2022 - Present)</p>
                            <p><i class="fas fa-map-marker-alt"></i> Vijayawada, AP</p>

                        </div>

                        <div className="education-card">
                            <img src="https://pbs.twimg.com/profile_images/974315991575404544/HfeaY4PV_400x400.jpg" alt="College" />
                            <h3>Intermediate</h3>
                            <p>Sri Chaitanya College <br /> <i class="fas fa-clock"></i> (2020 - 2022)</p>
                            <p><i class="fas fa-map-marker-alt"></i> Guntur, AP</p>
                        </div>

                        <div className="education-card">
                            <img src="https://bhashyamschools.com/assets/images/logo/logo.png" alt="School" />
                            <h3>Secondary Education</h3>
                            <p>Bhashyam Educational Institutions <br /> <i class="fas fa-clock"></i> (2011 - 2020)</p>
                            <p><i class="fas fa-map-marker-alt"></i> Guntur, AP</p>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <h2>Skills</h2>
                    <div className="skills-container">
                        <div className="skills-group">
                            <h3>Frontend Development</h3>
                            <ul>
                                <li><i className="fa fa-html5"></i> HTML</li>
                                <li><i className="fa fa-css3"></i> CSS</li>
                                <li><i className="fa fa-js"></i> JavaScript</li>
                                <li><i className="fab fa-react"></i> React</li>
                            </ul>
                        </div>
                        <div className="skills-group">
                            <h3>Backend Development</h3>
                            <ul>
                                <li><i className="fab fa-node-js"></i> Node.js</li>
                                <li><i className="fab fa-java"></i> Spring Boot (Java)</li>
                                <li><i className="fab fa-python"></i> Django (Python)</li>
                            </ul>
                        </div>

                        <div className="skills-group">
                            <h3>Database Management</h3>
                            <ul>
                                <li><i className="fas fa-database"></i> MySQL</li>
                                <li><i className="fas fa-database"></i> MongoDB</li>
                            </ul>
                        </div>

                        <div className="skills-group">
                            <h3>Version Control</h3>
                            <ul>
                                <li><i className="fab fa-github"></i> Git</li>
                                <li><i className="fab fa-github"></i> GitHub</li>
                            </ul>
                        </div>
                    </div>
                    <p className="footer-class">Made By Dhanush using <i className="fab fa-react"></i>React JS</p>
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
        </div>
    );
}

export default About;
