import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About'
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';

import Html from './Components/Html';

function App() {
 
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/html' element={<Html/>}/>
               <Route path='/error' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
