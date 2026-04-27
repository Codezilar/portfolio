import { ScrollEffects } from "@/components/scroll-effects";

const services = [
  {
    title: "Design",
    description: "Direction, prototypes, and interfaces with cinematic motion.",
    stat: "20 projects",
  },
  {
    title: "Front-End",
    description: "Immersive builds with performance-minded interactions.",
    stat: "40 launches",
  },
  {
    title: "SEO",
    description: "Technical structure that helps bold visuals still get found.",
    stat: "12 audits",
  },
];

const projects = [
  {
    title: "Lewis",
    type: "Brand platform",
    blurb: "A dark editorial launch page wrapped around a molten 3D object.",
  },
  {
    title: "Finaco",
    type: "Finance dashboard",
    blurb: "Data-rich product visuals with glassmorphism and spatial navigation.",
  },
  {
    title: "Focus",
    type: "Productivity app",
    blurb: "A calmer interface that still feels alive through micro-depth and glow.",
  },
];

const testimonials = [
  {
    name: "Benjamin Bryant",
    role: "VC Co-Founder",
    quote:
      "Daniel was a real pleasure to work with and the kind of designer you can trust end to end.",
  },
  {
    name: "Rasid Hossaini",
    role: "Product Management",
    quote:
      "The process felt clear from strategy through launch, and the final experience turned heads.",
  },
  {
    name: "Logan Lee",
    role: "Lead Designer",
    quote:
      "Fast, thoughtful, and deeply craft-driven. Every screen felt intentional.",
  },
];

const awards = [
  {
    year: "2024",
    title: "Site of the Year",
    detail: "Awarded for a kinetic commerce experience with story-led motion.",
  },
  {
    year: "2023",
    title: "Honorable Mention",
    detail: "Recognized for a sharp, immersive landing page system.",
  },
  {
    year: "2022",
    title: "Best Showcase",
    detail: "Won for balancing technical polish with standout visual identity.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <ScrollEffects />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="grid-glow" />

      <header className="topbar section">
        <div className="brand">Daniel Stephan</div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#works">Works</a>
          <a href="#notes">Notes</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="socials">
          <span>Twitter</span>
          <span>GitHub</span>
        </div>
      </header>

      <section className="hero section" data-reveal>
        <div className="hero-copy">
          <span className="eyebrow">Front-End Developer</span>
          <h1>
            Talk is cheap.
            <br />
            Show me the code.
          </h1>
          <p>
            I design and ship futuristic digital products with motion, depth,
            and real-world performance.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button-primary">
              Let&apos;s chat
            </a>
            <a href="#works" className="button-secondary">
              See projects
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>12</strong>
              <span>Years building</span>
            </div>
            <div>
              <strong>165</strong>
              <span>Projects delivered</span>
            </div>
            <div>
              <strong>18</strong>
              <span>Countries reached</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-ring" />
          <div className="portrait-card">
            <div className="hoodie-figure">
              <div className="hood" />
              <div className="face" />
              <div className="torso" />
            </div>
          </div>
          <div className="tech-badge badge-a">JS</div>
          <div className="tech-badge badge-b">UI</div>
          <div className="tech-badge badge-c">TS</div>
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
        </div>
      </section>

      <section className="section intro-grid" id="services">
        <div className="service-stack" data-reveal>
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span>{service.stat}</span>
            </article>
          ))}
        </div>
        <div className="intro-copy" data-reveal>
          <span className="kicker">Overview</span>
          <h2>Hello! I&apos;m Daniel Stephan</h2>
          <p className="lead">
            Every great design begins with an even better story.
          </p>
          <p>
            Since the beginning of my journey as a freelance designer and
            developer, I&apos;ve worked remotely for agencies, startups, and
            ambitious founders who wanted something more memorable than another
            safe template.
          </p>
        </div>
      </section>

      <section className="logo-strip" aria-label="Selected collaborators">
        <div className="marquee">
          <span>Bauhaus</span>
          <span>Serenity Hotel</span>
          <span>Archive Inc</span>
          <span>Good Habits</span>
          <span>Neuton</span>
          <span>PaperMoon</span>
          <span>FocusLab</span>
          <span>Bauhaus</span>
          <span>Serenity Hotel</span>
          <span>Archive Inc</span>
        </div>
      </section>

      <section className="section works-section" id="works">
        <div className="section-heading" data-reveal>
          <span className="kicker">Latest Works</span>
          <h2>Selected projects with sharp visuals and even sharper code.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card project-${index + 1}`}
              key={project.title}
              data-reveal
            >
              <div className="project-meta">
                <span>{project.type}</span>
                <span>2026</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.blurb}</p>
              <div className="project-art">
                <div className="screen screen-a" />
                <div className="screen screen-b" />
                <div className="screen screen-c" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section notes-grid" id="notes">
        <div className="testimonial-panel" data-reveal>
          <div className="section-heading">
            <span className="kicker">Testimonials</span>
            <h2>What clients say after the pixels settle.</h2>
          </div>
          <blockquote>
            Daniel was a real pleasure to work with and we look forward to
            working with him again. He&apos;s definitely the kind of designer
            you can trust with a project from start to finish.
          </blockquote>
          <div className="testimonial-list">
            {testimonials.map((item) => (
              <div className="person" key={item.name}>
                <div className="avatar" />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="awards-panel" data-reveal>
          <div className="section-heading">
            <span className="kicker">Awards</span>
            <h2>Recognition that followed the craft.</h2>
          </div>
          <div className="awards-list">
            {awards.map((award) => (
              <article key={award.year} className="award-row">
                <span>{award.year}</span>
                <div>
                  <h3>{award.title}</h3>
                  <p>{award.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact" data-reveal>
        <div className="contact-copy">
          <h2>Let&apos;s make something unforgettable together.</h2>
          <p>
            Start by saying hi and I&apos;ll turn your idea into a high-energy
            digital experience.
          </p>
        </div>
        <div className="contact-card">
          <span className="kicker">Contact</span>
          <a href="mailto:hello@daniel.io">hello@daniel.io</a>
          <p>116 Fairground Rd, FL 3290, USA</p>
          <div className="mini-nav">
            <a href="#services">Services</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </section>
    </main>
  );
}
