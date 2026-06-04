import Link from 'next/link';
import type { Project } from '@/lib/content';

/** A single project card in the work grid, driven by a PROJECTS entry. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="project-card">
      <div className="project-card__image">
        {project.image ? (
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="placeholder-img">{project.placeholder ?? 'Coming soon'}</div>
        )}
      </div>
      <div className="project-card__body">
        <span className="label project-card__label">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
