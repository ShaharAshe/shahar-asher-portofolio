import { Link } from 'react-router-dom';
import '../css/style.css';


function ProjectsCards(props) {
    // const [modelPath, setmodelPath] = useState(`${props.model}?fetch_l=${encodeURIComponent(props.fetch_l)}`);
    const modelPath = `${props.model}?fetch_l=${encodeURIComponent(props.fetch_l)}`;

    return (
        <div className="card project-card">
            <div className="card-body">
                {props.huggingFaceLink ? (
                    <a href={props.huggingFaceLink} className='ai-nav-link' target="_blank" rel="noopener noreferrer">
                        <h5 className="card-title">{props.title}</h5>
                    </a>
                ) : (
                    <h5 className="card-title">{props.title}</h5>
                )}
                <p className="card-text"><hr/><strong>Description</strong><br/><br/>{props.description}</p>
                {props.link && (
                    <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View Project
                    </a>
                )}
                {props.model && (
                    <Link className="ai-nav-link" to={modelPath}>model</Link>
                )}
            </div>
        </div>
    );
}

export default ProjectsCards;
