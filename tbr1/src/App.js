import './App.css'
import React, { useState } from 'react'
import {

  Switch,
  Route,

} from "react-router-dom";
import Welcome from './Components/Welcome'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Nav from './Components/Nav'
import HideAppBar from './Components/HideAppBar';

function App() {

  return (
    <div className="App">
      <HideAppBar />
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/shiny-system/welcome">
          <Welcome />
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
    </div >
  );
}
export default App;
