import { depth, depthIntro, fit, hero, logistics, profile, why, work } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to the work
      </a>
      <div className="announcement">
        <p>Written for the Watershed hiring team</p>
      </div>
      <header className="nav">
        <a className="brand" href="#top">
          <svg className="mark" viewBox="0 0 18 18" aria-hidden="true">
            <rect width="18" height="18" fill="#041330" />
            <rect y="3" width="18" height="3" fill="#265cff" />
            <rect y="8" width="11" height="3" fill="#ffffff" />
            <rect y="13" width="18" height="3" fill="#abf1d0" />
          </svg>
          {profile.name}
        </a>
        <nav aria-label="Page">
          <a href="#work">Work</a>
          <a href="#role">The role</a>
          <a href="#depth">For engineers</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="lede">{hero.lede}</p>
            <div className="actions">
              <a className="button" href="#work">
                The work
                <span aria-hidden="true">→</span>
              </a>
              <a className="button button-quiet" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </div>
          <aside className="signal" aria-label="The shape of the role">
            <div className="swatches" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <p className="signal-kicker">The failure mode</p>
            <p className="signal-title">
              A wrong number becomes a filing, a portfolio decision, or a target someone manages to.
            </p>
            <dl>
              <div>
                <dt>In production</dt>
                <dd>13 years, since 2013</dd>
              </div>
              <div>
                <dt>TV and web player</dt>
                <dd>8 years, through Oct 14, 2026</dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd>New York, one remote Thu–Fri a month</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="section why" id="why">
          <div className="section-intro">
            <p className="eyebrow">{why.kicker}</p>
            <h2>{why.title}</h2>
          </div>
          <div className="prose">
            {why.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-intro">
            <p className="eyebrow">Two bodies of work</p>
            <h2>Product, and the system the release was judged on.</h2>
          </div>
          <ol className="work-list">
            {work.map((item) => (
              <li key={item.index}>
                <div className="work-index">
                  <span>{item.index}</span>
                  <span className="kicker">{item.kicker}</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  {item.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section role" id="role">
          <div className="section-intro">
            <p className="eyebrow">The seat</p>
            <h2>How the work meets a full-stack product role.</h2>
          </div>
          <ul className="fit-grid">
            {fit.map((item) => (
              <li key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section depth" id="depth">
          <div className="section-intro">
            <p className="eyebrow">For engineers</p>
            <h2>If you want the mechanism.</h2>
            <p className="depth-intro">{depthIntro}</p>
          </div>
          <div className="accordion">
            {depth.map((item) => (
              <details key={item.title}>
                <summary>
                  <span>{item.title}</span>
                  <i aria-hidden="true" />
                </summary>
                <p>{item.body}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="close" id="contact">
        <div className="close-inner">
          <p className="eyebrow eyebrow-light">Contact</p>
          <h2>I want this role.</h2>
          <ul className="logistics">
            {logistics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="actions">
            <a className="button" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="button button-ghost" href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="button button-ghost" href={profile.github}>
              GitHub
            </a>
          </div>
          <p className="colophon">
            Built with Next.js, React, and TypeScript, the application stack behind watershed.com.
            Their marketing site also uses Sanity and is served from Vercel. This page keeps its
            copy in the repository and is hosted on Firebase. It is an independent page for
            Watershed’s hiring team, and it is not a Watershed product.
          </p>
        </div>
      </footer>
    </>
  );
}
