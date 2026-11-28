import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/app/project/lib/data";
import CodeBlock from "@/components/code-block";
import ProjectHead from "../head";
import ProjectPager from "../pager";
import styles from "./page.module.css";

export const instant = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.lead } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <ProjectHead slug={slug} />

      <div className={styles.body}>
        {project.sections?.map((section) => (
          <div key={section.heading} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.heading}</h2>
            <p className={styles.sectionBody}>{section.body}</p>
            {section.code && (
              <CodeBlock lang={section.code.lang ?? "javascript"}>
                {section.code.source}
              </CodeBlock>
            )}
          </div>
        ))}
      </div>

      <ProjectPager slug={slug} />
    </article>
  );
}
