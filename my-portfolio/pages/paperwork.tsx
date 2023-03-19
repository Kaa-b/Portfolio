import Head from "next/head"
import Image from "next/image"

import Navbar from "../components/nav/navbar"
import Footer from "../components/footer/footer"

import styles from "@/styles/paperwork.module.css"

export default function Paperwork() {
  return (
    <>
      <Head>
        <title>Paperwork</title>
        <meta name="description" content="Paperwork page" />
      </Head>
      <div className={styles.body}>
        <nav className={styles.nav}>
          <Navbar />
        </nav>
        <main className={styles.container}>
          <h1 className={styles.description}>
          Preparing <b>Paperwork</b> page for take-off...
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