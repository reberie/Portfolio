import type { Metadata } from 'next';
import Timeline from '@/components/Timeline';
import { EXPERIENCE } from '@/lib/content';
import { GithubIcon, LinkedInIcon, MailIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Buianto Sodnomov — a software developer based in Toronto building mobile apps and full-stack systems. Experience, education, and background.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    url: '/about',
    title: 'About — Buianto Sodnomov',
    description:
      'Software developer based in Toronto. Building mobile apps and full-stack systems.',
  },
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="label about-hero__label fade-in">About</span>
          <h1 className="about-hero__title fade-in">
            Developer, builder, recent graduate.
          </h1>
          <p className="about-hero__intro fade-in">
            I&apos;m Buianto — a software developer based in Toronto. I build mobile apps
            and full-stack systems, and I care about the full arc: from the first sketch
            to production.
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
        <div className="about-hero__glow" />
      </section>

      {/* Experience */}
      <section className="section section--surface-low">
        <div className="container">
          <div className="about-experience">
            <div className="about-experience__header fade-in">
              <span className="label about-experience__label">Experience</span>
              <h2 className="about-experience__title">Where I&apos;ve worked &amp; studied</h2>
            </div>

            <Timeline items={EXPERIENCE} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section--surface">
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
