import Head from "next/head"
import Image from "next/image"

import Navbar from "../components/nav/navbar"
import Footer from "../components/footer/footer"

import styles from "@/styles/Home.module.css"



export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Portfolio of Marine Bauer" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <main>
      Home page
      </main>
      <Footer/>
    </>
  )
}
