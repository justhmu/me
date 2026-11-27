import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Experience" };

const roles: {
  period: string;
  title: string;
  company: string;
  body: string;
}[] = [
  {
    period: "2025-2026",
    title: "Software Developer and Owner",
    company: "Just HMU",
    body: `Built a complete software stack supporting a geolocation based social app including a real-time multiplayer card game and LLM-enhanced chat services.`,
  },
  {
    period: "2026",
    title: "Software Engineer",
    company: "Summit Metals LLC",
    body: `Full-stack agentic software development migrating a legacy Shopify storefront to the Medusa.js eCommerce platform to support a precious metals trading business which was agressively expanding into video streaming.`,
  },
  {
    period: "2018-2025",
    title: "Software Developer and Owner",
    company: "Kinnokumo",
    body: `Built a SaaS product targeting small business niches, serving thousands of customers and moving over 1M USD on a monthly basis.`,
  },
  {
    period: "2005-2018",
    title: "Application Developer",
    company: "University of California, Los Angeles",
    body: `Developed website and applications using C# / .NET, React.js, Node.js and other open source technologies reaching 100,000's of alumni monthly and securing millions in donations annually. Drove adoption of cloud infrastructure (AWS), continuous integration, and deployment when on-prem infra and manual deployment was the norm.`,
  },
  {
    period: "2003-2005",
    title: "Teaching Assistant",
    company: "University of California, Los Angeles",
    body: `Taught Computer Science courses in C++, algorithms, and assembly language. Lead packed discussion sections overflowing with students enrolled in other sections and received top reviews.`,
  },
  {
    period: "1999-2003",
    title: "B.S. Computer Science",
    company: "University of California, Los Angeles",
    body: "3.713 GPA. Timeless computer science theory forms the foundation of my career. Favorite class: algorithms.",
  },
];

const technologies: [
  type: "language" | "framework" | "system" | "standard" | "tool",
  name: string,
  years: number,
][] = [
  ["language", "TypeScript", 20],
  ["language", "C#", 10],
  ["language", "SQL", 20],
  ["language", "CSS", 20],
  ["standard", "Accessibility", 1],
  ["framework", "React", 9],
  ["framework", "Next.js", 1],
  ["system", "PostgreSQL", 8],
  ["system", "Redis", 1],
  ["system", "SQL Server", 15],
  ["system", "Nginx", 8],
  ["system", "AWS", 2],
  ["system", "Linux", 10],
  ["system", "Docker", 1],
  ["tool", "Github", 10],
  ["tool", "Jira", 3],
  ["tool", "Confluence", 3],
] as const;

export default function ExperiencePage() {
  return (
    <div className={styles.experience}>
      <header className={styles.head}>
        <span className={styles.eyebrow}>1999 — Now</span>
        <h1 className={styles.title}>Experience</h1>
        <p className={styles.intro}>
          I have thrived and achieved meaningful outcomes in every variety of
          engineering environment. Résumé available on request.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.title}>Technologies</h2>
        <h3 className={styles.group}>name · years</h3>
        <ul className={styles.pills}>
          {technologies.map(([type, name, years]) => (
            <li key={name} className={styles[type]}>
              {name} · <span className={styles.years}>{years}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Roles</h2>
        <ol className={styles.roles}>
          {roles.map((role) => (
            <li key={`${role.period}-${role.company}`} className={styles.role}>
              <span className={styles.period}>{role.period}</span>
              <div>
                <h2 className={styles.roleTitle}>
                  {role.title}{" "}
                  <span className={styles.company}>· {role.company}</span>
                </h2>
                <p className={styles.roleBody}>{role.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
