import type { ComponentType } from 'react';
import { GithubIcon, LinkedInIcon, MailIcon } from './icons';
import { SOCIALS } from '@/lib/content';

type Key = 'github' | 'linkedin' | 'email';

const ITEMS: { key: Key; href: string; label: string; Icon: ComponentType }[] = [
  { key: 'github', href: SOCIALS.github, label: 'GitHub', Icon: GithubIcon },
  { key: 'linkedin', href: SOCIALS.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { key: 'email', href: SOCIALS.email, label: 'Email', Icon: MailIcon },
];

/**
 * Renders the profile links (icons) from a single source. Used by the footer,
 * the hero, and the contact section, which only differ in className, whether a
 * tooltip `data-label` is shown, and which links are included.
 */
export default function SocialLinks({
  className = 'social-btn',
  withLabel = true,
  include = ['github', 'linkedin', 'email'],
}: {
  className?: string;
  withLabel?: boolean;
  include?: Key[];
}) {
  return (
    <>
      {ITEMS.filter((item) => include.includes(item.key)).map(({ key, href, label, Icon }) => {
        const external = !href.startsWith('mailto:');
        return (
          <a
            key={key}
            href={href}
            className={className}
            aria-label={label}
            {...(withLabel ? { 'data-label': label } : {})}
            {...(external ? { target: '_blank', rel: 'noopener' } : {})}
          >
            <Icon />
          </a>
        );
      })}
    </>
  );
}
