import Image from "next/image"

import styles from "./screen.module.css"

type Props = {
    href: string
    src: string
    
}


const Screen = ({href,src}: Props) => {
  return (
    <a className={styles.screen} href="https://street-contact.vercel.app/">
      <Image
        src="/screen.svg"
        alt="My latest project"
        width="430"
        height="346"
      />
    </a>
  )
}

export default Screen