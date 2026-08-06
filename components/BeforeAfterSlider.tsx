"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import styles from "./BeforeAfterSlider.module.css";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(50);

  const updatePosition = useCallback((clientX: number) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds || bounds.width === 0) return;

    setPosition(clamp(((clientX - bounds.left) / bounds.width) * 100));
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (draggingRef.current) updatePosition(event.clientX);
    };
    const stopDragging = () => {
      draggingRef.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
    };
  }, [updatePosition]);

  const startDragging = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    draggingRef.current = true;
    updatePosition(event.clientX);
  };

  const adjustWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step = event.shiftKey ? 10 : 2;
    let nextPosition: number | null = null;

    if (event.key === "ArrowLeft") nextPosition = position - step;
    if (event.key === "ArrowRight") nextPosition = position + step;
    if (event.key === "Home") nextPosition = 0;
    if (event.key === "End") nextPosition = 100;

    if (nextPosition !== null) {
      event.preventDefault();
      setPosition(clamp(nextPosition));
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.slider}
      style={{ "--position": `${position}%` } as CSSProperties}
      onPointerDown={startDragging}
      role="group"
      aria-label="Сравнение пространства до и после ремонта"
    >
      <Image
        className={styles.image}
        src={beforeSrc}
        alt={beforeAlt}
        fill
        unoptimized
        priority
        sizes="100vw"
      />

      <div className={styles.afterLayer} aria-hidden="true">
        <Image
          className={styles.image}
          src={afterSrc}
          alt={afterAlt}
          fill
          unoptimized
          priority
          sizes="100vw"
        />
      </div>

      <span className={`${styles.label} ${styles.beforeLabel}`}>До изменений</span>
      <span className={`${styles.label} ${styles.afterLabel}`}>После изменений</span>

      <div className={styles.divider} aria-hidden="true">
        <button
          className={styles.handle}
          type="button"
          role="slider"
          aria-label="Переместить разделитель до и после"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% после`}
          onKeyDown={adjustWithKeyboard}
        >
          <span className={styles.handleIcon} aria-hidden="true">
            <span>‹</span>
            <span className={styles.handleDot} />
            <span>›</span>
          </span>
        </button>
      </div>
    </div>
  );
}
