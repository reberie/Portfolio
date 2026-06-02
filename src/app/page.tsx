import Link from 'next/link';
import HeroCanvas from '@/components/HeroCanvas';
import { ArrowRightIcon, GithubIcon, LinkedInIcon, UserIcon } from '@/components/icons';

const SKILLS = [
  'C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Swift', 'SQL',
  'React Native', 'SwiftUI', '.NET', 'Node.js', 'React', 'PostgreSQL',
  'MongoDB', 'Firebase', 'Azure', 'AWS', 'Git', 'CI/CD', 'Jenkins',
  'REST APIs', 'OAuth / JWT',
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Buianto Sodnomov',
  url: 'https://buiantosodnomov.com/',
  image: 'https://buiantosodnomov.com/og-image.png',
  jobTitle: 'Software Developer',
  description:
    'Full-stack software developer based in Toronto, focused on mobile apps and shipping projects end-to-end.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  email: 'mailto:bsodnomovv@gmail.com',
  sameAs: [
    'https://github.com/reberie',
    'https://www.linkedin.com/in/buianto-sodnomov-9087672ba/',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section className="hero">
        <HeroCanvas />
        <div className="container hero__content">
          <span className="label hero__label">Software Developer</span>
          <h1 className="hero__title">
            I build things
            <br />
            that <span className="text-gradient">ship.</span>
          </h1>
          <p className="hero__subtitle">
            Full-stack developer with a focus on mobile apps, clean architecture, and
            taking projects from idea to production.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              <span>View projects</span>
              <ArrowRightIcon className="btn__icon btn__icon--arrow" />
            </a>
            <Link href="/about" className="btn btn--secondary">
              <UserIcon className="btn__icon" />
              <span>About me</span>
            </Link>
            <div className="hero-socials">
              <a
                href="https://github.com/reberie"
                target="_blank"
                rel="noopener"
                className="hero-social"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/buianto-sodnomov-9087672ba/"
                target="_blank"
                rel="noopener"
                className="hero-social"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="hero__glow hero__glow--primary" />
        <div className="hero__glow hero__glow--secondary" />
      </section>

      {/* Projects */}
      <section className="section section--surface-low" id="projects">
        <div className="container">
          <span className="label fade-in">Selected Work</span>
          <h2
            className="fade-in"
            style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-2xl)' }}
          >
            Projects
          </h2>

          <div className="projects-grid stagger">
            <Link href="/projects/puffzero" className="project-card">
              <img src="/puffzero-screenshot.png" alt="PuffZero app banner" />
              <div className="project-card__body">
                <span className="label project-card__label">Mobile App</span>
                <h3 className="project-card__title">PuffZero</h3>
                <p className="project-card__desc">
                  A cross-platform quit-vaping tracker published on the App Store.
                  Designed, built, and shipped end-to-end.
                </p>
                <div className="project-card__tags">
                  <span className="chip">React Native</span>
                  <span className="chip">Expo</span>
                  <span className="chip">App Store</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/biohub" className="project-card">
              <div className="project-card__image">
                <div className="placeholder-img">Screenshot coming soon</div>
              </div>
              <div className="project-card__body">
                <span className="label project-card__label">iOS App</span>
                <h3 className="project-card__title">BioHub</h3>
                <p className="project-card__desc">
                  A health app that helps users understand and make sense of their health
                  data. Built natively with Swift and SwiftUI.
                </p>
                <div className="project-card__tags">
                  <span className="chip">Swift</span>
                  <span className="chip">SwiftUI</span>
                  <span className="chip">HealthKit</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section section--surface" id="skills">
        <div className="container">
          <span className="label fade-in">Tech Stack</span>
          <h2
            className="fade-in"
            style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-2xl)' }}
          >
            What I work with
          </h2>
          <div className="skills-row stagger">
            {SKILLS.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
