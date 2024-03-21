import React from 'react';



//components:
import Login from './pages/login';

import './App.css';
import { Routes, Route } from 'react-router';
import Mainpage from './pages/mainpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/main" element={<Mainpage/>}/>
  
    </Routes>
  );
}

export default App;
