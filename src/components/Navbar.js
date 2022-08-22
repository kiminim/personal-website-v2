import React from "react"
import "./../styles/Navbar.css"
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="logo">
        Vy Kim Nguyen
      </a>
      <div className="nav-menu">
        <li className="item">
          <a href="/about">About</a>
        </li>
        <li className="item">
          <a href="/projects">Projects</a>
        </li>
        <li className="item">
          <a href="/media">Media</a>
        </li>
        <li className="item">
          <a href="/contact">Contact</a>
        </li>
        <li className="item icon">
          <a href="https://www.instagram.com/kimvy3201/" target="_blank"><BsInstagram /></a>
        </li>
        <li className="item icon">
          <a href="https://www.linkedin.com/in/vykim-nguyen/" target="_blank"><BsLinkedin /></a>
        </li>
        <li className="item icon">
          <a href="https://github.com/kiminim" target="_blank"><BsGithub /></a>
        </li>
      </div>
    </nav>
  )
}

export default Navbar;