import React from "react"
import { useState } from "react"
import "./../styles/Navbar.css"
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <a href="/" className="logo">
        Vy Kim Nguyen
      </a>
      <a className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
          <GiHamburgerMenu />
      </a>
      <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/media">Media</a>
        <a href="/contact">Contact</a>
        <a className="icon" href="https://www.instagram.com/kimvy3201/" target="_blank"><BsInstagram /></a>
        <a className="icon" href="https://www.linkedin.com/in/vykim-nguyen/" target="_blank"><BsLinkedin /></a>
        <a className="icon" href="https://github.com/kiminim" target="_blank"><BsGithub /></a>
      </div>
    </nav>
  )
}

export default Navbar;