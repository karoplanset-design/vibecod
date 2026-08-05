import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ZoomableImage } from "@/components/ZoomableImage";
import { siteContent } from "@/app/lib/content";
import { siteImageMap } from "@/data/projectImageMap";
import styles from "@/app/site.module.css";

export const metadata: Metadata = {
  title: "Журнал",
  description: "Заметки delent о материалах, свете и ежедневных ритуалах дома.",
};

export default function JournalPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <PageIntro title="Журнал" eyebrow="Идеи, материалы, процесс" />
        <div className={styles.journalGrid}>
          {siteContent.journal.map((article, index) => (
            <article className={styles.journalArticle} key={article.title}>
              <div className={styles.articleImageWrap}>
                <ZoomableImage
                  src={siteImageMap.journal[index]}
                  alt={article.title}
                  imageClassName={styles.articleImage}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </div>
              <p className={styles.articleMeta}>
                <span>{article.category}</span>
                <span>{article.date}</span>
              </p>
              <h2 className={styles.articleTitle}>{article.title}</h2>
              <details className={styles.articleDetails}>
                <summary>Читать заметку</summary>
                <p>{article.excerpt}</p>
              </details>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
