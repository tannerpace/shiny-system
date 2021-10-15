import React from 'react'
import MyTyper from '../MyTyper'
import Box from '@mui/material/Box';

const Welcome = () => {

    return (
        <section id="section05" class="demo">
            <Box
                sx={{
                    margin: "auto",
                    width: 300,
                    height: "auto",

                }}
            >
                <div class="welcome-section" id="about">
                    <MyTyper></MyTyper>
                </div>
                {/* this is an animated down arrow */}
                {/* <a href='#projects'>  <span></span></a> */}
            </Box>
        </section>

    )
}

export default Welcome