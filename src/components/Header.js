import '../css/style.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header-container">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col">
                        <Link className="nav-link" to="/"><h2>Shahar Asher</h2></Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">About Me</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/projects">Projects</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
