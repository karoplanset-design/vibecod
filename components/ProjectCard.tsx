import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/lib/content";
import styles from "./components.module.css";

type ProjectCardProps = {
  project: Project;
  image: string;
  imageAlt: string;
};

function CardContent({ project, image, imageAlt }: ProjectCardProps) {
  return (
    <>
      <div className={styles.projectImageWrap}>
        <Image
          className={styles.projectImage}
          src={image}
          alt={imageAlt}
          fill
          unoptimized
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </div>
      <h2 className={styles.projectTitle}>{project.title}</h2>
      <div className={styles.projectMetaRow}>
        <p className={styles.projectMeta}>{project.location}, {project.year}</p>
        <span className={styles.projectAction}>Смотреть ↗</span>
      </div>
    </>
  );
}

export function ProjectCard({ project, image, imageAlt }: ProjectCardProps) {
  return (
    <Link className={styles.projectCard} href={`/projects/${project.slug}`} aria-label={`Открыть проект «${project.title}»`}>
      <CardContent project={project} image={image} imageAlt={imageAlt} />
    </Link>
  );
}
