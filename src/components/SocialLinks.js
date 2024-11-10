import '../css/style.css';
import gitIcon from '../images/github.png';
import linkedinIcon from '../images/linkedin.png';
import mailIcon from '../images/email.png';


function SocialLinks(props){
    return (
    <>
        <div class="social-links-d">
            <a href="https://github.com/ShaharAshe" target="_blank" rel="noopener noreferrer">
                <img src={gitIcon} alt='GitHub' className="social-icon-d" />
            </a>
            <a href="https://www.linkedin.com/in/shahar-asher-71ba82219" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt='LinkedIn' className="social-icon-d" />
            </a>
            <a href="mailto:shaharas30@gmail.com">
                <img src={mailIcon} alt='Mail' className="social-icon-d" />
            </a>
        </div>
    </>
    );
}

export default SocialLinks;