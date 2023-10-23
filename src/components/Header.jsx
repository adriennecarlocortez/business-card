import React from "react"
import Profile from '../assets/profile.jpg'

export default function Header() {
    return (
        <nav>
            <img src={Profile} alt="profile"  className="nav--profile" />
            <h1 className="nav--name" >Adrienne Cortez</h1>
            <h3 className="nav--title" >Frontend Developer</h3>
            <h4 className="nav--site" >adrienne.website</h4>
            <button className="nav--btn_email">Email</button>
            <button className="nav--btn_in">LinkedIn</button>
        </nav>
    )
}