import { Link } from "react-router-dom";
import { SparklesCore } from "@/components/ui/sparkles";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ArrowIcon, GithubIcon, LinkedInIcon, UserIcon } from "@/components/SocialIcons";

const SKILLS = [
  "C#", "Java", "Python", "JavaScript", "TypeScript", "Swift", "SQL",
  "React Native", "SwiftUI", ".NET", "Node.js", "React", "PostgreSQL",
  "MongoDB", "Firebase", "Azure", "AWS", "Git", "CI/CD", "Jenkins",
  "REST APIs", "OAuth / JWT",
];

export const Home = () => {
  useRevealOnScroll();

  return (
    <>
      <section className="hero">
        <div className="hero__sparkles">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={80}
            speed={1}
            particleColor="#ffffff"
            className="h-full w-full"
          />
        </div>
        <div className="container hero__content">
          <span className="label hero__label">Software Developer</span>
          <h1 className="hero__title">
            I build things<br />that <span className="text-gradient">ship.</span>
          </h1>
          <p className="hero__subtitle">
            Full-stack developer with a focus on mobile apps, clean architecture, and taking projects from idea to production.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              <span>View projects</span>
              <ArrowIcon />
            </a>
            <Link to="/about" className="btn btn--secondary">
              <UserIcon />
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
        <div className="hero__glow hero__glow--primary"></div>
        <div className="hero__glow hero__glow--secondary"></div>
      </section>

      <section className="section section--surface-low" id="projects">
        <div className="container">
          <span className="label fade-in">Selected Work</span>
          <h2 className="fade-in" style={{ marginTop: "var(--space-sm)", marginBottom: "var(--space-2xl)" }}>
            Projects
          </h2>

          <div className="projects-grid stagger">
            <Link to="/projects/puffzero" className="project-card">
              <img src="/puffzero-screenshot.png" alt="PuffZero app banner" />
              <div className="project-card__body">
                <span className="label project-card__label">Mobile App</span>
                <h3 className="project-card__title">PuffZero</h3>
                <p className="project-card__desc">
                  A cross-platform quit-vaping tracker published on the App Store. Designed, built, and shipped end-to-end.
                </p>
                <div className="project-card__tags">
                  <span className="chip">React Native</span>
                  <span className="chip">Expo</span>
                  <span className="chip">App Store</span>
                </div>
              </div>
            </Link>

            <Link to="/projects/biohub" className="project-card">
              <div className="project-card__image">
                <div className="placeholder-img">Screenshot coming soon</div>
              </div>
              <div className="project-card__body">
                <span className="label project-card__label">iOS App</span>
                <h3 className="project-card__title">BioHub</h3>
                <p className="project-card__desc">
                  A health app that helps users understand and make sense of their health data. Built natively with Swift and SwiftUI.
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

      <section className="section section--surface" id="skills">
        <div className="container">
          <span className="label fade-in">Tech Stack</span>
          <h2 className="fade-in" style={{ marginTop: "var(--space-sm)", marginBottom: "var(--space-2xl)" }}>
            What I work with
          </h2>
          <div className="skills-row stagger">
            {SKILLS.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
