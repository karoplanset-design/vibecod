import styles from "./components.module.css";
import { siteContent } from "@/app/lib/content";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span>{siteContent.footer.copyright}</span>
        <a href={siteContent.contact.telegramUrl} target="_blank" rel="noreferrer">{siteContent.contact.telegram} ↗</a>
        <a href={`tel:${siteContent.contact.phoneHref}`}>{siteContent.contact.phone}</a>
        <a href="#top">Наверх ↑</a>
      </div>
    </footer>
  );
}
