import type { Metadata } from "next";
import Link from "next/link";
import { getProjectDetail, siteContent } from "@/app/lib/content";
import { ZoomableImage } from "./ZoomableImage";
import styles from "@/app/site.module.css";

export function getProjectMetadata(slug: string): Metadata {
  const project = getProjectDetail(slug);
  return {
    title: project?.title ?? "Проект",
    description: project?.intro ?? "Проект студии delent.",
  };
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = getProjectDetail(slug);
  if (!project) return null;

  const currentIndex = siteContent.projectDetails.findIndex((item) => item.slug === slug);
  const previous = siteContent.projectDetails[(currentIndex - 1 + siteContent.projectDetails.length) % siteContent.projectDetails.length];
  const next = siteContent.projectDetails[(currentIndex + 1) % siteContent.projectDetails.length];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.projectDetailIntro}>
          <p className={styles.eyebrow}>Проект · {project.year}</p>
          <h1 className={styles.projectDetailTitle}>{project.title}</h1>
          <div className={styles.projectMetaGrid}>
            <div><span className={styles.metaLabel}>Город</span><span className={styles.metaValue}>{project.location}</span></div>
            <div><span className={styles.metaLabel}>Год</span><span className={styles.metaValue}>{project.year}</span></div>
            <div><span className={styles.metaLabel}>Тип</span><span className={styles.metaValue}>{project.type}</span></div>
          </div>
        </header>
      </div>

      <div className={`${styles.container} ${styles.detailHeroWrap}`}>
        <ZoomableImage
          src={project.images[0]}
          alt={`${project.title}: главный интерьер`}
          imageClassName={styles.detailImage}
          sizes="100vw"
          priority
        />
      </div>

      <div className={styles.container}>
        <section className={styles.projectCopy}>
          <p className={styles.projectLead}>{project.intro}</p>
          <p className={styles.projectBody}>{project.body}</p>
        </section>

        <div className={styles.gallery}>
          <div className={styles.galleryImageWrap}>
            <ZoomableImage
              src={project.images[1]}
              alt={`${project.title}: интерьер, вид 2`}
              imageClassName={styles.detailImage}
              sizes="90vw"
            />
          </div>

          <section className={styles.galleryFeature}>
            <div className={styles.galleryNote}>
              <div>
                <p className={styles.sectionKicker}>Материалы и свет</p>
                <h2 className={styles.galleryNoteTitle}>{project.galleryTitle}</h2>
              </div>
              <p className={styles.galleryNoteBody}>{project.galleryNote}</p>
              <span className={styles.galleryIndex}>02 / 02</span>
            </div>
            <div className={styles.galleryFeatureImage}>
              <ZoomableImage
                src={project.images[2]}
                alt={`${project.title}: интерьер, вид 3`}
                imageClassName={styles.detailImage}
                sizes="(max-width: 760px) 100vw, 68vw"
              />
            </div>
          </section>
        </div>

        <nav className={styles.projectNav} aria-label="Навигация по проектам">
          <Link className={styles.projectNavLink} href={`/projects/${previous.slug}`}>← {previous.title}</Link>
          <Link className={styles.projectNavLink} href={`/projects/${next.slug}`}>{next.title} →</Link>
        </nav>
      </div>
    </main>
  );
}
