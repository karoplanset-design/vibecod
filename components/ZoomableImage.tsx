"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./components.module.css";

type ZoomableImageProps = {
  src: string;
  alt: string;
  sizes: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ZoomableImage({ src, alt, sizes, imageClassName, priority }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("menu-open");
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        className={styles.zoomButton}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Увеличить изображение: ${alt}`}
      >
        <Image
          className={imageClassName}
          src={src}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          sizes={sizes}
        />
        <span className={styles.zoomHint}>Увеличить ↗</span>
      </button>

      {open ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={alt}>
          <button className={styles.lightboxClose} type="button" onClick={() => setOpen(false)}>
            Закрыть ×
          </button>
          <div className={styles.lightboxImage}>
            <Image src={src} alt={alt} fill unoptimized sizes="100vw" />
          </div>
        </div>
      ) : null}
    </>
  );
}
