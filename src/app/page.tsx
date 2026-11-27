import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const highlights = [
  {
    label: "Engineering Attitude",
    title: "A Researcher at Heart",
    body: `Computer science is not only what I studied, but
    how I approach engineering. I habitually question
    claims about performance, system design,
    and software development practices.  because on
    occassion I find the claims to be flawed or
    invalidated by the latest developments. Stack
    Overflow and Google might provide a starting point,
    but not the best answer. I seek out what is
    possible by testing and measuring the limits of
    modern technology.`,
  },
  {
    label: "Agentic Development",
    title: "One Man, a Team of Agents",
    body: `I orchestrate, manage, and code review multiple
    simultaneous agentic development sessions for every
    facet of software development including UI development, unit + DOM + browser testing, accessibility compliance (WCAG), SDK, API, and backend services, code repository maintenance, continuous integration and deployment, code quality assurance, and project and code management (Jira and Github).`,
  },
  {
    label: "Generative AI",
    title: "Private, Customized LLM Services",
    body: `I have deployed privately hosted LLMs
    running the latest models, enhanced them with
    retrieval augmented generation, layered on natural language processing, and systematically engineered prompts so that they produce targeted, truthful
    outputs with a controlled cost.`,
  },
];

export default function MePage() {
  return (
    <>
      <section className={styles.intro} aria-labelledby="me-title">
        <Image
          className={styles.avatar}
          src="/images/profile-photo.jpg"
          alt="Portrait of Tim Ma"
          width={152}
          height={152}
          priority
        />

        <ul className={styles.details} aria-label="Availability and contact">
          <li className={styles.status}>
            <span className={styles.live} aria-hidden="true" />
            Open to staff roles
          </li>
          <li className={styles.detail}>USA / Remote</li>
          <li>
            <a
              className={styles.detailLink}
              href="mailto:timma@alumni.ucla.edu"
            >
              timma@alumni.ucla.edu
            </a>
          </li>
          <li>
            <a
              className={styles.detailLink}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
              <span className={styles.srOnly}>(opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <div className={styles.overview}>
          <h1 id="me-title" className={styles.title}>
            Tim Ma
          </h1>
          <div className={styles.subtitle}>Software Engineer</div>
          <p className={styles.headline}>
            I build <strong className={styles.emphasis}>beautiful</strong>,{" "}
            <strong className={styles.emphasis}>performant</strong> software
            using TypeScript, React.js, Next.js, and Node.js.
          </p>
        </div>

        <div className={styles.actions}>
          <Link className={styles.buttonPrimary} href="/project">
            See selected work <span aria-hidden="true">→</span>
          </Link>
          <a className={styles.button} href="mailto:timma@alumni.ucla.edu">
            Get in touch
          </a>
        </div>
      </section>

      <section className={styles.highlights} aria-label="Highlights">
        {highlights.map((item) => (
          <article key={item.title} className={styles.highlight}>
            <span className={styles.highlightLabel}>{item.label}</span>
            <h2 className={styles.highlightTitle}>{item.title}</h2>
            <p className={styles.highlightBody}>{item.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
