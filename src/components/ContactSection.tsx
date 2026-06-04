import { MailIcon } from './icons';
import SocialLinks from './SocialLinks';
import { SOCIALS } from '@/lib/content';

/** The shared "Let's talk" contact block (identical on home + about). */
export default function ContactSection({
  className = 'section section--surface-low',
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <section className={className} id={id}>
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
          <a href={SOCIALS.email} className="btn btn--primary">
            <MailIcon className="btn__icon" />
            <span>Get in touch</span>
          </a>
          <div className="socials about-contact__socials">
            <SocialLinks include={['github', 'linkedin']} />
          </div>
        </div>
      </div>
    </section>
  );
}
