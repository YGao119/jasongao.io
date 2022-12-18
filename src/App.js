import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ProjectDisplay from './pages/ProjectDisplay';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/projects' element={<Projects />}/>
          <Route exact path='/project/:id' element={<ProjectDisplay/>}/>
          <Route exact path='/experience' element={<Experience />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
