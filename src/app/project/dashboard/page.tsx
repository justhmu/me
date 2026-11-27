import pageStyles from "../[slug]/page.module.css";
import ProjectHead from "../head";
import ProjectPager from "../pager";
import styles from "./page.module.css";

export default async function Project() {
  return (
    <article className={pageStyles.article}>
      <ProjectHead slug="dashboard" />

      <div className={pageStyles.body}>
        <div className={pageStyles.section}>
          <h2 className={pageStyles.sectionTitle}>Motivation</h2>
          <p className={pageStyles.sectionBody}>
            I was applying for a role on an analytics team and it was explained
            to me that their product was similar to Google Analytics. It had been
            a while since I built a statistical dashboard, so I thought I'd give
            it a try.
          </p>
          <div className={styles.dashboard}>
            
          </div>
        </div>
      </div>

      <ProjectPager slug="dashboard" />
    </article>
  );
}
