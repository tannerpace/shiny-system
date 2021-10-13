import React from 'react'

const Nav = () => {

    return (
        <nav id="navbar" class="nav">
            <ul class="nav-list">
                <li>
                    <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#contact"
                        class="btn btn-sm animated-button victoria-one">Contact</a> </div>
                </li>

                <li>
                    <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#projects"
                        class="btn btn-sm animated-button victoria-two">Projects</a> </div>
                </li>

                <li>
                    <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#welcome-section"
                        class="btn btn-sm animated-button victoria-three">About</a> </div>
                </li>

            </ul>

        </nav>)
}

export default Nav
