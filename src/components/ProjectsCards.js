import '../css/style.css';

function ProjectsCards(props) {
    return (
        <div className="card project-card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"><hr/><strong>Languages and Tools</strong><br/><br/>{props.languageTools}</p>
                {props.link && (
                    <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectsCards;
