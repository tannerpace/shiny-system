import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';

import Nav from '../Nav';


import {

    Switch,
    Route,

} from "react-router-dom";
import Welcome from '../Welcome'
import Projects from '../Projects'
import Resume from '../Resume'
import Contact from '../Contact'
import MyTyper from '../MyTyper';




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

                        <Link smooth to="/shiny-system/welcome" class="btn btn-sm animated-button victoria-two">About</Link>



                        <Link smooth to="/shiny-system/projects" class="btn btn-sm animated-button victoria-one">Projects</Link>


                        <Link smooth to="/shiny-system/contact"
                            class="btn btn-sm animated-button victoria-two">Contact</Link>

                        <Link smooth to="/shiny-system/resume" class="btn btn-sm animated-button victoria-two">Resume</Link>

                        {/* <Nav></Nav> */}
                    </Toolbar>
                </AppBar>
            </HideOnScroll >
            <Toolbar />
            <Container>
                <Box sx={{ my: 2 }}>
                    <Switch>
                        <Route exact path="/shiny-system/">

                            <MyTyper />


                        </Route>
                        <Route path="/shiny-system/projects">
                            <Projects />
                        </Route>
                        <Route path="/shiny-system/contact">
                            <Contact />
                        </Route >
                        <Route path="/shiny-system/resume">
                            <Resume />
                        </Route>
                    </Switch>
                </Box>
            </Container>
        </React.Fragment >

    );
}
