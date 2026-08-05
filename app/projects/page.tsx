import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";
import { siteContent } from "@/app/lib/content";
import styles from "@/app/site.module.css";

export const metadata: Metadata = {
  title: "Проекты",
  description: "Избранные жилые интерьеры и архитектурные проекты студии delent.",
};

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <PageIntro title="Проекты" eyebrow="Избранные работы · 2023—2024" />
        <div className={`${styles.projectGrid} ${styles.projectsPageGrid}`}>
          {siteContent.projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </main>
  );
}
