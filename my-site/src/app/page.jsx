'use client'

import React, { useRef, useEffect, useState } from 'react';
import { wibut } from './data/data';
import projects from './data/data';
import ImageCard from './components/ImageCard';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'fun', label: 'WIBUT' },
];

// Wraps each word in a hoverable span
function W({ children }) {
  if (typeof children !== 'string') return children;
  return children.split(' ').map((word, i, arr) => (
    <span key={i} className="word">{word}{i < arr.length - 1 ? ' ' : ''}</span>
  ));
}

export default function HomePage() {
  const rightSideRef = useRef(null);
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const container = rightSideRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      let current = NAV_ITEMS[0].id;
      NAV_ITEMS.forEach(({ id }) => {
        const el = sectionRefs.current[id];
        if (el && el.offsetTop - 60 <= scrollTop) current = id;
      });
      setActiveSection(current);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el && rightSideRef.current) {
      rightSideRef.current.scrollTo({ top: el.offsetTop - 32, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="site-wrapper">
        <div className="site-container">
        {/* ── LEFT PANEL ── */}
        <aside className="left-panel">
          <div style={{ position: 'relative' }}>

            <div className="left-top">
              <h1 className="site-name">Stephen<br /> <span className="site-name-last">Tao</span></h1>
              <p className="site-role">Software Developer</p>
             

              <nav className="left-nav" aria-label="Page sections">
                {NAV_ITEMS.map(({ id, label }) => (
                  <button
                    key={id}
                    className={`nav-item${activeSection === id ? ' active' : ''}`}
                    onClick={() => scrollTo(id)}
                    aria-current={activeSection === id ? 'location' : undefined}
                  >
                    <span className="nav-dot" />
                    <span className="nav-label">{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="left-socials">
            <a className="social-link" href="https://www.linkedin.com/in/stephen-tao-7ab814210" target="_blank" rel="noopener noreferrer">
              Li
            </a>
            <a className="social-link" href="https://github.com/stephzilla20" target="_blank" rel="noopener noreferrer">
              GH
            </a>
            <a className="social-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </div>
        </aside>

        {/* ── RIGHT PANEL ── */}
        <main className="right-panel" ref={rightSideRef}>

          {/* ABOUT */}
          <section
            id="about"
            className="section"
            ref={el => sectionRefs.current['about'] = el}
          >
            <p className="section-eyebrow">About</p>
            <div className="section-body">
              <p>
                <W>Hey, I'm Stephen, currently a student studying Computer Science at Toronto Metropolitan University. Super interested in learning and building new things ── currently learning mobile development with Expo and React Native! </W>
              </p>
              <br></br>
              <W>Outside of school and work, I enjoy:</W>
             <ul>
              <li><W>Playing basketball</W></li>
              <li><W>Trying new recipes in the kitchen</W></li>
              <li><W>Traveling and exploring new places</W></li>
            </ul>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section
            id="experience"
            className="section"
            ref={el => sectionRefs.current['experience'] = el}
          >
            <p className="section-eyebrow">Experience</p>

            <div className="exp-entry">
              <span className="exp-date">2025</span>
              <div>
                <p className="exp-title">Software Developer Intern</p>
                <p className="exp-company">Info Tech Research Group</p>
                <p className="exp-desc">
                  <W>Built and shipped features across the full stack. Worked closely with design to polish UI, contributed to a component library, and improved page load performance by 40%.</W>
                </p>
              </div>
            </div>

            <div className="exp-entry">
              <span className="exp-date">2023 - 2024</span>
              <div>
                <p className="exp-title">IT Support Technician </p>
                <p className="exp-company">Toronto Metropolitan University CS Department</p>
                <p className="exp-desc">
                  <W>Supported students in a data structures course. Ran weekly office hours, wrote supplementary problem sets, and graded 100+ assignments per semester.</W>
                </p>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section
            id="projects"
            className="section"
            ref={el => sectionRefs.current['projects'] = el}
          >
            <p className="section-eyebrow">Projects</p>

            <div className="project-card">
              <p className="project-title">
                Project One
                <span className="project-arrow">↗</span>
              </p>
              <p className="project-desc">
                <W>A short description of what the project does and why it exists. Keep it to two lines — say what makes it interesting, not just what it does.</W>
              </p>
              <div className="tag-list">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Tailwind</span>
              </div>
            </div>

            <div className="project-card">
              <p className="project-title">
                Project Two
                <span className="project-arrow">↗</span>
              </p>
              <p className="project-desc">
                <W>Another project. A quick description of the problem it solves, the stack used, and anything notable about how it was built.</W>
              </p>
              <div className="tag-list">
                <span className="tag">Next.js</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Prisma</span>
              </div>
            </div>

            <div className="project-card">
              <p className="project-title">
                Project Three
                <span className="project-arrow">↗</span>
              </p>
              <p className="project-desc">
                <W>A third project. Mention what you learned, what was hard about it, or what you're most proud of in this one.</W>
              </p>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Docker</span>
              </div>
            </div>
          </section>


          {/* FUN STUFF */}
          <section
            id="fun"
            className="section"
            ref={el => sectionRefs.current['fun'] = el}
          >
            <p className="section-eyebrow">What I've Been Up To</p>
            <div className="section-body">
              {wibut.map((item, index) => (
                <div key={index} className="exp-entry">
                  <span className="exp-date">{item.title}</span>
                  <div>
                    <span className="exp-year">{item.year}</span>
                    <p className="exp-desc">
                      <W>{item.desc}</W>
                    </p>
                  </div>
                  <ImageCard images={item.images} />
                </div>
              ))}
            </div>
            
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="section"
            ref={el => sectionRefs.current['contact'] = el}
          >
            <p className="section-eyebrow">Contact</p>
            <p className="contact-line">
              <W>Open to new opportunities and conversations. The best way to reach me is via</W>{' '}
              <a className="contact-link" href="mailto:stephentao04@gmail.com">
                <W>email</W>
              </a>
              <W>, or find me on</W>{' '}
              <a className="contact-link" href="https://www.linkedin.com/in/stephen-tao-7ab814210" target="_blank" rel="noopener noreferrer">
                <W>LinkedIn</W>
              </a>
              <W>.</W>
            </p>
          </section>

        </main>
        </div>
      </div>
    </>
  );
}
