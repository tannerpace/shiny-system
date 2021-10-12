import React from 'react'
import MyTyper from '../MyTyper'
import Box from '@mui/material/Box';
export default function Welcome({ toggleResume, isResume }) {
    const handleToggle = () => {
        console.log(`isResume`, isResume)
        toggleResume()
    }
    return (


        <Box
            sx={{
                margin: "auto",
                width: 300,
                height: "auto",

            }}
        >
            <div class="welcome-section" id="welcome-section">
                <MyTyper></MyTyper>
                <div onClick={handleToggle}>Resume</div>
            </div>
            <section id="section05" class="demo">

                <a>  <span></span></a>
            </section>
        </Box>

    )
}

