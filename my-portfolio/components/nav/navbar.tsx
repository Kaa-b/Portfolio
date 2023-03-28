import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"

import NavItem from "./navItem"

import styles from "./navbar.module.css"

const CENTRAL_MENU_LIST = [
  { text: "Journey", href: "/journey" },
  { text: "Presentation", href: "/presentation" },
  { text: "Paperwork", href: "/paperwork" },
]

const MENU_LIST = [
  ...CENTRAL_MENU_LIST,
  { text: "Contact", href: "/contact" },
]

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [navActive, setNavActive] = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)

  const handleShowDropdown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setShowDropdown(!showDropdown)
  }

  return (
    <>
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
          {CENTRAL_MENU_LIST.map((menu, idx) => (
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
        <div className={styles.menuNavigation}>
          <button className={styles.menuButton} onClick={handleShowDropdown}>
            <Image
              src="/icons/menuButton.svg"
              alt="Menu navigation button"
              width="24"
              height="24"
            />
          </button>
        </div>
      </nav>
      {showDropdown && (
        <div className={styles.navDropdown}>
          {MENU_LIST.map((menu, idx) => (
            <div
              key={menu.text}
              className={styles.dropdownItem}
              onClick={() => {
                setActiveIdx(idx)
                setNavActive(false)
              }}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar