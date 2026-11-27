import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/app/project/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <header className={styles.head}>
        <span className={styles.eyebrow}>2019 — 2026</span>
        <h1 className={styles.title}>Selected work</h1>
        <p className={styles.intro}>
          Five projects I&apos;m proud of — the problem, what I did, and what
          changed.
        </p>
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
