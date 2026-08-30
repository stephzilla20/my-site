'use client'

import React, { useRef, useEffect, useState } from 'react';
import { wibut } from './data/data';
import {projects} from './data/data';
import {experience} from './data/data';
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
              <p className="site-role">Based in Toronto</p>
             

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
            <a className="social-link" href="https://www.linkedin.com/in/stephentao-/" target="_blank" rel="noopener noreferrer">
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
              <div className="about-bottom">
                <div className="about-text">
                  <W>Outside of school and work, I enjoy:</W>
                  <ul>
                    <li><W>Playing basketball</W></li>
                    <li><W>Trying new recipes in the kitchen</W></li>
                    <li><W>Traveling and exploring new places</W></li>
                  </ul>
                </div>
                  {/* <Image
                    src='/assets/img/my-pic.jpg'
                    alt="profile pic"
                    width={200}
                    height={200}
                    className="about-img"
                  /> */}
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section
            id="experience"
            className="section"
            ref={el => sectionRefs.current['experience'] = el}
          >
            <p className="section-eyebrow">Experience</p>

            {experience.map((exp, i) => (
              <div key={i} className="exp-entry">
                <span className="exp-date">{exp.year}</span>
                <div>
                  <p className="exp-title">{exp.title}</p>
                  <p className="exp-company">{exp.company}</p>
                </div>
              </div>
            ))}
          </section>

          {/* PROJECTS */}
          <section
            id="projects"
            className="section"
            ref={el => sectionRefs.current['projects'] = el}
          >
            <p className="section-eyebrow">Projects</p>
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-card-header">
                  <p className="project-title">{p.title}</p>
                  <div className="project-links">
                    {p.source && (
                      <a href={p.source} target="_blank" rel="noopener noreferrer" className="project-link">
                        GitHub
                      </a>
                    )}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        View
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-desc"><W>{p.desc}</W></p>
                <div className="tag-list">
                  {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            ))}
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
              <a className="contact-link" href="https://www.linkedin.com/in/stephentao-/" target="_blank" rel="noopener noreferrer">
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
