import React, { useState } from 'react'
import { Box } from '@mui/system'
import Welcome from '../Welcome'
import Projects from '../Projects'
import Contact from '../Contact'
import Nav from '../Nav'
import Resume from '../Resume'

export default function Home() {


    return (
        <div>
            <Box >
                <Box>
                    <Welcome />
                    <Projects />
                    <Contact />
                    <Resume />
                </Box>
            </Box>
        </div>
    )
}
