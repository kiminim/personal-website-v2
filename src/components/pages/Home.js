import React from "react"
import "./../../styles/Home.css"
import profile from "./../images/DSC_0944.jpg"
import { AiOutlineArrowRight } from "react-icons/ai"

function Home() {
  return (
    <div className="intro">
      <img className="portrait" src={profile}/>
      <div className="text">
        <p className="greeting">
          Hi there! I'm Kim, a 4th year bioinformatics and biomedical engineering student @ UNSW.
          <br/><br/>
          This is my website to showcase my programming projects, photography, nail art and more!
        </p>
        <div className="button">
          <a href="/about">
            More about me
            <AiOutlineArrowRight className="arrow"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home;