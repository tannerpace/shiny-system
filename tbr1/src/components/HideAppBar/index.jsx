import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

import Nav from '../Nav';
import Welcome from '../Welcome'
import Projects from '../Projects'
import Resume from "../Resume"
import Contact from "../Contact"
import {

    Switch,
    Route,
    Link
} from "react-router-dom";



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

function Components() {

    return (
        <div>


            <Switch>
                <Route exact path="/">
                    <Welcome />
                    <Projects />
                    <Contact />
                </Route>
                <Route path="/tannerbleakley">
                    <Resume />
                </Route>
            </Switch>
        </div>

    );
}

export default function HideAppBar(props) {
    return (

        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Nav />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>
                <Box sx={{ my: 2 }}>
                    <Components />
                </Box>
            </Container>
        </React.Fragment>

    );
}
