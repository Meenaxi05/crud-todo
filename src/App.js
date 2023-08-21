import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
// installed bootstrap
import Home from "./Components/pages/Home"
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Navbar from './Components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Addusers from './Components/users/Addusers';
import Editusers from './Components/users/Editusers';
import View from './Components/users/View';
// react router dom to create an application with multiple page routes is used for web application,
//  OR we use react router to route to pages based on URL

function App() {
  return (

    <BrowserRouter>
      <div className="App">   
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Addusers />} path='/addusers' />
          <Route element={<Editusers />} path='/users/edit/:id' />
          <Route element={<View />} path='/view/:id' />    //dynamic routing /:id
        </Routes>
      </div>
    </BrowserRouter>

  );
}


export default App;
