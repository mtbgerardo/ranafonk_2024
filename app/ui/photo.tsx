import Image from 'next/image'
import styles from './photo.module.scss'

export default function Photo() {
  return (
    <div className={styles.photo_container}>
        <Image
            src="/ranafonk.png"
            alt="Rana Fonk"
            className={styles.photo}
            width={400}
            height={400}
            priority
        />
    </div>
  )
}
