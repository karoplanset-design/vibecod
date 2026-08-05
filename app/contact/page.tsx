import type { Metadata } from "next";
import Image from "next/image";
import { siteContent } from "@/app/lib/content";
import { siteImageMap } from "@/data/projectImageMap";
import styles from "@/app/site.module.css";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Обсудите жилой интерьер или архитектурный проект со студией delent.",
};

export default function ContactPage() {
  const contact = siteContent.contact;

  return (
    <main className={styles.page}>
      <div className={`${styles.container} ${styles.contactGrid}`}>
        <section>
          <p className={styles.eyebrow}>Начнём разговор</p>
          <h1 className={styles.contactTitle}>{contact.title}</h1>
          <div className={styles.contactDetails}>
            <a className={styles.contactText} href={contact.telegramUrl} target="_blank" rel="noreferrer">{contact.telegram} ↗</a>
            <a className={styles.contactText} href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            <a className={styles.contactLink} href={contact.telegramUrl} target="_blank" rel="noreferrer">
              {contact.cta} →
            </a>
          </div>
        </section>
        <div className={styles.contactImageWrap}>
          <Image
            className={styles.contactImage}
            src={siteImageMap.contact}
            alt="Столовая с натуральным деревом и мягким светом"
            fill
            unoptimized
            priority
            sizes="(max-width: 760px) 100vw, 48vw"
          />
        </div>
      </div>
    </main>
  );
}
