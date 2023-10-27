import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Interests from './pages/interests';
import Contact from './pages/contact';
import Intro from './pages/intro';

function App() {
  return (

    <div className="App">
      <Router>
          <Routes>
            <Route exact path='/' element={<Intro />} />
            <Route exact path='/experience' element={<Experience />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/interests' element={<Interests />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
      </Router>
    
    </div>
    
  );
}

export default App;
