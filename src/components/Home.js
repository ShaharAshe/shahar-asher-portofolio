import '../css/style.css';
import gitIcon from '../images/github.png';
import linkedinIcon from '../images/linkedin.png';
import mailIcon from '../images/email.png';

import ReactGA from "react-ga4";
import { useEffect } from 'react';


function Home() {
    useEffect(() => {
        ReactGA.page({
            hitType: "pageview",
            page: window.location.pathname,
            title: "Home",
        });
      }, []);

    return (
        <div className="home-container">
            <div className="intro-text">
                <h1>Hey, I'm Shahar Asher</h1>
                <p className="role">Software Developer | Full Stack Developer</p>
            </div>
            <div className="social-links">
                <a href="https://github.com/ShaharAshe" target="_blank" rel="noopener noreferrer">
                    <img src={gitIcon} alt='GitHub' className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/shahar-asher-71ba82219" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt='LinkedIn' className="social-icon" />
                </a>
                <a href="mailto:shaharas30@gmail.com">
                    <img src={mailIcon} alt='Mail' className="social-icon" />
                </a>
            </div>
        </div>
    );
}

export default Home;
