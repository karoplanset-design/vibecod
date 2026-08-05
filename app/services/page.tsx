import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { siteContent } from "@/app/lib/content";
import { siteImageMap } from "@/data/projectImageMap";
import styles from "@/app/site.module.css";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Дизайн интерьера, архитектура, стилизация и авторский надзор от студии delent.",
};

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <PageIntro title="Услуги" eyebrow="От первой линии до последнего предмета" />
        <div className={styles.servicesLayout}>
          <section className={styles.serviceList} aria-label="Список услуг">
            {siteContent.services.map((service) => (
              <article className={styles.serviceItem} key={service.number}>
                <p className={styles.serviceNumber}>{service.number}</p>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
              </article>
            ))}
          </section>
          <div className={styles.serviceImageWrap}>
            <Image
              className={styles.serviceImage}
              src={siteImageMap.services}
              alt="Лаконичный интерьер кухни и материальная палитра delent"
              fill
              unoptimized
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
