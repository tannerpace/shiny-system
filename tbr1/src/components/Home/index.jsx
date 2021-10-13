import React, { useState } from 'react'
import { Box } from '@mui/system'
import Welcome from '../Welcome'
import Projects from '../Projects'
import Resume from '../Resume'
import Contact from '../Contact'


import {

    Switch,
    Route,
    Link
} from "react-router-dom";
export default function Home() {


    return (
        <div>
            <Switch>
                <Route exact path="/shiny-system">
                    <Welcome />
                    <Projects />
                    <Contact />
                </Route>
                <Route path="/shiny-system/resume">
                    <Resume />
                </Route>
            </Switch>
        </div>
    )
}
