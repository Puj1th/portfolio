import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import SkillsContent from './components/pages/SkillsContent';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/skills/python' element={< SkillsContent />}></Route>

        <Route path='*' element={<Error />}></Route>
        
         
      </Routes>

    </div>
  );
}

export default App;
