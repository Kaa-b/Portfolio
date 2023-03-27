import Image from "next/image"

import styles from "./screen.module.css"
import type { Img } from "../../pages/index"

type Props = {
    href: string
    img: Img
}


const Screen = ({href, img }: Props) => {
  return (
    <a className={styles.screen} href={href}>
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
      />
    </a>
  )
}

export default Screen