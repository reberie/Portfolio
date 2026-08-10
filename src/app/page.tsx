import Link from 'next/link';
import Timeline from '@/components/Timeline';
import ProjectCard from '@/components/ProjectCard';
import ContactSection from '@/components/ContactSection';
import SocialLinks from '@/components/SocialLinks';
import JsonLd from '@/components/JsonLd';
import { EXPERIENCE, PROJECTS, SKILLS, SOCIALS } from '@/lib/content';
import { ArrowRightIcon, UserIcon } from '@/components/icons';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Buianto (Ben) Sodnomov',
  alternateName: 'Ben Sodnomov',
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
  email: SOCIALS.email,
  sameAs: [SOCIALS.github, SOCIALS.linkedin],
};

export default function Home() {
  const highlights = EXPERIENCE.filter((job) => job.highlight);

  return (
    <>
      <JsonLd data={personSchema} />

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
                <SocialLinks
                  className="hero-social"
                  withLabel={false}
                  include={['github', 'linkedin']}
                />
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
            I&apos;m Buianto (Ben) — a Toronto-based software developer. I build mobile apps and
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
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
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
      <ContactSection className="section section--surface-low" id="contact" />
    </>
  );
}
