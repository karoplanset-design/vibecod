"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./components.module.css";

const navigation = [
  ["Проекты", "/projects"],
  ["Студия", "/studio"],
  ["Услуги", "/services"],
  ["Журнал", "/journal"],
  ["Контакты", "/contact"],
] as const;

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.menuOverlay} role="dialog" aria-modal="true" aria-label="Основная навигация">
      <div className={styles.menuTop}>
        <Link className={styles.brand} href="/" onClick={onClose}>delent</Link>
        <button className={styles.closeButton} type="button" onClick={onClose} aria-label="Закрыть меню">
          Закрыть
        </button>
      </div>
      <nav className={styles.mobileNav}>
        {navigation.map(([label, href]) => (
          <Link className={styles.mobileNavLink} href={href} key={href} onClick={onClose}>
            {label}
          </Link>
        ))}
        <div className={styles.mobileContacts}>
          <a className={styles.mobileContact} href="https://t.me/delent1" target="_blank" rel="noreferrer">
            @delent1 ↗
          </a>
          <a className={styles.mobileContact} href="tel:+79109586662">
            +7 910 958-66-62
          </a>
        </div>
      </nav>
    </div>
  );
}
