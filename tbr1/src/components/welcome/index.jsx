import React from 'react'
import MyTyper from '../MyTyper'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
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
                <Button class="btn victoria-one " onClick={handleToggle}>Resume</Button>
            </div>
            <section id="section05" class="demo">

                <a>  <span></span></a>
            </section>
        </Box>

    )
}

