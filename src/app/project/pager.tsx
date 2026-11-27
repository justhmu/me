import Link from "next/link";
import { getProject, projects } from "@/app/project/lib/data";
import styles from "./pager.module.css";

export default async function ProjectPager(props: { slug: string }) {
  const { slug } = props;
  const project = getProject(slug);
  if (!project) {
    return;
  }

  const index = projects.indexOf(project);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <nav className={styles.pager} aria-label="Project pagination">
      {previous && (
        <Link className={styles.pagerLink} href={`/project/${previous.slug}`}>
          <span className={styles.pagerLabel}>← Previous</span>
          <span className={styles.pagerTitle}>{previous.navTitle}</span>
        </Link>
      )}
      {next && (
        <Link className={styles.pagerLinkNext} href={`/project/${next.slug}`}>
          <span className={styles.pagerLabel}>Next →</span>
          <span className={styles.pagerTitle}>{next.navTitle}</span>
        </Link>
      )}
    </nav>
  );
}
