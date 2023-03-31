import Image from "next/image"

import styles from "./screen.module.css"
import type { Img } from "../../pages/index"

type Props = {
    href: string
    src: string,
    alt: string,
    width: any,
    height: any,
}

const Screen = ({href, src, alt, width, height}: Props) => {
  const screenWidth = width - (width*0.07)
  const screenHeight= screenWidth*0.65
  return (
    <a className={styles.screenWrapper} href={href}>
      <div className={styles.background}>
        <Image
          src="/screens/screen.png"
          alt="Laptop background"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.screen}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
        />
      </div>
    </a>
  )
}

export default Screen