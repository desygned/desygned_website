import React from 'react';
import Notfound from './components/Notfound';
import Header from './components/Header';
import Landingpage from './components/Landingpage';
/*import Publications from './components/Publications';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';*/
import Coming from './components/Coming';
import Abitur from './components/Abitur';
import Publications from './components/Publications';
import {Route, Routes} from 'react-router-dom';
import './styles/scss/main.css'



function App() {
  return (
    <div className="App">
      <div className="landingPage">
          <Header/>
          <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/publications" element={<Publications/>}/>
          <Route path="/projects" element={<Coming/>}/>
          <Route path="/about" element={<Coming/>}/>
          <Route path="/contact" element={<Coming/>}/>
          <Route path="/abitur" element={<Abitur/>}/>
          <Route path="*" element={<Notfound/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
