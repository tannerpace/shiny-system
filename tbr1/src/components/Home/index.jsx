import React, { useState } from 'react'
import { Box } from '@mui/system'
import Welcome from '../Welcome'
import Projects from '../Projects'
import Contact from '../Contact'
import Nav from '../Nav'
import Resume from '../Resume'

export default function Home({ isResume, toggleResume }) {


    return (
        <div>
            <Box >
                {!isResume ? (<Box>
                    <Welcome toggleResume={toggleResume} />
                    <Projects />
                    <Contact /></Box>) : (<Box><Resume toggleResume={toggleResume} /> </Box>)}
            </Box>
        </div>
    )
}
