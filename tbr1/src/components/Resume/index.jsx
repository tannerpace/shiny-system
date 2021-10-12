import React from 'react'
import { ReactSVG } from 'react-svg'



export default function Resume({ toggleResume }) {
    const handleToggle = () => {

        toggleResume()
    }


    return (
        <div class="resume-container">
            <div onClick={handleToggle}>
                <a href="#projects"
                    class="btn btn-sm animated-button victoria-two">Back</a>
            </div>
            <ReactSVG
                src="svgs/resume.svg"
            />

        </div>
    )
}
