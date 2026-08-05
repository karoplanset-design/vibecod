import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/app/lib/content";
import { siteImageMap } from "@/data/projectImageMap";
import styles from "@/app/site.module.css";

export const metadata: Metadata = {
  title: "Студия",
  description: "О студии delent и нашем подходе к спокойным функциональным интерьерам.",
};

export default function StudioPage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.container} ${styles.studioGrid}`}>
        <section className={styles.studioCopy}>
          <p className={styles.eyebrow}>delent · Москва</p>
          <h1 className={styles.studioTitle}>{siteContent.studio.title}</h1>
          <p className={styles.studioBody}>{siteContent.studio.body}</p>
          <Link className={styles.textLink} href="/services">
            {siteContent.studio.cta} →
          </Link>
        </section>
        <div className={styles.studioImageWrap}>
          <Image
            className={styles.studioImage}
            src={siteImageMap.studio}
            alt="Натуральные материалы и скульптурные объекты в студии delent"
            fill
            unoptimized
            priority
            sizes="(max-width: 760px) 100vw, 55vw"
          />
        </div>
      </div>
    </main>
  );
}
