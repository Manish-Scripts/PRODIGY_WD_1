import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App.jsx';
import About from './components/pages/About.jsx';
import Technology from './components/pages/Technology.jsx';
import Galaxy from './components/pages/Galaxy.jsx';
import Satellite from './components/pages/Satellite.jsx';
import Navbar from './components/Navbar/Navbar.jsx';


const AppRoute = () => {
  return (
    <Router>
       <Navbar />
        <Routes>
            <Route index path='/' Component={App} />
            <Route path='/about' Component={About} />
            <Route path='/technology' Component={Technology} />
            <Route path='/galaxy' Component={Galaxy} />
            <Route path='/satellite' Component={Satellite} />
        </Routes>
    </Router>
  )
}

export default AppRoute;