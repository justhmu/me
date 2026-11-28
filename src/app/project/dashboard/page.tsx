import pageStyles from "../[slug]/page.module.css";
import ProjectHead from "../head";
import ProjectPager from "../pager";
import DashboardInstrument from "./instrument";
import styles from "./page.module.css";

export default async function Dashboard() {
  return (
    <article className={pageStyles.article}>
      <ProjectHead slug="dashboard" />

      <div className={pageStyles.body}>
        <div className={pageStyles.section}>
          <h2 className={pageStyles.sectionTitle}>Motivation</h2>
          <p className={pageStyles.sectionBody}>
            I was applying for a role on an analytics team and it was explained
            to me that their product was similar to Google Analytics. It had
            been a while since I built a statistical dashboard, so I thought I'd
            give it a try.
          </p>
          <h2 className={pageStyles.sectionTitle}>Product</h2>
          <div className={styles.dashboard}>
            <DashboardInstrument
              label="Traffic"
              value={28382}
              unit="visitors"
            />
            <DashboardInstrument
              label="Customer Acquisition Cost"
              value={129.85}
              unit="USD"
            />
            <DashboardInstrument
              label="Bounce Rate"
              value={24.7}
              maxValue={100}
              unit="%"
            />
            <DashboardInstrument
              label="Add to Cart Rate"
              value={83.2}
              maxValue={100}
              unit="%"
            />
            <DashboardInstrument
              label="Cart Abandonment Rate"
              value={38.4}
              maxValue={100}
              unit="%"
            />
            <DashboardInstrument
              label="Conversion Rate"
              value={54.7}
              maxValue={100}
              unit="%"
            />
            <DashboardInstrument
              label="Average Order Value"
              value={285.73}
              unit="USD"
            />
            <DashboardInstrument label="Refund Rate" value={8.16} unit="%" />
            <DashboardInstrument label="Retention Rate" value={68.7} unit="%" />
            <DashboardInstrument
              label="Customer Lifetime Value"
              value={9283.11}
              unit="USD"
            />
          </div>
        </div>
      </div>

      <ProjectPager slug="dashboard" />
    </article>
  );
}
