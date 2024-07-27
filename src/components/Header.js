import '../css/style.css'
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col">
                        <h2>Shahar Asher</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                            <div className="container-fluid">
                                <button className="navbar-toggler" style={{color:"whitesmoke"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" style={{color:"whitesmoke"}}></span>
                                </button>
                                <div className="collapse navbar-collapse" style={{color:"whitesmoke"}}s id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" style={{color:"whitesmoke"}} aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" style={{color:"whitesmoke"}} aria-current="page" to="/">Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" style={{color:"whitesmoke"}} aria-current="page" to="/">Contact</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;