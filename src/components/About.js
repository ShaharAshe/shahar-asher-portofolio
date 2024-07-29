import React, { useEffect, useState } from 'react';

function About() {
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
        <div className="about-container">
            <header className="about-header">
                <h1>About Me</h1>
            </header>
            <section className="about-content">
                <h2  className="section-des">Hello!</h2>
                <p>I'm <strong>Shahar Asher</strong> 👋</p>
                <p>Welcome to my personal portfolio website. I am a Computer Science graduate from Hadassah Academic College in Jerusalem, with a deep passion for coding, problem-solving, and continuous learning.</p>

                <h2 className="section-des">My Journey</h2>
                <p>My fascination with technology and programming began early on, leading me to pursue a B.Sc. in Computer Science. Throughout my studies, I honed my skills across various programming languages and technologies through hands-on projects, including web applications, algorithms, and data structures.</p>

                <h2 className="section-des">Skills and Technologies</h2>
                <p>Here are some of the technologies I am proficient in:</p>
                <ul>
                    <li><strong>Languages:</strong> C++, C, Java, Python, JavaScript, SQL, Assembly x86, R, HTML5, CSS3</li>
                    <li><strong>Frameworks and Libraries:</strong> Node.js, Express.js, React.js, Bootstrap, PyTorch, Scikit-Learn, Spring Boot, Thymeleaf</li>
                    <li><strong>Databases:</strong> SQLite, MySQL, PostgreSQL</li>
                    <li><strong>Tools:</strong> Git, GitHub, Selenium, Jenkins, Docker</li>
                </ul>

                <h2 className="section-des">Projects</h2>
                <p>My project experience reflects my commitment to learning by doing. Here are some notable projects I've worked on:</p>
                <ul>
                    <li><strong>Second Hand Marketplace:</strong> Developed a comprehensive web application for buying and selling second-hand items.</li>
                    <li><strong>Mars Photo Gallery:</strong> Created a web application to showcase images from NASA's Mars rovers.</li>
                    <li><strong>Pokémon Game:</strong> Designed an interactive game using C++ and SFML.</li>
                    <li><strong>Matrix Operations with Cython:</strong> Implemented high-performance matrix operations using Cython.</li>
                </ul>

                <h2 className="section-des">Professional Traits</h2>
                <p>My quick self-learning ability and dedication set me apart. I excel both independently and in collaborative environments, consistently delivering high-quality results. My strong foundation in Object-Oriented Programming (OOP), along with a keen interest in algorithms and data visualization, equips me to tackle complex challenges effectively.</p>

                <h2 className="section-des">Contact Me</h2>
                <p>I am open to new opportunities and connections. Feel free to reach out via <a className="link-a" href="https://www.linkedin.com/in/shahar-asher-71ba82219/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or email me at <a className="link-a" href="mailto:shaharas30@gmail.com">shaharas30@gmail.com</a> to discuss potential collaborations or opportunities.</p>
            </section>
        {showTopButton && (
            <button className="back-to-top" onClick={scrollToTop}>
        ↑ Back to Top
    </button>)}
    </div>
    );
}

export default About;
