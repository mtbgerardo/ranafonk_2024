"use client";

import { useState } from "react";
import styles from "./tab.module.scss";
import Image from "next/image";
import Spinner from "@/app/ui/sppiner";

export default function Tab({
  id,
  icon,
  title,
  opacity,
  content,
  img,
  is,
}: {
  id: number;
  icon: string;
  title: string;
  opacity: string;
  content: string;
  img: string;
  is: string;
}) {
  const [openClose, setOpenClose] = useState(false);
  const isOpen = openClose ? `${styles.open}` : `${styles.close}`;
  const [iframe, setIframe] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [width, setWidth] = useState("0");

  const handleOpen = () => {
    setOpenClose(!openClose);
    setIframe(content);
    setTimeout(() => setLoading(false), 500);
    setTimeout(() => setWidth("85%"), 1000);
  };

  const handleClose = () => {
    setOpenClose(!openClose);
    setWidth("0");
    setIframe("");
    setTimeout(() => setLoading(true), 500);
  };

  const switchContent = () => {
    let result;
    switch (is) {
      case "url":
        result = (
          <a href={content} target="_blank">
            <Image
              src={img}
              alt={title}
              layout="responsive"
              width={440}
              height={230}
            />
          </a>
        );
        break;
      case "iframe":
        result = (
          <iframe
            src={iframe}
            width={width}
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className={styles.rf_iframe}
          ></iframe>
        );
        break;
      case "youtube":
        result = (
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/pHWxYpkffaU?si=QKd5JoKdsz1XIM8H"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        );
        break;
      default:
        console.log("nothing to do");
    }
    return result;
  };

  return (
    <>
      <div
        key={`tab_${id}`}
        className={`${styles.tab} ${isOpen}`}
        style={{ background: `rgba(255,0,0,${opacity})` }}
        onClick={handleOpen}
      >
        <div key={`tab_img_title_${id}`} className={styles.tab_img_title}>
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
      <div
        key={`tab_content_${id}`}
        className={`${styles.tab_content} ${isOpen}`}
      >
        {loading == false ? switchContent() : <Spinner />}
        <div key={`close_${id}`} className={styles.close_icon}>
          <Image
            src="/close.svg"
            alt="Close Tab"
            width={25}
            height={25}
            className={styles.close_icon_img}
            onClick={handleClose}
          />
        </div>
      </div>
    </>
  );
}
