import '../css/style.css'
import { Link } from 'react-router-dom';
import gitIcon from '../images/github.png'
import linkdinIcon from '../images/linkedin.png'
import mailIcon from '../images/email.png'


function Home(){
    return (
        <>
            <div className="row position-absolute top-50 start-50 translate-middle">
                <div className="col">
                    <h2>Hey, I'm</h2>
                    <h2>Shahar Asher</h2>
                    <p>Software Developer | Full Stack Developer</p>
                </div>
            </div>
            <div className="row position-fixed top-50 start-100 translate-middle">
                <div className="col-12">
                    <Link to={"https://github.com/ShaharAshe"}>
                        <img src={gitIcon} alt='GitHub'/>
                    </Link>
                </div>
                <div className="col-12">
                    <Link to={"https://www.linkedin.com/in/shahar-asher-71ba82219"}>
                        <img src={linkdinIcon} alt='Linkdin'/>
                    </Link>
                </div>
                <div className="col-12">
                    <Link to={"mailto:shaharas30@gmail.com"}>
                        <img src={mailIcon} alt='Mail'/>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;