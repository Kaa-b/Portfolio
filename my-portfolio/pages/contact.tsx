import Head from "next/head"

import Navbar from "../components/nav/navbar"
import Footer from "../components/footer/footer"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact page" />
      </Head>
      <Navbar />
      <main>
        Page Contact
      </main>
      <Footer/>
    </>
  )
}