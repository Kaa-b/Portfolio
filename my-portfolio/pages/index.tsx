import Head from "next/head"
import Image from "next/image"

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
        <nav className={styles.nav}>
          <Navbar />
        </nav>
        <main className={styles.container}>
          <div className={styles.header}>
            <div className={styles.heroImage}>
              <div className={styles.profilePicture}>
                <Image
                  src="/profilePicture.svg"
                  alt="My profile picture"
                  width="259"
                  height="378"
                />
              </div>
              <div className={styles.socials}>
                <a className={styles.github} href="https://github.com/Kaa-b" >
                  <Image
                    src="/github.svg"
                    alt="Redirect to my github page"
                    width="48"
                    height="48"
                  />
                </a>
                <a className={styles.linkedIn} href="https://www.linkedin.com/in/marine-bauer/">
                  <Image
                    src="/linkedIn.svg"
                    alt="Redirect to my linkedIn page"
                    width="48"
                    height="48"
                  />
                </a>
              </div>
            </div>
            <div className={styles.description}></div>
          </div>
          <div className={styles.latestProject}>
            <h1 className={styles.description}>
              Latest project
            </h1>
          </div>
          <div className={styles.devEvolution}>
            <h1 className={styles.description}>
              Dev Evolution
            </h1>
          </div>
          <div className={styles.contact}>
            <h1 className={styles.description}>
              Contact
            </h1>
          </div>       
        </main>
        <footer className={styles.footer}>
          <Footer/>
        </footer>
      </div>
    </>
  )
}
