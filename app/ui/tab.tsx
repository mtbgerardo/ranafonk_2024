"use client";
import { useEffect, useState } from "react";
import styles from "./tab.module.scss";
import Image from "next/image";

export default function Tab({
  icon,
  title,
  opacity,
  content,
}: {
  icon: string;
  title: string;
  opacity: string;
  content: string;
}) {
  const [openClose, setOpenClose] = useState(false);
  const isOpen = openClose ? `${styles.open}` : `${styles.close}`;

  return (
    <>
      <div
        className={`${styles.tab} ${isOpen}`}
        style={{ background: `rgba(255,0,0,${opacity})` }}
        onClick={() => setOpenClose(!openClose)}
      >
        <div className={styles.tab_img_title}>
          <div className={styles.title}>
            <div className={styles.text}>
              <p>{title}</p>
            </div>
          </div>
          <div className={styles.img}>
            <Image
              src={icon}
              alt={title}
              className={styles.icon}
              width={25}
              height={25}
              priority
            />
          </div>
        </div>
      </div>
      <div className={`${styles.tab_content} ${isOpen}`}>
        {content}
      </div>
    </>
  );
}
