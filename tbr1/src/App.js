
import './App.css';
import { Typography } from '@mui/material';
import Projects from './components/projects';
import Welcome from './components/welcome';
import Header from "./components/Header"

function App() {





  return (
    <div className="App">
      <Typography>App works!</Typography>
      <Header />
      <Welcome />
      <Projects />
    </div>
  );
}

export default App;
