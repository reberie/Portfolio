import { EmailIcon, GithubIcon, LinkedInIcon } from "@/components/SocialIcons";

export const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <span className="footer__copy">&copy; 2026 Buianto Sodnomov</span>
      <div className="socials footer__links">
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
        <a
          href="mailto:bsodnomovv@gmail.com"
          className="social-btn"
          data-label="Email"
          aria-label="Email"
        >
          <EmailIcon />
        </a>
      </div>
    </div>
  </footer>
);
