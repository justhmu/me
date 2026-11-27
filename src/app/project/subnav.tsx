"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/app/project/lib/data";
import styles from "./subnav.module.css";

const items = [
  {
    href: "/project",
    label: "Overview",
    year: undefined as string | undefined,
  },
  ...projects.map((p) => ({
    href: `/project/${p.slug}`,
    label: p.navTitle,
    year: p.year,
  })),
];

export function ProjectSubnav() {
  const pathname = usePathname();

  return (
    <nav className={styles.subnav} aria-labelledby="work-subnav-title">
      <span id="work-subnav-title" className={styles.heading}>
        Projects
      </span>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              className={styles.link}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
              {item.year && <span className={styles.year}>{item.year}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
