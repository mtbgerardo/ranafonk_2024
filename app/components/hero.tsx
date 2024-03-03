"use client";

import { useState } from "react";
import Photo from "./photo";
import Tab from "./tab";
import styles from "./hero.module.scss";
import { data } from "../lib/placeholderdata";
import { Portfolio } from "../lib/definitions";

export default function Hero({ video }: { video: string }) {
  const [portfolio, setPortfolio] = useState(data);

  return (
    <div className={styles.hero}>
      <Photo />
      <div className={styles.hero_tabs}>
        {portfolio.map((item, index) => (
          <Tab
            key={index}
            id={index}
            icon={item.icon}
            title={item.title}
            opacity={item.opacity}
            content={item.content}
            img={item.img}
            is={item.is}
            videoID={video}
          />
        ))}
      </div>
    </div>
  );
}
