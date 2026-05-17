import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // Initialize state directly with your static project data for lightning-fast hosting
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Billing & Inventory POS",
      tech_stack: "Spring Boot • React • AWS S3",
      description: "Engineered a RESTful web application processing high-concurrency transactions with sub-200ms latency. Integrated transactional payment gateways and automated receipt generation.",
      github_link: "https://github.com/Nilesh123-45"
    },
    {
      id: 2,
      title: "Employee Leave Management",
      tech_stack: "Node.js • React.js • MongoDB",
      description: "Automated internal HR workflows by transitioning manual tracking to a centralized digital solution. Optimized NoSQL database queries for real-time administrative dashboards.",
      github_link: "https://github.com/Nilesh123-45"
    },
    {
      id: 3,
      title: "Hospital Management System Core",
      tech_stack: "Core Java • MySQL • JDBC",
      description: "Programmed a console-based application to effectively manage, store, and retrieve patient health and billing records, validating core database connectivity.",
      github_link: "https://github.com/Nilesh123-45"
    }
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls the hamburger menu
  const [currentTime, setCurrentTime] = useState(new Date()); // State for the live clock

  // Live IST Clock Tick Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Toggle Menu Function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Format time for IST (24-hour clock)
  const timeString = currentTime.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="portfolio-wrapper">
      
      {/* --- NEW 2x2 GRID MENU OVERLAY --- */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        
        {/* Top Close Button */}
        <div className="menu-close-btn" onClick={toggleMenu}>
          <div className="close-line"></div>
          <div className="close-line"></div>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="menu-grid">
          
          {/* Top Left */}
          <a href="#about" className="menu-quadrant bottom-border right-border" onClick={toggleMenu}>
            <span className="quad-subtext">WHO I AM <span className="arrow">-&gt;</span></span>
            <h2 className="quad-title">ABOUT</h2>
            <span className="quad-desc">Full-Stack Engineer • System Design</span>
          </a>

          {/* Top Right */}
          <a href="#work" className="menu-quadrant bottom-border" onClick={toggleMenu}>
            <span className="quad-subtext">03 PROJECTS <span className="arrow">-&gt;</span></span>
            <h2 className="quad-title">WORK</h2>
            <span className="quad-desc">Billing POS • Leave Mgmt • Hospital Sys</span>
          </a>

          {/* Bottom Left */}
          <a href="#skills" className="menu-quadrant right-border" onClick={toggleMenu}>
            <h2 className="quad-title">SKILLS</h2>
            <span className="quad-subtext">STACK & TOOLS <span className="arrow">-&gt;</span></span>
            <span className="quad-desc">Java 21 • Spring Boot • React • AWS</span>
          </a>

          {/* Bottom Right */}
          <a href="#achievements" className="menu-quadrant" onClick={toggleMenu}>
            <h2 className="quad-title">ACHV.</h2>
            <span className="quad-subtext">WINS & RECOGNITION <span className="arrow">-&gt;</span></span>
            <span className="quad-desc">SIH '24 Finalist • 1000+ LeetCode Views</span>
          </a>
        </div>

        {/* Menu Footer */}
        <div className="menu-footer">
          <div className="menu-socials">
            <a href="https://github.com/Nilesh123-45" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              github
            </a>
            <a href="https://www.linkedin.com/in/nileshdasneel" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              linkedin
            </a>
            <a href="mailto:dasnilesh832@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              email
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="4" x2="20" y2="20"></line><line x1="20" y1="4" x2="4" y2="20"></line></svg>
              x
            </a>
          </div>
          <div className="menu-clock">
            <div className="clock-time">IST {timeString}</div>
            <div className="clock-location">BLR, INDIA</div>
          </div>
        </div>
      </div>
      {/* --- END MENU OVERLAY --- */}

      <nav className="navbar">
        <div className="logo">Nilesh Das.</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      <main className="main-content">
        <div className="left-column">
          <h1 className="hero-heading">
            I engineer robust <br />
            systems from scratch.
            <svg className="red-squiggle" viewBox="0 0 400 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5,15 Q50,5 100,12 T200,10 T300,14 T390,8" fill="transparent" stroke="#e63946" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </h1>
          
          <p className="sub-heading">
            Java Backend Developer • Full-Stack Engineer • Building{' '}
            <a 
              href="https://github.com/Nilesh123-45" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="red-text"
              style={{ textDecoration: 'none' }}
            >
              POS Systems ↗
            </a>
          </p>

          <div className="tags-container">
            <div className="sticker tag-1">SIH '24 FINALIST ↗</div>
            <div className="sticker tag-2">SPRING BOOT EXPERT ↗</div>
            <div className="sticker tag-3">LEETCODE ALGORITHMS</div>
            <div className="sticker tag-4">AWS CLOUD ↗</div>
          </div>

          <div className="actions">
            <button 
              className="btn-solid" 
              onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
            >
              view my work ↓
            </button>
            <a 
              href="/Nilesh_Das_Resume.pdf" 
              download="Nilesh_Das_Resume.pdf" 
              className="btn-outline" 
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              download resume
            </a>
          </div>
        </div>

        <div className="right-column">
          <div className="image-container">
            <img src="/profile.jpeg" alt="Nilesh Das" className="profile-pic" />
          </div>
        </div>
      </main>

      <div className="bottom-dashed-line"></div>
      
      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-left">
          <h4 className="section-label">ABOUT</h4>
          <div className="solid-line"></div>
          <p>
            I build robust full-stack web applications, design normalized databases, and engineer high-concurrency backend architectures. 
          </p>
          <p>
            Off the keyboard, I'm usually shooting and color-grading random moments on my phone to get that perfect frame and picture. I watch a lot of world cinema, hunt for good Indo-Chinese food, and take long solo walks. Annoying my sibling and catching a solid nap fill the rest.
          </p>
        </div>
        
        <div className="about-right">
          <div className="stat-box bottom-border right-border">
            <h3>8.95</h3>
            <p>MCA CGPA</p>
          </div>
          <div className="stat-box bottom-border">
            <h3>2+</h3>
            <p>HACKATHONS</p>
          </div>
          <div className="stat-box right-border">
            <h3>3+</h3>
            <p>PRODUCTS SHIPPED</p>
          </div>
          <div className="stat-box">
            <h3>1000+</h3>
            <p>LEETCODE VIEWS</p>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLLING MARQUEE SEPARATOR */}
      <div className="marquee-container">
        <div className="marquee-content"> 
          <span>JAVA BACKEND DEVELOPER ✦ SPRING BOOT ✦ REACT.JS ✦ FULL-STACK DEVELOPER ✦ AWS CLOUD ✦ PROBLEM SOLVER ✦ </span>
          <span>JAVA BACKEND DEVELOPER ✦ SPRING BOOT ✦ REACT.JS ✦ FULL-STACK DEVELOPER ✦ AWS CLOUD ✦ PROBLEM SOLVER ✦ </span>
          <span>JAVA BACKEND DEVELOPER ✦ SPRING BOOT ✦ REACT.JS ✦ FULL-STACK DEVELOPER ✦ AWS CLOUD ✦ PROBLEM SOLVER ✦ </span>
        </div>
      </div>

      {/* SNEAKY INTERACTIVE DIVIDER */}
      <div className="interactive-divider-wrapper">
        <div className="divider-line"></div>
        <div className="expandable-pill">
          <span className="pill-icon">+</span>
          <div className="scrolling-content">
            <span>/// LEARN /// UNLEARN /// RELEARN ///</span>
          </div>
        </div>
      </div>
      
      {/* Dynamic Projects Section */}
      <section id="work" className="content-section">
        <h2>Selected Work</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p className="tech-stack">{project.tech_stack}</p>
              <p>{project.description}</p>
              <a 
                href={project.github_link && project.github_link !== '#' ? project.github_link : 'https://github.com/Nilesh123-45'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                github ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-section">
        <h2>Skills & Tools</h2>
        <div className="skills-table">
          <div className="skill-row">
            <div className="skill-category">LANGUAGES</div>
            <div className="skill-items">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML/CSS</span>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill-category">FRAMEWORKS</div>
            <div className="skill-items">
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Spring Data JPA</span>
              <span className="skill-tag">JDBC</span>
              <span className="skill-tag">Maven</span>
              <span className="skill-tag">JUnit</span>
              <span className="skill-tag">Log4j2</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill-category">DEVELOPER TOOLS</div>
            <div className="skill-items">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">IntelliJ IDEA</span>
              <span className="skill-tag">ECLIPSE</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">AWS S3</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="content-section">
        <h2>Achievements & Misc</h2>
        
        {/* CATEGORY 1: COMPETITIONS */}
        <div className="misc-row">
          <div className="misc-category">COMPETITIONS</div>
          <div className="misc-items">
            <div className="achv-item">
              <div className="achv-info">
                <h3>Smart India Hackathon (SIH) 2024</h3>
                <p>Advanced to the finals, cultivating rapid collaborative problem-solving skills under strict deadlines.</p>
              </div>
              <div className="achv-badge">FINALIST</div>
            </div>
            <div className="achv-item">
              <div className="achv-info">
                <h3>Competitive Coding</h3>
                <p>Authored complex algorithmic solutions on LeetCode and HackerRank, accumulating 1,000+ views.</p>
              </div>
              <div className="achv-badge">1000+ VIEWS</div>
            </div>
          </div>
        </div>

        {/* CATEGORY 2: ACADEMICS & CERTS */}
        <div className="misc-row">
          <div className="misc-category">ACADEMICS</div>
          <div className="misc-items">
            <div className="achv-item">
              <div className="achv-info">
                <h3>Elite NPTEL Certifications</h3>
                <p>Earned official certifications in Cloud Computing and Distributed Systems, Management Information System, Industry 4.0 & IoT, and Problem Solving in C.</p>
              </div>
              <div className="achv-badge">IIT KANPUR / KGP</div>
            </div>
            <div className="achv-item">
              <div className="achv-info">
                <h3>University Paper Research</h3>
                <p>Authored and presented technical research papers at the university level.</p>
              </div>
              <div className="achv-badge">SPEAKER</div>
            </div>
          </div>
        </div>

        {/* CATEGORY 3: PRACTICES & LEADERSHIP */}
        <div className="misc-row">
          <div className="misc-category">ROLES & METHODOLOGY</div>
          <div className="misc-items">
            <div className="achv-item">
              <div className="achv-info">
                <h3>Agile & Test-Driven Development</h3>
                <p>A fast learner accustomed to building full-stack projects in rapid Agile environments, enforcing strict code reliability through comprehensive JUnit testing.</p>
              </div>
              <div className="achv-badge">PRACTICE</div>
            </div>
            <div className="achv-item">
              <div className="achv-info">
                <h3>Mentorship & Tutoring</h3>
                <p>Dedicate time to instructing and mentoring students in foundational programming languages, web development, and physics.</p>
              </div>
              <div className="achv-badge">COMMUNITY</div>
            </div>
          </div>
        </div>

      </section>

      {/* Dark Footer */}
      <footer className="dark-footer">
        <div className="footer-top">
          <h2 className="footer-heading">LET'S BUILD SOMETHING.</h2>
          <span className="footer-year">2026</span>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="mailto:dasnilesh832@gmail.com">email</a>
            <a href="https://github.com/Nilesh123-45" target="_blank" rel="noreferrer">github</a>
            <a href="https://www.linkedin.com/in/nileshdasneel" target="_blank" rel="noreferrer">linkedin</a>
            <a href="#">x</a>
            <a href="#">studio</a>
          </div>
          <div className="footer-credits">
            <p className="studio-name">Sheer Fighter</p>
            <p>Nilesh Das • Bengaluru, India</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;