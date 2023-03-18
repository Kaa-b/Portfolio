import Head from "next/head"

import Navbar from "../components/nav/navbar"
// import Footer from "../components/footer/footer"

export default function Journey() {
  return (
    <>
      <Head>
        <title>Journey</title>
        <meta name="description" content="Journey page" />
      </Head>
      <Navbar />
      <main>
      Journey page
      </main>
      {/* <Footer/> */}
    </>
  )
}