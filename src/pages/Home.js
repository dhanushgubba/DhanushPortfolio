import React from "react";
import './Home.css';
import ProfileImage from '../images/myprofile.jpg';
const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>My name is Dhanush</h1>
                <img src={ProfileImage} alt="" />
            </div>
        </div>  
    );
}
export default Home;