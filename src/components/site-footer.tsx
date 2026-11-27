import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.note}>© 2026 Tim Ma</span>
        <span className={styles.note}>Software Engineer Portfolio</span>
      </div>
    </footer>
  );
}
