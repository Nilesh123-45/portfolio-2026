import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // Static project data with GitHub links completely removed
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Samsung — Digital Commerce & Catalog",
      tech_stack: "Spring Boot • Kafka • Redis • MongoDB",
      description: "Developed microservices for product discovery, search, and catalog synchronization. Implemented Redis caching for frequent searches and integrated Kafka for asynchronous updates."
    },
    {
      id: 2,
      title: "Expedia — Hotel Booking & Reservation",
      tech_stack: "Java 8+ • Spring Boot • Hibernate • Docker",
      description: "Built REST APIs for hotel search, room availability, and reservations. Accelerated lookups using Redis and managed reservation events via asynchronous Kafka producers and consumers."
    },
    {
      id: 3,
      title: "Billing & Inventory POS (Legacy)",
      tech_stack: "Spring Boot • React • AWS S3",
      description: "Engineered a RESTful web application processing high-concurrency transactions with sub-200ms latency. Integrated transactional payment gateways and automated receipt generation."
    }
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [currentTime, setCurrentTime] = useState(new Date()); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const timeString = currentTime.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="portfolio-wrapper">
      
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        
        <div className="menu-close-btn" onClick={toggleMenu}>
          <div className="close-line"></div>
          <div className="close-line"></div>
        </div>

        <div className="menu-grid">
          
          <a href="#about" className="menu-quadrant bottom-border right-border" onClick={toggleMenu}>
            <span className="quad-subtext">WHO I AM <span className="arrow">-&gt;</span></span>
            <h2 className="quad-title">ABOUT</h2>
            <span className="quad-desc">Backend Engineer • System Design</span>
          </a>

          <a href="#work" className="menu-quadrant bottom-border" onClick={toggleMenu}>
            <span className="quad-subtext">03 PROJECTS <span className="arrow">-&gt;</span></span>
            <h2 className="quad-title">WORK</h2>
            <span className="quad-desc">Samsung • Expedia • TapQwik</span>
          </a>

          <a href="#skills" className="menu-quadrant right-border" onClick={toggleMenu}>
            <h2 className="quad-title">SKILLS</h2>
            <span className="quad-subtext">STACK & TOOLS <span className="arrow">-&gt;</span></span>
            <span className="quad-desc">Java • Spring Boot • Kafka • Redis</span>
          </a>

          <a href="#achievements" className="menu-quadrant" onClick={toggleMenu}>
            <h2 className="quad-title">IMPACT</h2>
            <span className="quad-subtext">WINS & RECOGNITION <span className="arrow">-&gt;</span></span>
            <span className="quad-desc">Sub-200ms Latency • Enterprise Scale</span>
          </a>
        </div>

        <div className="menu-footer">
          <div className="menu-socials">
            <a href="https://github.com/Nilesh123-45" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              github
            </a>
            <a href="https://www.linkedin.com/in/nileshdasneil" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              linkedin
            </a>
            <a href="mailto:nileshdas.work@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              email
            </a>
            <a href="tel:+917377544513">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              phone
            </a>
          </div>
          <div className="menu-clock">
            <div className="clock-time">IST {timeString}</div>
            <div className="clock-location">BLR, INDIA</div>
          </div>
        </div>
      </div>

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
            Software Engineer • Java Backend Developer • Building{' '}
            <a 
              href="#work" 
              className="red-text"
              style={{ textDecoration: 'none' }}
            >
              Enterprise Platforms ↗
            </a>
          </p>

          <div className="tags-container">
            <div className="sticker tag-1">3.7 YRS EXPERIENCE ↗</div>
            <div className="sticker tag-2">SPRING BOOT EXPERT ↗</div>
            <div className="sticker tag-3">KAFKA & REDIS SCALING</div>
            <div className="sticker tag-4">MICROSERVICES ↗</div>
          </div>

          <div className="actions">
            <button 
              className="btn-solid" 
              onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
            >
              view my work ↓
            </button>
            <a 
              href="/CV_Nilesh_Das_Java_Backend_3.7yrs_latest.pdf" 
              download="CV_Nilesh_Das_Java_Backend_3.7yrs_latest.pdf" 
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
      
      <section id="about" className="about-section">
        <div className="about-left">
          <h4 className="section-label">ABOUT</h4>
          <div className="solid-line"></div>
          <p>
            I build scalable backend services, optimize database performance, and engineer high-concurrency microservices architectures using event-driven communication. 
          </p>
          <p>
            Off the keyboard, I'm usually shooting and color-grading random moments on my phone to get that perfect frame and picture. I watch a lot of world cinema, hunt for good Indo-Chinese food, and take long solo walks. Annoying my sibling and catching a solid nap fill the rest.
          </p>
        </div>
        
        <div className="about-right">
          <div className="stat-box bottom-border right-border">
            <h3>8.26</h3>
            <p>B.Sc. CGPA</p>
          </div>
          <div className="stat-box bottom-border">
            <h3>3.7+</h3>
            <p>YEARS EXP.</p>
          </div>
          <div className="stat-box right-border">
            <h3>2+</h3>
            <p>ENTERPRISE PLATFORMS</p>
          </div>
          <div className="stat-box">
            <h3>5+</h3>
            <p>PRODUCTS SHIPPED</p>
          </div>
        </div>
      </section>

      <div className="marquee-container">
        <div className="marquee-content"> 
          <span>SOFTWARE ENGINEER ✦ SPRING BOOT ✦ MICROSERVICES ✦ EVENT-DRIVEN ARCHITECTURE ✦ KAFKA ✦ REDIS ✦ </span>
          <span>SOFTWARE ENGINEER ✦ SPRING BOOT ✦ MICROSERVICES ✦ EVENT-DRIVEN ARCHITECTURE ✦ KAFKA ✦ REDIS ✦ </span>
          <span>SOFTWARE ENGINEER ✦ SPRING BOOT ✦ MICROSERVICES ✦ EVENT-DRIVEN ARCHITECTURE ✦ KAFKA ✦ REDIS ✦ </span>
        </div>
      </div>

      <div className="interactive-divider-wrapper">
        <div className="divider-line"></div>
        <div className="expandable-pill">
          <span className="pill-icon">+</span>
          <div className="scrolling-content">
            <span>/// DESIGN /// BUILD /// SCALE ///</span>
          </div>
        </div>
      </div>
      
      <section id="work" className="content-section">
        <h2>Selected Work</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p className="tech-stack">{project.tech_stack}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section">
        <h2>Skills & Tools</h2>
        <div className="skills-table">
          <div className="skill-row">
            <div className="skill-category">LANGUAGES</div>
            <div className="skill-items">
              <span className="skill-tag">Core Java</span>
              <span className="skill-tag">Java 8+</span>
              <span className="skill-tag">Java 21</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML/CSS</span>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill-category">FRAMEWORKS & ARCHITECTURE</div>
            <div className="skill-items">
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Spring MVC</span>
              <span className="skill-tag">Spring Data JPA</span>
              <span className="skill-tag">Hibernate</span>
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill-category">MESSAGING & DATABASES</div>
            <div className="skill-items">
              <span className="skill-tag">Apache Kafka</span>
              <span className="skill-tag">Redis</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Database Indexing</span>
            </div>
          </div>
          <div className="skill-row">
            <div className="skill-category">DEVOPS & TOOLS</div>
            <div className="skill-items">
              <span className="skill-tag">AWS (EC2, S3)</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Jenkins CI/CD</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Maven</span>
              <span className="skill-tag">JUnit 5</span>
              <span className="skill-tag">Mockito</span>
              <span className="skill-tag">Swagger/OpenAPI</span>
              <span className="skill-tag">Logback</span>
              <span className="skill-tag">SonarQube</span>
              <span className="skill-tag">Jira</span>
              <span className="skill-tag">Postman</span>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="content-section">
        <h2>Impact & Optimization</h2>
        
        <div className="misc-row">
          <div className="misc-category">SYSTEM ARCHITECTURE</div>
          <div className="misc-items">
            <div className="achv-item">
              <div className="achv-info">
                <h3>Asynchronous Workflow Reliability</h3>
                <p>Increased reliability of catalog synchronization and booking statuses by refining Kafka event handling and validation logic.</p>
              </div>
              <div className="achv-badge">EVENT-DRIVEN</div>
            </div>
            <div className="achv-item">
              <div className="achv-info">
                <h3>API Latency Optimization</h3>
                <p>Improved catalog, search, and availability API responsiveness through strategic Redis caching and targeted MySQL query and index optimization.</p>
              </div>
              <div className="achv-badge">PERFORMANCE</div>
            </div>
          </div>
        </div>

        <div className="misc-row">
          <div className="misc-category">ACADEMICS</div>
          <div className="misc-items">
            <div className="achv-item">
              <div className="achv-info">
                <h3>B.Sc. Degree</h3>
                <p>Graduated from Fakir Mohan University, Balasore, Odisha with Grade A.</p>
              </div>
              <div className="achv-badge">2023 | 8.26 CGPA</div>
            </div>
            <div className="achv-item">
              <div className="achv-info">
                <h3>Elite NPTEL Certifications</h3>
                <p>Earned official certifications in Cloud Computing and Distributed Systems, Management Information System, Industry 4.0 & IoT, and Problem Solving in C.</p>
              </div>
              <div className="achv-badge">IIT KANPUR / KGP</div>
            </div>
          </div>
        </div>

        <div className="misc-row">
          <div className="misc-category">ROLES & METHODOLOGY</div>
          <div className="misc-items">
            <div className="achv-item">
              <div className="achv-info">
                <h3>Agile & CI/CD Practices</h3>
                <p>Supported Docker-based application packaging, AWS deployments, and Jenkins CI/CD validation to ensure reliable production rollouts.</p>
              </div>
              <div className="achv-badge">PRACTICE</div>
            </div>
            <div className="achv-item">
              <div className="achv-info">
                <h3>API Design & Contract Strategy</h3>
                <p>Designed strict API contracts with DTO mapping, standard request validation, standardized responses, and centralized exception handling.</p>
              </div>
              <div className="achv-badge">ARCHITECTURE</div>
            </div>
          </div>
        </div>

      </section>

      <footer className="dark-footer">
        <div className="footer-top">
          <h2 className="footer-heading">LET'S BUILD SOMETHING.</h2>
          <span className="footer-year">2026</span>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="mailto:nileshdas.work@gmail.com">email</a>
            <a href="https://github.com/Nilesh123-45" target="_blank" rel="noreferrer">github</a>
            <a href="https://www.linkedin.com/in/nileshdasneil" target="_blank" rel="noreferrer">linkedin</a>
            <a href="tel:+917377544513">phone</a>
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
