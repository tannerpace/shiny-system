import React from 'react'
import MyTyper from '../MyTyper'
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';
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
                <MyTyper></MyTyper><Container>INSERT PHOTO OF TANNER HERE</Container>
                <Button fullWidth variant="contained" onClick={handleToggle}>Resume</Button>
            </div>
            <section id="section05" class="demo">

                <a href='#projects'>  <span></span></a>
            </section>
        </Box>

    )
}

