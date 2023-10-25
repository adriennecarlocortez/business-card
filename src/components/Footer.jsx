import React from "react"
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import GitHubLogo from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'


export default function Footer() {
    return (
        <footer>
            <a href="https://www.facebook.com/adriennecarlo.cortez" target="_blank">
                <img src={Facebook}/>
            </a>
            <a href="https://www.instagram.com/drnncrtz/" target="_blank">
                <img src={Instagram}/>
            </a>
            <a href="#" target="_blank">
                <img src={Twitter}/>
            </a>
            <a href="https://github.com/adriennecarlocortez" target="_blank">
                <img src={GitHubLogo}/>
            </a>
            <a href="https://www.linkedin.com/in/adriennecarlocortez/" target="_blank">
                <img src={LinkedIn}/>
            </a>
            <br />
            {/* <small>Copyright © 2023 Adrienne Carlo Cortez. All rights reserved. </small> */}
        </footer>
    )
}