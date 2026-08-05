import styles from "@/app/site.module.css";

type PageIntroProps = {
  title: string;
  eyebrow?: string;
};

export function PageIntro({ title, eyebrow }: PageIntroProps) {
  return (
    <header className={styles.pageIntro}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h1 className={styles.pageTitle}>{title}</h1>
    </header>
  );
}
