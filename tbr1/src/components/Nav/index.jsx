import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar } from '@mui/material'


const Nav = () => {

    return (

        <nav id="navbar" >
            <ul class="nav-list">
                <li>
                    <div><Link smooth to="/shiny-system/welcome" class="btn  btn-sm animated-button victoria-two">About</Link></div>
                </li>
                <li>
                    <div >
                        <Link smooth to="/shiny-system/projects" class="btn  btn-sm animated-button victoria-one">Projects</Link></div>
                </li>
                <li>
                    <div ><Link smooth to="/shiny-system/contact"
                        class="btn btn-sm animated-button victoria-two ">Contact</Link>  </div>
                </li>
                <li>
                    <div ><Link smooth to="/shiny-system/resume" class="btn  btn-sm animated-button victoria-two">Resume</Link></div>
                </li>

            </ul >

        </nav >
    )
}

export default Nav
