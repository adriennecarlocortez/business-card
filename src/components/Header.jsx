import React from "react"
import Profile from '../assets/profile.jpg'

export default function Header() {
    return (
        <nav>
            <img src={Profile} alt="profile"  className="nav--profile" />
            <h1 className="nav--name" >Adrienne Cortez</h1>
            <h3 className="nav--title" >Frontend Developer</h3>
            <h4 className="nav--site" >adrienne.website</h4>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cortez.adrienne00@gmail.com" target="_blank">
            <button className="nav--btn_email">
                Email
            </button>
            </a>
            <a href="https://www.linkedin.com/in/adriennecarlocortez/" target="_blank">
                <button className="nav--btn_in">
                    LinkedIn
                </button>
            </a>
        </nav>
    )
}