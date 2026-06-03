import Link from 'next/link';
import Timeline from '@/components/Timeline';
import { EXPERIENCE, SKILLS } from '@/lib/content';
import { ArrowRightIcon, GithubIcon, LinkedInIcon, MailIcon, UserIcon } from '@/components/icons';

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
  const highlights = EXPERIENCE.filter((job) => job.highlight);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero — copy anchored left, 3D object to the right */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
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
        </div>
      </section>

      {/* Intro / availability */}
      <section className="section section--surface-low intro" id="intro">
        <div className="container">
          <span className="label fade-in">Profile</span>
          <p className="intro__lead fade-in">
            I&apos;m Buianto — a Toronto-based software developer. I build mobile apps and
            full-stack systems, and I care about the full arc: from the first sketch to
            production.
          </p>
          <div className="about-meta fade-in">
            <div className="about-meta__item">
              <span className="about-meta__label">Location</span>
              <span className="about-meta__value">Toronto, ON</span>
            </div>
            <div className="about-meta__item">
              <span className="about-meta__label">Focus</span>
              <span className="about-meta__value">Mobile &amp; Full-stack</span>
            </div>
            <div className="about-meta__item">
              <span className="about-meta__label">Currently</span>
              <span className="about-meta__value about-meta__value--active">
                <span className="about-meta__dot" />
                Open to work
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section section--surface" id="projects">
        <div className="container">
          <span className="label fade-in">Selected Work</span>
          <h2
            className="fade-in"
            style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-2xl)' }}
          >
            Featured projects
          </h2>

          <div className="projects-grid stagger">
            <Link href="/projects/puffzero" className="project-card">
              <div className="project-card__image">
                <img
                  src="/puffzero-screenshot.png"
                  alt="PuffZero app banner"
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                />
              </div>
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

      {/* Experience highlights */}
      <section className="section section--surface-low" id="experience">
        <div className="container">
          <span className="label fade-in">Experience</span>
          <h2
            className="fade-in"
            style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-2xl)' }}
          >
            Recent highlights
          </h2>
          <div className="about-experience">
            <Timeline items={highlights} />
          </div>
          <Link href="/about" className="btn btn--tertiary section__cta fade-in">
            Full experience &amp; background
          </Link>
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

      {/* Contact */}
      <section className="section section--surface-low" id="contact">
        <div className="container">
          <div className="about-contact fade-in">
            <span className="label">Let&apos;s talk</span>
            <h2 className="about-contact__title" style={{ marginTop: 'var(--space-sm)' }}>
              Always open to a good conversation.
            </h2>
            <p className="about-contact__text">
              Whether you have a role, a project, or just want to chat about something
              you&apos;re building — reach out.
            </p>
            <a href="mailto:bsodnomovv@gmail.com" className="btn btn--primary">
              <MailIcon className="btn__icon" />
              <span>Get in touch</span>
            </a>
            <div className="socials about-contact__socials">
              <a
                href="https://github.com/reberie"
                target="_blank"
                rel="noopener"
                className="social-btn"
                data-label="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/buianto-sodnomov-9087672ba/"
                target="_blank"
                rel="noopener"
                className="social-btn"
                data-label="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
