import Head from "next/head"

import Navbar from "../components/nav/navbar"
import Footer from "../components/footer/footer"

export default function Presentation() {
  return (
    <>
      <Head>
        <title>Presentation</title>
        <meta name="description" content="Presentation page" />
      </Head>
      <Navbar />
      <main>
      Presentation page
      </main>
      <Footer/>
    </>
  )
}