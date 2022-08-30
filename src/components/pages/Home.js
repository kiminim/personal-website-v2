import React from "react"
import "./../../styles/Home.css"
import profile from "./../images/DSC_0944.jpg"

function Home() {
  return (
    <div className="intro">
      <img className="portrait" src={profile}/>
      <p className="greeting">
        Hi there! I'm Kim, a 4th year bioinformatics and biomedical engineering student @ UNSW.
        <br/>
        This is my website to showcase my projects, photography, nail art and more!
      </p>
    </div>
  )
}

export default Home;