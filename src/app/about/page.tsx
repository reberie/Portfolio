import type { Metadata } from 'next';
import Timeline from '@/components/Timeline';
import ContactSection from '@/components/ContactSection';
import { EXPERIENCE } from '@/lib/content';

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
      <ContactSection className="section section--surface" />
    </>
  );
}
