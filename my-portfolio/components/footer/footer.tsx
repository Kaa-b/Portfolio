import Image from "next/image"

import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.up}>
        <Image
          src="/icons/up.svg"
          alt="Button to go back at the top of the page"
          width="32"
          height="32"
        />
      </div>
      <div className={styles.email}>
        <p>marine.bauer5@gmail.com</p>
      </div>
      <div className={styles.socials}>
        <a className={styles.socialItem} href="https://github.com/Kaa-b" >
          <Image
            src="/icons/github.svg"
            alt="Redirect to my github page"
            width="32"
            height="33"
          />
        </a>
        <a className={styles.socialItem} href="https://www.linkedin.com/in/marine-bauer/">
          <Image
            src="/icons/linkedIn.svg"
            alt="Redirect to my linkedIn page"
            width="32"
            height="33"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer