import CircularProgress from "@/components/circular-progress";
import styles from "./instrument.module.css";

export default function DashboardInstrument(props: {
  label: string;
  value: number;
  maxValue?: number;
  unit: string;
}) {
  const { label, value, maxValue, unit } = props;

  return (
    <div className={styles.instrument}>
      {maxValue && (
        <CircularProgress
          className={styles.proportion}
          progress={value / maxValue}
        />
      )}
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.unit}>{unit}</div>
    </div>
  );
}
