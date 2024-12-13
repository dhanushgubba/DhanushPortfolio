import React, { useState } from "react";
import './Contact.css';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent!");
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <div className="contact-info">
                <div className="contact-item">
                    <FaGithub className="contact-icon" />
                    <a href="https://github.com/dhanushgubba" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
                <div className="contact-item">
                    <FaLinkedin className="contact-icon" />
                    <a href="https://www.linkedin.com/in/gubba-venkata-naga-dhanush-43151b255/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
                <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <span>+91 9100638384</span>
                </div>
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <a href="mailto:2200030302@kluniversity.in" target="_blank" rel="noopener noreferrer">
                        Email
                    </a>
                </div>
                <div className="contact-item">
                    <FaInstagram className="contact-icon" />
                    <a href="https://www.instagram.com/dhanush_2005.psds" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>
            <h2 className="contact-form-title">Or, Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
