
import './App.css';
import { Typography } from '@mui/material';
import Projects from './components/projects';

function App() {



  const Header = () => {


    return (<nav id="navbar" class="nav">
      <ul class="nav-list">
        <li>
          <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#contact"
            class="btn btn-sm animated-button victoria-one">Contact</a> </div>
        </li>

        <li>
          <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#projects"
            class="btn btn-sm animated-button victoria-two">Projects</a> </div>
        </li>

        <li>
          <div class="col-md-3 col-sm-3 col-xs-6"> <a href="#welcome-section"
            class="btn btn-sm animated-button victoria-three">About</a> </div>
        </li>
      </ul>
    </nav>)
  }









  return (
    <div className="App">
      <Typography>App works!</Typography>
      <Header />
      <Projects />
    </div>
  );
}

export default App;
