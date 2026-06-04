// Shared portfolio content. Centralized so the home page (highlights) and the
// About page (full list) never drift out of sync.

export type Job = {
  date: string;
  type: string;
  role: string;
  company: string;
  location?: string;
  desc?: string;
  active?: boolean;
  /** Surfaced in the condensed "highlights" list on the home page. */
  highlight?: boolean;
};

export const EXPERIENCE: Job[] = [
  {
    date: 'Apr 2026 — Present',
    type: 'Internship',
    role: 'Software Developer Field Placement',
    company: 'Lakeridge Health',
    location: 'Oshawa, ON · Remote',
    desc: 'Current field placement as part of my Advanced Diploma. Contributing to software development work in a healthcare setting.',
    active: true,
    highlight: true,
  },
  {
    date: 'Oct 2025 — Apr 2026',
    type: 'Part-time',
    role: 'Peer Coach',
    company: 'Durham College',
    location: 'Oshawa, ON',
    desc: "One-on-one coaching on time management, organization, and academic planning. Adapted communication to each student's style and level of prior knowledge.",
  },
  {
    date: 'May 2025 — Aug 2025',
    type: 'Internship',
    role: 'Software Developer Intern',
    company: 'Giesecke+Devrient',
    location: 'Markham, ON',
    desc: 'Full SDLC in Agile. Resolved .NET/ASP.NET defects, contributed to Jenkins CI/CD, supported SonarQube code quality to 50%+ coverage, and helped migrate version control from TFS to Bitbucket. Wrote 50+ pages of technical docs in Confluence.',
    highlight: true,
  },
  {
    date: 'Sep 2024 — Apr 2025',
    type: 'Part-time',
    role: 'A/V Technician',
    company: 'Durham College',
    location: 'Oshawa, ON',
    desc: 'Diagnosed and resolved technical issues during live events under time pressure. Tracked 1000+ pieces of equipment and took initiative to keep setups running smoothly.',
  },
  {
    date: 'May 2024 — Apr 2025',
    type: 'Part-time',
    role: 'Peer Tutor',
    company: 'Durham College',
    location: 'Oshawa, ON',
    desc: 'Supported 3+ students weekly with technical concepts and problem-solving. Gave feedback on 5+ assignments per week.',
  },
  {
    date: 'Jan 2024 — Apr 2026',
    type: 'Education',
    role: 'Computer Programming & Analysis',
    company: 'Durham College',
    location: 'Advanced Diploma',
    highlight: true,
  },
];

export const SKILLS = [
  'C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Swift', 'SQL',
  'React Native', 'SwiftUI', '.NET', 'Node.js', 'React', 'PostgreSQL',
  'MongoDB', 'Firebase', 'Azure', 'AWS', 'Git', 'CI/CD', 'Jenkins',
  'REST APIs', 'OAuth / JWT',
];

// Single source of truth for the profile URLs (referenced in many places).
export const SOCIALS = {
  github: 'https://github.com/reberie',
  linkedin: 'https://www.linkedin.com/in/buianto-sodnomov-9087672ba/',
  email: 'mailto:bsodnomovv@gmail.com',
} as const;

export type Project = {
  slug: string;
  href: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image?: { src: string; alt: string; width: number; height: number };
  placeholder?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: 'puffzero',
    href: '/projects/puffzero',
    category: 'Mobile App',
    title: 'PuffZero',
    description:
      'A cross-platform quit-vaping tracker published on the App Store. Designed, built, and shipped end-to-end.',
    tags: ['React Native', 'Expo', 'App Store'],
    image: {
      src: '/puffzero-screenshot.webp',
      alt: 'PuffZero app banner',
      width: 1280,
      height: 720,
    },
  },
  {
    slug: 'biohub',
    href: '/projects/biohub',
    category: 'iOS App',
    title: 'BioHub',
    description:
      'A health app that helps users understand and make sense of their health data. Built natively with Swift and SwiftUI.',
    tags: ['Swift', 'SwiftUI', 'HealthKit'],
    placeholder: 'Screenshot coming soon',
  },
];
