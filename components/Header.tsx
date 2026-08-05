"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import styles from "./components.module.css";

const navigation = [
  ["Проекты", "/projects"],
  ["Студия", "/studio"],
  ["Услуги", "/services"],
  ["Журнал", "/journal"],
  ["Контакты", "/contact"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const home = pathname === "/";

  return (
    <>
      <header className={`${styles.header} ${home ? styles.headerOverlay : ""}`}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/" aria-label="delent — главная">delent</Link>
          <nav className={styles.nav} aria-label="Основная навигация">
            {navigation.map(([label, href]) => {
              const active = pathname === href || (href === "/projects" && pathname.startsWith("/projects/"));
              return (
                <Link
                  className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                  href={href}
                  key={href}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <button
            className={styles.menuButton}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
          >
            <span className={styles.menuLines} />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
