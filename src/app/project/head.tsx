import { notFound } from "next/navigation";
import { getProject } from "@/app/project/lib/data";
import styles from "./head.module.css";

export const instant = false;

export default async function ProjectHead({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  return (
    <div className={styles.head}>
      <div className={styles.meta}>
        <span className={styles.metaItem}>{project.org}</span>
        <span className={styles.metaItem}>{project.period}</span>
        <span className={styles.metaItem}>{project.role}</span>
      </div>
      <h1 className={styles.title}>{project.title}</h1>
      <ul className={styles.tags} aria-label="Technologies">
        {project.tags?.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
      <p className={styles.lead}>{project.lead}</p>
      {project.stats && (
        <dl className={styles.stats}>
          {project.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
