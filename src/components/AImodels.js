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
                    model="/model"
                />
                <AIProjectsCards
                    title="LeetCode Problem Solutions"
                    description="C++, C, Python, Java, JavaScript, PostgreSQL, MySQL"
                    link="https://github.com/ShaharAshe/LeetCode"
                    model="https://github.com/ShaharAshe/LeetCode/tree/main/Model"
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