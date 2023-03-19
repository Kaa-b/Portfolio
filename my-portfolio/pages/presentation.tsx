import Head from "next/head"
import Image from "next/image"

import Navbar from "../components/nav/navbar"
import Footer from "../components/footer/footer"

import styles from "@/styles/presentation.module.css"

export default function Presentation() {
  return (
    <>
      <Head>
        <title>Presentation</title>
        <meta name="description" content="Presentation page" />
      </Head>
      <div className={styles.body}>
        <nav className={styles.nav}>
          <Navbar />
        </nav>
        <main className={styles.container}>
          <h1 className={styles.description}>
          Preparing <b>Presentation</b> page for take-off...
          </h1>
          <Image
            src="/rocketinBuilding.svg"
            alt="People building a rocket"
            width="300"
            height="300"
          />
        </main>
        <footer className={styles.footer}>
          <Footer/>
        </footer>
      </div>
    </>
  )
}