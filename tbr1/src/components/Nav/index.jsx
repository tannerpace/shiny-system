import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Nav = () => {

    return (
        <nav id="navbar" class="nav">
            <ul class="nav-list">
                <li>
                    <div >
                        <HashLink smooth to="/shiny-system#contact" class="btn btn-sm animated-button victoria-one">Contact</HashLink></div>
                </li>

                <li>
                    <div ><HashLink smooth to="/shiny-system#projects"
                        class="btn btn-sm animated-button victoria-two">Projects</HashLink>  </div>
                </li>

                <li>
                    <div><Link smooth to="/shiny-system#about" class="btn btn-sm animated-button victoria-two">About</Link> </div>
                </li>
                <li>
                    <div ><HashLink smooth to="/shiny-system/resume" class="btn btn-sm animated-button victoria-two" >Resume</HashLink></div>
                </li>

            </ul >

        </nav >)
}

export default Nav
