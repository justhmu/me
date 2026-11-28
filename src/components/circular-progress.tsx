import type { ReactNode } from "react";

import styles from "./circular-progress.module.css";

export default function CircularProgress(props: {
  progress: number;
  className?: string;
  children?: ReactNode;
}) {
  const { progress = 0.5, className, children } = props;
  return (
    <div
      className={[styles["circular-progress"], className]
        .filter((x) => x)
        .join(" ")}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-90deg)" }}
      >
        <title>Circular progress</title>
        <circle
          className={styles.background}
          r="90"
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth="14"
        ></circle>
        <circle
          className={styles.foreground}
          r="90"
          cx="100"
          cy="100"
          stroke="#76e5b1"
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray="565.2px"
          style={{
            strokeDashoffset: `${Math.round(565 * (1 - progress))}px`,
          }}
        ></circle>
      </svg>
      {children && <div className="content">{children}</div>}
    </div>
  );
}
