import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { siteContent } from "./lib/content";
import styles from "./site.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.homeHero}>
        <Image
          className={styles.heroImage}
          src="/images/webp/home-hero.webp"
          alt="Современная гостиная в тёплых оттенках, проект delent"
          fill
          unoptimized
          priority
          sizes="100vw"
        />
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{siteContent.home.title}</h1>
          <Link className={styles.heroLink} href="/projects">
            {siteContent.home.cta}
          </Link>
        </div>
      </section>

      <section className={styles.selectedSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeadingRow}>
            <div>
              <p className={styles.sectionKicker}>Избранные работы</p>
              <h2 className={styles.sectionTitle}>Пространства для жизни</h2>
            </div>
            <Link className={styles.viewAll} href="/projects">Все проекты →</Link>
          </div>
          <div className={styles.projectGrid}>
            {siteContent.projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
