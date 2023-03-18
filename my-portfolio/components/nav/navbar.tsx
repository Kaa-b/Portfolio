import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"

import NavItem from "./navItem"

import styles from "./navbar.module.css"

const MENU_LIST = [
  { text: "Journey", href: "/journey" },
  { text: "Presentation", href: "/presentation" },
  { text: "Paperwork", href: "/paperwork" },
]

const Navbar = () => {
  const [navActive, setNavActive] = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <nav className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width="32"
          height="32"
        />
      </Link>
      <div className={styles.navItems}>
        {MENU_LIST.map((menu, idx) => (
          <div
            key={menu.text}
            className={styles.item}
            onClick={() => {
              setActiveIdx(idx)
              setNavActive(false)
            }}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </div>
      <div className={styles.contact}>
        <Link href={"/contact"} className={styles.item}>
            Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar