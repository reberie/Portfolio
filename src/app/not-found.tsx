import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <span className="label hero__label">404</span>
          <h1 className="hero__title">
            Lost the
            <br />
            <span className="text-gradient">thread.</span>
          </h1>
          <p className="hero__subtitle">
            That page doesn&apos;t exist — or it moved. Let&apos;s get you back on track.
          </p>
          <div className="hero__cta">
            <Link href="/" className="btn btn--primary">
              <span>Back home</span>
            </Link>
            <Link href="/#projects" className="btn btn--secondary">
              <span>See projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
