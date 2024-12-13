import React from "react";
import RedHatImage from '../images/redhat.png';
import AWSImage from '../images/awscloud.png';
import AviatrixImage from '../images/aviatrix.png';
import PostmanImage from '../images/postman.png';
import GoogleCloudImage from '../images/googlecloud.jpg';
import SoftwareTestingImage from '../images/softwaretesting.jpg';
import AWSCloudImage from '../images/awscloudfoundations.png';
import JavaImage from '../images/javanptel.jpg';
import './Achievements.css';

const Achievements = () => {
    return (
        <div className="achievements">
            <h1>My Achievements</h1>
            <div className="achievements-container">
                <a
                    href="https://www.credly.com/badges/5080f01c-2477-4b9b-8a25-c8289864e83d/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={RedHatImage} alt="Red Hat" className="achievement-image" />
                    <h2>Red Hat Enterprise Application Developer</h2>
                    </a>
                    
                
                <a
                    href="https://www.credly.com/badges/c21ec14e-3f77-4f0f-ae4c-d1a9a6c65bb6/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={AWSImage} alt="AWS" className="achievement-image" />
                    <h2>AWS Certfied Cloud Practitioner</h2>
                </a>

                <a
                    href="https://www.credly.com/badges/5080f01c-2477-4b9b-8a25-c8289864e83d/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={AviatrixImage} alt="Aviatrix" className="achievement-image" />
                    <h2>Aviatrix Certfied MultiCloud Associate</h2>
                </a>

                <a
                    href="https://api.badgr.io/public/assertions/eV9OSSugTnm6Xt_gMdTEHQ?identity__email=dhanushgubba.ap%40gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={PostmanImage} alt="PostMan" className="achievement-image" />
                    <h2>PostMan API Student Expert</h2>
                </a>

                <a
                    href="https://www.cloudskillsboost.google/public_profiles/ed682494-9193-4c7d-955b-f9ff034159a2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={GoogleCloudImage} alt="Google Cloud" className="achievement-image" />
                    <h2>Google cloud skills boost</h2>
                </a>

                <a
                    href="https://www.credly.com/badges/6a0e5c3a-3e76-4ac4-bf50-34507d96a7b5/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={AWSCloudImage} alt="Red Hat" className="achievement-image" />
                    <h2>AWS Academy Cloud Foundations</h2>
                </a>

                <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7268430806576959488/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={SoftwareTestingImage} alt="Red Hat" className="achievement-image" />
                    <h2>Software Testing NPTEL</h2>
                </a>
                
                
                <a
                    href="https://www.linkedin.com/posts/gubba-venkata-naga-dhanush-43151b255_javaprogramming-certificationachievement-activity-7147878704709349377-wRQr?utm_source=share&utm_medium=member_desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={JavaImage} alt="Java" className="achievement-image" />
                    <h2>Programming In Java (NPTEL) </h2>
                </a>

                
            </div>
            
            
        </div>
    );
}

export default Achievements;
