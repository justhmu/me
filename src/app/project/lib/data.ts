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
        body: "This small project was a good chance to try out all of the latest tech available. It's the thing you're look at now.",
      },
      {
        heading: "Frontend: Next.js",
        body: "Next.js is, without a doubt, the premier frontend framework today. Being built on React.js and supporting SSR out of the box through it's backend-for-frontend, this choice is a no-brainer. It easily earns its place.",
      },
      {
        heading: "Runtime: Bun",
        body: "Bun has been around for a good few years, but after being acquired by Anthropic at the end of 2025 to support Claude and being rewritten in Rust, it is now a clear contender and replacement for Node.js. Bun is tightly integrated with its toolkit, and benchmarks show that it has significant performance advantages over every other JS runtime. I have a really good feeling about Bun, and my nose for winning tech has historically been good.",
      },
      {
        heading: "Code Quality: Biome",
        body: "In a recent Next.js project, I was stuck using an EOL-ed version ESLint - the dependency tree forced it. Then, typically, you are also cobbling ESLint together with Prettier and ensuring that you run them in the proper order in dev and CI. Biome promises a better experience. It combines linting and formatting into one tool, boasts a 35x speed increase according to one benchmark, and offers improved diagnostics on code quality issues. I had to try it out. There was no fuss getting it running in my dev environment, certainly better than the aforementioned standards. It even yells at me with instructive details when it detects quality issues. I will be sticking with it in the future.",
      },
      {
        heading: "Cloud: Vercel",
        body: "Historically, I have enjoyed provisioning and managing my own servers, but managed cloud offerings are becoming so good these days it's becoming hard to justify the effort. Given the previous tech choices, Vercel's cloud offering was a shoe-in. I push code changes to Github and point Vercel to the repo, and  Vercel takes care of the rest. It builds and deploys an instance of the Next.js app, delivers it through a global CDN with DDoS mitigation by default. I'm not really missing provisioning servers or orchestrating containers right now.",
      },
      {
        heading: "Conclusion",
        body: 'The data for this piece is largely a matter of developer experience. In that sense, it is somewhat sensational. However, it is clear that we have come a long, long way since the early days of web development. All of these tools are at least "second generation". Next.js replaced vanilla React.js, which replaced jQuery, which replaced direct DOM manipulation. Bun replaces Node.js. Biome replaces ESLint and Prettier. Vercel Cloud replaces the infra guy inside of me. All of these tools improve upon the developer experience compared to their predecessors and offer better performance and/or improved functionality. I can definitely recommend all of them.',
      },
    ],
    tags: ["Next.js", "Bun", "Biome", "Vercel"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
