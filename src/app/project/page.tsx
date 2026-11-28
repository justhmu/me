import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/app/project/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  let minYear = projects[0].year;
  let maxYear = projects[0].year;
  for (const p of projects) {
    if (p.year < minYear) {
      minYear = p.year;
    }
    if (p.year > maxYear) {
      maxYear = p.year;
    }
  }

  return (
    <>
      <header className={styles.head}>
        <span className={styles.eyebrow}>
          {minYear === maxYear ? minYear : `${minYear} — ${maxYear}`}
        </span>
        <h1 className={styles.title}>Selected Work</h1>
        <p className={styles.intro}>Projects I&apos;m proud of.</p>
      </header>

      <div className={styles.projects}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            className={styles.card}
            href={`/project/${project.slug}`}
          >
            <div className={styles.cardTop}>
              <span className={styles.cardOrg}>{project.org}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </div>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardSummary}>{project.summary}</p>
            <span className={styles.metric}>{project.metric}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
