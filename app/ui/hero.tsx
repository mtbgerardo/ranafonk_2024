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
          is="video"
        />
        <Tab
          icon="/microphone.svg"
          title="Spoiler Tracks"
          opacity="0.95"
          content="1JXzyDG4PdoECSCvvJlpxL"
          is="iframe"
        />
        <Tab
          icon="/microphone.svg"
          title="Charlas Picantes Sobre Red Hot Chili Peppers"
          opacity="0.85"
          content="1NGXwtsJRrUcU3qn4g925J"
          is="iframe"
        />
        <Tab
          icon="/link.svg"
          title="Spoiler Time"
          opacity="0.75"
          content="http://www.spoilertime.com/"
          is="url"
        />
        <Tab
          icon="/microphone.svg"
          title="Nada que ver - Podcast Netflix"
          opacity="0.65"
          content="42EFFA8sB8UiPFnunloX0Z"
          is="iframe"

        />
        <Tab
          icon="/microphone.svg"
          title="Un mensaje de audio que podría ser un podcast"
          opacity="0.55"
          content="5V0L33VPtBCnBicX7ELFOA"
          is="iframe"
        />
        <Tab
          icon="/microphone.svg"
          title="Perdimos el Guion"
          opacity="0.45"
          content="1Mwb0V9L0gWowx5OYfpY0Q"
          is="iframe"
        />
        <Tab
          icon="/film.svg"
          title="A Fanatic By Choice. Documental RHCP fans"
          opacity="0.35"
          content="http://afanaticbychoice.com/"
          is="url"
        />
        <Tab
          icon="/headphones.svg"
          title="Ajiputaparió: Tributo a Red Hot Chili Peppers"
          opacity="0.25"
          content="6a2ADnXdGhg8YHl9iQjLF5"
          is="iframe"
        />
        <Tab
          icon="/headphones.svg"
          title="Música: Timmy O'Tool"
          opacity="0.15"
          content="0qy2K3V7CfqRSRCWabyQ7H"
          is="iframe"
        />
        <Tab
          icon="/headphones.svg"
          title="Música: Americana Soundsystem"
          opacity="0.10"
          content="2pOG9zrfYoMBeANa4jKigV"
          is="iframe"
        />
      </div>
    </div>
  );
}
