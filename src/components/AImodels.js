import AIProjectsCards from "./AIProjectsCards";
import '../css/style.css';
import { useState, useEffect } from 'react';


function AImodels() {
    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Projects</h1>
                <p className="projects-description">Explore my work, showcasing a range of projects from web applications to AI and game development.</p>
            </div>
            <div className="projects-list">
                <AIProjectsCards
                    title="scooter or motorcycle classified"
                    description="fast.ai, Python"
                    link="https://www.kaggle.com/code/shaharas30/is-it-a-bird-scooter-or-motorcycle"
                    huggingFaceLink="https://huggingface.co/spaces/Shaharas/scooter_motorcycle-classified"
                    model="/model"
                    fetch_l="Shaharas/scooter_motorcycle-classified"
                />
                <AIProjectsCards
                    title="Jerusalem or Tel Aviv classified"
                    description="fast.ai, Python"
                    link="https://www.kaggle.com/code/shaharas30/is-it-a-bird-tel-aviv-jerusalem-classified"
                    huggingFaceLink="https://huggingface.co/spaces/Shaharas/Tel-Aviv_Jerusalem-classified"
                    model="/model"
                    fetch_l="Shaharas/Tel-Aviv_Jerusalem-classified"
                />
            </div>
            {showTopButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    ↑ Back to Top
                </button>
            )}
        </div>
    );
}

export default AImodels;