import type { BundledLanguage } from "shiki";

export type CodeToken = {
  kind?: "keyword" | "string" | "comment";
  text: string;
};

export type Project = {
  slug: string;
  title: string;
  navTitle: string;
  year: string;
  org: string;
  period: string;
  role: string;
  summary: string;
  metric: string;
  lead: string;
  stats?: { value: string; label: string }[];
  sections?: {
    heading: string;
    body: string;
    code?: { label: string; lang: BundledLanguage; source: string };
  }[];
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Portfolio",
    navTitle: "Portfolio",
    year: "2026",
    org: "Just HMU",
    period: "2026",
    role: "Creator",
    summary:
      "Showcase myself using the best software tools and platforms available in 2026.",
    metric: "Next.js, Vercel, Bun, Biome",
    lead: "Showcase myself using the best software tools and platforms available today.",
    sections: [
      {
        heading: "Introduction",
        body: "This small project was a good chance to try out all of the latest tech available.",
      },
      {
        heading: "Frontend: Next.js",
        body: "Next.js is, without a doubt, the premier frontend framework today. Being built on React.js and supporting SSR out of the box through it's backend-for-frontend, this choice is a no-brainer. It easily earns its place.",
      },
      {
        heading: "Runtime: Bun",
        body: "Bun has been around for a good few years, but after being acquired by Anthropic at the end of 2025 to support Claude and being rewritten in Rust, it is now a clear contender and replacement for Node.js. Bun is tightly integrated with its toolkit, and benchmarks show that it has significant performance advantages over other JS runtimes. I have a really good feeling about Bun, and my nose for winning tech has historically been good.",
      },
      {
        heading: "Code Quality: Biome",
        body: "In a recent project, I was stuck using an EOL-ed version ESLint - the dependency tree forced it. Typically, you are also cobbling ESLint together with Prettier and ensuring that you run them in the proper order in dev and CI. Biome promises a better experience. It combines linting and formatting into one tool, boasts a 35x speed increase according to one benchmark, and offers improved diagnostics on code quality issues. I had to try it out.",
      },
      {
        heading: "Cloud: Vercel",
        body: "Historically, I have enjoyed provisioning and managing my own servers, but managed cloud offerings are becoming so good these days it's becoming hard to justify the effort. Given the previous tech choices, Vercel's cloud offering was a shoe-in. I push code changes to Github, and Vercel builds and deploys an instance of the Next.js app.",
      },
    ],
  },
  /*
  {
    slug: "tidewater",
    title: "Tidewater",
    navTitle: "Tidewater",
    year: "2024",
    org: "Open source",
    period: "2024 — Now",
    role: "Creator & maintainer",
    summary: "A local-first CRDT sync engine for the web.",
    metric: "12k stars · 300+ teams",
    lead: "A CRDT-based sync layer that lets web apps work offline and reconcile changes in milliseconds.",
    stats: [
      { value: "12k", label: "GitHub stars" },
      { value: "300+", label: "Teams in prod" },
      { value: "~2ms", label: "Merge time" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Every team I worked with rebuilt offline support from scratch, and every version broke in a new way when two devices edited the same record.",
        code: {
          label:
            "Code example: creating a Tidewater store and subscribing to changes",
          lang: "javascript",
          source: `
    import { createStore } from "tidewater"

    const store = createStore({ name: "notes", offline: true })
    store.subscribe((doc) => render(doc)) // merges in ~2ms
          `,
        },
      },
      {
        heading: "What I built",
        body: "A Rust core compiled to WASM with a tiny TypeScript API. Documents sync over any transport, and conflicts resolve deterministically without a central server.",
      },
      {
        heading: "Outcome",
        body: "Adopted by 300+ teams, featured at two conferences, and now maintained with four regular contributors.",
      },
    ],
    tags: ["Rust", "WASM", "CRDTs", "TypeScript"],
  },
  {
    slug: "ledger",
    title: "Payments ledger rewrite",
    navTitle: "Payments ledger",
    year: "2023",
    org: "Ledgerly",
    period: "2023",
    role: "Tech lead",
    summary: "Monolith to event-sourced ledger, zero downtime.",
    metric: "−62% reconciliation errors",
    lead: "Migrating a monolithic billing service to an event-sourced ledger — without ever pausing money movement.",
    stats: [
      { value: "−62%", label: "Recon errors" },
      { value: "14", label: "Currencies" },
      { value: "0 min", label: "Downtime" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Balances were computed from mutable rows, so every bug became a manual reconciliation ticket and finance closed the month two days late.",
      },
      {
        heading: "What I did",
        body: "Designed an append-only double-entry ledger on Postgres with Kafka fan-out, then ran old and new systems in shadow mode for eight weeks before cutting over currency by currency.",
      },
      {
        heading: "Outcome",
        body: "Reconciliation errors dropped by 62%, month-end close went from days to hours, and audits now replay from events.",
      },
    ],
    tags: ["Go", "Postgres", "Kafka"],
  },
  {
    slug: "search",
    title: "Edge search API",
    navTitle: "Edge search API",
    year: "2021",
    org: "Northwind",
    period: "2021",
    role: "Lead engineer",
    summary: "Geo-distributed search with tiered caching.",
    metric: "p99 240ms → 18ms",
    lead: "A geo-distributed search service with tiered caching, serving 1.2B queries a month.",
    stats: [
      { value: "18ms", label: "p99 latency" },
      { value: "1.2B", label: "Queries / month" },
      { value: "−31%", label: "Infra spend" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "A single-region search cluster meant users in Asia waited a quarter-second for every keystroke.",
      },
      {
        heading: "What I did",
        body: "Moved query parsing and hot results to the edge, added a regional Redis tier, and introduced latency budgets that failed CI when regressions slipped in.",
      },
      {
        heading: "Outcome",
        body: "p99 latency fell from 240ms to 18ms, and search-driven conversion rose 9% in the first quarter.",
      },
    ],
    tags: ["TypeScript", "Redis", "Edge"],
  },
  {
    slug: "quiet-ci",
    title: "Quiet CI",
    navTitle: "Quiet CI",
    year: "2020",
    org: "Side project",
    period: "2020",
    role: "Author",
    summary: "Flaky test runs summarized into one report.",
    metric: "2.1k weekly installs",
    lead: "A CLI that summarizes flaky test runs into one actionable report. Born from a very long week.",
    stats: [
      { value: "2.1k", label: "Weekly installs" },
      { value: "1", label: "Report per run" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Retries hid flaky tests until they became outages. Nobody had time to read 4,000 lines of CI logs.",
      },
      {
        heading: "What I built",
        body: "A zero-config Node CLI that parses JUnit output across runs, scores flakiness, and posts a short summary to the pull request.",
      },
    ],
    tags: ["Node", "CLI"],
  },
  {
    slug: "fieldnote",
    title: "Design system & editor",
    navTitle: "Design system",
    year: "2019",
    org: "Fieldnote",
    period: "2019",
    role: "Frontend engineer",
    summary: "Components and a collaborative editor for 2M users.",
    metric: "AA accessible · 40+ components",
    lead: "The component library and collaborative rich-text editor for a note-taking app with 2M users.",
    stats: [
      { value: "40+", label: "Components" },
      { value: "AA", label: "WCAG level" },
      { value: "2M", label: "Users" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Three teams were shipping three slightly different buttons, and the editor dropped keystrokes during collaborative sessions.",
      },
      {
        heading: "What I did",
        body: "Built an accessible component library with documented tokens, and rewrote the editor on ProseMirror with operational transforms for real-time collaboration.",
      },
    ],
    tags: ["React", "ProseMirror", "Accessibility"],
  },
  */
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
