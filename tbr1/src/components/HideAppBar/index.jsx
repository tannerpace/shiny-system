import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Home from '../Home';
import Nav from '../Nav';
import { Link } from 'react-router-dom'





function HideOnScroll(props) {
    const { children, window, } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="right" in={!trigger}>
            {children}
        </Slide>
    );
}



export default function HideAppBar(props) {
    return (

        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar >
                        {/* <li>
                            <div><Link smooth to="/shiny-system/welcome" class="btn btn-sm animated-button victoria-two">About</Link></div>
                        </li>
                        <li>
                            <div >
                                <Link smooth to="/shiny-system/projects" class="btn btn-sm animated-button victoria-one">Projects</Link></div>
                        </li>
                        <li>
                            <div ><Link smooth to="/shiny-system/contact"
                                class="btn btn-sm animated-button victoria-two">Contact</Link>  </div>
                        </li>
                        <li>
                            <div ><Link smooth to="/shiny-system/resume" class="btn btn-sm animated-button victoria-two">Resume</Link></div>
                        </li> */}
                        <Nav></Nav>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            {/* <Container>
                <Box sx={{ my: 2 }}>
                    <Home />
                </Box>
            </Container> */}
        </React.Fragment>

    );
}
