
import './App.css';
import Projects from './components/projects';
import Welcome from './components/welcome';
import Header from "./components/Header"
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
