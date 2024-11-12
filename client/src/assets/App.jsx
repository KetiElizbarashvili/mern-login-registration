import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>

    </ div>
  )
}

export default App
