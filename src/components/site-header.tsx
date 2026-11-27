"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./site-header.module.css";

const areas = [
  { href: "/", label: "Me" },
  { href: "/experience", label: "Experience" },
  { href: "/project", label: "Projects" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.name}>Tim Ma</span>
        </Link>
        <nav aria-label="Primary">
          <ul className={styles.list}>
            {areas.map((area) => {
              const isActive =
                area.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(area.href);
              return (
                <li key={area.href}>
                  <Link
                    className={styles.link}
                    href={area.href}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {area.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
