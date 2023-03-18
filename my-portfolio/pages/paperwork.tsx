import Head from "next/head"

import Navbar from "../components/nav/navbar"
// import Footer from "../components/footer/footer"

export default function Paperwork() {
  return (
    <>
      <Head>
        <title>Paperwork</title>
        <meta name="description" content="Paperwork page" />
      </Head>
      <Navbar />
      <main>
      Paperwork page
      </main>
      {/* <Footer/> */}
    </>
  )
}