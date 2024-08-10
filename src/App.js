import React from 'react';
import Notfound from './components/Notfound';
import Header from './components/Header';
import Landingpage from './components/Landingpage';
/*import Publications from './components/Publications';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';*/
import Coming from './components/Coming';
import FotoVideo from './components/FotoVideo';
import Fashion from './components/Fashion';
import Brand from './components/Brand';
import PosterPackaging from './components/PosterPackaging';
import UiUx from './components/UiUx'
import Kontakt from './components/Kontakt';
import {Route, Routes} from 'react-router-dom';
import './styles/scss/main.css'



function App() {
  return (
    <div className="App">
      <div className="landingPage">
          <Header/>
          <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/brand" element={<Brand/>}/>
          <Route path="/fashion" element={<Fashion/>}/>
          <Route path="/about" element={<Coming/>}/>
          <Route path="/contact" element={<Coming/>}/>
          <Route path="/fotoundvideo" element={<FotoVideo/>}/>
          <Route path="/posterundpackaging" element={<PosterPackaging/>}/>
          <Route path="/uiux" element={<UiUx/>}/>
          <Route path="/kontakt" element={<Kontakt/>}/>
          <Route path="*" element={<Notfound/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
