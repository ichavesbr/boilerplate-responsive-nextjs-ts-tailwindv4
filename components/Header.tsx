"use client"

import Image from "next/image"
import Link from "next/link"

import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

// import GoToTopBtn from "./GoToTopBtn"
import "../styles/header.css"

const Header = () => {
  // useRef é igual useState, mas ele não causa re-renderização do componente
  // headerRef é um nome de referência para o elemento header no DOM
  const headerRef = useRef<HTMLHeadingElement>(null)

  const [showSidebar, setShowSidebar] = useState(false)
  const [windowSize, setWindowSize] = useState(0)
  const largeScreen = 1024

  const menuLinks = ["link 1", "link 2", "link 3", "link 4", "link 5"]
  const sidebarLinks = ["link 1", "link 2", "link 3", "link 4", "link 5"]
  // const sidebarLinks = ["SIDEBAR 1", "SIDEBAR 2", "SIDEBAR 3", "SIDEBAR 4", "SIDEBAR 5"]

  // check if the click was outside the header to close the sidebar

  useEffect(() => {
    // MouseEvent é a tipagem para e
    function handleClickOutside(e: MouseEvent) {
      // existe atualmente um elemento <header>?
      // algum evento foi disparado em outro lugar  diferente da referencia atual (<header>)?
      // Node é a tipagem para o target
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setShowSidebar(false) // close sidebar
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    // remove o event listener do resize para evitar memory leaks
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [headerRef])

  // check current screen size and close sidebar in large screen
  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth)
    window.addEventListener("resize", handleResize)

    if (windowSize > largeScreen) setShowSidebar(false)

    // remove o event listener do resize para evitar memory leaks
    return () => window.removeEventListener("resize", handleResize)
  }, [windowSize])

  return (
    <header ref={headerRef}>
      <div className="container-md flex items-center justify-between">
        <Image src="/next.svg" width={65} height={65} alt="logo image" className="navbar-logo" />
        <nav>
          <ul className={`sidebar ${showSidebar ? "flex flex-col" : "hidden"}`}>
            <li>
              <Link onClick={() => setShowSidebar(false)} href="">
                <FontAwesomeIcon icon={faXmark} />
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowSidebar(false)}>
                Home
              </Link>
            </li>
            {sidebarLinks.map(link => {
              return (
                <li key={link}>
                  <Link href={link.split(/\s/).join("")} onClick={() => setShowSidebar(false)}>
                    {link}
                  </Link>
                </li>
              )
            })}
          </ul>

          <ul className="flex gap-8">
            <Link href="/" className="hideOnMobile">
              Home
            </Link>
            {menuLinks.map(link => {
              return (
                <li key={link} className="hideOnMobile">
                  {/* split(/\s/) --> isola os caracteres ["a", "b", "c"]*/}
                  {/* .join("") --> junta tudo abc */}
                  <Link href={link.split(/\s/).join("")}>{link}</Link>
                </li>
              )
            })}
            <li className="open-menu-icon" onClick={() => setShowSidebar(true)}>
              <FontAwesomeIcon icon={faBars} />
            </li>
          </ul>
        </nav>
      </div>
      {/* <GoToTopBtn /> */}
    </header>
  )
}

export default Header
