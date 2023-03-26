import Head from "next/head"
import Image from "next/image"
import cls from "classnames"

import Navbar from "../components/nav/navbar"
import Footer from "../components/footer/footer"

import styles from "@/styles/home.module.css"


export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Portfolio of Marine Bauer" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.body}>
        <Navbar />
        <main className={styles.container}>
          <div className={styles.header}>
            <div className={styles.heroImage}>
              <Image
                src="/profilePicture.svg"
                alt="My profile picture"
                width="259"
                height="378"
              />
              <div className={styles.socials}>
                <a className={styles.socialItem} href="https://github.com/Kaa-b" >
                  <Image
                    src="/github.svg"
                    alt="Redirect to my github page"
                    width="40"
                    height="40"
                  />
                </a>
                <a className={styles.socialItem} href="https://www.linkedin.com/in/marine-bauer/">
                  <Image
                    src="/linkedIn.svg"
                    alt="Redirect to my linkedIn page"
                    width="40"
                    height="40"
                  />
                </a>
              </div>
            </div>
            <div className={styles.introduction}>
              <h1 className={styles.title}>Welcome to my Website!</h1>
              <p className={styles.description}>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.
              </p>
              <p className={styles.description}>Keep scrolling to find out about my latest project</p>
              <div className={styles.redirection}>
                <div className={styles.redirectionOption}>
                  <p className={styles.description}>Pour voir mon parcours de formation en dev c’est par là !</p>
                  <button className={cls(styles.arrow, styles.down)}></button>
                </div>
                <div className={styles.redirectionOption}>
                  <p className={styles.description}>Pour voir ma présentation c’est ici !</p>
                  <button className={cls(styles.arrow, styles.right)}></button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.latestProject}>
            <h1 className={styles.title}>Latest project</h1>
            <div className={styles.latestProjectContent}>
              <div className={styles.latestProjectdescription}>
                <p className={styles.description}>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              </div>
              <a className={styles.screen} href="https://street-contact.vercel.app/">
                <Image
                  src="/screen.svg"
                  alt="My latest project"
                  width="430"
                  height="346"
                />
              </a>
            </div>
          </div>
          <div className={styles.devEvolution}>
            <h1 className={styles.title}>
              Dev Evolution
            </h1>
          </div>
          <div className={styles.contact}>
            <h1 className={styles.title}>
              Contact
            </h1>
          </div>       
        </main>
        <Footer/>
      </div>
    </>
  )
}
