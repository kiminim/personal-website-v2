import React from "react"
import "./../styles/Navbar.css"
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="logo">
        Vy Kim Nguyen
      </a>
      <div className="nav-menu" id="my-nav">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/media">Media</a>
        <a href="/contact">Contact</a>
        <a className="icon" href="https://www.instagram.com/kimvy3201/" target="_blank"><BsInstagram /></a>
        <a className="icon" href="https://www.linkedin.com/in/vykim-nguyen/" target="_blank"><BsLinkedin /></a>
        <a className="icon" href="https://github.com/kiminim" target="_blank"><BsGithub /></a>
        <a href="javascript:void(0);" class="hamburger" onclick="myFunction()">
          <GiHamburgerMenu />
        </a>
      </div>
    </nav>
  )
}

export function myFunction() {
  var x = document.getElementById("my-nav");
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
}

export default Navbar;