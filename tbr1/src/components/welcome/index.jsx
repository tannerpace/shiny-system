import React from 'react'
import MyTyper from '../MyTyper'
import Box from '@mui/material/Box';
import { autocompleteClasses } from '@mui/material';
const Welcome = () => {
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
            </div>
        </Box>

    )
}
export default Welcome
