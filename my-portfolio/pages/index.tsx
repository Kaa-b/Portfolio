import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import cls from "classnames"

import Navbar from "../components/nav/navbar"
import Footer from "../components/footer/footer"

import styles from "@/styles/home.module.css"

export default function Home() {

  function scrollTo(id: string) {
    let e = document.getElementById(id)
  
    if (e) {
      e.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "start"
      })
    }
  };

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
          <section className={styles.header}>
            <div className={styles.heroImage}>
              <div className={styles.profilePicture}>
                <Image
                  src="/profilePicture.png"
                  alt="My profile picture"
                  fill
                  className={styles.profilePicture}
                />
              </div>
              <div className={styles.socials}>
                <a className={styles.socialItem} href="https://github.com/Kaa-b" >
                  <Image
                    src="/icons/github.svg"
                    alt="Redirect to my github page"
                    width="40"
                    height="40"
                  />
                </a>
                <a className={styles.socialItem} href="https://www.linkedin.com/in/marine-bauer/">
                  <Image
                    src="/icons/linkedIn.svg"
                    alt="Redirect to my linkedIn page"
                    width="40"
                    height="40"
                  />
                </a>
              </div>
            </div>
            <div className={styles.introduction}>
              <h1 className={styles.title}>Welcome to my Website!</h1>
              <div className={styles.redirection}>
                <div className={styles.redirectionOption}>
                  <p className={styles.description}>To discover my path to becoming a web developer, it&apos;s down there</p>
                  <button className={cls(styles.arrow, styles.down)} onClick={() => {scrollTo("devEvolution")}}></button>
                </div>
                <div className={styles.redirectionOption}>
                  <p className={styles.description}>And to find out more about me, it&apos;s over here</p>
                  <Link href={"/presentation"} className={cls(styles.arrow, styles.right)}></Link>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.latestProject}>
            <h1 id="latestProject" className={styles.title}>Latest project</h1>
            <div className={styles.latestProjectContent}>
              <div className={styles.latestProjectdescription}>
                <p className={styles.description}>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              </div>
              <a href="https://street-contact.vercel.app/" className={styles.latestProjectScreen}>
                <Image
                  src = "/serpentine/screens/street-contact-screen.png"
                  alt="My latest project"
                  fill
                  className={styles.latestProjectScreen}
                />
              </a>
            </div>
          </section>
          <section className={styles.devEvolution}>
            <h1 id="devEvolution" className={styles.title}>
              Dev Evolution
            </h1>
            <div className={styles.serpentineContainer}>           
              <div className={styles.serpentineWrapper}>
                <a  href="https://street-contact.vercel.app/" className={styles.start}>
                  <Image
                    src="/serpentine/start.png"
                    alt="Street contact project"
                    fill
                    className={styles.start}
                  />
                </a>
                <a href="https://moviedatabase-github.netlify.app" className={cls(styles.devEvolutionScreen, styles.movieDB, styles.devEvolutionPosition)}>
                  <Image
                    src="/serpentine/screens/movieDB-screen.png"
                    alt="Street contact project"
                    fill
                    className={styles.devEvolutionScreen}
                  />
                </a>
                <a href="https://mscl-photography.netlify.app" className={cls(styles.devEvolutionScreen, styles.msclPortfolio, styles.devEvolutionPosition)}>
                  <Image
                    src="/serpentine/screens/mscl-portfolio-screen.png"
                    alt="Street contact project"
                    fill
                    className={styles.devEvolutionScreen}
                  />
                </a>
                <a  href="https://sii-group.com/fr-FR" className={cls(styles.devEvolutionScreen, styles.joinedSII, styles.devEvolutionPosition)}>
                  <Image
                    src="/serpentine/screens/joinedSII-screen.png"
                    alt="Street contact project"
                    fill
                    className={styles.devEvolutionScreen}
                  />
                </a>
                <a  href="https://zerotomastery.io" className={cls(styles.devEvolutionScreen, styles.ztm, styles.devEvolutionPosition)}>
                  <Image
                    src="/serpentine/screens/ztm-screen.png"
                    alt="Street contact project"
                    fill
                    className={styles.devEvolutionScreen}
                  />
                </a>
                <a  href="https://discovery-coffee-stores.vercel.app/" className={cls(styles.devEvolutionScreen, styles.coffeeStores, styles.devEvolutionPosition)}>
                  <Image
                    src="/serpentine/screens/coffee-store-screen.png"
                    alt="Street contact project"
                    fill
                    className={styles.devEvolutionScreen}
                  />
                </a>
                <a  href="https://street-contact.vercel.app" className={cls(styles.devEvolutionScreen, styles.streetContact, styles.devEvolutionPosition)}>
                  <Image
                    src="/serpentine/screens/street-contact-screen.png"
                    alt="Street contact project"
                    fill
                    className={styles.devEvolutionScreen}
                  />
                </a>
                <a href="https://portfolio-kaa-b.vercel.app" className={cls(styles.devEvolutionScreen, styles.myPortfolio, styles.devEvolutionPosition)}>
                  <Image
                    src="/serpentine/screens/my-portfolio-screen.png"
                    alt="Street contact project"
                    fill
                    className={styles.devEvolutionScreen}
                  />
                </a>
              </div>
            </div>
          </section>
          <section className={styles.contact}>
            <h1 className={styles.title}>
              Contact
            </h1>
          </section>       
        </main>
        <Footer/>
      </div>
    </>
  )
}
