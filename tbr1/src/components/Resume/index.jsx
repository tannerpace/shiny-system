import React from 'react'
import { ReactSVG } from 'react-svg'



export default function Resume({ toggleResume }) {
    const handleToggle = () => {

        toggleResume()
    }


    return (
        <div class="resume-container">
            <li onClick={handleToggle}>
                <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#projects"
                    class="btn btn-sm animated-button victoria-two">Back</a> </div>
            </li>
            <ReactSVG
                src="svgs/resume.svg"
            />

        </div>
    )
}
