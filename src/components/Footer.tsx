import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy">&copy; 2026 Buianto Sodnomov</span>
        <div className="socials footer__links">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
