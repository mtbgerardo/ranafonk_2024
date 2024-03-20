import styles from "./social.module.scss";
import Image from "next/image";

const Social = ({
  img,
  url,
  alt,
}: {
  img: string;
  url: string;
  alt: string;
}) => {
  return (
    <div className={styles.social_icon}>
      <a href={url} target="_blank">
        <Image src={img} alt={alt} width={48} height={48} priority />
      </a>
    </div>
  );
};

export default function Socials() {
  return (
    <div className={styles.socials}>
      <div className={styles.socials_icons}>
        <Social
          img="/facebook.svg"
          url="https://www.facebook.com/ranafonk/"
          alt="facebook"
        />
        <Social
          img="/x-twitter.svg"
          url="https://twitter.com/RanaFonk"
          alt="X"
        />
        <Social
          img="/instagram.svg"
          url="https://www.instagram.com/ranafonk/"
          alt="instagram"
        />
        <Social
          img="/linkedin.svg"
          url="https://www.linkedin.com/in/andresmedina/"
          alt="linkedin"
        />
        <Social
          img="/youtube_w.svg"
          url="https://www.youtube.com/user/ranafonk"
          alt="youtube"
        />
        <Social
          img="/tiktok.svg"
          url="https://www.tiktok.com/@ranafonk"
          alt="tiktok"
        />
      </div>
    </div>
  );
}
