import React from "react"
import "./../styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="logo">
        Vy Kim Nguyen
      </a>
      <div className="nav-menu">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/media">Media</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </div>
    </nav>
  )
}

export default Navbar;