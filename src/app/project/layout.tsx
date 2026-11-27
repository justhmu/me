import styles from "./layout.module.css";
import { ProjectSubnav } from "./subnav";

export const instant = false;

export default async function WorkLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <ProjectSubnav />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
