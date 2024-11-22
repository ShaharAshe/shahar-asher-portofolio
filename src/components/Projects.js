import ProjectsCards from "./ProjectsCards";
import '../css/style.css';
import { useState, useEffect } from 'react';


function Projects() {
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
                <ProjectsCards
                    title="LeetCode Problem Solutions"
                    languageTools="C++, C, Python, Java, JavaScript, PostgreSQL, MySQL"
                    link="https://github.com/ShaharAshe/LeetCode"
                />
                <ProjectsCards
                    title="HackerRank Problem Solutions"
                    languageTools="C++"
                    link="https://github.com/ShaharAshe/HackerRank"
                />
                <ProjectsCards
                    title="Project Euler Problem Solutions"
                    languageTools="Python"
                    link="https://github.com/ShaharAshe/projec_euler"
                />
                <ProjectsCards
                    title="Exchange Rate Converter"
                    languageTools="C#, .NET, API Integration"
                    link="https://github.com/ShaharAshe/ExchangeRateConverter"
                />
                <ProjectsCards
                    title="GPA Calculator"
                    languageTools="Python"
                    link="https://gitlab.com/ShaharAshe/avg_gpa_calculator"
                />
                <ProjectsCards
                    title="Full Page Canvas Drawing Application"
                    languageTools="HTML, CSS, JavaScript"
                    link="https://github.com/ShaharAshe/draw-it"
                />
                <ProjectsCards
                    title="Scam Reporting Application"
                    languageTools="HTML, CSS, JavaScript, Thymeleaf, Bootstrap"
                    link="https://github.com/ShaharAshe/scam-reporting-app"
                />
                <ProjectsCards
                    title="Pizza Ordering Application"
                    languageTools="Java, Spring Boot, JavaScript, React, CSS"
                    link="https://github.com/ShaharAshe/PizzaOrderingSystem"
                />
                <ProjectsCards
                    title="Memory Game App"
                    languageTools="React.js, Bootstrap, JavaScript, HTML, CSS"
                    link="https://github.com/ShaharAshe/MemoryGameApp"
                />
                <ProjectsCards
                    title="Virtual File System"
                    languageTools="Java"
                    link="https://github.com/ShaharAshe/VirtualFileSystem"
                />
                <ProjectsCards
                    title="URL Crawler"
                    languageTools="Java, HTTP Client, Multithreading"
                    link="https://github.com/ShaharAshe/url-crawler"
                />
                <ProjectsCards
                    title="Tip Calculator Bot"
                    languageTools="Python, Telegram Bot API"
                    link="https://t.me/Calc_Tip_bot"
                />
                <ProjectsCards
                    title="Kinneret/Dead-Sea, sea level bot"
                    languageTools="Python, Telegram Bot API, Requests, JSON"
                    link="https://t.me/Kinneret_DeadSea_bot"
                />
                <ProjectsCards 
                    title="Pokémon Game" 
                    languageTools="C++, SFML, Tileson, Box2D, nlohmann library" 
                    link="https://github.com/ShaharAshe/PokemonClone" 
                />
                <ProjectsCards 
                    title="Matrix Operations with Cython" 
                    languageTools="Cython, C++, Python, Jupyter Notebook" 
                    link="https://github.com/ShaharAshe/matrix_operations_cython" 
                />
                <ProjectsCards 
                    title="Cryptography Modules" 
                    languageTools="Python" 
                    link="https://github.com/ShaharAshe/Cryptography_modules" 
                />
                <ProjectsCards 
                    title="Second Hand Marketplace Web Application" 
                    languageTools="JavaScript, Bootstrap, Node.js, Express.js, EJS, SQLite, REST-API" 
                    link="https://github.com/ShaharAshe/AdPostExpress" 
                />
                <ProjectsCards 
                    title="NLP Project: Generating Song Lyrics in the Style of Eminem" 
                    languageTools="Python, PyTorch, Scikit-Learn, Matplotlib, Pandas, Numpy" 
                    link="https://github.com/ShaharAshe/Eminem-Song-Generator" 
                />
                <ProjectsCards 
                    title="Mars Photo Gallery" 
                    languageTools="JavaScript, HTML, CSS, Bootstrap, NASA API" 
                    link="https://github.com/ShaharAshe/mars_photo_gallery" 
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

export default Projects;
