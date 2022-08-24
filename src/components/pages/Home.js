import React from "react"
import "./../../styles/Home.css"
import profile from "./../images/DSC_0944.jpg"

function Home() {
  return (
    <div className="intro">
      <img className="portrait" src={profile}/>
    </div>
  )
}

export default Home;