import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

const SITE = 'https://buiantosodnomov.com';
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CreativeWork',
      name: 'BioHub',
      description:
        'A native iOS health app that helps users make sense of their health data.',
      author: { '@type': 'Person', name: 'Buianto Sodnomov', url: `${SITE}/` },
      url: `${SITE}/projects/biohub/`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'BioHub',
          item: `${SITE}/projects/biohub/`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: 'BioHub',
  description:
    'Case study: BioHub, an iOS health app built with Swift and SwiftUI. Built by Buianto Sodnomov.',
  alternates: { canonical: '/projects/biohub' },
  openGraph: {
    type: 'article',
    url: '/projects/biohub',
    title: 'BioHub — Buianto Sodnomov',
    description: 'Case study: BioHub, an iOS health app built with Swift and SwiftUI.',
  },
};

export default function BioHub() {
  return (
    <div className="container case-study">
      <JsonLd data={schema} />
      <Link href="/#projects" className="back-link">
        ← Back to projects
      </Link>

      {/* Hero */}
      <section className="case-hero">
        <span className="label case-hero__label fade-in">iOS App · Personal Project</span>
        <h1 className="case-hero__title fade-in">BioHub</h1>

        <div className="case-hero__meta fade-in">
          <div className="case-hero__meta-item">
            <span className="label case-hero__meta-label">Role</span>
            <span className="case-hero__meta-value">Developer</span>
          </div>
          <div className="case-hero__meta-item">
            <span className="label case-hero__meta-label">Stack</span>
            <span className="case-hero__meta-value">Swift, SwiftUI</span>
          </div>
          <div className="case-hero__meta-item">
            <span className="label case-hero__meta-label">Status</span>
            <span className="case-hero__meta-value">In Development</span>
          </div>
        </div>

        <p className="case-hero__summary fade-in">
          A native iOS health app that helps users make sense of their health data —
          surfacing insights from numbers that are otherwise hard to interpret.
        </p>
      </section>

      {/* Problem */}
      <section className="case-section fade-in">
        <span className="label case-section__label">Context</span>
        <h2 className="case-section__title">Problem</h2>
        <div className="case-section__body">
          <p>
            Health data from devices and lab results is increasingly available, but most
            people don&apos;t know what their numbers mean. Apple Health stores a wealth of
            data, but the raw values lack context — what&apos;s normal? What&apos;s changing?
            What should I pay attention to?
          </p>
          <p>
            BioHub bridges that gap: it takes health data and presents it in a way that&apos;s
            understandable and actionable.
          </p>
        </div>
      </section>

      {/* Role */}
      <section className="case-section fade-in">
        <span className="label case-section__label">Contribution</span>
        <h2 className="case-section__title">My role</h2>
        <div className="case-section__body">
          <ul>
            <li>Sole developer — architecture, UI, data layer, and deployment</li>
            <li>Designed the data visualization approach to make health metrics intuitive</li>
            <li>Built natively with Swift and SwiftUI for the best possible iOS experience</li>
          </ul>
        </div>
      </section>

      {/* Technical Decisions */}
      <section className="case-section fade-in">
        <span className="label case-section__label">Decisions</span>
        <h2 className="case-section__title">Key technical decisions</h2>
        <div className="decisions">
          <div className="decision-card">
            <div className="decision-card__title">
              Native Swift + SwiftUI over cross-platform
            </div>
            <p className="decision-card__text">
              Health data on iOS means deep HealthKit integration. Going native gave direct
              access to Apple&apos;s health frameworks and ensured the UI felt like a
              first-class iOS citizen — something cross-platform tools struggle with for this
              kind of data-rich app.
            </p>
          </div>
          <div className="decision-card">
            <div className="decision-card__title">Clarity over completeness</div>
            <p className="decision-card__text">
              Rather than showing every possible metric, BioHub focuses on surfacing the data
              that matters most and presenting it with enough context to be useful. Less data,
              better understanding.
            </p>
          </div>
        </div>

        <aside className="case-note">
          <span className="label case-note__label">In development</span>
          <h3 className="case-note__title">More details coming soon</h3>
          <p>
            I&apos;m currently building BioHub and will update this page with deeper technical
            details, challenges, screenshots, and learnings as the project progresses.
          </p>
        </aside>
      </section>

      {/* CTA */}
      <section className="case-cta fade-in">
        <Link href="/#projects" className="btn btn--primary">
          See other projects
        </Link>
      </section>
    </div>
  );
}
