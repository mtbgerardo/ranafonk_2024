"use client";
import { useEffect, useState } from "react";
import styles from "./tab.module.scss";
import Image from "next/image";

export default function Tab({
  icon,
  title,
  opacity,
  content,
  is,
}: {
  icon: string;
  title: string;
  opacity: string;
  content: string;
  is: "url" | "iframe" | "video";
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
        {is == "iframe" ? (
          <iframe
            src={`https://open.spotify.com/embed/artist/${content}`}
            data-testid="spotify-preview--iframe"
            width="100%"
            height="392"
            className="MusicPreviewEmbed__IframeWrapper-sc-wpmte3-0 jlTWaV"
          ></iframe>
        ) : (
          ""
        )}
        <div className={styles.close_icon}>
          <Image
            src="/close.svg"
            alt="Close Tab"
            width={25}
            height={25}
            className={styles.close_icon_img}
            onClick={() => setOpenClose(!openClose)}
          />
        </div>
      </div>
    </>
  );
}
