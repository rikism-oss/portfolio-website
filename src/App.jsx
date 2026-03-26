import { useState } from "react";

const NAV_LINKS = ["About", "Work", "Contact"];

const PROJECTS = [
 {
    title: "Copy & Script Writing",
    client: "Homes.com",
    tags: ["Storytelling", "Video Scripts", "Brand Voice"],
    desc: "Wrote a library of 50+ neighborhood and city profiles and video scripts to help build CoStar’s residential real estate brand, Homes.com.",
    link: "https://www.homes.com/local-guide/austin-tx/legend-oaks-neighborhood/",
    linkLabel: "View Sample",
  },
  {
    title: "B2B Content Strategy",
    client: "SaaS Platform",
    tags: ["Content Strategy", "B2B", "Documentation"],
    desc: "Developed end-to-end content framework for a complex SaaS product. Translated technical specs into clear user documentation and onboarding flows that improved product adoption by 40%.",
    link: null,
  },
  
  {
    title: "Journalism",
    client: "RealtyLine Austin",
    tags: ["Reporter", "Researcher", "Front-Page Features Writer"],
    desc: "Wrote monthly front-page feature articles for print and digital properties for Realtors, lenders, appraisers, and developers across the Austin-Round Rock MSA and nearby Central Texas counties.",
    link: "https://issuu.com/realtyline/docs/digital_september_2021",
   linkLabel: "View Sample",
  },
  {
    title: "Technical Documentation Overhaul",
    client: "Enterprise Software Co.",
    tags: ["Documentation", "UX Writing", "Content Design"],
    desc: "Audited and rewrote a 200-page technical documentation suite. Structured complex information into scannable, user-centered content that reduced support ticket volume significantly.",
    link: null,
  },
];

const SKILLS = [
 "Copywriting", "Content Strategy", "Consumer & B2B Communications",
  "Video Script Writing", "Technical Documents", "Audience Personas",
  "Team Leadership", "Research & Reporting",
];

const BULLETS = [
  "B2B & customer-facing content",
  "Complex information made clear",
  "Cross-functional team leadership",
  "Available for freelance engagements",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ backgroundColor: "#f5e6d8", color: "#3a2a1e" }} className="min-h-screen font-sans">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        body {
          background-color: #f5e6d8;
          font-family: 'DM Sans', sans-serif;
        }

        .serif { font-family: 'DM Serif Display', serif; }

        .nav-link {
          color: #8c6a55;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #c0622f; }

        .tag {
          font-size: 0.75rem;
          background: #f0ddd0;
          color: #b05a30;
          border: 1px solid #f0c4aa;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          font-weight: 500;
        }

        .project-card {
          border: 1px solid #e8c9b3;
          border-radius: 1rem;
          padding: 1.5rem;
          transition: border-color 0.2s, box-shadow 0.2s;
          background: #fdf6f0;
        }
        .project-card:hover {
          border-color: #c0622f;
          box-shadow: 0 4px 20px rgba(192,98,47,0.08);
        }

        .cta-btn {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 600;
          background: #c0622f;
          color: white;
          padding: 0.65rem 1.25rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: background 0.2s;
          letter-spacing: 0.02em;
        }
        .cta-btn:hover { background: #a0501e; }

        .linkedin-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #c0622f;
          text-decoration: none;
          transition: color 0.2s;
        }
        .linkedin-link:hover { color: #a0501e; }

        .sample-link {
          font-size: 0.75rem;
          font-weight: 600;
          color: #c0622f;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .sample-link:hover { color: #a0501e; }

        .section-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #c0622f;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .avatar-ring {
          width: 7rem;
          height: 7rem;
          border-radius: 1.25rem;
          border: 4px solid #f0c4aa;
          box-shadow: 0 4px 20px rgba(192,98,47,0.15);
          overflow: hidden;
          background: #e8c9b0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .avatar-initials {
          font-family: 'DM Serif Display', serif;
          font-size: 2.2rem;
          color: #c0622f;
          letter-spacing: -0.02em;
        }

        .dot { width: 6px; height: 6px; border-radius: 9999px; background: #c0622f; flex-shrink: 0; margin-top: 0.4rem; }

        .nav-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          background: rgba(245,230,216,0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e8c9b3;
        }
        .nav-inner {
          max-width: 48rem;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.1rem;
          color: #3a2a1e;
          letter-spacing: -0.01em;
        }
        nav ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 2rem; }

        .mobile-menu {
          border-top: 1px solid #e8c9b3;
          background: #f5e6d8;
          padding: 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .sm-hidden { display: none; }
          .sm-flex { display: flex !important; }
        }
        @media (min-width: 641px) {
          .mobile-only { display: none !important; }
          .desktop-nav { display: flex !important; }
        }

        main {
          max-width: 48rem;
          margin: 0 auto;
          padding: 7rem 1.5rem 6rem;
        }

        section { margin-bottom: 6rem; }

        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: flex-start;
        }
        @media (min-width: 641px) {
          .hero-grid { flex-direction: row; }
          .avatar-ring { width: 8rem; height: 8rem; }
        }

        h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.2rem, 6vw, 3.2rem);
          font-weight: 400;
          line-height: 1.1;
          color: #2a1a10;
          margin: 0.75rem 0 1.25rem;
          letter-spacing: -0.02em;
        }

        .hero-sub {
          font-size: 1.05rem;
          color: #7a5a45;
          line-height: 1.7;
          max-width: 38rem;
        }

        .eyebrow {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #c0622f;
          font-weight: 600;
        }

        .about-grid {
          display: grid;
          gap: 2.5rem;
        }
        @media (min-width: 641px) {
          .about-grid { grid-template-columns: 1fr 1fr; }
        }

        .about-body {
          font-size: 0.95rem;
          color: #6a4a35;
          line-height: 1.8;
        }

        .stack-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #b09080;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .skills-wrap { display: flex; flex-wrap: wrap; gap: 0.5rem; }

        .bullets-grid {
          margin-top: 2.5rem;
          display: grid;
          gap: 0.75rem;
        }
        @media (min-width: 641px) {
          .bullets-grid { grid-template-columns: 1fr 1fr; }
        }

        .bullet-row { display: flex; align-items: flex-start; gap: 0.75rem; }
        .bullet-text { font-size: 0.875rem; color: #7a5a45; }

        .projects-list { display: flex; flex-direction: column; gap: 1rem; }

        .proj-header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem; }
        .proj-title { font-weight: 600; color: #2a1a10; font-size: 0.95rem; }
        .proj-client { font-size: 0.75rem; color: #c0622f; font-weight: 500; }
        .proj-desc { font-size: 0.875rem; color: #7a5a45; line-height: 1.65; margin-bottom: 1rem; }
        .proj-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
        .proj-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

        .contact-sub { font-size: 0.875rem; color: #7a5a45; line-height: 1.7; max-width: 28rem; margin-bottom: 1.5rem; }
        .contact-row { display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; }
        @media (min-width: 641px) {
          .contact-row { flex-direction: row; align-items: center; }
        }

        footer {
          border-top: 1px solid #e8c9b3;
          padding: 2rem 0;
        }
        .footer-inner {
          max-width: 48rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: #b09080;
        }
        .footer-name { font-family: 'DM Serif Display', serif; color: #8c6a55; }
        .footer-location { color: #c0622f; }
      `}</style>

      {/* NAV */}
      <nav className="nav-bar">
        <div className="nav-inner">
          <span className="nav-name">Riki Markowitz</span>
          <ul className="desktop-nav" style={{ display: "none" }}>
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <button className="nav-link" onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
              </li>
            ))}
          </ul>
          <button
            className="mobile-only"
            style={{ background: "none", border: "none", cursor: "pointer", color: "#8c6a55" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg style={{ width: 24, height: 24 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu mobile-only">
            {NAV_LINKS.map((l) => (
              <button key={l} className="nav-link" style={{ textAlign: "left" }} onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
            ))}
          </div>
        )}
      </nav>

      <main>

        {/* HERO */}
        <section>
          <div className="hero-grid">
            <div className="avatar-ring">
              <span className="avatar-initials">RM</span>
            </div>
            <div>
              <p className="eyebrow">Communications Specialist</p>
              <h1>Words that make<br /><em>complex things clear.</em></h1>
              <p className="hero-sub">
                Copywriter, editor, and reporter with years of experience crafting
                B2B and customer-facing content for marketing agencies, small businesses, and nationally recognized brands.
                Based in Richmond, VA. Available for full-time, part-time, and freelance engagements.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ scrollMarginTop: "5rem" }}>
          <p className="section-label">About</p>
          <div className="about-grid">
            <p className="about-body">
              Highly organized communications specialist with a talent for transforming
              complex information into clear, practical documentation and video scripts
              that drive product adoption. I work across teams to align content with
              brand voice, user needs, and business goals — and I've done it for
              organizations ranging from scrappy marketing agencies to nationally recognized brands.
            </p>
            <div>
              <p className="stack-label">Specialties</p>
              <div className="skills-wrap">
                {SKILLS.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="bullets-grid">
            {BULLETS.map((a) => (
              <div key={a} className="bullet-row">
                <span className="dot" />
                <span className="bullet-text">{a}</span>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" style={{ scrollMarginTop: "5rem" }}>
          <p className="section-label">Work</p>
          <div className="projects-list">
            {PROJECTS.map((p) => (
              <div key={p.title} className="project-card">
                <div className="proj-header">
                  <span className="proj-title">{p.title}</span>
                  <span className="proj-client">{p.client}</span>
                </div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-footer">
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sample-link"
                    >
                      {p.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ scrollMarginTop: "5rem" }}>
          <p className="section-label">Contact</p>
          <p className="contact-sub">
            Open to contract work, content strategy engagements, and interesting
            communications challenges. Phone or email — whatever works.
          </p>
          <div className="contact-row">
            <a href="mailto:rikism@gmail.com" className="cta-btn">
              Get in touch
            </a>
            <a href="https://www.linkedin.com/in/riki-markowitz" target="_blank" rel="noopener noreferrer" className="linkedin-link">
              <svg style={{ width: 16, height: 16 }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </section>

      </main>

      <footer>
        <div className="footer-inner">
          <span className="footer-name">Riki Markowitz</span>
          <span className="footer-location">Richmond, VA</span>
        </div>
      </footer>

    </div>
  );
}
