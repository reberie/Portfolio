import { Link } from "react-router-dom";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export const PuffZero = () => {
  useRevealOnScroll();

  return (
    <main className="container case-study">
      <Link to="/" className="back-link">← Back to projects</Link>

      <section className="case-hero">
        <span className="label case-hero__label fade-in">Mobile App · Personal Project</span>
        <h1 className="case-hero__title fade-in">PuffZero</h1>

        <div className="case-hero__meta fade-in">
          <div className="case-hero__meta-item">
            <span className="label case-hero__meta-label">Timeline</span>
            <span className="case-hero__meta-value">Feb 2024 — Aug 2024</span>
          </div>
          <div className="case-hero__meta-item">
            <span className="label case-hero__meta-label">Role</span>
            <span className="case-hero__meta-value">Developer</span>
          </div>
          <div className="case-hero__meta-item">
            <span className="label case-hero__meta-label">Stack</span>
            <span className="case-hero__meta-value">React Native, Expo</span>
          </div>
          <div className="case-hero__meta-item">
            <span className="label case-hero__meta-label">Status</span>
            <span className="case-hero__meta-value">
              <a
                href="https://apps.apple.com/ca/app/puff-zero-quit-vaping-tracker/id6746369660"
                target="_blank"
                rel="noopener"
              >
                Live on App Store →
              </a>
            </span>
          </div>
        </div>

        <p className="case-hero__summary fade-in">
          A cross-platform mobile app that helps users track and quit vaping. Designed with a collaborating designer, built end-to-end, and published to the Apple App Store.
        </p>
      </section>

      <div className="case-image fade-in">
        <div className="placeholder-img" style={{ aspectRatio: "16/9" }}>App screenshots coming soon</div>
      </div>

      <section className="case-section fade-in">
        <span className="label case-section__label">Context</span>
        <h2 className="case-section__title">Problem</h2>
        <div className="case-section__body">
          <p>
            Vaping has become a widespread habit, especially among young adults, but most quitting tools are either overly clinical or designed for cigarette smokers. There was a gap for a modern, approachable app that specifically targets vaping habits.
          </p>
          <p>
            I wanted to build something that was genuinely useful — not just a timer, but a tool that helps users understand their patterns, stay motivated, and see real progress.
          </p>
        </div>
      </section>

      <section className="case-section fade-in">
        <span className="label case-section__label">Contribution</span>
        <h2 className="case-section__title">My role</h2>
        <div className="case-section__body">
          <ul>
            <li>Sole developer — designed the architecture, wrote all code, handled deployment</li>
            <li>Collaborated with a designer on the UI, iterating based on product needs and technical constraints</li>
            <li>Managed the full App Store submission and review process</li>
            <li>Handled API integrations, local data persistence, and cross-platform compatibility</li>
          </ul>
        </div>
      </section>

      <section className="case-section fade-in">
        <span className="label case-section__label">Decisions</span>
        <h2 className="case-section__title">Key technical decisions</h2>
        <div className="decisions">
          <div className="decision-card">
            <div className="decision-card__title">Local-first data storage</div>
            <p className="decision-card__text">
              Health and habit data is sensitive. Keeping data on-device by default was both a privacy-first decision and a way to simplify the architecture — no backend to build or maintain for v1.
            </p>
          </div>
          <div className="decision-card">
            <div className="decision-card__title">Iterative UI with a designer</div>
            <p className="decision-card__text">
              Rather than fully speccing the UI upfront, we iterated in short cycles — designer would propose a direction, I'd build it, and we'd adjust based on what felt right in-hand. This kept the product grounded.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section fade-in">
        <span className="label case-section__label">Tradeoffs</span>
        <h2 className="case-section__title">Challenges</h2>
        <div className="case-section__body">
          <ul>
            <li>
              <strong>App Store review process</strong> — Navigating Apple's guidelines for the first time required multiple submission iterations. Each rejection was a learning moment in understanding platform requirements.
            </li>
            <li>
              <strong>Cross-platform consistency</strong> — Ensuring the UI felt native on both iOS and Android meant handling platform-specific quirks in navigation, notifications, and layout.
            </li>
          </ul>
        </div>
      </section>

      <section className="case-section fade-in">
        <span className="label case-section__label">Takeaways</span>
        <h2 className="case-section__title">What I learned</h2>
        <div className="case-section__body">
          <p>
            This was my first time taking an app from idea to production. The biggest lesson was that shipping is a skill on its own — writing code is maybe 60% of the work. The rest is design decisions, testing on real devices, navigating store requirements, and making hard calls about scope.
          </p>
          <p>
            I also learned the value of working with a designer early. Having a collaborator who challenged my assumptions about the UI made the final product significantly better than what I would have built alone.
          </p>
        </div>
      </section>

      <section className="case-cta fade-in">
        <a
          href="https://apps.apple.com/ca/app/puff-zero-quit-vaping-tracker/id6746369660"
          target="_blank"
          rel="noopener"
          className="btn btn--primary"
        >
          View on App Store
        </a>
        <Link to="/" className="btn btn--tertiary">See other projects</Link>
      </section>
    </main>
  );
};
