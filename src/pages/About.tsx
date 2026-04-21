import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { EmailIcon, GithubIcon, LinkedInIcon } from "@/components/SocialIcons";

type TimelineEntry = {
  dates: string;
  type: string;
  role: string;
  company: string;
  location: string;
  desc?: string;
  active?: boolean;
};

const TIMELINE: TimelineEntry[] = [
  {
    dates: "Apr 2026 — Present",
    type: "Internship",
    role: "Software Developer Field Placement",
    company: "Lakeridge Health",
    location: "Oshawa, ON · Remote",
    desc: "Current field placement as part of my Advanced Diploma. Contributing to software development work in a healthcare setting.",
    active: true,
  },
  {
    dates: "Oct 2025 — Apr 2026",
    type: "Part-time",
    role: "Peer Coach",
    company: "Durham College",
    location: "Oshawa, ON",
    desc: "One-on-one coaching on time management, organization, and academic planning. Adapted communication to each student's style and level of prior knowledge.",
  },
  {
    dates: "May 2025 — Aug 2025",
    type: "Internship",
    role: "Software Developer Intern",
    company: "Giesecke+Devrient",
    location: "Markham, ON",
    desc: "Full SDLC in Agile. Resolved .NET/ASP.NET defects, contributed to Jenkins CI/CD, supported SonarQube code quality to 50%+ coverage, and helped migrate version control from TFS to Bitbucket. Wrote 50+ pages of technical docs in Confluence.",
  },
  {
    dates: "Sep 2024 — Apr 2025",
    type: "Part-time",
    role: "A/V Technician",
    company: "Durham College",
    location: "Oshawa, ON",
    desc: "Diagnosed and resolved technical issues during live events under time pressure. Tracked 1000+ pieces of equipment and took initiative to keep setups running smoothly.",
  },
  {
    dates: "May 2024 — Apr 2025",
    type: "Part-time",
    role: "Peer Tutor",
    company: "Durham College",
    location: "Oshawa, ON",
    desc: "Supported 3+ students weekly with technical concepts and problem-solving. Gave feedback on 5+ assignments per week.",
  },
  {
    dates: "Jan 2024 — Apr 2026",
    type: "Education",
    role: "Computer Programming & Analysis",
    company: "Durham College",
    location: "Advanced Diploma",
  },
];

export const About = () => {
  useRevealOnScroll();

  return (
    <>
      <section className="about-hero">
        <div className="container">
          <span className="label about-hero__label fade-in">About</span>
          <h1 className="about-hero__title fade-in">Developer, builder, recent graduate.</h1>
          <p className="about-hero__intro fade-in">
            I'm Buianto — a software developer based in Toronto. I build mobile apps and full-stack systems, and I care about the full arc: from the first sketch to production.
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
                <span className="about-meta__dot"></span>
                Open to work
              </span>
            </div>
          </div>
        </div>
        <div className="about-hero__glow"></div>
      </section>

      <section className="section section--surface-low">
        <div className="container">
          <div className="about-experience">
            <div className="about-experience__header fade-in">
              <span className="label about-experience__label">Experience</span>
              <h2 className="about-experience__title">Where I've worked & studied</h2>
            </div>

            <div className="timeline stagger">
              {TIMELINE.map((entry) => (
                <div
                  key={entry.role + entry.dates}
                  className={`timeline__item${entry.active ? " timeline__item--active" : ""}`}
                >
                  <div className="timeline__date">
                    <span>{entry.dates}</span>
                    <span className="timeline__date-type">{entry.type}</span>
                  </div>
                  <div className="timeline__role">{entry.role}</div>
                  <div className="timeline__company">
                    <span className="timeline__company-name">{entry.company}</span> · {entry.location}
                  </div>
                  {entry.desc && <p className="timeline__desc">{entry.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="about-contact fade-in">
            <span className="label">Let's talk</span>
            <h2 className="about-contact__title" style={{ marginTop: "var(--space-sm)" }}>
              Always open to a good conversation.
            </h2>
            <p className="about-contact__text">
              Whether you have a role, a project, or just want to chat about something you're building — reach out.
            </p>
            <a href="mailto:bsodnomovv@gmail.com" className="btn btn--primary">
              <EmailIcon />
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
};
