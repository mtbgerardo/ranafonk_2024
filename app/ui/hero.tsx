import { useState } from "react";
import Photo from "./photo";
import Tab from "./tab";
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Photo />
      <div className={styles.hero_tabs}>
        <Tab
          icon="/youtube.svg"
          title="Youtube"
          opacity="1"
          content="Content Youtube"
        />
        <Tab
          icon="/microphone.svg"
          title="Spoiler Tracks"
          opacity="0.95"
          content="Content"
        />
        <Tab
          icon="/microphone.svg"
          title="Charlas Picantes Sobre Red Hot Chili Peppers"
          opacity="0.85"
          content="Content"
        />
        <Tab
          icon="/link.svg"
          title="Spoiler Time"
          opacity="0.75"
          content="Content Spoiler Time"
        />
        <Tab
          icon="/microphone.svg"
          title="Nada que ver - Podcast Netflix"
          opacity="0.65"
          content="Content"
        />
        <Tab
          icon="/microphone.svg"
          title="Un mensaje de audio que podría ser un podcast"
          opacity="0.55"
          content="Content"
        />
        <Tab
          icon="/microphone.svg"
          title="Perdimos el Guion"
          opacity="0.45"
          content="Content"
        />
        <Tab
          icon="/film.svg"
          title="A Fanatic By Choice. Documental RHCP fans"
          opacity="0.35"
          content="Content"
        />
        <Tab
          icon="/headphones.svg"
          title="Ajiputaparió: Tributo a Red Hot Chili Peppers"
          opacity="0.25"
          content="Content"
        />
        <Tab
          icon="/headphones.svg"
          title="Música: Timmy O'Tool"
          opacity="0.15"
          content="Content"
        />
        <Tab
          icon="/headphones.svg"
          title="Música: Americana Soundsystem"
          opacity="0.10"
          content="Content"
        />
      </div>
    </div>
  );
}
