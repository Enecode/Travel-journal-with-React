import React from "react"
import image from "../images/nick-karvounis-3_ZGrsirryY-unsplash.jpg" 
import "../style.css"

function Header(){
    return(
        <div className="header--main">
            <img className="header--image" src={image} alt="headerImage" width="50px" />
            <h2 className="header--text">Travel Journal</h2>
        </div>
    )
}

export default Header