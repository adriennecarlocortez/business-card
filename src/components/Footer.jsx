import React from "react"
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import GitHubLogo from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'


export default function Footer() {
    return (
        <footer>
            <img src={Facebook}/>
            <img src={Instagram}/>
            <img src={Twitter}/>
            <img src={GitHubLogo}/>
            <img src={LinkedIn}/>
        </footer>
    )
}