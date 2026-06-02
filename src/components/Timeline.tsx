import type { Job } from '@/lib/content';

/** Renders a list of experience entries in the editorial timeline style. */
export default function Timeline({ items }: { items: Job[] }) {
  return (
    <div className="timeline stagger">
      {items.map((job) => (
        <div
          key={`${job.role}-${job.date}`}
          className={`timeline__item${job.active ? ' timeline__item--active' : ''}`}
        >
          <div className="timeline__date">
            <span>{job.date}</span>
            <span className="timeline__date-type">{job.type}</span>
          </div>
          <div className="timeline__role">{job.role}</div>
          <div className="timeline__company">
            <span className="timeline__company-name">{job.company}</span>
            {job.location ? <> · {job.location}</> : null}
          </div>
          {job.desc ? <p className="timeline__desc">{job.desc}</p> : null}
        </div>
      ))}
    </div>
  );
}
