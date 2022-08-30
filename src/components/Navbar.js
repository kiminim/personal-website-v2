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
      <a 
        className="hamburger" 
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
          <GiHamburgerMenu />
      </a>
      <div
        className={
          isNavExpanded ? "nav-menu expanded" : "nav-menu"
        }
      >
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/media">Media</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a className="icon" href="https://www.instagram.com/kimvy3201/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a></li>
          <li><a className="icon" href="https://www.linkedin.com/in/vykim-nguyen/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a></li>
          <li><a className="icon" href="https://github.com/kiminim" target="_blank" rel="noopener noreferrer"><BsGithub /></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;